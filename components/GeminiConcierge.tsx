import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Sou o assistente virtual do Márcio Mota. Posso ajudar você a encontrar a casa perfeita na Praia do Maceió ou dar dicas sobre Camocim/CE. Como posso ajudar hoje?',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-300 animate-fade-in-up origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-sunset-500 to-sunset-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <i className="fa-solid fa-sparkles text-sm"></i>
                </div>
                <div>
                    <h3 className="font-semibold text-sm">Concierge Márcio Mota</h3>
                    <p className="text-xs text-white/80">Online agora</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[50vh] sm:h-80 overflow-y-auto bg-gray-50 p-4 space-y-4 overscroll-contain">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-sunset-500 text-white rounded-tr-none'
                      : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm border border-gray-100">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-100"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t bg-white p-3">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 ring-1 ring-transparent focus-within:ring-sunset-300 focus-within:bg-white transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-sunset-500 hover:text-sunset-700 disabled:opacity-50 transition-colors p-1"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${isOpen ? 'bg-gray-800 text-white rotate-90' : 'bg-gradient-to-r from-sunset-500 to-orange-500 text-white'}`}
        aria-label="Abrir chat do concierge"
      >
        {isOpen ? (
             <i className="fa-solid fa-xmark text-xl"></i>
        ) : (
            <i className="fa-regular fa-comment-dots text-2xl animate-pulse"></i>
        )}
      </button>
    </div>
  );
};

export default GeminiConcierge;