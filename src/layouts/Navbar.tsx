import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui-kit";
import { NAV_LINKS } from "@/constants/conference";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left [background-image:var(--gradient-brand)]"
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-5",
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div
            className={cn(
              "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-500 lg:grid-cols-[auto_minmax(0,1fr)_auto]",
              scrolled ? "glass-strong shadow-[var(--shadow-soft)]" : "border border-transparent",
            )}
          >
            <Link to="/" className="min-w-0">
              <Logo />
            </Link>

            <nav className="hidden items-center justify-center gap-0.5 lg:flex">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                    pathname === l.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {pathname === l.to ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-muted/80"
                      transition={{ type: "spring", stiffness: 340, damping: 30 }}
                    />
                  ) : null}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle colour theme"
                className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-foreground"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <div className="hidden sm:block">
                <ButtonLink to="/registration" size="sm">
                  Register
                </ButtonLink>
              </div>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-border/70 lg:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-4 top-24 z-50 rounded-3xl glass-strong p-4 shadow-[var(--shadow-lift)] lg:hidden"
          >
            <div className="grid gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-2xl px-4 py-3 font-heading text-xl text-foreground/80 transition-colors hover:bg-muted/70 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/registration"
                className="mt-2 rounded-2xl px-4 py-3 text-center font-button text-sm text-primary-foreground [background-image:var(--gradient-brand)]"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
