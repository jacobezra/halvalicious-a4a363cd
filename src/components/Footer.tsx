import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto text-center">
        <img 
          src={logo} 
          alt="Halvalicious by Yashka" 
          className="w-32 mx-auto mb-4"
        />
        <p className="font-inter text-muted-foreground">
          © 2025 Halvalicious by Yashka. Hand-crafted with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
