import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className="divide-y divide-border/60 overflow-hidden rounded-3xl glass gradient-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-muted/40"
            >
              <span className="numeric text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-heading text-xl font-semibold">{item.q}</span>
              <Plus
                className={cn(
                  "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 pl-[4.4rem] text-[15px] leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const field =
  "w-full rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        window.setTimeout(() => setSent(false), 4000);
      }}
      className="glass gradient-border rounded-3xl p-7 shadow-[var(--shadow-soft)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Full name
          <input required name="name" placeholder="Dr. Jane Ellery" className={field} />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="jane@hospital.org"
            className={field}
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:col-span-2">
          Organisation
          <input name="org" placeholder="Institution or company" className={field} />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:col-span-2">
          Topic
          <select name="topic" className={field} defaultValue="General">
            {["General", "Registration", "Speaking", "Sponsorship", "Press", "Accessibility"].map(
              (t) => (
                <option key={t}>{t}</option>
              ),
            )}
          </select>
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={5}
            placeholder="How can we help?"
            className={cn(field, "resize-none")}
          />
        </label>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          Send message <Send className="h-4 w-4" />
        </Button>
        <AnimatePresence>
          {sent ? (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm text-accent"
            >
              <CheckCircle2 className="h-4 w-4" /> Thank you — our team replies within one working
              day.
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}

export function Newsletter() {
  const [done, setDone] = React.useState(false);
  return (
    <div className="glass-strong gradient-border relative overflow-hidden rounded-[2rem] px-7 py-12 text-center sm:px-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 veil opacity-70" />
      <div className="relative">
        <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Programme drops, <span className="text-gold italic">first</span>
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
          Speaker announcements, abstract deadlines and scholarship windows. One considered email a
          month.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            required
            type="email"
            placeholder="you@institution.org"
            className={cn(field, "flex-1 rounded-full bg-background/70")}
          />
          <Button type="submit" variant="gold">
            {done ? "Subscribed" : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
}
