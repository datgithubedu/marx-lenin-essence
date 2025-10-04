import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Trang chủ" },
    { path: "/theory", label: "Lý thuyết" },
    { path: "/analysis", label: "Phân tích" },
    { path: "/creative", label: "Ứng dụng AI" },
    { path: "/liberation", label: "Tổng kết" },
    { path: "/chatbot", label: "Chatbot" },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-philosopher rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Φ</span>
            </div>
            <span className="font-semibold text-foreground">Triết học Mác-Lênin</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;