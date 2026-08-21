import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
} from 'framer-motion'

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const TRUST = [
  { value: '420+', label: 'seller accounts managed' },
  { value: '₹380 Cr+', label: 'marketplace GMV driven' },
  { value: '4.9/5', label: 'average client rating' },
]

const MARKETPLACES = [
  { name: 'Amazon', mark: 'az', meta: 'Brand & Seller Central' },
  { name: 'Flipkart', mark: 'fk', meta: 'Seller Hub & Ads' },
  { name: 'Meesho', mark: 'ms', meta: 'Supplier Panel' },
  { name: 'Myntra', mark: 'my', meta: 'Partner Portal' },
  { name: 'Ajio', mark: 'aj', meta: 'Vendor Central' },
  { name: 'JioMart', mark: 'jm', meta: 'Seller Console' },
]

const SERVICES = [
  {
    title: 'Account Management',
    copy: 'A dedicated pod runs your seller panels end to end — health metrics, cases, claims, pricing and inventory hygiene.',
    icon: 'grid',
  },
  {
    title: 'Product Listing',
    copy: 'Bulk-accurate listings with compliant attributes, A+ content and variation logic that survives marketplace audits.',
    icon: 'layers',
  },
  {
    title: 'Marketplace SEO',
    copy: 'Keyword architecture built from live search-term data so your ASINs and FSNs rank on the terms that actually convert.',
    icon: 'search',
  },
  {
    title: 'PPC Advertising',
    copy: 'Full-funnel Sponsored Products, Brands and Display campaigns managed to a target ACOS, not to vanity impressions.',
    icon: 'target',
  },
  {
    title: 'Catalog Optimization',
    copy: 'Imagery, titles, bullets and pricing tested continuously to lift conversion on the SKUs that carry your margin.',
    icon: 'sliders',
  },
  {
    title: 'Growth Strategy',
    copy: 'Category expansion, launch calendars and event planning for BBD, GIF and Prime Day mapped to inventory cover.',
    icon: 'trend',
  },
  {
    title: 'Brand Management',
    copy: 'Brand stores, registry protection and MAP enforcement so unauthorised sellers stop eroding your buy box.',
    icon: 'shield',
  },
  {
    title: 'Performance Tracking',
    copy: 'A single reporting layer across every marketplace with weekly reviews on GMV, ACOS, returns and contribution margin.',
    icon: 'chart',
  },
]

const REASONS = [
  {
    title: '11 years in marketplace operations',
    copy: 'We have run categories through every major policy shift, fee revision and algorithm change since 2014.',
  },
  {
    title: 'A dedicated manager, not a ticket queue',
    copy: 'One accountable lead plus a specialist pod for ads, catalog and operations. You always know who owns the number.',
  },
  {
    title: 'Data-driven, decision-first',
    copy: 'Every action traces back to search-term, margin and cohort data — reviewed weekly against a forecast you approve.',
  },
  {
    title: 'Proven, compounding growth',
    copy: 'Median client revenue grows 2.4x within 12 months, with ad spend efficiency improving quarter over quarter.',
  },
]

const STATS = [
  { value: 420, suffix: '+', label: 'Seller accounts managed', sub: 'Across six Indian marketplaces' },
  { value: 2.4, suffix: 'x', decimals: 1, label: 'Median revenue growth', sub: 'Within the first 12 months' },
  { value: 38, suffix: '%', label: 'Average ACOS reduction', sub: 'Within the first two quarters' },
  { value: 96, suffix: '%', label: 'Client retention', sub: 'Rolling 24-month average' },
]

