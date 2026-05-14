export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-green-nature tracking-widest uppercase mb-3 block">
            {"// parcours"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Expérience
          </h2>
        </div>
        <div className="fade-in-up relative pl-8 border-l-2 border-border">
          <div className="relative">
            <div
                className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary"
                style={{ boxShadow: "0 0 15px oklch(0.59 0.19 35 / 0.5)" }}
            />
            <div className="space-y-3">

              <span className="font-mono-code text-sm text-primary bg-primary/10 px-3 py-1 rounded inline-block">
                Alliance Automotive Group
              </span>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="font-mono-code text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">+4 500 collaborateurs</span>
                <span className="font-mono-code text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">+1 000 points de vente FR</span>
                <span className="font-mono-code text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">10+ pays</span>
                <span className="font-mono-code text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">3,4 Mds € CA</span>
              </div>

              <div className="rounded-lg border border-border border-l-2 border-primary bg-card/50 px-4 py-3 mt-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Distributeur de pièces détachées automobiles, filiale de <strong className="text-foreground">Genuine Parts Company (GPC)</strong>.
                  Présent dans <strong className="text-foreground">11 pays européens</strong>, la filiale française compte <strong className="text-foreground">+4 500 collaborateurs</strong>, <strong className="text-foreground">+1 000 points de vente</strong> et réalise <strong className="text-foreground">3,4 Mds € de CA</strong>.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold">
                Technicien support niveau 1 et 2
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Au sein de la <strong className="text-foreground">DSI de la filiale Française</strong>, intégré à l'équipe Service Desk - périmètre national (régions Nord/Île-de-France ; Ouest/Bretagne ; Ouest/Manche ; Sud-Est/Sud ; Est).
              </p>

              <ul className="text-muted-foreground leading-relaxed space-y-1 text-sm list-disc list-inside">
                <li>Traitement et qualification des tickets via <strong className="text-foreground">ServiceNow</strong> (incidents, demandes de service)</li>
                <li>Développement de <strong className="text-foreground">SNowGlide</strong>, extension Chrome pour automatiser le remplissage des formulaires SNOW : templates, pré-remplissage des champs métier, overlay persistant</li>
                <li>Administration <strong className="text-foreground">Active Directory</strong> : comptes, groupes, droits d'accès</li>
                <li>Support <strong className="text-foreground">niveau 1</strong> : création du ticket ; résolution rapide pour un sujet redondant (compte Active Directory bloqué, mot de passe Windows oublié...) OU → escalade <strong className="text-foreground">niveau 2</strong> : diagnostic, résolution ou transmission à l'équipe spécialisée</li>
                <li>Assistance sur les <strong className="text-foreground">logiciels métier</strong> liés à la distribution automobile</li>
                <li>Participation aux opérations de <strong className="text-foreground">déploiement IT</strong> : postes, périphériques, images système</li>
                <li>Réaction aux <strong className="text-foreground">incidents majeurs (P1)</strong> : cellule de crise ; communication nationale de prévenance, affectation à/aux équipe(s) spécialisée(s) ; suivi assidu de la panne.</li>
              </ul>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
