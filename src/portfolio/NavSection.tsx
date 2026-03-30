import { NAV_ITEMS } from "./data";

export function FloatingNav({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-3"
      >
        {NAV_ITEMS.map((item, i) => (
          <button
            type="button"
            key={item.id}
            data-ocid={`nav.link.${i + 1}`}
            onClick={() => scrollTo(item.id)}
            aria-label={item.label}
            title={item.label}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
              active === item.id
                ? "bg-primary/80 text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {item.icon}
            <span className="absolute left-14 bg-popover text-popover-foreground text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-border">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <nav
        aria-label="Navigation principale mobile"
        className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-border px-1 py-2"
      >
        {NAV_ITEMS.map((item, i) => (
          <button
            type="button"
            key={item.id}
            data-ocid={`nav.link.${i + 1}`}
            onClick={() => scrollTo(item.id)}
            aria-label={item.label}
            className={`flex flex-1 flex-col items-center gap-1 py-1 rounded-lg transition-colors ${
              active === item.id ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {item.icon}
            <span className="text-[9px] font-medium leading-none">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
