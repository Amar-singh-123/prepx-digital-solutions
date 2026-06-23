import { useState, useRef, useEffect } from "react";
import { Bot, MessageSquare, X, Send, Loader2, Sparkles } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import logoIcon from "@/assets/logo-icon.png";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
};

const FloatingChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "msg-init", type: "bot", text: "Hi there! 👋 I'm the PrepX digital assistant. How can we help you today?" }
  ]);
  
  // 0: Initial options, 1: Waiting for description, 2: Waiting for email, 3: Done
  const [step, setStep] = useState<number>(0);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const [leadData, setLeadData] = useState({
    interest: "",
    description: "",
    email: ""
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const addBotMessage = (text: string, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: `msg-${Date.now()}-${Math.random()}`, type: "bot", text }]);
      setIsTyping(false);
    }, delay);
  };

  const handleOptionSelect = (option: string) => {
    setMessages(prev => [...prev, { id: `msg-${Date.now()}-${Math.random()}`, type: "user", text: option }]);
    setLeadData(prev => ({ ...prev, interest: option }));
    setStep(1);
    addBotMessage(`Great! Could you briefly describe your requirement for "${option}"?`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setMessages(prev => [...prev, { id: `msg-${Date.now()}-${Math.random()}`, type: "user", text: userText }]);
    setInputValue("");

    if (step === 1) {
      setLeadData(prev => ({ ...prev, description: userText }));
      setStep(2);
      addBotMessage("Thanks! Please provide your email address so our technical team can reach out to you.");
    } 
    else if (step === 2) {
      setLeadData(prev => ({ ...prev, email: userText }));
      setStep(3);
      setIsTyping(true);
      
      try {
        await addDoc(collection(db, "contact_inquiries"), {
          interest: leadData.interest,
          description: leadData.description,
          email: userText,
          timestamp: new Date().toISOString(),
          source: "Chat Assistant"
        });
        
        setIsTyping(false);
        addBotMessage("All set! ✨ We have received your inquiry. One of our experts will contact you within 24 hours. Have a great day!", 200);
      } catch (error) {
        setIsTyping(false);
        addBotMessage("Oops, something went wrong while saving your info. Please try again later or email us directly.", 200);
      }
    }
  };

  return (
    <>
      {/* Floating Button container with 'group' for hover effects */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 group">
        {!isOpen && (
          <div className={`bg-white border border-border shadow-soft px-4 py-3 rounded-2xl rounded-br-none text-sm font-medium text-ink relative transition-all duration-300 transform origin-bottom-right ${
            !hasOpened 
              ? 'animate-fade-in-up opacity-100 scale-100' 
              : 'opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0'
          }`}>
            {hasOpened ? "Ask me anything! ✨" : "Hey! Need help? 👋"}
            <div className="absolute -bottom-2 right-2 w-3 h-3 bg-white border-b border-r border-border transform rotate-45" />
          </div>
        )}
        <button
          onClick={() => setIsOpen(true)}
          className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 via-primary to-cyan-500 text-white shadow-xl shadow-primary/40 flex items-center justify-center hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
          aria-label="Open Chat Assistant"
        >
          {/* Animated orbiting ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white/90 animate-spin group-hover:[animation-duration:1.5s]" style={{ animationDuration: '3s' }} />
          
          <Bot className="w-7 h-7 transition-transform group-hover:scale-110" />
          <Sparkles className="absolute top-3 right-3 w-3 h-3 text-cyan-200 animate-pulse" />
          
          {!hasOpened && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-primary px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={logoIcon} alt="PrepX" className="w-10 h-10 rounded-full bg-white p-1 object-cover" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></div>
            </div>
            <div>
              <h3 className="text-white font-bold font-display text-[15px] leading-none mb-1">PrepX Assistant</h3>
              <p className="text-white/80 text-[11px] font-medium leading-none">Typically replies instantly</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-slate-50 scrollbar-hide space-y-4">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold bg-slate-200/50 px-2 py-1 rounded-md">Today</span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.type === 'user' 
                    ? 'bg-primary text-white rounded-br-sm' 
                    : 'bg-white border border-slate-200 text-ink rounded-bl-sm shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}

          {/* Quick Options (Only show at step 0) */}
          {step === 0 && !isTyping && (
            <div className="flex flex-col gap-2 mt-4 items-end">
              {["Hire Developers", "Start a Project", "General Inquiry"].map(opt => (
                <button
                  key={opt}
                  onClick={() => handleOptionSelect(opt)}
                  className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        {step > 0 && step < 3 && (
          <div className="p-4 bg-white border-t border-border shrink-0">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type={step === 2 ? "email" : "text"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={step === 2 ? "Enter your email..." : "Type your message..."}
                className="w-full pl-4 pr-12 py-3 bg-slate-100 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl outline-none transition-all text-sm"
                required
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingChatAssistant;
