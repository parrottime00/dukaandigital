import React, { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

const presetBotAnswers = [
  { keywords: ['price', 'cost', 'plan', 'package', 'starter', 'growth'], reply: "Our packages start at ₹5,000 (Starter single-page) and ₹15,000 (Growth multi-page with Google SEO). Every plan includes high-speed hosting!" },
  { keywords: ['time', 'days', 'fast', 'how long'], reply: "We launch websites in 7 to 10 days from initial kickoff!" },
  { keywords: ['whatsapp', 'order', 'menu'], reply: "Yes! We build direct WhatsApp ordering buttons so customers can message items straight to your phone number." },
  { keywords: ['seo', 'google', 'maps', 'search'], reply: "All our plans include Local SEO optimization & Google Business profile setup so customers nearby find you easily." },
  { default: true, reply: "Hello! I am Dukaan Digital's AI assistant. How can I help your shop go online today? Ask me about pricing, turn-around time, or WhatsApp ordering!" }
];

export default function AiChatWidget({ onOpenMockupModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi 👋 I am Dukaan Digital AI! Ask me anything about creating a website for your shop!' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    const newMsgs = [...messages, { sender: 'user', text: userMsg }];
    setMessages(newMsgs);
    setInputText('');

    // find AI answer
    const lower = userMsg.toLowerCase();
    let matched = presetBotAnswers.find(a => !a.default && a.keywords.some(k => lower.includes(k)));
    const botReply = matched ? matched.reply : presetBotAnswers.find(a => a.default).reply;

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 400);
  };

  return (
    <>
      <button 
        className="ai-widget-fab" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X size={26} color="white" /> : <Bot size={28} />}
      </button>

      {isOpen && (
        <div className="ai-widget-panel">
          <div className="ai-panel-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="var(--gold)" />
              <div>
                <strong style={{ fontSize: '14px' }}>Dukaan AI Assistant</strong>
                <div style={{ fontSize: '11px', color: '#94A3B8' }}>Online • 24/7 AI Developer Assistant</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'white' }}
            >
              <X size={18} />
            </button>
          </div>

          <div className="ai-panel-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.sender}`}>
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="ai-panel-input">
            <input
              type="text"
              placeholder="Ask about prices, time, features..."
              className="ai-chat-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              type="submit"
              className="ai-chat-send"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
