"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
];

const FEATURES = [
  {
    icon: "⚡",
    title: "Early Access Drops",
    description:
      "Waitlist members unlock new creator tools weeks before public launch. Ship faster, iterate earlier, stay ahead.",
  },
  {
    icon: "🔗",
    title: "Creator Network Graph",
    description:
      "Discover creators in your niche through our AI-matched network. Collab requests, referrals, and intros — all in one feed.",
  },
  {
    icon: "📊",
    title: "Audience Insights Dashboard",
    description:
      "See which content resonates before you publish. Heatmaps, engagement forecasts, and follower cohort breakdowns.",
  },
  {
    icon: "🎯",
    title: "Brand Deal Pipeline",
    description:
      "Inbound brand opportunities matched to your niche and rate card. No cold outreach. Deals come to you.",
  },
  {
    icon: "🛠️",
    title: "Creator Toolkit",
    description:
      "Caption generators, hook templates, thumbnail A/B tests, and repurposing workflows — everything in one workspace.",
  },
  {
    icon: "🏆",
    title: "Milestone Rewards",
    description:
      "Unlock perks at every growth stage: free credits, priority support, and featured slots in our creator spotlight.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Join the Waitlist",
    description:
      "Drop your email and tell us your primary platform. Takes 30 seconds. No credit card, no spam.",
  },
  {
    step: "02",
    title: "Get Your Creator Score",
    description:
      "We analyze your public profile to match you with the right cohort, tools, and creator connections immediately.",
  },
  {
    step: "03",
    title: "Move Up the Queue",
    description:
      "Refer other creators to jump the line. Every referral bumps your position and unlocks bonus feature access.",
  },
  {
    step: "04",
    title: "Launch with Your Cohort",
    description:
      "Go live with a tight group of creators in your niche. Built-in accountability, shared milestones, real traction.",
  },
];

const STATS = [
  { value: "14,200+", label: "Creators on waitlist" },
  { value: "47", label: "Niches represented" },
  { value: "3.2×", label: "Avg growth acceleration" },
  { value: "$0", label: "Cost to join" },
];

