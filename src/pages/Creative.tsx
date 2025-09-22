import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Image, Gamepad2, MessageCircle, Presentation, Users } from "lucide-react";

const Creative = () => {
  const creativeIdeas = [
    {
      icon: Video,
      title: "Video ngắn tương tác",
      description: "Tạo video 3-5 phút với câu hỏi mở đầu, phỏng vấn người dân về quan điểm sống vs tồn tại",
      features: [
        "Phỏng vấn đường phố về ý nghĩa cuộc sống",
        "Animation giải thích lý thuyết Mác-Lênin",
        "So sánh trực quan giữa 'sống' và 'tồn tại'",
        "Kết thúc với thông điệp tích cực"
      ],
      color: "bg-red-500",
      badge: "Viral potential"
    },
    {
      icon: Image,
      title: "Infographic tương tác",
      description: "Thiết kế infographic đẹp mắt với các thống kê và minh họa về chất lượng cuộc sống",
      features: [
        "Timeline lịch sử tư tưởng Mác-Lênin",
        "Biểu đồ so sánh mức độ hạnh phúc",
        "Flowchart giải quyết vấn đề tha hóa",
        "QR code dẫn đến website này"
      ],
      color: "bg-blue-500",
      badge: "Visual impact"
    },
    {
      icon: Gamepad2,
      title: "Mini-game giáo dục",
      description: "Game simulation giúp người chơi trải nghiệm sự khác biệt giữa sống và tồn tại",
      features: [
        "Chọn nghề nghiệp và cách sống",
        "Điểm happiness vs survival meter",
        "Các tình huống thực tế để quyết định",
        "Ending khác nhau dựa trên lựa chọn"
      ],
      color: "bg-green-500",
      badge: "Interactive"
    },
    {
      icon: MessageCircle,
      title: "Chatbot triết học",
      description: "AI bot có thể thảo luận về triết học Mác-Lênin và tư vấn về cuộc sống",
      features: [
        "Trả lời câu hỏi về lý thuyết",
        "Phân tích tình huống cá nhân",
        "Gợi ý cách 'sống' thay vì 'tồn tại'",
        "Chia sẻ quotes triết học hay"
      ],
      color: "bg-purple-500",
      badge: "AI-powered"
    },
    {
      icon: Presentation,
      title: "Workshop tương tác",
      description: "Tổ chức workshop nhỏ với hoạt động nhóm và thảo luận sâu",
      features: [
        "Icebreaker với câu hỏi triết học",
        "Role-play các tình huống thực tế",
        "Brainstorming giải pháp tập thể",
        "Presentation kết quả của các nhóm"
      ],
      color: "bg-orange-500",
      badge: "Team building"
    },
    {
      icon: Users,
      title: "Social media campaign",
      description: "Chiến dịch truyền thông đa nền tảng để lan tỏa thông điệp",
      features: [
        "Hashtag #SốngHayTồnTại",
        "Daily quotes về triết học",
        "User-generated content contest",
        "Live Q&A với chuyên gia"
      ],
      color: "bg-pink-500",
      badge: "Viral marketing"
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Ý tưởng <span className="text-wisdom">Sáng tạo</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Các ý tưởng để thể hiện triết lý Mác-Lênin qua nhiều hình thức sáng tạo và tương tác
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creativeIdeas.map((idea, index) => {
          const IconComponent = idea.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group h-full">
              <div className="space-y-4 h-full flex flex-col">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${idea.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {idea.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {idea.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {idea.description}
                  </p>
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-2 text-sm">Đặc điểm nổi bật:</h4>
                  <ul className="space-y-1">
                    {idea.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-wisdom rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Gợi ý triển khai */}
      <Card className="p-8 bg-gradient-to-br from-card to-wisdom/10 border shadow-lg">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bạn có thể kết hợp nhiều ý tưởng hoặc tập trung vào một hướng phát triển. 
            Chatbot đã được demo sẵn trong website này!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-wisdom hover:bg-wisdom/90">
              <Link to="/chatbot">Thử chatbot demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/theory">Tìm hiểu thêm lý thuyết</Link>
            </Button>
          </div>
        </div>
      </Card>

      {/* Tips thực hiện */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            💡 Tips cho thuyết trình
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Bắt đầu với câu hỏi gây tò mò</li>
            <li>• Sử dụng ví dụ gần gũi với khán giả</li>
            <li>• Kết hợp lý thuyết với thực tiễn</li>
            <li>• Kết thúc với call-to-action tích cực</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            🎯 Mục tiêu truyền đạt
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Hiểu được sự khác biệt sống vs tồn tại</li>
            <li>• Nhận ra tình trạng tha hóa hiện tại</li>
            <li>• Tìm động lực để thay đổi tích cực</li>
            <li>• Ứng dụng triết học vào đời sống</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Creative;