import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto text-center">
        <img 
          src={logo} 
          alt="Halvalicious by Yashka" 
          className="w-32 mx-auto mb-4"
        />
        <p className="font-inter text-muted-foreground mb-2">
          For enquiries: <a href="mailto:hello@yashkashalva.com" className="text-primary hover:underline">hello@yashkashalva.com</a>
        </p>
        <a 
          href="http://instagram.com/halvalicious" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-2"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-inter">@halvalicious</span>
        </a>
        <p className="font-inter text-muted-foreground">
          © 2025 Halvalicious by Yashka. Hand-crafted with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
