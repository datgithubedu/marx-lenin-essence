import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, FileText, PencilLine, BookOpenCheck } from "lucide-react";

const AIUsage = () => {
  const aiTools = [
    {
      icon: Bot,
      title: "ChatGPT",
      description: "Hỗ trợ gợi ý ý tưởng, soạn nháp nội dung triết học Mác – Lênin",
      details: [
        "Prompt chính: yêu cầu giải thích khái niệm 'sống' vs 'tồn tại' theo Mác",
        "Kết quả: bản nháp nội dung lý thuyết"
      ],
      badge: "Hỗ trợ sinh ý tưởng",
      color: "bg-purple-500"
    },
    {
      icon: FileText,
      title: "NotebookLM",
      description: "Tóm tắt & sắp xếp nội dung cho phần phân tích",
      details: [
        "Prompt: Đọc tài liệu, kiểm tra và biên soạn nội dung chính",
        "Kết quả: Nội dung về lý thuyết và phân tích"
      ],
      badge: "Tổ chức nội dung",
      color: "bg-blue-500"
    },
    {
      icon: PencilLine,
      title: "Canva + AI Design",
      description: "Tạo infographic & sơ đồ minh họa",
      details: [
        "Tạo hình infographic timeline Mác – Lênin",
        "Xuất ảnh minh họa"
      ],
      badge: "Trình bày trực quan",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          AI <span className="text-wisdom">Usage</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group h-full">
              <div className="space-y-4 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <Badge variant="outline">{tool.badge}</Badge>
                </div>
                <h3 className="text-xl font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
                <ul className="space-y-1 text-sm text-muted-foreground flex-1">
                  {tool.details.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-wisdom rounded-full mt-2" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Kiểm chứng nguồn */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <BookOpenCheck size={18}/> Kiểm chứng thông tin
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Nguồn: </li>
            <li>• Nguồn: </li>
            <li>• Nguồn: </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default AIUsage;
