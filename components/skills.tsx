'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const groups = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Kotlin', 'Swift', 'PHP', 'C++'],
  },
  {
    title: 'Frameworks & UI',
    skills: ['React', 'Next.js', 'SwiftUI', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Libraries & Tools',
    skills: ['MediaPipe', 'OpenCV', 'Pandas', 'Pytest', 'Git & GitHub', 'Docker', 'Vercel'],
  },
  {
    title: 'Core & AI',
    skills: ['Mobile Dev (iOS/Android)', 'REST API Integration', 'Database Design', 'Claude Code', 'GitHub Copilot'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Capabilities
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            The tools I reach for.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {groups.map((group) => (
            <StaggerItem
              key={group.title}
              className="rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-[15px]">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
