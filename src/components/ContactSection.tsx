import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-sm text-primary mb-4">
            {'// CONTACTO'}
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Hagamos realidad tu <span className="text-primary text-glow">proyecto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ¿Tienes una idea en mente? Estoy listo para ayudarte a convertirla en una experiencia digital increíble.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-4">
                Contáctame directamente
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Prefiero la comunicación directa y rápida. No dudes en escribirme por WhatsApp o email para una respuesta inmediata.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/542617737367"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">+54 261 773 7367</p>
                </div>
              </a>

              <a
                href="mailto:tomasbasabe.utn@gmail.com"
                className="card-glow p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">tomasbasabe.utn@gmail.com</p>
                </div>
              </a>

              <div className="card-glow p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold text-foreground">Ubicación</h4>
                  <p className="text-sm text-muted-foreground">Mendoza, Argentina</p>
                </div>
              </div>
            </div>

            {/* Terminal decoration */}
            <div className="p-4 bg-secondary/50 rounded-lg border border-border font-mono text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> echo "¡Trabajemos juntos!"
              </p>
              <p className="text-foreground mt-1 animate-pulse">
                {'>'} Respuesta en menos de 24 horas_
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
