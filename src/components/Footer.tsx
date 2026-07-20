

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero" className="flex items-center gap-2 group">
              <img 
                src="/logo.jpg" 
                alt="StackHard Logo" 
                className="w-6 h-6 object-contain rounded-md" 
              />
              <span className="font-mono font-bold text-foreground">{'StackHard'}</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} StackHard. Todos los derechos reservados.
            </p>
          </div>

          {/* Made with code */}
          <p className="font-mono text-xs text-muted-foreground">
            Hecho con <span className="text-primary">{'<código />'}</span> y ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
