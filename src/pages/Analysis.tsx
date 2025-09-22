import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Building, Lightbulb } from "lucide-react";

const Analysis = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Phân tích: <span className="text-primary">"Sống"</span> vs <span className="text-destructive">"Tồn tại"</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          So sánh hai cách thức hiện hữu của con người trong xã hội hiện đại
        </p>
      </div>

      {/* So sánh chính */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-primary-foreground" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary">SỐNG</h2>
            <Badge className="bg-primary text-primary-foreground">Lý tưởng</Badge>
            <ul className="text-left space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Làm việc vì đam mê và ý nghĩa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Phát triển toàn diện năng lực</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Quan hệ xã hội phong phú</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Tự chủ về thời gian và lựa chọn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Cống hiến cho cộng đồng</span>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 border-2 border-destructive/20 bg-gradient-to-br from-card to-destructive/5">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto">
              <Clock className="text-destructive-foreground" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-destructive">TỒN TẠI</h2>
            <Badge variant="destructive">Thực trạng</Badge>
            <ul className="text-left space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Làm việc chỉ để kiếm sống</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Lặp lại công việc máy móc</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Cô lập và cạnh tranh</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Bị chi phối bởi áp lực kinh tế</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Sống day dứt và stress</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Ví dụ thực tế */}
      <Card className="p-6 border shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-philosopher rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Building className="text-philosopher-foreground" size={20} />
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Ví dụ minh họa từ thực tế</h2>
              <Badge variant="secondary" className="mb-3">Cuộc sống hiện đại</Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-destructive">Tình huống "Tồn tại":</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nhân viên văn phòng làm việc 12h/ngày chỉ để trả nợ</li>
                  <li>• Sinh viên học ngành không yêu thích vì "dễ kiếm việc"</li>
                  <li>• Công nhân làm ca kíp, không thời gian cho gia đình</li>
                  <li>• Freelancer nhận mọi project để có tiền chi tiêu</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Tình huống "Sống":</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Giáo viên đam mê truyền đạt kiến thức cho học sinh</li>
                  <li>• Nghệ sĩ sáng tác vì yêu thích và chia sẻ</li>
                  <li>• Bác sĩ tận tụy chăm sóc bệnh nhân</li>
                  <li>• Kỹ sư phát triển công nghệ vì cộng đồng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Giải pháp đề xuất */}
      <Card className="p-6 border shadow-lg bg-gradient-to-br from-card to-wisdom/10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-wisdom rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Lightbulb className="text-wisdom-foreground" size={20} />
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Đề xuất giải pháp</h2>
              <Badge className="mb-3 bg-wisdom text-wisdom-foreground">Hướng phát triển</Badge>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cấp độ cá nhân:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Tìm kiếm và phát triển đam mê thực sự</li>
                  <li>• Học tập và rèn luyện kỹ năng đa dạng</li>
                  <li>• Xây dựng mạng lưới quan hệ tích cực</li>
                  <li>• Cân bằng giữa công việc và đời sống</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cấp độ xã hội:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Cải cách giáo dục theo hướng toàn diện</li>
                  <li>• Phát triển kinh tế bền vững, công bằng</li>
                  <li>• Đảm bảo an sinh xã hội, giảm áp lực kinh tế</li>
                  <li>• Khuyến khích sáng tạo và khởi nghiệp có ý nghĩa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analysis;