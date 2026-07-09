'use client'

import { Mail, Globe, ExternalLink, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const socials = [
  { label: 'Email', value: 'hello@parisrichards.dev', href: 'mailto:hello@parisrichards.dev', icon: Mail },
  { label: 'GitHub', value: 'github.com/parisrichards', href: '#', icon: Globe },
  { label: 'LinkedIn', value: 'in/parisrichards', href: '#', icon: ExternalLink },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Let&apos;s build something great together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Whether you have a role in mind or just want to talk shop, my inbox is always open.
            I&apos;ll get back to you as soon as I can.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="mailto:hello@parisrichards.dev"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            Say hello
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-secondary"
              >
                <social.icon className="size-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">{social.label}</div>
                  <div className="mt-0.5 text-[15px] font-medium">{social.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Paris Richards. All rights reserved.</p>
          <p>Designed & built with care.</p>
        </footer>
      </div>
    </section>
  )
}
