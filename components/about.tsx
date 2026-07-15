'use client'

import Image from 'next/image'
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
            I focus on building straightforward, performant software with a steady emphasis on clean architecture, well-designed APIs, and responsive frontends.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.5fr] items-center">
          {/* Headshot Card */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/70 bg-muted shadow-sm">
              <Image
                src="/paris-richards.jpg"
                alt="Paris Richards professional headshot"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>

          {/* Bio & Stats */}
          <div className="space-y-10">
            <Reveal delay={0.15}>
              <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                <p>
                  I recently graduated Cum Laude from Northern Illinois University with a B.S. in Computer Science. During my time there, I focused on learning how systems function under the hood while also earning specialized academic certificates in Mobile Programming and Digital Marketing.
                </p>
                <p>
                  I enjoy working across the stack — from designing relational database models to building REST APIs and writing interactive frontend components. I primary work with TypeScript, React, Java, and Python, and last year I shipped a full-stack production web application as a web developer for Zcrafter.
                </p>
              </div>
            </Reveal>

            <Stagger className="grid grid-cols-3 gap-4" stagger={0.1}>
              {stats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-card p-5 md:p-6"
                >
                  <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs leading-snug text-muted-foreground">{stat.label}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
