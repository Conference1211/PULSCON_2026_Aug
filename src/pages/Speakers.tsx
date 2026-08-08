import * as React from "react";
import { Helmet } from "@/components/Seo";
import { PageHero } from "@/components/sections/Hero";
import { Section, Stagger, StaggerItem, Reveal } from "@/components/ui-kit";
import { SpeakerCard } from "@/components/cards";
import { SPEAKERS } from "@/constants/conference";
import { cn } from "@/lib/utils";

export default function Speakers() {
  const tracks = React.useMemo(
    () => ["All", ...Array.from(new Set(SPEAKERS.map((s) => s.track)))],
    [],
  );
  const [active, setActive] = React.useState("All");
  const list = active === "All" ? SPEAKERS : SPEAKERS.filter((s) => s.track === active);

  return (
    <>
      <Helmet>
        <title>Speakers — PulseCon Global 2026</title>
        <meta
          name="description"
          content="Meet the clinicians, researchers, founders and regulators speaking at PulseCon Global 2026 across clinical AI, genomics, medtech, policy and longevity science."
        />
        <meta property="og:title" content="Speakers — PulseCon Global 2026" />
        <meta
          property="og:description"
          content="200 speakers from 50 countries setting the agenda for future medicine."
        />
        <meta property="og:url" content="/speakers" />
        <link rel="canonical" href="/speakers" />
      </Helmet>

      <PageHero
        eyebrow="Speakers"
        title="Two hundred voices,"
        accent="fifty countries"
        body="Every speaker is selected by the programme committee on the strength of their evidence, not their marketing budget. Here is a first look at the 2026 faculty."
      />

      <Section className="pt-0">
        <Reveal className="flex flex-wrap gap-2">
          {tracks.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "rounded-full border px-4 py-2 font-button text-[13px] transition-all duration-300",
                active === t
                  ? "border-transparent text-primary-foreground [background-image:var(--gradient-brand)] shadow-[var(--shadow-soft)]"
                  : "border-border/70 text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </Reveal>

        <Stagger key={active} className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <StaggerItem key={s.name}>
              <SpeakerCard speaker={s} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
