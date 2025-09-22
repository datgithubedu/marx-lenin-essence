import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Wrench, AlertTriangle, Target } from "lucide-react";

const Theory = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Lý thuyết <span className="text-primary">Mác-Lênin</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Quan điểm về bản chất con người, lao động và sự tha hóa
        </p>
      </div>

      <div className="grid gap-6">
        {/* Bản chất con người */}
        <Card className="p-6 border shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <User className="text-primary-foreground" size={20} />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Bản chất con người</h2>
                <Badge variant="secondary" className="mb-3">Khái niệm cốt lõi</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Con người là động vật xã hội, bản chất được hình thành qua quan hệ xã hội</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Bản chất con người không cố định, thay đổi theo điều kiện lịch sử - xã hội</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Con người tồn tại qua hoạt động thực tiễn, chủ yếu là lao động</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Lao động */}
        <Card className="p-6 border shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-philosopher rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Wrench className="text-philosopher-foreground" size={20} />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Vai trò của lao động</h2>
                <Badge variant="secondary" className="mb-3">Hoạt động cơ bản</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-philosopher rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lao động là hoạt động có ý thức, có mục đích của con người</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-philosopher rounded-full mt-2 flex-shrink-0"></span>
                  <span>Qua lao động, con người biến đổi tự nhiên và tự biến đổi chính mình</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-philosopher rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lao động sáng tạo giúp con người thể hiện bản chất và khẳng định giá trị</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-philosopher rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lao động tạo ra quan hệ xã hội và phát triển văn hóa</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Sự tha hóa */}
        <Card className="p-6 border shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <AlertTriangle className="text-destructive-foreground" size={20} />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Sự tha hóa lao động</h2>
                <Badge variant="destructive" className="mb-3">Vấn đề then chốt</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Người lao động bị tách biệt khỏi sản phẩm lao động của mình</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lao động trở thành hoạt động cưỡng bức, mất tính sáng tạo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Con người cảm thấy xa lạ với bản thân và với người khác</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cuộc sống trở nên vô nghĩa, chỉ còn lại việc "tồn tại" thay vì "sống"</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Giải pháp */}
        <Card className="p-6 border shadow-lg bg-gradient-to-br from-card to-thought">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-wisdom rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Target className="text-wisdom-foreground" size={20} />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Hướng giải quyết</h2>
                <Badge className="mb-3 bg-wisdom text-wisdom-foreground">Triển vọng</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-wisdom rounded-full mt-2 flex-shrink-0"></span>
                  <span>Xây dựng xã hội không có giai cấp, loại bỏ áp bức kinh tế</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-wisdom rounded-full mt-2 flex-shrink-0"></span>
                  <span>Phát triển lao động sáng tạo, con người làm chủ quá trình sản xuất</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-wisdom rounded-full mt-2 flex-shrink-0"></span>
                  <span>Giáo dục toàn diện, phát triển đa dạng khả năng con người</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-wisdom rounded-full mt-2 flex-shrink-0"></span>
                  <span>Tạo điều kiện để mỗi người "sống" thật sự, không chỉ "tồn tại"</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Theory;