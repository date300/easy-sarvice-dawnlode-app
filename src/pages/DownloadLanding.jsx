import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform } from "framer-motion";
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
  
  Wallet,
  Zap,
  ChevronDown,
  Star,
  Menu,
  X,
} from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// ─── Utility ───
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ─── Animation Variants ───
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

// ─── Content ───
const content = {
  bn: {
    badge: "Easy Sarvice App",
    heroEyebrow: "All-in-One Digital Platform",
    heroTitle: "বিনা পুঁজিতে অনলাইন ব্যবসা শুরু করুন",
    heroText:
      "Easy Sarvice আপনার সবকিছু একসাথে দিলো — রিচার্জ, রিসেলিং, মাইক্রোজব, শিক্ষা, AI টুলস আর আরও অনেক কিছু। সহজে শুরু করুন, নিরাপদে আয় করুন।",
    ctaPrimary: "APK ডাউনলোড করুন",
    ctaSecondary: "ভিডিও দেখুন",
    heroPoints: [
      "শূন্য বিনিয়োগে শুরু করুন",
      "একটি অ্যাপে সব সেবা",
      "নিরাপদ পেমেন্ট ও ২৪/৭ সাপোর্ট",
    ],
    stats: [
      { value: "৫০,০০০+", label: "Happy Users" },
      { value: "৪.৮", label: "Average Rating" },
      { value: "১ লাখ+", label: "Downloads" },
    ],
    sideCardTitle: "আমাদের অর্জন ও লক্ষ্য",
    sideCardText: "হাজারো মানুষের আস্থার প্রতীক ইজি সার্ভিস।",
    featuresKicker: "Amazing Features",
    featuresTitle: "Everything you need in one app",
    featuresText:
      "রিচার্জ থেকে শুরু করে রিসেলিং, শিক্ষা, বোনাস, আর AI টুলস — সবকিছু এখন এক জায়গায়।",
    featureCards: [
      { title: "Mobile Recharge", description: "দ্রুত আর নিরাপদে রিচার্জ ও বিল পেমেন্ট করুন।", icon: Smartphone, color: "from-cyan-500 to-blue-500" },
      { title: "Reselling", description: "বিনা মূলধনের সহজ রিসেলিং প্ল্যাটফর্মে আপনার ব্যবসা শুরু করুন।", icon: Store, color: "from-violet-500 to-purple-500" },
      { title: "Microjob", description: "ছোট কাজ করে সহজে আয় করুন।", icon: Wallet, color: "from-amber-500 to-orange-500" },
      { title: "Education", description: "শিখুন, উন্নতি করুন, আর নিজের দক্ষতা বাড়ান।", icon: BadgeCheck, color: "from-emerald-500 to-teal-500" },
      { title: "Bonus & Rewards", description: "বোনাস, প্রমোশন আর রিওয়ার্ডস নিয়ে থাকুন সর্বদা আপডেটেড।", icon: Sparkles, color: "from-cyan-500 to-blue-500" },
      { title: "Easy AI", description: "AI টুলস ব্যবহার করে আপনার কাজকে দ্রুত ও স্মার্ট করুন।", icon: Brain, color: "from-violet-500 to-purple-500" },
    ],
    stepsTitle: "How It Works?",
    stepsText: "তিনটি সহজ ধাপে আজই শুরু করুন।",
    steps: [
      { title: "Download App", text: "APK ডাউনলোড করে অ্যাপটি ইনস্টল করুন।" },
      { title: "Create Account", text: "একটি সহজ একাউন্ট তৈরি করে আপনার প্রোফাইল সেটআপ করুন।" },
      { title: "Start Earning", text: "সেবা ব্যবহার করে আয় শুরু করুন।" },
    ],
    screenshotsKicker: "App Screenshots",
    screenshotsTitle: "A glimpse of Easy Sarvice App",
    screenshots: [
      { title: "Fast launch", text: "দ্রুত লঞ্চ, পরিষ্কার ইউজার এক্সপেরিয়েন্স।", gradient: "from-cyan-500 to-blue-600" },
      { title: "Smart dashboard", text: "আপনার সব কার্যকলাপ একসাথে দেখুন।", gradient: "from-violet-500 to-purple-600" },
      { title: "Secure payments", text: "নিরাপদ লেনদেনের জন্য ডিজাইন করা প্ল্যাটফর্ম।", gradient: "from-amber-500 to-orange-600" },
      { title: "Easy AI", text: "AI টুলস দিয়ে কাজকে স্মার্ট করুন।", gradient: "from-emerald-500 to-teal-600" },
    ],
    whyKicker: "Why Easy Sarvice?",
    whyTitle: "Why Choose Easy Sarvice?",
    whyItems: [
      { title: "Fast Service", description: "দ্রুত কাজ, দ্রুত রেসপন্স, সহজ এক্সপেরিয়েন্স।", icon: Zap, color: "from-cyan-500 to-blue-500" },
      { title: "Secure Payment", description: "নিরাপদে পেমেন্ট, বিশ্বস্ত লেনদেন।", icon: ShieldCheck, color: "from-violet-500 to-purple-500" },
      { title: "Low Fees", description: "কম খরচে সবচেয়ে বেশি সুবিধা পান।", icon: CircleDollarSign, color: "from-amber-500 to-orange-500" },
      { title: "24/7 Support", description: "যেকোনো সমস্যায় সর্বদা সহায়তার জন্য প্রস্তুত।", icon: Headphones, color: "from-emerald-500 to-teal-500" },
    ],
    reviewsKicker: "User Reviews",
    reviewsTitle: "What Our Users Say",
    reviews: [
      { name: "Rasel Ahmed", quote: "এটা ব্যবহার করে আমি খুব সহজে আয় শুরু করেছি।", role: "Reseller" },
      { name: "Sumi Akter", quote: "ইন্টারফেসটি খুব সহজ, আর সব সেবা এক জায়গায়।", role: "Student" },
      { name: "Jahid Hasan", quote: "সাপোর্ট ও পেমেন্ট দুইটাই খুব ভাল।", role: "Freelancer" },
      { name: "Farhan Hossain", quote: "Best app for online earning in Bangladesh. Highly recommended!", role: "Entrepreneur" },
      { name: "Nusrat Jahan", quote: "The AI tools save me hours every day. Amazing platform!", role: "Content Creator" },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      { question: "Easy Sarvice কি?", answer: "Easy Sarvice হলো একটি সব-কিছু-এক-জায়গায় ডিজিটাল প্ল্যাটফর্ম যেখানে রিচার্জ, রিসেলিং, মাইক্রোজব, শিক্ষা ও AI টুলস একসাথে পাওয়া যায়।" },
      { question: "APK কি নিরাপদ?", answer: "হ্যাঁ, আমাদের APK অফিসিয়াল সোর্স থেকে প্রদান করা হয় এবং নিরাপদ ব্যবহার নিশ্চিত করতে নিয়মিত আপডেট করা হয়।" },
      { question: "কিভাবে অ্যাকাউন্ট খুলব?", answer: "অ্যাপটি ইনস্টল করার পর সহজ ফর্ম পূরণ করে একাউন্ট তৈরি করুন।" },
      { question: "কিভাবে অ্যাপ ব্যবহার করব?", answer: "একাউন্ট খুলে আপনার পছন্দের সেবা নির্বাচন করুন এবং প্রয়োজনীয় ধাপগুলো অনুসরণ করুন।" },
      { question: "কোন সমস্যা হলে কোথায় যোগাযোগ করব?", answer: "support@easyservice.app বা আমাদের সাপোর্ট টিমে যোগাযোগ করুন।" },
    ],
    ctaKicker: "Download Section",
    ctaTitle: "Ready to Get Started?",
    ctaText: "এখনই Easy Sarvice App ডাউনলোড করুন এবং সব ফিচার উপভোগ করুন।",
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
    badge: "Easy Sarvice App",
    heroEyebrow: "All-in-One Digital Platform",
    heroTitle: "Start an online business with zero investment",
    heroText:
      "Easy Sarvice brings everything together — recharge, reselling, microjobs, education, AI tools and more. Start simple, grow safely, and earn smarter.",
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
    sideCardTitle: "Our Stats & Growth",
    sideCardText: "Trusted by thousands of users across the country.",
    featuresKicker: "Amazing Features",
    featuresTitle: "Everything you need in one app",
    featuresText:
      "From mobile recharge to reselling, education, rewards, and AI tools — it is all available in a single experience.",
    featureCards: [
      { title: "Mobile Recharge", description: "Recharge quickly and pay bills with confidence.", icon: Smartphone, color: "from-cyan-500 to-blue-500" },
      { title: "Reselling", description: "Launch your own business with a simple zero-investment model.", icon: Store, color: "from-violet-500 to-purple-500" },
      { title: "Microjob", description: "Complete small tasks and earn on your own schedule.", icon: Wallet, color: "from-amber-500 to-orange-500" },
      { title: "Education", description: "Learn new skills and grow with practical guidance.", icon: BadgeCheck, color: "from-emerald-500 to-teal-500" },
      { title: "Bonus & Rewards", description: "Enjoy promotions, bonuses, and reward offers as you grow.", icon: Sparkles, color: "from-cyan-500 to-blue-500" },
      { title: "Easy AI", description: "Use AI tools that simplify business and everyday tasks.", icon: Brain, color: "from-violet-500 to-purple-500" },
    ],
    stepsTitle: "How It Works?",
    stepsText: "Get started in three easy steps.",
    steps: [
      { title: "Download App", text: "Install the APK on your Android device in seconds." },
      { title: "Create Account", text: "Sign up with your details and personalize your profile." },
      { title: "Start Earning", text: "Use the services and begin earning from day one." },
    ],
    screenshotsKicker: "App Screenshots",
    screenshotsTitle: "A glimpse of Easy Sarvice App",
    screenshots: [
      { title: "Fast launch", text: "A smooth, modern layout built for quick access.", gradient: "from-cyan-500 to-blue-600" },
      { title: "Smart dashboard", text: "Manage your activity and services from one place.", gradient: "from-violet-500 to-purple-600" },
      { title: "Secure payments", text: "A reliable flow for safe and trusted transactions.", gradient: "from-amber-500 to-orange-600" },
      { title: "Easy AI", text: "Smart AI assistant for your daily tasks.", gradient: "from-emerald-500 to-teal-600" },
    ],
    whyKicker: "Why Easy Sarvice?",
    whyTitle: "Why Choose Easy Sarvice?",
    whyItems: [
      { title: "Fast Service", description: "Quick actions, instant support, and a seamless app experience.", icon: Zap, color: "from-cyan-500 to-blue-500" },
      { title: "Secure Payment", description: "Trusted transactions that keep your money protected.", icon: ShieldCheck, color: "from-violet-500 to-purple-500" },
      { title: "Low Fees", description: "Enjoy low-cost access to valuable digital services.", icon: CircleDollarSign, color: "from-amber-500 to-orange-500" },
      { title: "24/7 Support", description: "Friendly support whenever you need help.", icon: Headphones, color: "from-emerald-500 to-teal-500" },
    ],
    reviewsKicker: "User Reviews",
    reviewsTitle: "What Our Users Say",
    reviews: [
      { name: "Rasel Ahmed", quote: "I started earning quickly and the app feels incredibly simple to use.", role: "Reseller" },
      { name: "Sumi Akter", quote: "Everything I need is in one place, and the support is excellent.", role: "Student" },
      { name: "Jahid Hasan", quote: "Secure payments and helpful features make this my go-to app.", role: "Freelancer" },
      { name: "Farhan Hossain", quote: "Best app for online earning in Bangladesh. Highly recommended!", role: "Entrepreneur" },
      { name: "Nusrat Jahan", quote: "The AI tools save me hours every day. Amazing platform!", role: "Content Creator" },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      { question: "What is Easy Sarvice?", answer: "Easy Sarvice is a digital platform that brings recharge, reselling, microjobs, education, and AI tools together in one place." },
      { question: "Is the APK safe?", answer: "Yes. We provide the APK from an official source and keep it updated for secure use." },
      { question: "How do I create an account?", answer: "Install the app, fill in the registration form, and verify your account." },
      { question: "How do I use the app?", answer: "Open your account, choose a service, and follow the guided steps." },
      { question: "Where can I contact support?", answer: "You can reach us at support@easyservice.app or through our help center." },
    ],
    ctaKicker: "Download Section",
    ctaTitle: "Ready to Get Started?",
    ctaText: "Download Easy Sarvice App now and enjoy all features from day one.",
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

// ─── Animated Counter ───
function AnimatedCounter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    let current = 0;
    const increment = num / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        current = num;
        clearInterval(timer);
      }
      setDisplay(
        (current % 1 === 0 ? Math.floor(current) : current.toFixed(1)) + suffix
      );
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.06]"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl" />
      <strong className="relative z-10 block text-4xl font-extrabold tracking-tight bg-gradient-to-br from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent md:text-5xl">
        {display}
      </strong>
      <span className="relative z-10 mt-2 block text-sm font-medium text-slate-400">
        {label}
      </span>
    </motion.div>
  );
}

