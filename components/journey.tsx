'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from '@/components/reveal'

const timeline = [
  {
    period: '2025 — Present',
    title: 'Full-Stack Software Engineer',
    org: 'Freelance & Contract',
    detail:
      'Partnering with startups to design and ship production web applications end-to-end, from schema to shipped UI.',
  },
  {
    period: '2023 — 2025',
    title: 'Software Engineer',
    org: 'Product Team',
    detail:
      'Built and maintained customer-facing features, improved performance, and mentored junior developers on best practices.',
  },
  {
    period: '2021 — 2023',
    title: 'Software Engineering Intern',
    org: 'Early Career',
    detail:
      'Contributed to internal tools and APIs while sharpening fundamentals in testing, code review, and collaboration.',
  },
  {
    period: '2019 — 2023',
    title: 'B.S. in Computer Science',
    org: 'Northern Illinois University',
    detail:
      'Studied algorithms, systems, and software design — graduating with a strong foundation and a passion for building.',
  },
]

export function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 80%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="journey" className="border-t border-border/60 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Journey
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Experience & education.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-10">
          {/* track */}
          <div className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-[5px]" />
          {/* progress fill */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-accent sm:left-[5px]"
          />

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} y={30}>
                <div className="relative">
                  <span className="absolute -left-8 top-1.5 size-2.5 rounded-full border-2 border-background bg-accent sm:-left-10" />
                  <div className="text-sm font-medium text-muted-foreground">{item.period}</div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-[15px] font-medium text-accent">{item.org}</div>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
