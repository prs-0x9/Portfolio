'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const stats = [
  { value: '3.57', label: 'Cum Laude GPA' },
  { value: '3x', label: "Dean's List" },
  { value: '2', label: 'Academic Certificates' },
]

export function About() {
  return (
    <section id="about" className="border-t border-border/60 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            I care about the details that make software feel effortless — clean architecture,
            thoughtful interfaces, and performance you can feel.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                My journey grew from a curiosity for how things work into a Bachelor of Science in
                Computer Science (Software Development) from Northern Illinois University, where I
                graduated Cum Laude alongside certificates in Mobile Programming and Digital
                Marketing.
              </p>
              <p>
                I love building end-to-end — designing data models, integrating REST APIs, and
                shaping the interfaces that bring them to life. I work across the stack and on
                mobile with Java, TypeScript, React, Python, Swift, and Kotlin, always reaching for
                the simplest solution that scales. Most recently I shipped a full production web app
                as a web developer at Zcrafter.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-3 gap-4 md:grid-cols-1" stagger={0.1}>
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="rounded-2xl border border-border/70 bg-card p-5 md:p-6"
              >
                <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