// ─── 3D Tilt Card ───
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("transition-transform duration-200", className)}
    >
      {children}
    </motion.div>
  );
}

// ─── Marquee ───
function Marquee({ children, pauseOnHover = true }) {
  return (
    <div className={cn("group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", pauseOnHover && "hover:[animation-play-state:paused]")}>
      <div className="flex shrink-0 animate-marquee items-center gap-6 group-hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  );
}

// ─── Main Component ───
const appLinks = {
  android: "/app-release.apk",
};

export default function DownloadLanding() {
  const [language, setLanguage] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const copy = content[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    document.title = language === "bn"
      ? "Easy Sarvice - Digital Reselling Platform in Bangladesh"
      : "Easy Sarvice - Digital Reselling Platform in Bangladesh";
  }, [language]);

  return (
    <div className={cn("relative min-h-screen overflow-x-hidden bg-[#121212] text-white", language === "bn" && "font-bangla")}>
      
      {/* iOS-style layered background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(41,182,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10),_transparent_28%),linear-gradient(180deg,_rgba(18,18,18,1)_0%,_rgba(16,16,16,1)_100%)]" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#29B6F6]/10 blur-[80px]" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#7c3aed]/10 blur-[90px]" />
        <div className="absolute left-[25%] top-[35%] h-56 w-56 rounded-full bg-[#f59e0b]/5 blur-[80px]" />
      </div>

      {/* Noise Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px",
        }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled && "border-b border-[#333333]/60 bg-[#121212]/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Menu Toggle */}
            <button
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-3 py-2 text-sm font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white drop-shadow-[0_0_14px_rgba(125,211,252,0.35)]">
              <img
                src="/EasyService.png?v=2"
                alt="Easy Sarvice app logo"
                className="h-8 w-8 rounded-xl object-cover"
              />
              <span>Easy Sarvice</span>
            </div>

            <div className="flex items-center gap-2">
                <a
                  href="https://app.easysarvice.com/login"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-3 py-2 text-[11px] font-semibold text-[#dfeaf6] shadow-[0_8px_18px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  Login
                </a>
                <a
                  href="https://app.easysarvice.com/registration"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] px-3 py-2 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0.10))] sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  Sign Up
                </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-b border-[#333333] bg-[#121212]/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                <div className="rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-4 py-3 text-sm font-medium text-white backdrop-blur-xl">
                  {language === "bn" ? "ভাষা নির্বাচন করুন" : "Choose Language"}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { setLanguage("bn"); setMobileMenuOpen(false); }}
                    className={cn(
                      "rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] px-4 py-3 text-left text-sm font-semibold text-white transition-all backdrop-blur-xl",
                      language === "bn" ? "border-[#29B6F6]/40 bg-[#29B6F6]/10 text-[#29B6F6]" : "text-[#dfeaf6] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))]"
                    )}
                  >
                    বাংলা
                  </button>
                  <button
                    onClick={() => { setLanguage("en"); setMobileMenuOpen(false); }}
                    className={cn(
                      "rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] px-4 py-3 text-left text-sm font-semibold text-white transition-all backdrop-blur-xl",
                      language === "en" ? "border-[#29B6F6]/40 bg-[#29B6F6]/10 text-[#29B6F6]" : "text-[#dfeaf6] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))]"
                    )}
                  >
                    English
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10">
        {/* ─── Hero Section (Separate Mobile + Desktop Layouts) ─── */}
        <section className="relative px-6 pt-28 pb-12">
          {/* Mobile layout */}
          <div className="mx-auto max-w-6xl md:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/8 blur-[70px]" />

              <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-[#dfeaf6]">
                {copy.badge}
                <img src="/crown@2x.avif" alt="Easy Sarvice premium badge" className="h-5 w-5 object-contain" />
              </motion.div>

              <motion.h1 variants={fadeInUp} className="mb-3 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
                {copy.heroTitle}
              </motion.h1>

              <motion.p variants={fadeInUp} className="mb-5 text-sm leading-relaxed text-slate-300">
                {copy.heroText}
              </motion.p>

              <motion.div variants={fadeInUp} className="mb-6 flex flex-col gap-3">
                <a href={appLinks.android} download className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.07))] px-5 py-3 font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                  <img src="/EasyService.png?v=2" alt="Easy Sarvice logo" className="h-8 w-8 rounded-3xl border border-white/[0.12] bg-white/10 p-1 object-cover" />
                  <span className="inline-flex items-center gap-2">
                    <Download size={18} className="text-[#7dd3fc]" />
                    {copy.ctaPrimary}
                  </span>
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative mb-6 flex items-center justify-center gap-2">
                <motion.img
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src="/phonenew.png"
                  alt="Easy Sarvice mobile app preview"
                  className="ios-float w-[68%] max-w-[280px] drop-shadow-[0_30px_40px_rgba(34,211,238,0.20)]"
                />
                <img
                  src="/shield.Cm8PO2pn.avif"
                  alt="Easy Sarvice security badge"
                  className="h-12 w-12 object-contain"
                />
              </motion.div>

              <motion.ul variants={fadeInUp} className="space-y-3">
                {copy.heroPoints.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Desktop layout */}
          <div className="mx-auto hidden max-w-7xl gap-6 md:grid lg:grid-cols-3">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-2 relative overflow-hidden rounded-[48px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-16"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

              <div className="relative z-20 flex flex-col h-full pb-48 sm:pb-0">
                <div className="flex-1">
                  <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                    {copy.badge}
                    <img src="/crown@2x.avif" alt="Easy Sarvice premium badge" className="h-6 w-6 object-contain" />
                  </motion.div>

                  <motion.h1
                    variants={fadeInUp}
                    className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
                  >
                    <span className="bg-gradient-to-br from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                      {copy.heroTitle}
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={fadeInUp}
                    className="mb-8 max-w-md text-lg leading-relaxed text-slate-400"
                  >
                    {copy.heroText}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="mb-12 flex flex-wrap gap-4">
                    <a
                      href={appLinks.android}
                      download
                      className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.07))] px-6 py-3.5 font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.10))]"
                    >
                      <img src="/EasyService.png?v=2" alt="Easy Sarvice logo" className="h-8 w-8 rounded-3xl border border-white/[0.12] bg-white/10 p-1 object-cover shadow-sm shadow-black/20" />
                      <span className="inline-flex items-center gap-2">
                        <Download size={18} className="text-[#7dd3fc]" />
                        {copy.ctaPrimary}
                      </span>
                    </a>
                  </motion.div>
                </div>

                <motion.ul variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                  {copy.heroPoints.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>

              <div className="absolute right-[-15%] bottom-[-5%] w-[75%] sm:w-[65%] md:w-[48%] sm:right-[-8%] sm:bottom-[-8%] pointer-events-none z-10">
                 <motion.img
                   initial={{ y: 150, opacity: 0, rotate: 0 }}
                   animate={{ y: 0, opacity: 1, rotate: -8 }}
                   transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                   whileHover={{ scale: 1.05, rotate: -4 }}
                   src="/phonenew.png"
                   alt="Easy Sarvice mobile app mockup showing the dashboard"
                   className="ios-float w-full drop-shadow-[0_50px_60px_rgba(34,211,238,0.25)]"
                 />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl md:p-10 flex flex-col"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

              <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-[22px] border border-[#fbbf24]/40 bg-[linear-gradient(135deg,rgba(251,191,36,0.28),rgba(251,146,60,0.20))] text-[#f8d77a] shadow-[0_12px_26px_rgba(251,146,60,0.18)] backdrop-blur-xl">
                <img
                  src="/crown@2x.avif"
                  alt="Easy Sarvice premium badge"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h2 className="relative z-10 mb-3 text-2xl font-bold text-white">
                {copy.sideCardTitle}
              </h2>

              <p className="relative z-10 mb-8 text-sm text-slate-400 leading-relaxed">
                {copy.sideCardText}
              </p>

              <img
                src="/shield.Cm8PO2pn.avif"
                alt="Easy Sarvice security badge"
                className="relative z-10 mb-8 h-24 w-24 object-contain"
              />

              <div className="relative z-10 space-y-8 flex-1">
                {copy.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/easyserviceapp"
                target="_blank"
                rel="noreferrer"
                className="group relative z-10 mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[16px] border border-[#60a5fa]/30 bg-[linear-gradient(135deg,rgba(96,165,250,0.20),rgba(96,165,250,0.10))] text-[#7dd3fc] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                    <MessageCircle size={18} />
                  </div>
                  <span className="text-sm font-semibold text-white">Join Telegram</span>
                </div>
                <ArrowRight size={18} className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ─── Features (Bento Grid) ─── */}
        <section id="features" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-16 text-center"
            >
              <motion.span variants={fadeInUp} className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
                {copy.featuresKicker}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold md:text-4xl">
                {copy.featuresTitle}
              </motion.h2>
              <motion.p variants={fadeInUp} className="mx-auto max-w-2xl text-slate-400">
                {copy.featuresText}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {copy.featureCards.map((item, i) => {
                const Icon = item.icon;
                const isLarge = i === 0 || i === 3;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={cn(
                      "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-8 shadow-[0_15px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all hover:border-white/20 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))]",
                      isLarge && "md:col-span-2 lg:col-span-1"
                    )}
                  >
                    <div className={cn("absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity group-hover:opacity-40", item.color)} />
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_18px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                      <Icon size={22} />
                    </div>
                    <h3 className="relative z-10 mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="relative z-10 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── How It Works (Timeline) ─── */}
        <section id="how-it-works" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-16 text-center"
            >
              <motion.span variants={fadeInUp} className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
                {copy.stepsTitle}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold md:text-4xl">
                {copy.stepsTitle}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-400">
                {copy.stepsText}
              </motion.p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-amber-500 md:left-1/2 md:-translate-x-px" />
              <div className="space-y-12">
                {copy.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className={cn(
                      "relative flex items-center gap-8 md:gap-16",
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    <div className="hidden flex-1 text-right md:block">
                      {i % 2 === 0 && (
                        <div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="mt-1 text-slate-400">{step.text}</p>
                        </div>
                      )}
                    </div>
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-cyan-500/30">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="md:hidden">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="mt-1 text-slate-400">{step.text}</p>
                      </div>
                      {i % 2 !== 0 && (
                        <div className="hidden md:block">
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="mt-1 text-slate-400">{step.text}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Why Choose Us ─── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-16 text-center"
            >
              <motion.span variants={fadeInUp} className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
                {copy.whyKicker}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold md:text-4xl">
                {copy.whyTitle}
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.whyItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <TiltCard key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="h-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-8 text-center shadow-[0_15px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all hover:border-white/20 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))]"
                    >
                      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_22px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                        <Icon size={26} />
                      </div>
                      <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Reviews (Marquee) ─── */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-16 text-center"
            >
              <motion.span variants={fadeInUp} className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
                {copy.reviewsKicker}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold md:text-4xl">
                {copy.reviewsTitle}
              </motion.h2>
            </motion.div>
          </div>

          <Marquee>
            {copy.reviews.map((review, i) => (
              <div
                key={i}
                className="w-[360px] shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl"
              >
                <div className="mb-4 flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">"{review.quote}"</p>
                <div>
                  <strong className="block text-sm font-semibold text-white">{review.name}</strong>
                  <span className="text-xs text-slate-500">{review.role}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-16 text-center"
            >
              <motion.span variants={fadeInUp} className="mb-4 inline-block rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-4 py-1.5 text-sm font-semibold text-[#dfeaf6] backdrop-blur-xl">
                Frequently Asked Questions
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold text-white md:text-4xl">
                {copy.faqsTitle}
              </motion.h2>
            </motion.div>

            <div className="flex flex-col gap-3">
              {copy.faqs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div
                    className={cn(
                      "rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] backdrop-blur-xl transition-all duration-300",
                      openFaq === i
                        ? "border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]"
                        : "hover:border-white/20"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-white">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-cyan-400" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Band ─── */}
        <section className="px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))] p-12 text-center shadow-[0_20px_40px_rgba(0,0,0,0.20)] backdrop-blur-2xl md:p-16"
          >
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <span className="relative z-10 mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
              {copy.ctaKicker}
            </span>
            <h2 className="relative z-10 mb-4 text-3xl font-bold md:text-4xl">
              {copy.ctaTitle}
            </h2>
            <p className="relative z-10 mx-auto mb-8 max-w-xl text-slate-400">
              {copy.ctaText}
            </p>

            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <a
                href={appLinks.android}
                download
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.07))] px-6 py-3.5 font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.10))]"
              >
                <img src="/EasyService.png?v=2" alt="Easy Sarvice logo" className="h-8 w-8 rounded-3xl border border-white/[0.12] bg-white/10 p-1 object-cover shadow-sm shadow-black/20" />
                <span className="inline-flex items-center gap-2">
                  <Download size={18} className="text-[#7dd3fc]" />
                  {copy.ctaPrimary}
                </span>
              </a>
              <a
                href="https://t.me/easyserviceapp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition-all hover:bg-white/[0.08] hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                {copy.ctaSecondary}
              </a>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-400">Version 1.2.0</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-400">Size 64.8 MB</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-400">Updated 5 Jul 2026</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-400">Android 13+</span>
            </div>

            <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded-lg border border-[#e2136e]/30 bg-[#e2136e]/10 px-4 py-2 text-xs font-bold text-[#e2136e]">bKash</span>
              <span className="rounded-lg border border-[#f7931e]/30 bg-[#f7931e]/10 px-4 py-2 text-xs font-bold text-[#f7931e]">Nagad</span>
              <span className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold text-purple-400">Rocket</span>
              <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-400">SSL Secure</span>
            </div>
          </motion.div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="border-t border-white/[0.08] px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 text-xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(125,211,252,0.25)]">
                Easy Sarvice
              </h4>
              <p className="text-sm leading-relaxed text-slate-500">
                All-in-One Digital Platform for Bangladesh. Start your online business with zero investment today.
              </p>
            </div>
            <div>
              <h5 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
                {copy.footerLinks[0]?.label === "Home" ? "Important Links" : copy.footerLinks[0]?.label}
              </h5>
              <div className="flex flex-col gap-3">
                {copy.footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">Support</h5>
              <div className="flex flex-col gap-3">
                {copy.supportLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">Contact Us</h5>
              <div className="flex flex-col gap-3">
                {copy.contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                    >
                      <Icon size={16} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl border-t border-white/[0.08] pt-8 text-center text-sm text-slate-600">
            © 2026 Easy Sarvice. All rights reserved. Made with ❤️ in Bangladesh.
          </div>
        </footer>
      </main>

      {/* Tailwind Custom Styles (add to globals.css if needed) */}
      <style jsx global>{`
        @keyframes aurora {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-aurora {
          animation: aurora 20s ease-in-out infinite;
        }
        @keyframes iosFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .ios-float {
          animation: iosFloat 3.2s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .font-bangla {
          font-family: 'Hind Siliguri', 'Noto Sans Bengali', sans-serif;
        }
      `}</style>
    </div>
  );
}