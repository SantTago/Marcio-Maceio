import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION, HOUSES } from '../constants';

// Proteção para o ambiente do navegador
const getApiKey = () => {
    try {
        return process.env.API_KEY || "";
    } catch (e) {
        return "";
    }
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey: apiKey || "TEMPORARY_STUB" });

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
  if (!apiKey) {
    return "Olá! Sou o concierge das Casas Márcio Mota. Para falar com a nossa IA, é necessário configurar a chave de acesso. Mas você já pode conferir nossas belas casas no catálogo abaixo!";
  }
  
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Desculpe, a brisa do mar me distraiu um pouco. Poderia repetir?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tivemos um pequeno problema na conexão com o paraíso. Tente novamente em alguns instantes!";
  }
};