import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Lightbulb, Flag } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-philosopher to-wisdom bg-clip-text text-transparent">
              "Chúng ta kiếm tiền để sống,
            </span>
            <br />
            <span className="text-foreground">
              hay chỉ tồn tại để kiếm ăn qua ngày?"
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Khám phá quan điểm triết học Mác-Lênin về bản chất con người, lao động và ý nghĩa của sự sống
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-philosopher transition-colors">
              <Link to="/theory">Bắt đầu hành trình</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/analysis">Xem phân tích</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Assignment Overview */}
      <section className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-card to-thought border shadow-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Users className="text-wisdom" />
            Về Assignment Nhóm
          </h2>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Đây là sản phẩm của nhóm nghiên cứu về <strong>triết học Mác-Lênin</strong>, 
              tập trung vào việc phân tích bản chất con người qua lăng kính lao động và sự tha hóa. 
              Chúng tôi khám phá sự khác biệt giữa "sống" và "tồn tại", đồng thời đề xuất những 
              giải pháp để con người có thể giải phóng khỏi sự tha hóa và tìm lại ý nghĩa thực sự của cuộc sống.
            </p>
          </div>
        </Card>
      </section>

      {/* Quick Navigation */}
      <section className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Lý thuyết */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <BookOpen className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Lý thuyết cơ bản</h3>
            <p className="text-muted-foreground">
              Quan điểm Mác-Lênin về con người và lao động
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/theory">Khám phá</Link>
            </Button>
          </div>
        </Card>

        {/* Phân tích */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-philosopher rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Users className="text-philosopher-foreground" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Phân tích thực tế</h3>
            <p className="text-muted-foreground">
              So sánh "sống" vs "tồn tại" trong xã hội hiện đại
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/analysis">Phân tích</Link>
            </Button>
          </div>
        </Card>

        {/* Tổng kết */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Flag className="text-destructive-foreground" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Tổng kết</h3>
            <p className="text-muted-foreground">
              Giải phóng con người khỏi sự tha hóa lao động
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/liberation">Xem chi tiết</Link>
            </Button>
          </div>
        </Card>

        {/* Ứng dụng AI */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-wisdom rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Lightbulb className="text-wisdom-foreground" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Ứng dụng AI</h3>
            <p className="text-muted-foreground">
              Những phần đã sử dụng AI
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/creative">Khám phá</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
