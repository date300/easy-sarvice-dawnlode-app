import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle2,
  CircleDollarSign,
  Download,
  Globe,
  Headphones,
  Mail,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

const content = {
  bn: {
    badge: "Easy Service App",
    heroEyebrow: "All-in-One Digital Platform",
    heroTitle: "বিনা পুঁজিতে অনলাইন ব্যবসা শুরু করুন",
    heroText:
      "Easy Service আপনার সবকিছু একসাথে দিলো — রিচার্জ, রিসেলিং, মাইক্রোজব, শিক্ষা, AI টুলস আর আরও অনেক কিছু। সহজে শুরু করুন, নিরাপদে আয় করুন।",
    ctaPrimary: "APK ডাউনলোড করুন",
    ctaSecondary: "ভিডিও দেখুন",
    heroPoints: [
      "শূন্য বিনিয়োগে শুরু করুন",
      "একটি অ্যাপে সব সেবা",
      "নিরাপদ পেমেন্ট ও ২৪/৭ সাপোর্ট",
    ],
    stats: [
      { value: "50,000+", label: "Happy Users" },
      { value: "4.8", label: "Average Rating" },
      { value: "100K+", label: "Downloads" },
    ],
    featuresKicker: "Amazing Features",
    featuresTitle: "Everything you need in one app",
    featuresText:
      "রিচার্জ থেকে শুরু করে রিসেলিং, শিক্ষা, বোনাস, আর AI টুলস — সবকিছু এখন এক জায়গায়।",
    featureCards: [
      { title: "Mobile Recharge", description: "দ্রুত আর নিরাপদে রিচার্জ ও বিল পেমেন্ট করুন।", icon: Smartphone },
      { title: "Reselling", description: "বিনা মূলধনের সহজ রিসেলিং প্ল্যাটফর্মে আপনার ব্যবসা শুরু করুন।", icon: Store },
      { title: "Microjob", description: "ছোট কাজ করে সহজে আয় করুন।", icon: Wallet },
      { title: "Education", description: "শিখুন, উন্নতি করুন, আর নিজের দক্ষতা বাড়ান।", icon: BadgeCheck },
      { title: "Bonus & Rewards", description: "বোনাস, প্রমোশন আর রিওয়ার্ডস নিয়ে থাকুন সর্বদা আপডেটেড।", icon: Sparkles },
      { title: "Easy AI", description: "AI টুলস ব্যবহার করে আপনার কাজকে দ্রুত ও স্মার্ট করুন।", icon: Brain },
    ],
    stepsTitle: "How It Works?",
    stepsText: "তিনটি সহজ ধাপে আজই শুরু করুন।",
    steps: [
      { title: "Download App", text: "APK ডাউনলোড করে অ্যাপটি ইনস্টল করুন।" },
      { title: "Create Account", text: "একটি সহজ একাউন্ট তৈরি করে আপনার প্রোফাইল সেটআপ করুন।" },
      { title: "Start Earning", text: "সেবা ব্যবহার করে আয় শুরু করুন।" },
    ],
    screenshotsKicker: "App Screenshots",
    screenshotsTitle: "A glimpse of Easy Service App",
    screenshots: [
      { title: "Fast launch", text: "দ্রুত লঞ্চ, পরিষ্কার ইউজার এক্সপেরিয়েন্স।" },
      { title: "Smart dashboard", text: "আপনার সব কার্যকলাপ একসাথে দেখুন।" },
      { title: "Secure payments", text: "নিরাপদ লেনদেনের জন্য ডিজাইন করা প্ল্যাটফর্ম।" },
    ],
    whyKicker: "Why Easy Service?",
    whyTitle: "Why Choose Easy Service?",
    whyItems: [
      { title: "Fast Service", description: "দ্রুত কাজ, দ্রুত রেসপন্স, সহজ এক্সপেরিয়েন্স।", icon: Zap },
      { title: "Secure Payment", description: "নিরাপদে পেমেন্ট, বিশ্বস্ত লেনদেন।", icon: ShieldCheck },
      { title: "Low Fees", description: "কম খরচে সবচেয়ে বেশি সুবিধা পান।", icon: CircleDollarSign },
      { title: "24/7 Support", description: "যেকোনো সমস্যায় সর্বদা সহায়তার জন্য প্রস্তুত।", icon: Headphones },
    ],
    reviewsKicker: "User Reviews",
    reviewsTitle: "What Our Users Say",
    reviews: [
      { name: "Rasel Ahmed", quote: "এটা ব্যবহার করে আমি খুব সহজে আয় শুরু করেছি।" },
      { name: "Sumi Akter", quote: "ইন্টারফেসটি খুব সহজ, আর সব সেবা এক জায়গায়।" },
      { name: "Jahid Hasan", quote: "সাপোর্ট ও পেমেন্ট দুইটাই খুব ভাল।" },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      { question: "Easy Service কি?", answer: "Easy Service হলো একটি সব-কিছু-এক-জায়গায় ডিজিটাল প্ল্যাটফর্ম যেখানে রিচার্জ, রিসেলিং, মাইক্রোজব, শিক্ষা ও AI টুলস একসাথে পাওয়া যায়।" },
      { question: "APK কি নিরাপদ?", answer: "হ্যাঁ, আমাদের APK অফিসিয়াল সোর্স থেকে প্রদান করা হয় এবং নিরাপদ ব্যবহার নিশ্চিত করতে নিয়মিত আপডেট করা হয়।" },
      { question: "কিভাবে অ্যাকাউন্ট খুলব?", answer: "অ্যাপটি ইনস্টল করার পর সহজ ফর্ম পূরণ করে একাউন্ট তৈরি করুন।" },
      { question: "কিভাবে অ্যাপ ব্যবহার করব?", answer: "একাউন্ট খুলে আপনার পছন্দের সেবা নির্বাচন করুন এবং প্রয়োজনীয় ধাপগুলো অনুসরণ করুন।" },
      { question: "কোন সমস্যা হলে কোথায় যোগাযোগ করব?", answer: "support@easyservice.app বা আমাদের সাপোর্ট টিমে যোগাযোগ করুন।" },
    ],
    ctaKicker: "Download Section",
    ctaTitle: "Ready to Get Started?",
    ctaText: "এখনই Easy Service App ডাউনলোড করুন এবং সব ফিচার উপভোগ করুন।",
    footerTitle: "Stay connected",
    footerLinks: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#features" },
      { label: "Services", href: "#features" },
      { label: "Contact Us", href: "mailto:support@easyservice.app" },
      { label: "Blog", href: "#" },
    ],
    supportLinks: [
      { label: "Help Center", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
    contactItems: [
      { label: "support@easyservice.app", href: "mailto:support@easyservice.app", icon: Mail },
      { label: "+880 1234-567890", href: "tel:+8801234567890", icon: MessageCircle },
      { label: "Dhaka, Bangladesh", href: "#", icon: Globe },
    ],
  },
  en: {
    badge: "Easy Service App",
    heroEyebrow: "All-in-One Digital Platform",
    heroTitle: "Start an online business with zero investment",
    heroText:
      "Easy Service brings everything together — recharge, reselling, microjobs, education, AI tools and more. Start simple, grow safely, and earn smarter.",
    ctaPrimary: "Download APK",
    ctaSecondary: "Watch Video",
    heroPoints: [
      "Start with zero investment",
      "One app for all services",
      "Secure payments and 24/7 support",
    ],
    stats: [
      { value: "50,000+", label: "Happy Users" },
      { value: "4.8", label: "Average Rating" },
      { value: "100K+", label: "Downloads" },
    ],
    featuresKicker: "Amazing Features",
    featuresTitle: "Everything you need in one app",
    featuresText:
      "From mobile recharge to reselling, education, rewards, and AI tools — it is all available in a single experience.",
    featureCards: [
      { title: "Mobile Recharge", description: "Recharge quickly and pay bills with confidence.", icon: Smartphone },
      { title: "Reselling", description: "Launch your own business with a simple zero-investment model.", icon: Store },
      { title: "Microjob", description: "Complete small tasks and earn on your own schedule.", icon: Wallet },
      { title: "Education", description: "Learn new skills and grow with practical guidance.", icon: BadgeCheck },
      { title: "Bonus & Rewards", description: "Enjoy promotions, bonuses, and reward offers as you grow.", icon: Sparkles },
      { title: "Easy AI", description: "Use AI tools that simplify business and everyday tasks.", icon: Brain },
    ],
    stepsTitle: "How It Works?",
    stepsText: "Get started in three easy steps.",
    steps: [
      { title: "Download App", text: "Install the APK on your Android device in seconds." },
      { title: "Create Account", text: "Sign up with your details and personalize your profile." },
      { title: "Start Earning", text: "Use the services and begin earning from day one." },
    ],
    screenshotsKicker: "App Screenshots",
    screenshotsTitle: "A glimpse of Easy Service App",
    screenshots: [
      { title: "Fast launch", text: "A smooth, modern layout built for quick access." },
      { title: "Smart dashboard", text: "Manage your activity and services from one place." },
      { title: "Secure payments", text: "A reliable flow for safe and trusted transactions." },
    ],
    whyKicker: "Why Easy Service?",
    whyTitle: "Why Choose Easy Service?",
    whyItems: [
      { title: "Fast Service", description: "Quick actions, instant support, and a seamless app experience.", icon: Zap },
      { title: "Secure Payment", description: "Trusted transactions that keep your money protected.", icon: ShieldCheck },
      { title: "Low Fees", description: "Enjoy low-cost access to valuable digital services.", icon: CircleDollarSign },
      { title: "24/7 Support", description: "Friendly support whenever you need help.", icon: Headphones },
    ],
    reviewsKicker: "User Reviews",
    reviewsTitle: "What Our Users Say",
    reviews: [
      { name: "Rasel Ahmed", quote: "I started earning quickly and the app feels incredibly simple to use." },
      { name: "Sumi Akter", quote: "Everything I need is in one place, and the support is excellent." },
      { name: "Jahid Hasan", quote: "Secure payments and helpful features make this my go-to app." },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      { question: "What is Easy Service?", answer: "Easy Service is a digital platform that brings recharge, reselling, microjobs, education, and AI tools together in one place." },
      { question: "Is the APK safe?", answer: "Yes. We provide the APK from an official source and keep it updated for secure use." },
      { question: "How do I create an account?", answer: "Install the app, fill in the registration form, and verify your account." },
      { question: "How do I use the app?", answer: "Open your account, choose a service, and follow the guided steps." },
      { question: "Where can I contact support?", answer: "You can reach us at support@easyservice.app or through our help center." },
    ],
    ctaKicker: "Download Section",
    ctaTitle: "Ready to Get Started?",
    ctaText: "Download Easy Service App now and enjoy all features from day one.",
    footerTitle: "Stay connected",
    footerLinks: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#features" },
      { label: "Services", href: "#features" },
      { label: "Contact Us", href: "mailto:support@easyservice.app" },
      { label: "Blog", href: "#" },
    ],
    supportLinks: [
      { label: "Help Center", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
    contactItems: [
      { label: "support@easyservice.app", href: "mailto:support@easyservice.app", icon: Mail },
      { label: "+880 1234-567890", href: "tel:+8801234567890", icon: MessageCircle },
      { label: "Dhaka, Bangladesh", href: "#", icon: Globe },
    ],
  },
};

function DownloadLanding() {
  const [language, setLanguage] = useState("bn");
  const copy = useMemo(() => content[language], [language]);

  return (
    <div className="download-shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      <main className="download-container">
        <div className="lang-switcher" role="group" aria-label="Select language">
          <button
            type="button"
            className={language === "bn" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLanguage("bn")}
            aria-pressed={language === "bn"}
          >
            বাংলা
          </button>
          <button
            type="button"
            className={language === "en" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            English
          </button>
        </div>

        <section className="hero-card">
          <div className="hero-copy">
            <div className="badge-pill">
              <Sparkles size={16} />
              {copy.badge}
            </div>
            <p className="hero-eyebrow">{copy.heroEyebrow}</p>
            <h1>{copy.heroTitle}</h1>
            <p>{copy.heroText}</p>

            <div className="cta-row">
              <a className="btn btn-primary" href="/app-release.apk" download role="link">
                <Download size={18} />
                {copy.ctaPrimary}
              </a>
              <a className="btn btn-secondary" href="#watch-video" role="link">
                <PlayCircle size={18} />
                {copy.ctaSecondary}
              </a>
            </div>

            <ul className="feature-list">
              {copy.heroPoints.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-image-card">
              <img src="/phone.png" alt="Easy Service app preview" className="hero-image" />
            </div>
          </div>
        </section>

        <section className="stats-grid" aria-label="Quick stats">
          {copy.stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section-card" id="features">
          <div className="section-heading">
            <p className="section-kicker">{copy.featuresKicker}</p>
            <h2>{copy.featuresTitle}</h2>
            <p>{copy.featuresText}</p>
          </div>

          <div className="feature-grid">
            {copy.featureCards.map((item) => {
              const Icon = item.icon;
              return (
                <article className="feature-card" key={item.title}>
                  <div className="icon-box">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-card" id="how-it-works">
          <div className="section-heading">
            <p className="section-kicker">{copy.stepsTitle}</p>
            <h2>{copy.stepsTitle}</h2>
            <p>{copy.stepsText}</p>
          </div>

          <div className="steps-grid">
            {copy.steps.map((step, index) => (
              <div className="step-item" key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card" id="watch-video">
          <div className="section-heading">
            <p className="section-kicker">{copy.screenshotsKicker}</p>
            <h2>{copy.screenshotsTitle}</h2>
          </div>

          <div className="screenshots-grid">
            {copy.screenshots.map((item) => (
              <article className="screenshot-card" key={item.title}>
                <img src="/phone.png" alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card">
          <div className="section-heading">
            <p className="section-kicker">{copy.whyKicker}</p>
            <h2>{copy.whyTitle}</h2>
          </div>

          <div className="why-grid">
            {copy.whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="benefit-card" key={item.title}>
                  <div className="icon-box">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-card">
          <div className="section-heading">
            <p className="section-kicker">{copy.reviewsKicker}</p>
            <h2>{copy.reviewsTitle}</h2>
          </div>

          <div className="review-grid">
            {copy.reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars" aria-hidden="true">
                  ★ ★ ★ ★ ★
                </div>
                <p>“{review.quote}”</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card" id="faq">
          <div className="section-heading">
            <p className="section-kicker">{copy.faqsTitle}</p>
            <h2>{copy.faqsTitle}</h2>
          </div>

          <div className="faq-list">
            {copy.faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-band">
          <div className="cta-band-copy">
            <p className="section-kicker">{copy.ctaKicker}</p>
            <h3>{copy.ctaTitle}</h3>
            <p>{copy.ctaText}</p>
          </div>

          <div className="cta-row justify-center">
            <a className="btn btn-primary" href="/app-release.apk" download>
              <Download size={18} />
              {copy.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="https://t.me/easyserviceapp" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {copy.ctaSecondary}
            </a>
          </div>

          <div className="app-meta">
            <span>Version 1.2.0</span>
            <span>Size 64.8 MB</span>
            <span>Updated 5 Jul 2026</span>
            <span>Android 13+</span>
          </div>
        </section>

        <footer className="footer-card">
          <div className="footer-grid">
            <div>
              <h4>{copy.footerTitle}</h4>
              <p>Easy Service</p>
            </div>
            <div>
              <h5>Important Links</h5>
              <div className="footer-links">
                {copy.footerLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5>Support</h5>
              <div className="footer-links">
                {copy.supportLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5>Contact Us</h5>
              <div className="footer-links contact-links">
                {copy.contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                      <Icon size={16} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default DownloadLanding;
