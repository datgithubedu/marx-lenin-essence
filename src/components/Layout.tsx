import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            <strong>Lưu ý:</strong> Chatbot chỉ là demo giao diện. Để hoạt động, cần phát triển backend riêng.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;