import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectCard } from "@/components/project-card"
import { TopTabBar } from "@/components/top-tab-bar"
import { ParallaxItem } from "@/components/parallax"
import { Reveal } from "@/components/reveal"
import { AnimatedGrid } from "@/components/animated-grid"
import { Spotlight } from "@/components/spotlight"
import { FloatingOrbs } from "@/components/floating-orbs"
import { TextShimmer } from "@/components/text-shimmer"
import { RadiatingLines } from "@/components/radiating-lines"

export default function Page() {
  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ] as const

  return (
    <main className="relative min-h-screen bg-neutral-950 text-slate-100 font-sans pt-[72px] overflow-hidden">
      <AnimatedGrid className="opacity-40" />
      <FloatingOrbs />
      <Spotlight />

      {/* Top sticky tab bar with spacer handled inside */}
      <TopTabBar sections={sections} />

      {/* subtle parallax background accents */}
      <ParallaxItem
        speed={0.12}
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl"
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400/0 rounded-full opacity-60 animate-pulse-glow" />
      </ParallaxItem>
      <ParallaxItem speed={0.18} className="pointer-events-none absolute top-[40vh] right-8 hidden md:block">
        <div className="h-32 w-32 rounded-full blur-3xl bg-cyan-500/10 animate-float" />
      </ParallaxItem>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-28 min-h-screen grid place-items-center px-6 py-20 relative z-20"
        aria-label="About"
      >
        <RadiatingLines />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Reveal>
            <ParallaxItem speed={0.18}>
              <p className="text-2xl md:text-3xl text-purple-400 font-semibold animate-float">{"Hi, I'm"}</p>
            </ParallaxItem>
          </Reveal>
          <Reveal delay={80}>
            <ParallaxItem speed={0.26}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-balance">
                <TextShimmer>Vinay Padman</TextShimmer>
              </h1>
            </ParallaxItem>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-pretty">
              Results-driven Full Stack Developer with 2.5+ years building production-ready apps across web, desktop,
              and mobile. I craft scalable UIs and high‑performance backends with React.js, React Native, Electron.js,
              Node.js, Nest.js, and TypeScript—owning end‑to‑end delivery and performance optimization.
            </p>
          </Reveal>

          {/* Skills snapshot */}
          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {["React.js", "TypeScript", "React Native", "Electron.js", "Node.js", "Nest.js", "PostgreSQL", "AWS"].map(
                (t, i) => (
                  <span
                    key={t}
                    className="rounded-full px-2.5 py-1 text-xs font-medium bg-emerald-500/80 text-white border border-emerald-400/50 animate-float"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="flex items-center justify-center gap-3">
              <Button asChild className="bg-cyan-400 text-black hover:bg-cyan-300 animate-pulse-glow">
                <Link href="#projects" aria-label="View projects">
                  View Projects
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-200 hover:bg-neutral-900 bg-transparent"
                asChild
              >
                <Link href="#contact" aria-label="Contact me">
                  Contact
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="text-sm text-slate-400">
              Kerala, India •{" "}
              <a
                href="tel:+919745781390"
                className="underline underline-offset-4 decoration-slate-700 hover:text-slate-300"
              >
                +91-9745781390
              </a>{" "}
              •{" "}
              <a
                href="mailto:vinaypadman111@gmail.com"
                className="underline underline-offset-4 decoration-slate-700 hover:text-slate-300"
              >
                vinaypadman111@gmail.com
              </a>{" "}
              •{" "}
              <a
                href="https://linkedin.com/in/vinaypadman"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-slate-700 hover:text-slate-300"
              >
                linkedin.com/in/vinaypadman
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative scroll-mt-28 min-h-screen px-6 py-24 md:py-28 z-20"
        aria-label="Experience"
      >
        <ParallaxItem
          speed={0.12}
          className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl"
        >
          <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent opacity-40 rounded-full animate-pulse-glow" />
        </ParallaxItem>

        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-2">
            <Reveal>
              <ParallaxItem speed={0.18}>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <TextShimmer>Experience</TextShimmer>
                </h2>
              </ParallaxItem>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-slate-400">Recent roles and the impact delivered.</p>
            </Reveal>
          </header>

          <div className="space-y-6">
            <Reveal>
              <ExperienceCard
                company="CareStack (Good Methods Global)"
                role="Software Development Engineer"
                period="July 2023 – Present"
                location="Kerala, India"
                summary="Voicestack (Desktop & Web): AI-driven telecom platform integrated with PMS across US, UK, Australia, and Ireland."
                points={[
                  "Built native desktop notifications (Windows/macOS) for missed/incoming calls to increase responsiveness.",
                  "Re-architected call management flow to reduce latency and improve stability for high-volume environments.",
                  "Developed real-time analytics dashboards for call activity, user behavior, and diagnostics to inform decisions.",
                  "Reduced app latency by eliminating unnecessary re-renders, adding memoization, and tuning lifecycles.",
                  "Integrated in-app team chat for coordination during live calls, reducing reliance on external tools.",
                ]}
                tags={["OpenAI (ChatGPT)", "Node.js", "Electron.js", "React.js", "Azure STT", "AWS (S3, CloudFront)"]}
              />
            </Reveal>

            <Reveal delay={100}>
              <ExperienceCard
                company="CareStack"
                role="Voicestack Mobile App — Sole Developer & Maintainer"
                period="2023 – Present"
                summary="iOS/Android companion app providing Voicestack telecom functionality on mobile."
                points={[
                  "Designed, built, and deployed the app end-to-end: planning, development, testing, publishing, and support.",
                  "Implemented VoIP flows with real-time data sync to mirror desktop features on mobile.",
                  "Engineered mobile-first push notifications with actionable alerts for calls and messages.",
                  "Built in-app chat and a mobile-optimized analytics/logs interface for historical insights.",
                  "Published and maintained on Google Play and Apple App Store with smooth rollout.",
                ]}
                tags={["React Native", "Expo", "Firebase", "AWS", "REST APIs"]}
              />
            </Reveal>

            <Reveal delay={200}>
              <ExperienceCard
                company="ThinkPalm Technologies"
                role="Software Engineer"
                period="Nov 2022 – Jun 2023"
                location="Kerala, India"
                summary="Ocean's Gourmet: Procurement and inventory management system for maritime vessels."
                points={[
                  "Designed intuitive UI workflows for complex inventory tracking and procurement logic.",
                  "Developed and integrated REST APIs for procurement, inventory, and approvals with real-time sync.",
                ]}
                tags={["React.js", "Nest.js", "Node.js", "PostgreSQL", "AWS"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative scroll-mt-28 min-h-screen px-6 py-24 md:py-28 z-20"
        aria-label="Projects"
      >
        <ParallaxItem speed={0.16} className="pointer-events-none absolute top-6 right-8 hidden md:block">
          <div className="h-24 w-24 rounded-full blur-3xl bg-cyan-500/10 animate-float" />
        </ParallaxItem>

        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-2">
            <Reveal>
              <ParallaxItem speed={0.18}>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <TextShimmer>Projects</TextShimmer>
                </h2>
              </ParallaxItem>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-slate-400">Selected work across web, desktop, and mobile.</p>
            </Reveal>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <ProjectCard
                title="Voicestack — Desktop & Web"
                description="AI-driven telecom platform integrated with PMS; intelligent call handling, in-app team chat, real-time analytics, and performance optimizations."
                tags={["Electron.js", "React.js", "Node.js", "OpenAI", "Azure STT", "AWS"]}
              />
            </Reveal>
            <Reveal delay={100}>
              <ProjectCard
                title="Voicestack — Mobile App"
                description="Full-featured companion on iOS/Android with VoIP flows, real-time sync, push notifications, in-app chat, and mobile-first analytics/logs."
                tags={["React Native", "Expo", "Firebase", "AWS"]}
              />
            </Reveal>
            <Reveal delay={200}>
              <ProjectCard
                title="Ocean's Gourmet"
                description="Procurement and inventory management for maritime operations; complex workflows, approval chains, and reliable data sync."
                tags={["React.js", "Nest.js", "Node.js", "PostgreSQL", "AWS"]}
              />
            </Reveal>
            <Reveal delay={300}>
              <ProjectCard
                title="Performance & DX Utilities"
                description="Internal patterns for memoization, render optimization, and scalable component architecture applied across apps."
                tags={["React", "TypeScript", "Performance"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-28 min-h-[70vh] px-6 py-24 md:py-28 z-20"
        aria-label="Contact"
      >
        <ParallaxItem speed={0.14} className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 w-[88%]">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse-glow" />
        </ParallaxItem>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <Reveal>
            <ParallaxItem speed={0.18}>
              <h2 className="text-3xl md:text-4xl font-bold">
                <TextShimmer>Contact</TextShimmer>
              </h2>
            </ParallaxItem>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-slate-300 leading-relaxed max-w-xl mx-auto">
              I'm open to roles and collaborations across web, desktop, and mobile. Let's build something impactful.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex items-center justify-center gap-3">
              <Button asChild className="bg-cyan-400 text-black hover:bg-cyan-300 animate-pulse-glow">
                <a href="mailto:vinaypadman111@gmail.com" aria-label="Email">
                  Email Me
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-200 hover:bg-neutral-900 bg-transparent"
                asChild
              >
                <a href="https://linkedin.com/in/vinaypadman" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-200 hover:bg-neutral-900 bg-transparent"
                asChild
              >
                <a href="tel:+919745781390" aria-label="Phone">
                  +91-9745781390
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="text-slate-500 text-sm">Kerala, India</div>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-slate-800 text-sm text-slate-500 relative z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} Vinay Padman</span>
          <span className="text-purple-400">Built with care.</span>
        </div>
      </footer>
    </main>
  )
}