const PROCESS = [
  {
    title: 'Consultation',
    copy: 'A 30-minute audit of your accounts, catalog and ad data. You leave with a gap analysis whether or not we work together.',
    meta: 'Day 1',
  },
  {
    title: 'Planning',
    copy: 'We agree a 90-day roadmap: revenue targets, ACOS ceilings, SKU priorities and the reporting cadence.',
    meta: 'Week 1',
  },
  {
    title: 'Optimization',
    copy: 'Catalog, keyword and campaign work goes live in sprints, with account health and pricing monitored daily.',
    meta: 'Week 2–8',
  },
  {
    title: 'Scaling',
    copy: 'Once unit economics hold, we widen budgets, launch categories and build the event calendar around inventory cover.',
    meta: 'Quarter 2+',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'They rebuilt our entire Amazon catalog in six weeks and fixed suppressed listings we had chased for a year. The weekly review is the most useful meeting on my calendar.',
    name: 'Rhea Malhotra',
    role: 'Founder, Kitchenware D2C brand',
    uplift: '+218%',
    metric: 'GMV in 9 months',
  },
  {
    quote:
      'ACOS dropped from 41% to 22% without losing volume. What stood out is that they brought margin data into ad decisions instead of optimising blind.',
    name: 'Aditya Verma',
    role: 'Ecommerce Head, Apparel group',
    uplift: '-46%',
    metric: 'Ad cost of sale',
  },
  {
    quote:
      'We sell on five marketplaces and finally have one clear view of performance. Onboarding to Meesho and JioMart took days, not months.',
    name: 'Sneha Iyer',
    role: 'Director, Home & Living',
    uplift: '5',
    metric: 'Channels unified',
  },
]

const FAQS = [
  {
    q: 'Which marketplaces do you manage?',
    a: 'Amazon, Flipkart, Meesho, Myntra, Ajio and JioMart as core channels. We also support Nykaa, Tata Cliq and your own D2C storefront when the catalog overlaps.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Catalog and account-health fixes usually show within 2–4 weeks. Meaningful revenue and ACOS movement typically lands in the 60–90 day window, once campaign data has matured.',
  },
  {
    q: 'Do I get a dedicated account manager?',
    a: 'Yes. Every engagement has one named manager who owns your targets, supported by specialists for advertising, catalog and operations. You get their direct line, not a shared inbox.',
  },
  {
    q: 'What does engagement cost?',
    a: 'Retainers are scoped to catalog size, channel count and ad spend, with an optional performance component tied to incremental GMV. You get a fixed quote after the audit — no lock-in beyond the quarter.',
  },
  {
    q: 'Do you work with new sellers?',
    a: 'We do. Launch engagements cover registration, brand registry, category approvals, first listings and the initial 90-day ad ramp.',
  },
  {
    q: 'How do you report performance?',
    a: 'A live dashboard across all channels plus a weekly written review covering GMV, ad efficiency, returns, buy-box share and next-sprint priorities.',
  },
]

const REVENUE_OPTIONS = [
  'Under ₹5 lakh / month',
  '₹5–25 lakh / month',
  '₹25 lakh–1 Cr / month',
  'Over ₹1 Cr / month',
]

const FOOTER_COLUMNS = [
  {
    title: 'Services',
    items: ['Account Management', 'Marketplace SEO', 'PPC Advertising', 'Catalog Optimization'],
  },
  {
    title: 'Marketplaces',
    items: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'JioMart'],
  },
]

/* ------------------------------------------------------------------ *
 * Primitives
 * ------------------------------------------------------------------ */

