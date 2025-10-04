import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Wrench, BookOpen, Quote } from "lucide-react";

const Theory = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">
          Lý thuyết <span className="text-indigo-600">Mác – Lênin</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Tóm tắt nội dung thuyết trình: Con người & Lao động
        </p>
      </div>

      <div className="grid gap-6">
        {/* Con người */}
        <Card className="p-6 border shadow-md bg-gradient-to-br from-indigo-50 to-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <User className="text-white" size={22} />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-indigo-800">
                Quan niệm về Con người
              </h2>
              <Badge variant="outline" className="bg-indigo-100 text-indigo-700">
                Bản chất
              </Badge>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Tiền đề nghiên cứu xã hội: con người hiện thực trong lịch sử.</li>
                <li>Con người là sự thống nhất giữa <strong>sinh vật</strong> và <strong>xã hội</strong>.</li>
                <li>Mặt sinh học: sản phẩm của tự nhiên, tuân theo quy luật sinh học.</li>
                <li>Mặt xã hội: tồn tại & phát triển qua lao động và quan hệ xã hội.</li>
              </ul>
              <div className="flex items-center gap-2 italic text-sm text-indigo-700">
                <Quote size={16} /> 
                “Bản chất con người là tổng hòa những quan hệ xã hội” – C. Mác
              </div>
            </div>
          </div>
        </Card>

        {/* Lao động */}
        <Card className="p-6 border shadow-md bg-gradient-to-br from-purple-50 to-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Wrench className="text-white" size={22} />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-purple-800">Vai trò của Lao động</h2>
              <Badge variant="outline" className="bg-purple-100 text-purple-700">
                Nền tảng
              </Badge>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Lao động quyết định sự hình thành & phát triển của con người.</li>
                <li>Chuyển hóa <em>vượn người → con người</em>.</li>
                <li>Tạo ra ngôn ngữ, tư duy, ý thức và nền tảng xã hội.</li>
                <li>Là nguồn gốc của của cải vật chất & tinh thần.</li>
              </ul>
              <div className="flex items-center gap-2 italic text-sm text-purple-700">
                <Quote size={16} /> 
                “Lao động đã sáng tạo ra bản thân con người” – Ph. Ăngghen
              </div>
            </div>
          </div>
        </Card>

        {/* Từ khoá */}
        <Card className="p-6 border shadow-md bg-gradient-to-br from-yellow-50 to-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="text-white" size={22} />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-yellow-800">Từ khoá</h2>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-700">
                Tóm lược
              </Badge>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Con người</strong>: Thực thể sinh học – xã hội</li>
                <li><strong>Bản chất</strong>: Tổng hòa quan hệ xã hội</li>
                <li><strong>Lao động</strong>: Quyết định sự phát triển con người</li>
                <li><strong>Ý nghĩa</strong>: Nền tảng tồn tại & phát triển xã hội</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Theory;
