import { Button } from "@/components/ui/button";
import { ocxScreenshots } from "@/lib/ocx";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Headphones,
  LayoutDashboard,
  PhoneCall,
  RadioTower,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "wouter";

const capabilities = [
  {
    icon: PhoneCall,
    title: "Live Call Control",
    description: "Monitor active calls, coach agents, whisper, barge, and escalate in real time.",
  },
  {
    icon: LayoutDashboard,
    title: "Supervisor Dashboard",
    description: "Track agents, queue status, call volume, answer rates, and SLA pressure instantly.",
  },
  {
    icon: UsersRound,
    title: "Agent Workspace",
    description: "Give agents one focused desktop for calls, campaigns, callbacks, and customer context.",
  },
  {
    icon: RadioTower,
    title: "Wallboard Monitoring",
    description: "Run a live operations wallboard for support floors, management rooms, and NOC-style views.",
  },
  {
    icon: BarChart3,
    title: "Reports & Recordings",
    description: "Review queue performance, recordings, missed calls, wait times, and quality insights.",
  },
  {
    icon: ShieldCheck,
    title: "Omnichannel Operations",
    description: "Support voice, SMS, email, chat, WhatsApp, social, tickets, and CRM workflows.",
  },
];

export default function OCXProductSpotlight() {
  const [primaryScreenshot, ...supportingScreenshots] = ocxScreenshots;

  return (
    <section
      id="ocx"
      className="relative overflow-hidden bg-background py-24 border-y border-border"
      aria-labelledby="ocx-spotlight-heading"
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(74,144,226,0.12),transparent_34%,rgba(250,204,21,0.06)_68%,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Headphones className="h-4 w-4" />
              Featured Product
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Omnichannel CCaaS / Contact Center Solution
              </p>
              <h2
                id="ocx-spotlight-heading"
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                Meet <span className="text-primary">OCX</span> - omnichannel contact
                center software for modern teams
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OCX is Adobe IT Uganda's customer support platform for contact
                centers that need live call control, supervisor visibility, agent
                productivity, wallboard monitoring, queues, recordings, and
                omnichannel service operations in one place.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.slice(0, 4).map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-xl border border-border bg-card/85 p-4"
                  >
                    <div className="flex gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground px-7 font-semibold hover:bg-primary/90"
                  data-testid="button-ocx-demo"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/ocx">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border bg-background/70 px-7 font-semibold hover:bg-secondary"
                  data-testid="button-ocx-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["Live", "call control"],
                ["360", "supervisor view"],
                ["Real-time", "wallboard"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="rounded-2xl border border-primary/25 bg-card shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="flex items-center justify-between border-b border-border bg-secondary/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-accent" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  OCX operations console
                </div>
              </div>
              <img
                src={primaryScreenshot.src}
                alt={primaryScreenshot.alt}
                className="aspect-[1.44] w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {supportingScreenshots.map((screenshot) => (
                <Link key={screenshot.title} href="/ocx">
                  <div className="group rounded-xl border border-border bg-card p-2 transition-all hover:border-primary/60 hover:-translate-y-1">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="aspect-[1.44] w-full rounded-lg object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="px-1 pt-3 pb-1">
                      <p className="text-sm font-semibold group-hover:text-primary">
                        {screenshot.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { capabilities as ocxCapabilities };
