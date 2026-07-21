import Navigation from "@/components/navigation";
import { ocxCapabilities } from "@/components/ocx-product-spotlight";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Headphones,
  MessagesSquare,
  PhoneCall,
  RadioTower,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "wouter";
import {
  ocxKeywords,
  ocxProductSchema,
  ocxScreenshots,
  ocxSoftwareApplicationSchema,
} from "@/lib/ocx";

const operations = [
  "Inbound and outbound calling",
  "Queue monitoring and routing visibility",
  "Supervisor coaching controls",
  "Agent status and campaign login",
  "Call recordings and quality review",
  "Reports for service levels and missed calls",
  "Omnichannel inbox workflows",
  "CRM, tickets, and customer context",
];

const outcomes = [
  {
    icon: PhoneCall,
    title: "Control the floor in real time",
    description:
      "Supervisors can see live calls, queue pressure, ringing activity, agent availability, and customer wait times before service levels drift.",
  },
  {
    icon: UsersRound,
    title: "Keep agents focused",
    description:
      "Agents work from a single desktop for calling, campaign activity, assigned queues, recent calls, voicemail, and follow-up tasks.",
  },
  {
    icon: RadioTower,
    title: "Make operations visible",
    description:
      "Wallboards give leadership and floor managers a shared, real-time view of answer rates, abandoned calls, open tickets, and agent state.",
  },
  {
    icon: BarChart3,
    title: "Improve with evidence",
    description:
      "Recordings, reports, queue data, and quality workflows help teams review performance and coach service teams with context.",
  },
];

export default function OCXPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [primaryScreenshot, ...galleryScreenshots] = ocxScreenshots;

  return (
    <>
      <SEOHead
        title="OCX Contact Center Software Uganda | Omnichannel CCaaS by Adobe Technologies"
        description="OCX is Adobe Technologies' omnichannel CCaaS and contact center software for live call control, supervisor dashboards, agent workspaces, wallboards, queues, recordings, reports, and customer support operations."
        keywords={ocxKeywords}
        image="https://adobeitechug.com/supervisor-dashboard.png"
        url="https://adobeitechug.com/ocx"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(ocxSoftwareApplicationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(ocxProductSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main>
          <section className="relative overflow-hidden pt-32 pb-20 bg-secondary border-b border-border">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(74,144,226,0.16),transparent_36%,rgba(250,204,21,0.08)_70%,transparent)]" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 items-center">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    <Headphones className="h-4 w-4" />
                    Adobe Technologies Product
                  </div>

                  <div className="space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      OCX Omnichannel CCaaS
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      Contact center software built for live service teams
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                      OCX, also searched as OCXX, is Adobe Technologies' modern
                      customer support platform for teams that need live call
                      control, supervisor dashboards, agent workspaces,
                      wallboards, reporting, recordings, queues, and omnichannel
                      operations.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-primary text-primary-foreground px-7 font-semibold hover:bg-primary/90"
                        data-testid="button-ocx-page-demo"
                      >
                        Book a Demo
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-border bg-background/70 px-7 font-semibold hover:bg-background"
                        data-testid="button-ocx-page-talk"
                      >
                        Talk to Us
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {[
                      ["Voice", "plus digital channels"],
                      ["Live", "supervisor controls"],
                      ["Real-time", "reports and wallboard"],
                    ].map(([value, label]) => (
                      <div key={label}>
                        <p className="text-2xl font-bold">{value}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="rounded-2xl border border-primary/25 bg-card shadow-2xl shadow-primary/10 overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-accent" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {primaryScreenshot.title}
                    </span>
                  </div>
                  <img
                    src={primaryScreenshot.src}
                    alt={primaryScreenshot.alt}
                    className="aspect-[1.44] w-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-4">
                    Built for contact center work
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold mb-5">
                    One platform for calls, teams, queues, and customer support
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    OCX gives supervisors and agents the operational tools needed
                    to run a serious service desk or call center without stitching
                    together disconnected dashboards.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {ocxCapabilities.map((capability) => {
                    const Icon = capability.icon;

                    return (
                      <div
                        key={capability.title}
                        className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
                      >
                        <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-secondary border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-4">
                  Product views
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mb-5">
                  Screens for every contact center role
                </h2>
                <p className="text-lg text-muted-foreground">
                  From the agent desktop to the supervisor console and wallboard,
                  OCX keeps customer service operations visible and measurable.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-5">
                {galleryScreenshots.map((screenshot) => (
                  <div
                    key={screenshot.title}
                    className="rounded-xl border border-border bg-card overflow-hidden"
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="aspect-[1.44] w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{screenshot.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-4">
                    Operational coverage
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold mb-5">
                    Designed for support, sales, service desks, and enterprise communications
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    OCX is positioned for customer support teams and contact
                    centers in Uganda and beyond that need stronger call center
                    visibility, faster intervention, and channel coverage across
                    daily service workflows.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {operations.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-secondary border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {outcomes.map((outcome) => {
                  const Icon = outcome.icon;

                  return (
                    <div
                      key={outcome.title}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{outcome.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-primary/25 bg-card p-8 md:p-12 text-center shadow-2xl shadow-primary/10">
                <div className="mx-auto mb-6 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessagesSquare className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-5">
                  See how OCX fits your contact center
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Book a focused demo with Adobe Technologies to review supervisor
                  workflows, agent operations, reporting needs, queues, recordings,
                  and the channels your team supports.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground px-8 font-semibold hover:bg-primary/90"
                    data-testid="button-ocx-final-demo"
                  >
                    Request an OCX Demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
