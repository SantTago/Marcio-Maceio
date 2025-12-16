import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION, HOUSES } from '../constants';

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Create a context string including the house data
const contextString = `
Aqui estão os dados das casas disponíveis para aluguel:
${JSON.stringify(HOUSES, null, 2)}
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION + contextString,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Desculpe, estou admirando o pôr do sol e me distraí. Poderia repetir?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Desculpe, tivemos um problema técnico momentâneo. Tente novamente em instantes.";
  }
};