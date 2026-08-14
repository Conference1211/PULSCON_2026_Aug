import { Helmet } from "@/components/Seo";
import { PageHero } from "@/components/sections/Hero";
import aboutHealthcareImage from "@/assets/about-healthcare.png";
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
import { CONFERENCE, STATS } from "@/constants/conference";

const PILLARS = [
  {
    title: "Global Healthcare Community",
    body: "PulseCon Global brings together clinicians, researchers, healthcare professionals, innovators and institutions from across the world to exchange knowledge, share experiences and explore the ideas shaping the future of healthcare.",
  },
  {
    title: "Scientific Knowledge",
    body: "Through expert-led sessions, research presentations and meaningful discussions, PulseCon Global creates a platform for scientific exchange, clinical insights and emerging developments across medicine and healthcare.",
  },
  {
    title: "Innovation & Technology",
    body: "We explore the technologies, discoveries and new approaches transforming healthcare — from advances in clinical practice and medical research to digital health, artificial intelligence and emerging healthcare solutions.",
  },
  {
    title: "Collaboration & Connection",
    body: "PulseCon Global creates opportunities for professionals, institutions and innovators to connect across disciplines, exchange perspectives and build relationships that can continue beyond the conference.",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Knowledge",
    body: "We believe progress in healthcare begins with the open exchange of scientific knowledge, clinical experience, research and diverse perspectives.",
  },
  {
    number: "02",
    title: "Innovation",
    body: "We spotlight emerging research, technologies and ideas that have the potential to improve healthcare delivery and shape the future of medicine.",
  },
  {
    number: "03",
    title: "Collaboration",
    body: "We bring together different disciplines, experiences and perspectives to encourage meaningful connections, shared learning and new opportunities.",
  },
  {
    number: "04",
    title: "Impact",
    body: "We aim to turn meaningful conversations, shared knowledge and new connections into ideas that can contribute to positive progress across healthcare and medicine.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About PulseCon Global — Connecting Healthcare, Innovation & Future
          Medicine
        </title>

        <meta
          name="description"
          content="Discover PulseCon Global, a global healthcare platform bringing together clinicians, researchers, healthcare professionals, innovators and institutions to exchange knowledge, explore innovation and shape the future of medicine."
        />
      </Helmet>

      {/* PAGE HERO */}
      {/* PAGE HERO */}
<div className="relative">
  <PageHero
    eyebrow="About PulseCon Global"
    title="Connecting healthcare."
    accent="Shaping what comes next."
    body={`${CONFERENCE.name} brings together healthcare professionals, researchers, clinicians, innovators and institutions to exchange knowledge, explore emerging developments and build meaningful connections that can help shape the future of medicine.`}
  />

  {/* About Healthcare Visual */}
  <img
  src={aboutHealthcareImage}
  alt="Healthcare innovation and global medical collaboration"
  className="
    pointer-events-none
    absolute
    object-contain

    /* MOBILE */
    right-0
    bottom-[-140px]
    w-[170px]

    /* SMALL TABLET */
    sm:right-8
    sm:bottom-[-100px]
    sm:w-[210px]

    /* TABLET */
    md:right-8
    md:bottom-auto
    md:top-[68%]
    md:w-[280px]

    /* DESKTOP */
lg:right-[8%]
lg:top-[56%]
lg:w-[540px]

/* LARGE DESKTOP */
xl:right-[6%]
xl:top-[57%]
xl:w-[620px]

    -translate-y-1/2
  "
/>
</div>

      {/* OUR MISSION */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Heading
            eyebrow="Our Mission"
            title="Bringing expertise."
            accent="Ideas. Innovation."
            body="Our mission is to create a global platform where healthcare expertise, scientific knowledge and innovation come together. PulseCon Global connects the people and ideas driving progress in medicine, creating opportunities for learning, discussion and collaboration."
          />

          <Reveal
            delay={0.1}
            className="grid gap-4 sm:grid-cols-2"
          >
            {STATS.map((stat) => (
              <Card
                key={stat.label}
                className="p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-numeric text-4xl font-bold text-gradient">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>

                <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* WHAT PULSECON BRINGS TOGETHER */}
      <Section veil>
        <Heading
          eyebrow="What PulseCon Brings Together"
          title="One global platform."
          accent="Many healthcare perspectives."
          align="center"
          body="PulseCon Global brings together diverse voices from across healthcare, science, technology and innovation — creating a space where knowledge can be shared, perspectives can connect and new possibilities can emerge."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-heading text-2xl font-semibold">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* OUR PURPOSE */}
      <Section>
        <Heading
          eyebrow="Our Purpose"
          title="More than a conference."
          accent="A global healthcare conversation."
          align="center"
          body="PulseCon Global is built to encourage meaningful exchange — bringing together knowledge, experience and innovation to create conversations that can inspire new thinking and contribute to the future of healthcare."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {VALUES.map((value) => (
            <StaggerItem key={value.number}>
              <Card className="h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <span className="font-numeric text-sm tracking-[0.2em] text-gold">
                    {value.number}
                  </span>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {value.body}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 text-center">
          <ButtonLink to="/registration" size="lg">
            Join PulseCon Global
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}