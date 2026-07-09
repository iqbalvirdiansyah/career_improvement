import { useState, useRef, useEffect } from "react";
import { Languages, X, Mic, Send, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Halo! Saya siap membantu Anda berlatih percakapan. Pilih bahasa dan mulai berbicara!" }
  ]);
  const [inputText, setInputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages = [
    { id: "english", name: "English", flag: "🇺🇸" },
    { id: "japanese", name: "日本語", flag: "🇯🇵" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", text: inputText }]);
    
    setTimeout(() => {
      const responses: Record<string, string[]> = {
        english: [
          "That's great! Keep practicing your pronunciation.",
          "Excellent! Try using that phrase in a different context.",
          "Good job! Let me give you another example.",
        ],
        japanese: [
          "すごいですね！発音がとても良いです。",
          "素晴らしい！もう一度言ってみてください。",
          "上手ですね！次のフレーズを試してみましょう。",
        ],
      };
      
      const langResponses = responses[selectedLanguage] || responses.english;
      const randomResponse = langResponses[Math.floor(Math.random() * langResponses.length)];
      setMessages(prev => [...prev, { role: "ai", text: randomResponse }]);
    }, 1000);
    
    setInputText("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 hover:shadow-primary/30 hover:shadow-xl border-2 ${
          isOpen 
            ? "bg-destructive text-destructive-foreground border-destructive rotate-90" 
            : "bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground border-primary/30 animate-pulse"
        }`}
        style={{
          animation: isOpen ? 'none' : 'float 3s ease-in-out infinite',
        }}
        aria-label={isOpen ? "Tutup chat" : "Buka latihan percakapan"}
      >
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? <X className="w-5 h-5" /> : <Languages className="w-6 h-6" />}
        </span>
      </button>

      {/* Chat Panel */}
      <div 
        className={`fixed bottom-24 right-6 z-50 w-[340px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-out origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-4 py-3">
            <h3 className="font-semibold">Latihan Percakapan AI</h3>
            <p className="text-xs opacity-80">Pilih bahasa dan mulai berlatih</p>
          </div>

          {/* Language Selector */}
          <div className="px-4 py-3 border-b border-border bg-muted/20">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedLanguage === lang.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background hover:bg-accent border border-border"
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="h-56 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-2xl rounded-br-sm"
                      : "bg-muted text-foreground rounded-2xl rounded-bl-sm"
                  }`}
                >
                  <span>{msg.text}</span>
                  {msg.role === "ai" && (
                    <button 
                      className="ml-2 opacity-50 hover:opacity-100 transition-opacity align-middle"
                      aria-label="Dengarkan"
                    >
                      <Volume2 className="w-3.5 h-3.5 inline-block" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-border bg-muted/20">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 h-9 w-9 rounded-full"
                title="Tekan untuk berbicara"
              >
                <Mic className="w-4 h-4" />
              </Button>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ketik pesan..."
                className="flex-1 h-9 px-4 rounded-full bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="shrink-0 h-9 w-9 rounded-full"
                disabled={!inputText.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

      {/* Custom float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
};

export default AIChatButton;
