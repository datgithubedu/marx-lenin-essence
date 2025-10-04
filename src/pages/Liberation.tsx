import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Unlock, Users, Target, ArrowRightCircle, Quote } from "lucide-react";

const Liberation = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Giải phóng con người khỏi <span className="text-destructive">sự tha hoá</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Theo quan điểm triết học Mác – Lênin về vai trò lao động và mục tiêu giải phóng con người
        </p>
      </div>

      {/* Card 1: Yêu cầu giải phóng */}
      <Card className="p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Unlock className="text-white" size={24} />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-800">Yêu cầu giải phóng con người</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
              <li>
                <strong>Giải quyết tha hoá lao động:</strong> Tha hoá bắt nguồn từ <em>chế độ tư hữu tư liệu sản xuất</em>, tạo ra phân chia giai cấp, áp bức và bóc lột.
              </li>
              <li>
                <strong>Mục tiêu của chủ nghĩa cộng sản:</strong> Xóa bỏ chế độ tư hữu, giải phóng người lao động khỏi áp bức, đưa lao động trở lại đúng ý nghĩa tự do và sáng tạo.
              </li>
              <li>
                <strong>Giải phóng con người:</strong> Khi làm chủ sản xuất và đời sống, lao động trở thành nhu cầu tự nhiên, mở ra con đường phát triển toàn diện.
              </li>
              <li>
                Đây là <em>quá trình lâu dài</em>, gắn với sự phát triển lực lượng sản xuất và thay đổi quan hệ sản xuất.
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Card 2: Từ khóa */}
      <Card className="p-6 border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Target className="text-white" size={24} />
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-yellow-800">Từ khoá</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Nguồn gốc tha hoá:</strong> Chế độ tư hữu tư liệu sản xuất</li>
              <li><strong>Mục tiêu:</strong> Xóa bỏ áp bức, bóc lột – lao động trở thành nhu cầu tự thân</li>
              <li><strong>Con đường:</strong> Thay đổi quan hệ sản xuất, phát triển lực lượng sản xuất</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Card 3: Tổng kết */}
      <Card className="p-6 border-2 border-red-300 bg-gradient-to-br from-red-50 to-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="text-white" size={24} />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-red-700">Tổng kết</h2>
            <p className="text-muted-foreground">
              Vòng xoáy <em>"kiếm tiền để tồn tại"</em> là biểu hiện rõ của sự tha hoá lao động trong xã hội hiện đại.  
              Theo triết học Mác – Lênin, ý nghĩa đích thực của lao động không phải chỉ để <span className="font-semibold text-destructive">“tồn tại”</span> một cách cơ học, 
              mà để <span className="font-semibold text-primary">“sống”</span> trọn vẹn – phát triển toàn diện con người.  
              Nhận thức điều này giúp định hướng cho một xã hội mà lao động và của cải vật chất thực sự phục vụ sự <strong>giải phóng và phát triển con người</strong>.
            </p>
            <div className="flex items-center gap-2 text-sm italic text-muted-foreground">
              <Quote size={18} className="text-red-400" />
              <span>“Trong một xã hội cộng sản, sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người.” – C. Mác & Ph. Ăngghen</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Liberation;
