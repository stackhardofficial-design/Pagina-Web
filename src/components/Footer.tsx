import { Terminal, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero" className="flex items-center gap-2 group">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono font-bold text-foreground">{'StackHard'}</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} StackHard. Todos los derechos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Tomy-basabe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tomas-basabe-333899340/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Made with code & Hidden Logo */}
          <div className="flex items-center gap-2">
            <p className="font-mono text-xs text-muted-foreground">
              Hecho con <span className="text-primary">{'<código />'}</span> y ☕
            </p>
            <div className="w-5 h-5 rounded overflow-hidden bg-transparent select-none pointer-events-none" aria-hidden="true">
              <img 
                src="/logo.jpg" 
                alt="StackHard Hidden Logo" 
                className="w-full h-full object-contain opacity-0 pointer-events-none select-none" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
