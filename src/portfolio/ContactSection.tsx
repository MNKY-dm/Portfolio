import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
} from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const validate = () => {
    const e: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) e.name = "Le nom est requis.";
    if (!email.trim()) e.email = "L’email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Email invalide.";
    if (!message.trim()) e.message = "Le message est requis.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("loading");
    setTimeout(() => setFormState("success"), 1500);
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/dylan-moulin-dev/",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      href: "https://github.com/MNKY-dm/",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "mailto:dylan.moulin.dev@gmail.com",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 pb-32 lg:pb-24 bg-card/30">
      <div className="max-w-2xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-primary tracking-widest uppercase mb-3 block">
            {"// restons en contact"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Me contacter
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un projet, une question, une opportunité d’alternance ?{" "}
            <span className="text-foreground">Je lis tout.</span>
          </p>
        </div>
        <div className="fade-in-up flex justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-11 h-11 rounded-xl border border-border bg-card/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="fade-in-up">
          {formState === "success" ? (
            <div
              data-ocid="contact.success_state"
              className="flex flex-col items-center gap-4 py-16 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-nature" />
              <p className="font-display text-2xl font-bold">
                Message envoyé !
              </p>
              <p className="text-muted-foreground">
                Je te réponds dès que possible.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setFormState("idle");
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
              >
                Envoyer un autre message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="c-name">Nom</Label>
                <Input
                  id="c-name"
                  data-ocid="contact.input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ton prénom ou pseudo"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-xs">{errors.name}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-email">Email</Label>
                <Input
                  id="c-email"
                  data-ocid="contact.search_input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.dev"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-xs">{errors.email}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-message">Message</Label>
                <Textarea
                  id="c-message"
                  data-ocid="contact.textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Dis-moi ce que tu as en tête…"
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-xs">{errors.message}</p>
                )}
              </div>
              {formState === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-2 text-destructive text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  Une erreur s’est produite. Essaie de m’écrire directement.
                </div>
              )}
              <Button
                data-ocid="contact.submit_button"
                type="submit"
                disabled={formState === "loading"}
                className="w-full gradient-orange text-white font-semibold h-12 rounded-xl hover:opacity-90 transition-opacity"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2
                      data-ocid="contact.loading_state"
                      className="w-4 h-4 mr-2 animate-spin"
                    />
                    Envoi en cours…
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
