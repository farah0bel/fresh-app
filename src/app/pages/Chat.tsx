import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Send } from 'lucide-react';
import { chatHistory as initialChatHistory } from '../data/mockData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialChatHistory);
  const [inputValue, setInputValue] = useState('');

  const quickSuggestions = [
    'Recette rapide',
    'Sans gluten',
    'Végétarien',
    'Dessert facile',
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      message: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        message: "Je comprends ! Laissez-moi vous trouver quelques excellentes recettes qui correspondent à vos critères. 👨‍🍳",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem-4rem)] max-w-[600px] mx-auto">
      {/* Header Note */}
      <div className="bg-gradient-to-r from-[var(--color-teal)]/10 to-[var(--color-red)]/10 px-4 py-3 border-b border-[var(--border)]">
        <p className="text-xs text-[var(--text-secondary)] text-center">
          💡 L'avatar Chef Farah sera remplacé par une photo réelle en cuisine
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex gap-3 max-w-[85%]">
              {message.sender === 'bot' && (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-light)] flex items-center justify-center text-white flex-shrink-0">
                  {/* TODO: Replace with actual photo of Chef Farah in kitchen */}
                  <span className="text-xl">👨‍🍳</span>
                </div>
              )}
              <div
                className="rounded-[var(--radius-lg)] px-4 py-3"
                style={
                  message.sender === 'user'
                    ? {
                        backgroundColor: 'var(--color-chat-bubble-user)',
                        color: 'var(--color-chat-bubble-user-text)',
                      }
                    : {
                        backgroundColor: 'var(--color-chat-bubble-bot)',
                        color: 'var(--color-chat-bubble-bot-text)',
                      }
                }
              >
                <p className="text-sm leading-relaxed">{message.message}</p>
                <span
                  className="text-xs mt-1 block opacity-60"
                  style={{
                    color: message.sender === 'user' 
                      ? 'var(--color-chat-bubble-user-text)'
                      : 'var(--color-chat-bubble-bot-text)'
                  }}
                >
                  {message.timestamp.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Suggestions */}
      <div className="px-4 py-3 border-t border-[var(--border)]">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 bg-[var(--muted)] text-[var(--text)] rounded-full text-sm whitespace-nowrap hover:bg-[var(--color-teal)]/10 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="px-4 py-4 border-t border-[var(--chat-input-border)] bg-card">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Demandez à Chef Farah..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 h-12 rounded-[var(--radius-lg)] bg-[var(--chat-input-bg)] border-[var(--chat-input-border)]"
          />
          <Button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white rounded-[var(--radius-lg)] h-12 px-6"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}