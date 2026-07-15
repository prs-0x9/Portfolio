'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'

const EASE = [0.22, 1, 0.36, 1] as const

const projects = [
  {
    title: 'Zcrafter Web App',
    kind: 'Client work',
    description:
      'Designed and deployed a production React and TypeScript web app. I engineered reusable UI components and integrated a Google Apps Script REST API to automate lead capture, managing the timeline from requirements gathering through deployment on Vercel.',
    image: '/projects/zcrafter.png',
    tags: ['React', 'TypeScript', 'Google Apps Script', 'Vercel'],
    year: '2025',
  },
  {
    title: 'Air Drawing Application',
    kind: 'Individual project',
    description:
      'Built a real-time computer vision app in Python that tracks hand movements using MediaPipe and OpenCV to let users draw directly on their screen, featuring clear-canvas logic and custom checks for robust tracking.',
    image: '/projects/airdraw.png',
    tags: ['Python', 'MediaPipe', 'OpenCV'],
    year: '2025',
  },
  {
    title: 'MusicStore',
    kind: 'Group project',
    description:
      'Collaborated with a developers team to build an inventory database. I designed the relative schema and wrote joins, triggers, and stored procedures in SQL, coordinating modular tasks via Git under an Agile workflow.',
    image: '/projects/musicstore.png',
    tags: ['PHP', 'SQL', 'Git'],
    year: '2025',
  },
]

export function Projects() {
  return (
    <section id="work" className="border-t border-border/60 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Selected work
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A few projects I&apos;m proud of.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">
          {projects.map((project, i) => (
            <Reveal key={project.title} y={40}>
              <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="overflow-hidden rounded-3xl border border-border/70 bg-secondary shadow-sm"
                  >
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={`${project.title} interface`}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </motion.div>
                </div>

                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{project.year}</span>
                    <span className="h-px w-8 bg-border" />
                    <span>{project.kind}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
