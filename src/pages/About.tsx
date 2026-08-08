import { Helmet } from "@/components/Seo";
import { PageHero } from "@/components/sections/Hero";
import {
  Section,
  Heading,
  Card,
  Reveal,
  Stagger,
  StaggerItem,
  Counter,
  ButtonLink,
} from "@/components/ui-kit";
import { CONFERENCE, STATS, WHY_ATTEND } from "@/constants/conference";

const PILLARS = [
  {
    year: "2019",
    title: "Founded in Geneva",
    body: "Eighty clinicians and engineers met to argue about why hospital software fails. The transcript became our first programme.",
  },
  {
    year: "2022",
    title: "The Access Charter",
    body: "Delegates signed a commitment to tiered pricing for frontier therapies, later adopted by six health systems.",
  },
  {
    year: "2024",
    title: "Scholarship Programme",
    body: "400 fully-funded seats a year for researchers and clinicians from low- and middle-income countries.",
  },
  {
    year: "2026",
    title: "World Edition",
    body: "Six tracks, four days, and the largest investor floor in European health-tech.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About PulseCon Global — Our Mission & Programme</title>
        <meta
          name="description"
          content="Why PulseCon Global exists: closing the distance between published research and treated patients, across clinical AI, genomics, medtech and health policy."
        />
        <meta property="og:title" content="About PulseCon Global" />
        <meta
          property="og:description"
          content="A working summit for healthcare, innovation and future medicine."
        />
        <meta property="og:url" content="/about" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <PageHero
        eyebrow="About"
        title="We build the room where"
        accent="medicine changes"
        body={`${CONFERENCE.name} is an independent, non-profit convening body. No pay-to-speak slots, no vendor keynotes — the programme committee selects every session on evidence and consequence.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Heading
            eyebrow="Mission"
            title="Research is abundant."
            accent="Translation is not."
            body="A therapy validated today reaches routine care in an average of seventeen years. PulseCon compresses that by removing the distance between the people who can act: the clinician who will prescribe it, the regulator who will approve it, the payer who will fund it and the engineer who will ship it."
          />
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {STATS.map((s) => (
              <Card key={s.label} className="p-6">
                <p className="font-numeric text-4xl font-bold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {s.label}
                </p>
              </Card>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section veil>
        <Heading eyebrow="Our history" title="Seven years," accent="one obsession" align="center" />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <StaggerItem key={p.year}>
              <Card className="h-full">
                <p className="numeric text-sm tracking-[0.2em] text-gold">{p.year}</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Heading
          eyebrow="Why attend"
          title="What four days"
          accent="actually gets you"
          align="center"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_ATTEND.map((w) => (
            <StaggerItem key={w.title}>
              <Card className="h-full">
                <h3 className="font-heading text-2xl font-semibold">{w.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <ButtonLink to="/registration" size="lg">
            Join us in Geneva
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