const TESTIMONIALS = [
  {
    name: "Mia Chen",
    handle: "@miacreates",
    platform: "YouTube • 280K subs",
    quote:
      "Joined the waitlist two weeks ago. Already connected with three YouTube creators in my exact niche. The matching is eerily good.",
    avatar: "MC",
  },
  {
    name: "Jordan Ellis",
    handle: "@jordanellis_",
    platform: "TikTok • 1.1M followers",
    quote:
      "Got early access to the Brand Deal Pipeline feature. Closed my first inbound deal in 48 hours. No pitch deck required.",
    avatar: "JE",
  },
  {
    name: "Priya Natarajan",
    handle: "@priyacodes",
    platform: "Newsletter • 42K subscribers",
    quote:
      "I've tried every creator tool out there. This is the first one that actually cares about the community side of growth, not just vanity metrics.",
    avatar: "PN",
  },
];

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !platform) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 px-8 rounded-2xl bg-accent/10 border border-accent/30 text-center animate-fade-in">
        <div className="text-4xl">🎉</div>
        <p className="text-xl font-semibold text-white">You&apos;re on the list!</p>
        <p className="text-muted text-sm max-w-xs">
          Check your inbox — we&apos;ll send your creator score and queue position within minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-lg"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-xl bg-surface-2 border border-border text-white placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
      />
      <select
        required
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="px-4 py-3 rounded-xl bg-surface-2 border border-border text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm appearance-none cursor-pointer"
      >
        <option value="" disabled>Platform</option>
        <option value="youtube">YouTube</option>
        <option value="tiktok">TikTok</option>
        <option value="instagram">Instagram</option>
        <option value="newsletter">Newsletter</option>
        <option value="podcast">Podcast</option>
        <option value="twitter">X / Twitter</option>
        <option value="twitch">Twitch</option>
        <option value="other">Other</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all duration-200 glow-sm hover:glow disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Joining...
          </span>
        ) : (
          "Join Waitlist →"
        )}
      </button>
    </form>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-bold glow-sm">
            CW
          </div>
          <span className="font-bold text-white text-sm tracking-tight">CreatorWaitlist</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#hero"
          className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-all duration-200 glow-sm"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 grid-bg"
      >
        <div className="absolute inset-0 radial-fade pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
          {/* Badge */}
          <div className="animate-fade-up opacity-0 animation-delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            14,200+ creators already waiting
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up opacity-0 animation-delay-200 text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-balance">
            Stop Building Alone.{" "}
            <span className="gradient-text">Grow With Creators</span> Who Get It.
          </h1>

          <p className="animate-fade-up opacity-0 animation-delay-300 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed text-balance">
            CreatorWaitlist connects you with your exact-niche community, unlocks exclusive
            platform features weeks early, and puts inbound brand deals in your inbox — before
            you even launch.
          </p>

          {/* Form */}
          <div className="animate-fade-up opacity-0 animation-delay-400 w-full flex justify-center">
            <WaitlistForm />
          </div>

          <p className="animate-fade-up opacity-0 animation-delay-500 text-xs text-muted">
            Free forever for early members · No spam · Unsubscribe anytime
          </p>

          {/* Social proof avatars */}
          <div className="animate-fade-up opacity-0 animation-delay-600 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {["M", "J", "P", "A", "K"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted">
              Joined by creators from <span className="text-white font-medium">YouTube, TikTok, Substack</span> and more
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted text-xs animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                <span className="text-3xl sm:text-4xl font-black text-accent">{stat.value}</span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Platform Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Built for creators who{" "}
              <span className="gradient-text">ship, not just dream</span>
            </h2>
            <p className="text-muted text-lg max-w-xl text-balance">
              Every tool in CreatorWaitlist was designed around one question: what does a creator
              actually need to go from stuck to scaling?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-2 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              From signup to <span className="gradient-text">momentum in 4 steps</span>
            </h2>
            <p className="text-muted text-lg max-w-xl text-balance">
              No long onboarding, no setup hell. You&apos;re matched, connected, and moving
              within minutes of joining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.step}
                className="relative flex gap-5 p-6 rounded-2xl border border-border bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-black text-sm">{step.step}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute -bottom-4 left-11 w-px h-4 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section id="community" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Community Voices
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Creators don&apos;t wait. <span className="gradient-text">They lead.</span>
            </h2>
            <p className="text-muted text-lg max-w-xl text-balance">
              Early members are already seeing results. Here&apos;s what they&apos;re saying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.handle}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-muted text-xs">{t.platform}</p>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-accent text-xs font-medium">{t.handle}</p>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["YouTube", "TikTok", "Instagram", "Substack", "Spotify", "Twitch"].map((p) => (
              <span key={p} className="text-white font-semibold text-sm tracking-wide">
                {p}
              </span>
            ))}
          </div>
          <p className="text-center text-muted text-xs mt-3">
            Creators across every major platform
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 radial-fade pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            Spots filling up — 14,200+ already in
          </div>

          <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight text-balance">
            Your community is{" "}
            <span className="gradient-text">already waiting for you</span>
          </h2>

          <p className="text-muted text-lg max-w-xl text-balance">
            Exclusive feature access. Creator network matching. Inbound brand deals.
            All free for early members. Don&apos;t build alone.
          </p>

          <WaitlistForm />

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Free forever for early members
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Unsubscribe anytime
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center text-white text-xs font-bold">
              CW
            </div>
            <span className="font-bold text-white text-sm">CreatorWaitlist</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>

          <p className="text-xs text-muted">
            © {new Date().getFullYear()} CreatorWaitlist. Built for creators.
          </p>
        </div>
      </footer>
    </main>
  );
}
