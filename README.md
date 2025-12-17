# BioNurse Pro

An advanced AI-powered medical assistant and health management platform created by **Akin S. Sokpah**.

## Features

- **AI Consultation**: Powered by Google Gemini & OpenAI.
- **Health Dashboard**: Visualize health metrics.
- **Learning Center**: Quizzes and medical modules.
- **Guest Access**: No sign-up required (Free Mode).
- **Community**: Integration with WhatsApp and Messenger groups.

## Deployment

This project is configured for deployment on Vercel.

### Environment Variables

When deploying to Vercel, ensure you add the following Environment Variables:

- `API_KEY`: Your Google Gemini API Key.
- `OPENAI_API_KEY`: (Optional) Your OpenAI API Key.
- `FIREBASE_API_KEY`: Your Firebase API Key.
- `FIREBASE_AUTH_DOMAIN`: Your Firebase Auth Domain.
- `FIREBASE_PROJECT_ID`: Your Firebase Project ID.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