const Icon = ({ name, size = 18 }) => {
  const paths = {
    grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 4 9-4',
    search: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3',
    target: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 13a1 1 0 100-2 1 1 0 000 2z',
    sliders: 'M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4',
    trend: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    shield: 'M12 3l8 3v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3zM9 12l2 2 4-4',
    chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    check: 'M4 12l5 5L20 6',
    plus: 'M12 5v14M5 12h14',
    star: 'M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 16.8 6.7 19.7l1.1-6.1L3.4 9.4l6-.8L12 3z',
    phone: 'M4 5c0 8.3 6.7 15 15 15v-3.2l-4-1.6-2 2a12.4 12.4 0 01-6.2-6.2l2-2L7.2 5H4z',
    mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
    pin: 'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === 'star' ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
}

const Reveal = ({ children, delay = 0, className, as = 'div', ...rest }) => {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

const Stagger = ({ children, className, id }) => (
  <motion.div
    id={id}
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    variants={{ show: { transition: { staggerChildren: 0.07 } } }}
  >
    {children}
  </motion.div>
)

const StaggerItem = ({ children, className, ...rest }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
)

const SectionHead = ({ eyebrow, title, lede, center }) => (
  <div className={center ? 'head head--center' : 'head'}>
    <Reveal as="span" className="eyebrow">
      {eyebrow}
    </Reveal>
    <Reveal as="h2" delay={0.06}>
      {title}
    </Reveal>
    {lede && (
      <Reveal as="p" className="lede" delay={0.12}>
        {lede}
      </Reveal>
    )}
  </div>
)

const Counter = ({ value, suffix = '', decimals = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = latest.toFixed(decimals) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix, decimals])

  return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>
}

/* ------------------------------------------------------------------ *
 * Sections
 * ------------------------------------------------------------------ */

const Logo = () => (
  <a href="#top" className="logo" aria-label="Northbay Commerce home">
    <span className="logo__mark" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18V6l12 12V6" />
      </svg>
    </span>
    <span>
      Northbay
      <span className="logo__sub">Commerce</span>
    </span>
  </a>
)

const Navbar = () => {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav${stuck ? ' nav--stuck' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="wrap">
        <div className="nav__inner">
          <Logo />
          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav__cta">
            <span className="nav__phone">+91 98100 44120</span>
            <a className="btn btn--primary" href="#contact">
              Book a free audit
              <span className="arrow">
                <Icon name="arrow" size={16} />
              </span>
            </a>
            <button
              className="nav__burger"
              data-open={open}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wrap">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const LeadForm = ({ id, compact }) => {
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({ name: '', email: '', phone: '', revenue: REVENUE_OPTIONS[1] })

  const update = (key) => (event) => setValues((v) => ({ ...v, [key]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-sent">
        <motion.span
          className="form-sent__mark"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <Icon name="check" size={24} />
        </motion.span>
        <h3>Request received</h3>
        <p className="lede" style={{ marginTop: 0, fontSize: 15 }}>
          Thanks {values.name.split(' ')[0] || 'there'} — a marketplace strategist will call you within one
          business day with a first-pass account audit.
        </p>
        <button className="btn btn--ghost" type="button" onClick={() => setSent(false)}>
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate={false}>
      <div className="field">
        <label htmlFor={`${id}-name`}>Full name</label>
        <input id={`${id}-name`} required value={values.name} onChange={update('name')} placeholder="Rhea Malhotra" />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor={`${id}-email`}>Work email</label>
          <input
            id={`${id}-email`}
            type="email"
            required
            value={values.email}
            onChange={update('email')}
            placeholder="you@brand.com"
          />
        </div>
        <div className="field">
          <label htmlFor={`${id}-phone`}>Phone</label>
          <input
            id={`${id}-phone`}
            type="tel"
            required
            value={values.phone}
            onChange={update('phone')}
            placeholder="+91 90000 00000"
          />
        </div>
      </div>
      {!compact && (
        <div className="field">
          <label htmlFor={`${id}-revenue`}>Current monthly marketplace revenue</label>
          <select id={`${id}-revenue`} value={values.revenue} onChange={update('revenue')}>
            {REVENUE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      )}
      <button className="btn btn--primary btn--block" type="submit" style={{ marginTop: 8 }}>
        Get my free account audit
        <span className="arrow">
          <Icon name="arrow" size={16} />
        </span>
      </button>
      <p className="form-note">No obligation. Your data stays with us — we never share seller information.</p>
    </form>
  )
}

const Hero = () => (
  <section className="hero" id="top">
    <div className="wrap">
      <div className="hero__grid">
        <div>
          <motion.span
            className="pill"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <b>New</b> 2026 marketplace fee &amp; ads playbook
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Ecommerce account management that turns{' '}
            <span className="serif">marketplaces</span> into predictable revenue.
          </motion.h1>

          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            We run your Amazon, Flipkart, Meesho, Myntra, Ajio and JioMart accounts end to end — catalog,
            advertising, pricing and operations — with a dedicated manager accountable to your growth and
            margin targets.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <a className="btn btn--primary" href="#contact">
              Book a free account audit
              <span className="arrow">
                <Icon name="arrow" size={16} />
              </span>
            </a>
            <a className="btn btn--ghost" href="#services">
              Explore our services
            </a>
          </motion.div>

          <motion.div
            className="trust"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { delayChildren: 0.35, staggerChildren: 0.1 } } }}
          >
            {TRUST.map((item) => (
              <motion.div
                key={item.label}
                className="trust__item"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="dot" />
                <span>
                  <strong>{item.value}</strong> {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ position: 'relative' }}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="card-form">
            <div className="card-form__top">
              <div>
                <h3>Get a free account audit</h3>
                <p>30 minutes. A senior strategist, not a sales rep.</p>
              </div>
              <span className="badge">2 slots left</span>
            </div>
            <LeadForm id="hero" />
          </div>

          <motion.div
            className="float-card float-card--b"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="spark" aria-hidden="true">
              {[0.45, 0.7, 0.55, 0.9, 1].map((h, i) => (
                <i key={h} style={{ height: `${h * 100}%`, animationDelay: `${i * 0.12}s` }} />
              ))}
            </span>
            <span>
              <small>Buy box share</small>
              <strong>92.4%</strong>
            </span>
          </motion.div>

          <motion.div
            className="float-card float-card--a"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <span className="logo__mark" aria-hidden="true">
              <Icon name="trend" size={16} />
            </span>
            <span>
              <small>Monthly GMV</small>
              <strong>₹1.84 Cr &nbsp;·&nbsp; +37%</strong>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
)

const Marketplaces = () => (
  <section className="section section--soft" style={{ paddingBlock: 72 }}>
    <div className="wrap">
      <Reveal as="p" className="eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>
        Selling where your customers already are
      </Reveal>
    </div>
    <div className="marquee" style={{ marginTop: 34 }}>
      <motion.div
        className="marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        {[...MARKETPLACES, ...MARKETPLACES].map((market, i) => (
          <div className="chip" key={`${market.name}-${i}`}>
            <span className="chip__mark">{market.mark}</span>
            <span>
              <span className="chip__name">{market.name}</span>
              <span className="chip__meta">{market.meta}</span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

const Services = () => (
  <section className="section" id="services">
    <div className="wrap">
      <SectionHead
        eyebrow="Services"
        title="Everything your marketplace business needs, under one accountable team."
        lede="Eight disciplines that usually sit with four different vendors — run by one pod, against one revenue plan."
      />
      <Stagger className="grid grid--4">
        {SERVICES.map((service) => (
          <StaggerItem className="card" key={service.title}>
            <span className="card__icon">
              <Icon name={service.icon} size={20} />
            </span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <span className="card__link">
              Learn more
              <Icon name="arrow" size={14} />
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
)

const WhyUs = () => (
  <section className="section section--soft" id="why">
    <div className="wrap why">
      <div>
        <SectionHead
          eyebrow="Why Northbay"
          title="Operators who have carried a marketplace P&L."
          lede="We are not a reporting layer on top of your accounts. We make the daily calls on price, spend and inventory that decide whether a category makes money."
        />
        <Reveal delay={0.16} style={{ marginTop: 34 }}>
          <a className="btn btn--primary" href="#contact">
            Talk to a strategist
            <span className="arrow">
              <Icon name="arrow" size={16} />
            </span>
          </a>
        </Reveal>
      </div>
      <Stagger className="why__list">
        {REASONS.map((reason, i) => (
          <StaggerItem className="why__item" key={reason.title}>
            <span className="why__num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.copy}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
)

const Stats = () => (
  <section className="section">
    <div className="wrap">
      <SectionHead
        center
        eyebrow="By the numbers"
        title="Performance we are measured on."
        lede="Aggregate results across active client accounts, refreshed each quarter."
      />
      <Stagger className="grid grid--4">
        {STATS.map((stat) => (
          <StaggerItem className="stat" key={stat.label}>
            <div className="stat__value">
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            </div>
            <div className="stat__label">{stat.label}</div>
            <div className="stat__sub">{stat.sub}</div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1} style={{ marginTop: 22 }}>
        <div className="why" style={{ gap: 40, alignItems: 'center' }}>
          <div className="panel">
            <h3>A 90-day plan, priced before we start.</h3>
            <p>
              Every engagement opens with a scoped roadmap and a forecast you sign off on. Here is how a typical
              mid-size apparel account tracked last year.
            </p>
            <div className="panel__rows">
              {[
                { label: 'Revenue vs plan', value: '118%', width: 88 },
                { label: 'ACOS vs target', value: '21.4%', width: 74 },
                { label: 'Listing health score', value: '97/100', width: 97 },
              ].map((row) => (
                <div className="panel__row" key={row.label}>
                  <div>
                    <span>{row.label}</span>
                    <b>{row.value}</b>
                  </div>
                  <span className="bar">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.width}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 26 }}>No lock-in. No black-box reporting.</h3>
            <p className="lede">
              You keep ownership of every account, campaign and asset we build. Contracts run quarter to quarter
              because retention should be earned by results, not by paperwork.
            </p>
            <ul style={{ marginTop: 24, display: 'grid', gap: 12 }}>
              {[
                'Weekly written performance review',
                'Named manager with direct line access',
                'Full access to dashboards and raw exports',
                'Exit handover documentation included',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--charcoal)' }}>
                  <span className="card__icon" style={{ width: 26, height: 26, borderRadius: 8 }}>
                    <Icon name="check" size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

const Process = () => (
  <section className="section section--soft" id="process">
    <div className="wrap">
      <SectionHead
        eyebrow="Process"
        title="Four steps from audit to scale."
        lede="A deliberately boring operating rhythm — because compounding marketplace growth comes from consistency, not stunts."
      />
      <Stagger className="steps">
        {PROCESS.map((step, i) => (
          <StaggerItem className="step" key={step.title}>
            <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
            <div className="step__meta">{step.meta}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="section" id="testimonials">
    <div className="wrap">
      <SectionHead
        eyebrow="Testimonials"
        title="Brands that stopped guessing."
        lede="A few of the teams we work with across apparel, home, beauty and electronics."
      />
      <Stagger className="grid grid--3">
        {TESTIMONIALS.map((item) => (
          <StaggerItem className="quote" key={item.name}>
            <span className="stars" aria-label="5 out of 5">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={15} />
              ))}
            </span>
            <p>“{item.quote}”</p>
            <div className="quote__who">
              <span className="avatar">
                {item.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <span>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </span>
              <span className="quote__uplift">
                <b>{item.uplift}</b>
                {item.metric}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
)

const Faq = () => {
  const [open, setOpen] = useState(0)

  return (
    <section className="section section--soft" id="faq">
      <div className="wrap faq">
        <SectionHead
          eyebrow="FAQ"
          title="Answers before you get on a call."
          lede="Still unsure? Ask us anything in the audit call — it stays consultative either way."
        />
        <Reveal className="faq__list" delay={0.08}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div className="faq__item" key={faq.q} data-open={isOpen}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <span className="faq__icon">
                    <Icon name="plus" size={15} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

const ContactCta = () => (
  <section className="section" id="contact">
    <div className="wrap">
      <Reveal className="cta">
        <div className="cta__grid">
          <div>
            <span className="eyebrow">Free account audit</span>
            <h2>Find out what your marketplace accounts are leaving on the table.</h2>
            <p>
              Send us your details and a senior strategist will review your listings, ad spend and account health,
              then walk you through the three fastest revenue levers on a 30-minute call.
            </p>
            <ul className="cta__points">
              {[
                'Catalog and listing-health gap analysis',
                'Ad wastage and ACOS opportunity sizing',
                '90-day growth roadmap with revenue forecast',
              ].map((point) => (
                <li key={point}>
                  <span className="check">
                    <Icon name="check" size={12} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              <a className="btn btn--light" href="tel:+919810044120">
                <Icon name="phone" size={16} />
                +91 98100 44120
              </a>
              <a className="btn btn--outline-light" href="mailto:growth@northbaycommerce.com">
                <Icon name="mail" size={16} />
                growth@northbaycommerce.com
              </a>
            </div>
          </div>
          <div className="cta__box">
            <div className="card-form__top">
              <div>
                <h3>Request your audit</h3>
                <p>We reply within one business day.</p>
              </div>
              <span className="badge">Free</span>
            </div>
            <LeadForm id="cta" />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer__grid">
        <div>
          <Logo />
          <p>
            A marketplace account management team for Indian D2C and enterprise brands. Catalog, advertising and
            operations run as one accountable function.
          </p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.items.map((item) => (
                <li key={item}>
                  <a href="#services">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+919810044120">+91 98100 44120</a>
            </li>
            <li>
              <a href="mailto:growth@northbaycommerce.com">growth@northbaycommerce.com</a>
            </li>
            <li>
              <span>4th Floor, Ambience Tower, Sector 44, Gurugram 122003</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Northbay Commerce Pvt. Ltd. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service · GST 06AABCN1234M1Z5</span>
      </div>
    </div>
  </footer>
)

/* ------------------------------------------------------------------ *
 * App
 * ------------------------------------------------------------------ */

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 })

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Navbar />
      <main>
        <Hero />
        <Marketplaces />
        <Services />
        <WhyUs />
        <Stats />
        <Process />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
