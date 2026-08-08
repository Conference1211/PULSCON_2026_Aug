import * as React from "react";
import type * as ReactType from "react";
import { Helmet } from "@/components/Seo";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { CheckCircle2, FileUp, Trophy, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/Hero";
import {
  Section,
  Heading,
  Card,
  Badge,
  Button,
  ButtonLink,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/ui-kit";
import {
  ABSTRACT_AWARDS,
  ABSTRACT_BENEFITS,
  ABSTRACT_CATEGORIES,
  ABSTRACT_DATES,
  ABSTRACT_GUIDELINES,
  ABSTRACT_PROCESS,
  TRACKS,
} from "@/constants/conference";
import { cn } from "@/lib/utils";

function Icon({ name, className }: { name: string; className?: string }) {
  const C =
    (Icons as unknown as Record<string, ReactType.ComponentType<{ className?: string }>>)[name] ??
    Icons.Sparkles;
  return <C className={className ?? ""} />;
}

const field =
  "w-full rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

function AbstractForm() {
  const [sent, setSent] = React.useState(false);
  const [fileName, setFileName] = React.useState<string | null>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        window.setTimeout(() => setSent(false), 5000);
      }}
      className="glass gradient-border rounded-3xl p-7 shadow-[var(--shadow-soft)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Presenting author
          <input required name="author" placeholder="Dr. Jane Ellery" className={field} />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="jane@institute.org"
            className={field}
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Institution
          <input required name="org" placeholder="University or hospital" className={field} />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Country
          <input required name="country" placeholder="Switzerland" className={field} />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:col-span-2">
          Abstract title
          <input required name="title" placeholder="Prospective validation of…" className={field} />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Track
          <select name="track" className={field} defaultValue={TRACKS[0]!.title}>
            {TRACKS.map((t) => (
              <option key={t.title}>{t.title}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Preferred format
          <select name="format" className={field} defaultValue="Oral presentation">
            {["Oral presentation", "Poster", "Rapid-fire (5 min)", "Workshop"].map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:col-span-2">
          Structured abstract (max 400 words)
          <textarea
            required
            name="abstract"
            rows={7}
            placeholder="Background… Methods… Results… Conclusion…"
            className={cn(field, "resize-none")}
          />
        </label>

        <div className="sm:col-span-2">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Manuscript upload
          </p>
          <label className="glass group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-dashed border-border/80 px-6 py-10 text-center transition-colors hover:border-primary/60">
            <motion.span
              whileHover={{ y: -4 }}
              className="grid h-14 w-14 place-items-center rounded-2xl [background-image:var(--gradient-brand)] text-primary-foreground"
            >
              <FileUp className="h-6 w-6" />
            </motion.span>
            <span className="font-heading text-lg font-semibold">
              {fileName ?? "Drop your PDF or DOCX here"}
            </span>
            <span className="text-xs text-muted-foreground">Anonymised file, max 5 MB</span>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
        </div>

        <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2">
          <input
            required
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 rounded border-border"
          />
          I confirm the work is unpublished, ethics approval is in place, and the submission is
          anonymised.
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          Submit abstract <ArrowRight className="h-4 w-4" />
        </Button>
        <AnimatePresence>
          {sent ? (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm text-accent"
            >
              <CheckCircle2 className="h-4 w-4" /> Received — a reference number arrives by email
              within the hour.
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}

export default function SubmitAbstract() {
  return (
    <>
      <Helmet>
        <title>Submit an Abstract — PulseCon Global 2026 Call for Papers</title>
        <meta
          name="description"
          content="Call for papers for PulseCon Global 2026 in Geneva: six research categories, double-blind review, CHF 45,000 in awards. Abstracts close 31 March 2026."
        />
        <meta property="og:title" content="Submit an Abstract — PulseCon Global 2026" />
        <meta
          property="og:description"
          content="Present your research in Geneva. Structured abstracts of up to 400 words, reviewed double-blind."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/submit-abstract" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Submit an Abstract — PulseCon Global 2026" />
        <link rel="canonical" href="/submit-abstract" />
      </Helmet>

      <PageHero
        eyebrow="Call for papers"
        title="Present your research in"
        accent="Geneva"
        body="PulseCon Global 2026 accepts original work across six research categories. Every abstract is reviewed double-blind by three independent reviewers, and accepted work is published with a citable DOI."
      />

      <Section>
        <Heading
          eyebrow="Research categories"
          title="Six categories,"
          accent="one standard of evidence"
          body="Choose the category closest to your primary contribution. Chairs may reassign across tracks to reach the right reviewers."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ABSTRACT_CATEGORIES.map((c) => (
            <StaggerItem key={c.title}>
              <Card className="h-full">
                <span className="grid h-12 w-12 place-items-center rounded-2xl [background-image:var(--gradient-brand)] text-primary-foreground">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section veil>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Heading eyebrow="Guidelines" title="Submission" accent="requirements" />
            <Stagger className="mt-8 space-y-3">
              {ABSTRACT_GUIDELINES.map((g) => (
                <StaggerItem key={g}>
                  <div className="glass flex items-start gap-3 rounded-2xl px-5 py-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p className="text-sm text-muted-foreground">{g}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Heading eyebrow="Important dates" title="The 2026" accent="timeline" />
            <div className="relative mt-8 pl-6">
              <span
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-px [background-image:var(--gradient-brand)]"
              />
              <Stagger className="space-y-6">
                {ABSTRACT_DATES.map((d) => (
                  <StaggerItem key={d.label}>
                    <div className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[1.62rem] top-1.5 h-2.5 w-2.5 rounded-full [background-image:var(--gradient-brand)]"
                      />
                      <p className="numeric text-xs uppercase tracking-[0.22em] text-accent">
                        {d.date}
                      </p>
                      <p className="mt-1 font-heading text-lg font-semibold">{d.label}</p>
                      <p className="text-sm text-muted-foreground">{d.note}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Heading
          eyebrow="Review process"
          title="How your work"
          accent="is assessed"
          align="center"
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ABSTRACT_PROCESS.map((p) => (
            <StaggerItem key={p.step}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass gradient-border h-full rounded-3xl p-6"
              >
                <p className="numeric text-3xl font-bold text-gradient">{p.step}</p>
                <h3 className="mt-3 font-heading text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section veil>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Heading
            eyebrow="Benefits"
            title="What presenting"
            accent="gets you"
            body="Beyond the stage: indexed publication, a reduced pass, rehearsal support and press reach across fifty countries."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {ABSTRACT_BENEFITS.map((b) => (
              <StaggerItem key={b.title}>
                <Card className="h-full p-6">
                  <h3 className="font-heading text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Awards" title="CHF 45,000" accent="in research prizes" align="center" />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {ABSTRACT_AWARDS.map((a) => (
            <StaggerItem key={a.name}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-strong gradient-border h-full rounded-3xl p-7 text-center"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl [background-image:var(--gradient-gold)] text-[oklch(0.2_0.03_252)]">
                  <Trophy className="h-6 w-6" />
                </span>
                <p className="numeric mt-5 text-2xl font-bold text-gold">{a.value}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold">{a.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section veil className="pb-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge tone="gold">Deadline 31 March 2026</Badge>
            <h2 className="mt-6 font-display text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl">
              Send us the <span className="text-gradient italic">work</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
              One submission per presenting author per track. You can revise your file at any point
              before the deadline using the reference number we email you.
            </p>
            <div className="mt-8">
              <ButtonLink to="/tracks" variant="outline">
                Review the six tracks
              </ButtonLink>
            </div>
          </div>
          <Reveal delay={0.1}>
            <AbstractForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
