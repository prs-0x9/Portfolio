'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from '@/components/reveal'

const timeline = [
  {
    period: '2025 — 2026',
    title: 'Web Developer',
    org: 'Zcrafter',
    detail:
      'Engineered reusable components, designed and deployed a full-stack production React + TypeScript web application, and integrated a Google Apps Script REST API for automated lead collection. Optimized for cross-device performance and monitored production analytics on Vercel.',
  },
  {
    period: '2022 — 2026',
    title: 'B.S. in Computer Science',
    org: 'Northern Illinois University',
    detail:
      "Graduated Cum Laude with a 3.57 GPA (4x Dean's List). Earned Academic Certificates in Mobile Programming and Digital Marketing. Coursework included Data Structures & Algorithms, Network Programming, Operating Systems, iOS & Android Programming, and AI & Data Applications in Marketing.",
  },
]

const certifications = [
  {
    name: 'IBM Z Xplore - Advanced',
    issuer: 'IBM',
    date: 'May 2025',
    skills: ['3270 Terminal', 'Ansible', 'COBOL', 'Db2', 'Linux', 'z/OS', 'REXX', 'JCL'],
  },
  {
    name: 'IBM Z Xplore - Concepts',
    issuer: 'IBM',
    date: 'May 2025',
    skills: ['Bash', 'IBM Z', 'Docker', 'Linux', 'REXX', 'JCL'],
  },
  {
    name: 'Power BI Certifications',
    issuer: 'DataCamp',
    date: 'Apr. 2026',
    skills: ['Data Visualization', 'Introduction to Power BI', 'Data Modeling', 'DAX', 'Data Analysis'],
  },
  {
    name: 'Marketing Analytics for Business',
    issuer: 'DataCamp',
    date: 'Mar. 2026',
    skills: ['Marketing KPIs', 'Customer Segmentation', 'Python', 'Pandas'],
  },
  {
    name: 'Google Ads Certifications (Suite)',
    issuer: 'Skillshop',
    date: 'Jan. — Mar. 2026',
    skills: ['Apps', 'Search', 'Measurement', 'Display'],
  },
  {
    name: 'Quantium Software Engineering',
    issuer: 'Forage (Job Simulation)',
    date: 'Mar. 2025',
    skills: ['Python', 'Pytest', 'Pandas', 'Selenium', 'Bash', 'Data Processing'],
  },
]

const activities = [
  {
    name: 'University Honors Program',
    role: 'Honors Scholar',
    date: '2022 — 2026',
  },
  {
    name: 'Huskie Service Scholars',
    role: 'Scholar Fellow',
    date: 'Spring 2023',
  },
  {
    name: 'Huskie Hackers',
    role: 'Member',
    date: 'Spring 2025',
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

        {/* Certifications and Activities */}
        <div className="mt-24 grid gap-12 md:grid-cols-2">
          {/* Certifications */}
          <div>
            <Reveal>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Professional Certifications
              </h3>
            </Reveal>
            <div className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <Reveal key={cert.name} delay={0.05}>
                  <div className="rounded-2xl border border-border/70 bg-card p-5 transition-colors hover:border-foreground/20">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-accent">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap text-right">
                        {cert.date}
                      </span>
                    </div>
                    {cert.skills && (
                      <p className="mt-3 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground/80">Key areas:</span>{' '}
                        {cert.skills.join(', ')}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Activities & Honors */}
          <div>
            <Reveal>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Honors & Activities
              </h3>
            </Reveal>
            <div className="mt-6 space-y-4">
              {activities.map((act) => (
                <Reveal key={act.name} delay={0.05}>
                  <div className="rounded-2xl border border-border/70 bg-card p-5 transition-colors hover:border-foreground/20">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{act.name}</h4>
                        <p className="text-sm text-accent">{act.role}</p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap text-right">
                        {act.date}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
