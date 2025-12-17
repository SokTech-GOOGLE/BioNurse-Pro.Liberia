import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle, Loader2, Sparkles, Cpu, Mic, MicOff, FileText, Pill, Stethoscope, FilePlus } from 'lucide-react';
import { ChatMessage, MessageRole, AIProvider } from '../types';
import { generateMedicalResponse } from '../services/geminiService';
import { generateOpenAIResponse } from '../services/openaiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: MessageRole.SYSTEM,
      text: "Hello, I am BioNurse Pro. How can I assist with your clinical practice today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState<AIProvider>('gemini');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Voice Recognition Logic
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Your browser does not support voice input. Please use Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(prev => prev + (prev ? ' ' : '') + transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const processMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    let responseText = "";

    try {
      if (provider === 'gemini') {
        const history = messages
          .filter(m => m.role !== MessageRole.SYSTEM)
          .map(m => `${m.role === MessageRole.USER ? 'User' : 'Assistant'}: ${m.text}`);
        
        responseText = await generateMedicalResponse(userMsg.text, history);
      } else {
        const history = messages.filter(m => m.role !== MessageRole.SYSTEM);
        responseText = await generateOpenAIResponse(userMsg.text, history);
      }
    } catch (error) {
      responseText = "I encountered an error processing your request. Please try again.";
    }

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: MessageRole.MODEL,
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  const handleSend = () => processMessage(input);

  const handleQuickAction = (action: string) => {
    let prompt = "";
    switch(action) {
      case 'ddx': prompt = "Provide a comprehensive Differential Diagnosis for a patient presenting with: "; break;
      case 'interaction': prompt = "Check for drug interactions between: "; break;
      case 'soap': prompt = "Generate a SOAP Note template for a patient with: "; break;
      case 'discharge': prompt = "Write discharge instructions for a patient treated for: "; break;
    }
    setInput(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      {/* Chat Header with Model Control */}
      <div className="px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between shadow-sm z-10 sticky top-0">
         <div className="flex items-center text-slate-800 font-bold text-base">
           <div className={`p-2 rounded-lg mr-3 ${provider === 'gemini' ? 'bg-teal-100 text-teal-700' : 'bg-indigo-100 text-indigo-700'}`}>
             <Bot size={20} />
           </div>
           <div>
             <span className="block">BioNurse AI</span>
             <span className="text-[10px] font-normal text-slate-500 uppercase tracking-wider">Professional Mode</span>
           </div>
         </div>
         
         <div className="flex bg-slate-100 p-1 rounded-xl">
           <button 
             onClick={() => setProvider('gemini')}
             className={`flex items-center px-4 py-2 rounded-lg text-xs font-bold transition-all ${
               provider === 'gemini' 
                 ? 'bg-white text-teal-700 shadow-md transform scale-105' 
                 : 'text-slate-500 hover:text-slate-700'
             }`}
           >
             <Sparkles size={14} className="mr-1.5" />
             Gemini
           </button>
           <button 
             onClick={() => setProvider('openai')}
             className={`flex items-center px-4 py-2 rounded-lg text-xs font-bold transition-all ${
               provider === 'openai' 
                 ? 'bg-white text-indigo-700 shadow-md transform scale-105' 
                 : 'text-slate-500 hover:text-slate-700'
             }`}
           >
             <Cpu size={14} className="mr-1.5" />
             GPT-4o
           </button>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-hide">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            <div className={`flex max-w-[90%] md:max-w-[75%] ${msg.role === MessageRole.USER ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                msg.role === MessageRole.USER 
                  ? 'bg-gradient-to-br from-indigo-500 to-indigo-700 ml-3' 
                  : provider === 'gemini' ? 'bg-gradient-to-br from-teal-500 to-teal-700 mr-3' : 'bg-gradient-to-br from-violet-500 to-violet-700 mr-3'
              }`}>
                {msg.role === MessageRole.USER ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
              </div>
              
              <div className={`p-5 rounded-3xl text-sm leading-relaxed shadow-sm ${
                msg.role === MessageRole.USER 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
              }`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <div className={`text-[10px] mt-2 opacity-70 ${msg.role === MessageRole.USER ? 'text-indigo-200' : 'text-slate-400'}`}>
                  {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>
          </div>
        ))}
        {loading && (
           <div className="flex justify-start animate-pulse">
             <div className="flex flex-row">
               <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 ${provider === 'gemini' ? 'bg-teal-600' : 'bg-indigo-500'}`}>
                 <Bot size={16} className="text-white" />
               </div>
               <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center">
                 <Loader2 className={`animate-spin mr-2 ${provider === 'gemini' ? 'text-teal-600' : 'text-indigo-500'}`} size={16} />
                 <span className="text-slate-500 text-sm font-medium">
                   Analyzing medical database...
                 </span>
               </div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        {/* Quick Actions */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
          <button onClick={() => handleQuickAction('ddx')} className="flex items-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-600 whitespace-nowrap transition-colors">
            <Stethoscope size={14} className="mr-1.5" /> Differential Dx
          </button>
          <button onClick={() => handleQuickAction('interaction')} className="flex items-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-600 whitespace-nowrap transition-colors">
            <Pill size={14} className="mr-1.5" /> Interaction Check
          </button>
          <button onClick={() => handleQuickAction('soap')} className="flex items-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-600 whitespace-nowrap transition-colors">
            <FileText size={14} className="mr-1.5" /> SOAP Note
          </button>
          <button onClick={() => handleQuickAction('discharge')} className="flex items-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-600 whitespace-nowrap transition-colors">
            <FilePlus size={14} className="mr-1.5" /> Discharge Summary
          </button>
        </div>

        <div className={`bg-slate-50 border border-slate-200 rounded-2xl flex items-center p-2 focus-within:ring-2 focus-within:ring-offset-2 transition-all ${provider === 'gemini' ? 'focus-within:ring-teal-500' : 'focus-within:ring-indigo-500'}`}>
          <button
            onClick={toggleListening}
            className={`p-3 rounded-xl transition-all ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200'
            }`}
            title="Voice Input"
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={isListening ? "Listening..." : `Clinical query...`}
            className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-slate-700 placeholder-slate-400 outline-none font-medium"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className={`p-3 rounded-xl transition-colors ${
              input.trim() && !loading 
                ? (provider === 'gemini' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-indigo-600 hover:bg-indigo-700') + ' text-white shadow-md' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-center text-xs text-slate-400 bg-slate-100 py-1 px-3 rounded-full mx-auto w-fit">
          <AlertCircle size={12} className="mr-1.5 text-orange-400" />
          <span>Professional use only. Verify all AI outputs.</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;