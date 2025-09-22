import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      text: "Xin chào! Tôi là chatbot triết học Mác-Lênin. Hãy hỏi tôi về bản chất con người, lao động, hay sự khác biệt giữa 'sống' và 'tồn tại'. Bạn muốn thảo luận về điều gì?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      // Placeholder for API call
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.response,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      // Demo response when API is not available
      const demoResponses = [
        "Đây là câu trả lời demo. Trong triết học Mác-Lênin, con người được định nghĩa qua quan hệ xã hội và hoạt động lao động. Bạn có muốn tìm hiểu thêm về khía cạnh nào?",
        "Theo Mác, sự tha hóa xảy ra khi con người mất kiểm soát đối với sản phẩm lao động của mình. Điều này dẫn đến việc chúng ta chỉ 'tồn tại' thay vì thực sự 'sống'. Bạn có nhận thấy điều này trong cuộc sống hàng ngày không?",
        "Lao động sáng tạo là cách con người khẳng định bản thân và tạo ra giá trị. Khi lao động trở thành cưỡng bức, con người mất đi bản chất. Bạn nghĩ thế nào về vấn đề này?",
        "Để 'sống' thay vì chỉ 'tồn tại', chúng ta cần tìm lại ý nghĩa trong công việc và quan hệ xã hội. Bạn có chia sẻ gì về trải nghiệm của mình không?"
      ];
      
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      
      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: randomResponse,
          sender: "bot",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);

      toast({
        title: "Lưu ý",
        description: "Đây là phản hồi demo. API backend chưa được triển khai.",
        variant: "default",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Chatbot <span className="text-primary">Triết học</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Thảo luận về triết học Mác-Lênin và ý nghĩa cuộc sống
        </p>
        <div className="flex justify-center">
          <Badge variant="outline" className="flex items-center gap-2">
            <AlertCircle size={14} />
            Demo interface - Cần backend để hoạt động đầy đủ
          </Badge>
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="h-[600px] flex flex-col shadow-lg">
        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-background to-thought/20">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.sender === "user" 
                  ? "bg-primary" 
                  : "bg-philosopher"
              }`}>
                {message.sender === "user" ? (
                  <User size={16} className="text-white" />
                ) : (
                  <Bot size={16} className="text-white" />
                )}
              </div>
              
              <div className={`max-w-[70%] ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}>
                <div className={`p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-card border shadow-sm"
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString("vi-VN", { 
                    hour: "2-digit", 
                    minute: "2-digit" 
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
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-card">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Hỏi về triết học Mác-Lênin, bản chất con người, lao động..."
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

      {/* Quick Questions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Gợi ý câu hỏi:
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Sự khác biệt giữa sống và tồn tại là gì?",
            "Làm thế nào để thoát khỏi sự tha hóa lao động?",
            "Bản chất con người theo Mác là gì?",
            "Tại sao lao động lại quan trọng với con người?"
          ].map((question, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-left justify-start h-auto p-3 text-sm"
              onClick={() => setInputText(question)}
            >
              {question}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Chatbot;