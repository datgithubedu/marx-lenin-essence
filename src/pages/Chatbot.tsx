import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import chatbotData from "@/data/chatbotData.json"; // ✅ Import dữ liệu JSON

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là chatbot triết học Mác-Lênin 🤖. Hãy hỏi tôi về bản chất con người, lao động, hay sự khác biệt giữa 'sống' và 'tồn tại'.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // ====== HÀM TRA CỨU DỮ LIỆU TỪ JSON ======
  const findLocalResponse = (input: string): string | null => {
    const lower = input.toLowerCase();

    for (const item of chatbotData) {
      if (item.patterns.some((k: string) => lower.includes(k))) {
        return item.response;
      }
    }

    return null;
  };

  // ====== XỬ LÝ GỬI TIN NHẮN ======
  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Giả lập phản hồi bot
    setTimeout(() => {
      const localReply = findLocalResponse(userMessage.text);
      const replyText =
        localReply ||
        "🤔 Mình chưa có thông tin về phần này. Bạn thử hỏi cụ thể hơn nhé!";

      const botMessage: Message = {
        id: Date.now() + 1,
        text: replyText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Chatbot <span className="text-primary">Triết học</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Thảo luận về triết học Mác – Lênin và ý nghĩa cuộc sống
        </p>
        <div className="flex justify-center">
          <Badge variant="outline" className="flex items-center gap-2">
            <AlertCircle size={14} />
            Chế độ if–else: chạy offline, không cần API
          </Badge>
        </div>
      </div>

      {/* Chatbox */}
      <Card className="h-[600px] flex flex-col shadow-lg">
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-background to-muted/20">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${
                m.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  m.sender === "user" ? "bg-primary" : "bg-philosopher"
                }`}
              >
                {m.sender === "user" ? (
                  <User size={16} className="text-white" />
                ) : (
                  <Bot size={16} className="text-white" />
                )}
              </div>
              <div
                className={`max-w-[70%] ${
                  m.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    m.sender === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-card border shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {m.text}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {m.timestamp.toLocaleTimeString("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-philosopher flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-card border shadow-sm p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-card">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Hỏi về triết học Mác – Lênin, con người, lao động..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!inputText.trim() || isLoading}
              size="icon"
              className="bg-primary hover:bg-philosopher"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </Card>

      {/* Gợi ý */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Gợi ý câu hỏi:
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "bản chất con người theo Mác là gì",
            "tại sao lao động quan trọng với con người",
            "sự khác biệt giữa sống và tồn tại là gì",
            "làm thế nào để thoát khỏi sự tha hóa lao động",
          ].map((q, i) => (
            <Button
              key={i}
              variant="outline"
              className="text-left justify-start h-auto p-3 text-sm"
              onClick={() => setInputText(q)}
            >
              {q}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Chatbot;
