import React from "react";
import {
  Apple,
  BadgeCheck,
  CheckCircle2,
  CircleDollarSign,
  Globe,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

const highlights = [
  "জিরো ইনভেস্টমেন্ট — কোনো টাকা লাগে না",
  "নিজের মার্জিন নিজে সেট করুন",
  "পণ্য ডেলিভারি ও পেমেন্টের সব দুশ্চিন্তা আমরা নেব",
];

const steps = [
  "অ্যাপ ডাউনলোড করুন এবং একাউন্ট খুলুন",
  "পছন্দের পণ্য বাছাই করুন",
  "সোশ্যাল মিডিয়ায় শেয়ার করুন",
  "অর্ডার কনফার্ম করুন এবং লাভ নিন",
];

const stats = [
  { value: "100%", label: "Secure payment" },
  { value: "Verified", label: "Products" },
  { value: "24/7", label: "Support" },
];

function DownloadLanding() {
  return (
    <div className="download-shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      <main className="download-container">
        <section className="hero-card">
          <div className="hero-copy">
            <div className="badge-pill">
              <Sparkles size={16} />
              Easy Service App
            </div>

            <h1>বিনা পুঁজিতে অনলাইন ব্যবসা শুরু করুন - Easy Service অ্যাপের সাথে!</h1>
            <p>
              আপনার স্মার্টফোন ব্যবহার করে হাজার হাজার পাইকারি পণ্য রিসেল করুন এবং নিজের লাভ নিজে সেট করে ঘরে বসে আয় করুন। আজই যোগ দিন বাংলাদেশের সবচেয়ে সহজ রিসেলিং প্ল্যাটফর্মে।
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="/app-release.apk" download role="link">
                <Store size={18} />
                APK ডাউনলোড করুন
              </a>
              <a className="btn btn-secondary" href="/app-release.apk" download role="link">
                <Apple size={18} />
                অ্যাপ ইনস্টল করুন
              </a>
            </div>

            <ul className="feature-list">
              {highlights.map((item) => (
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

        <section className="trust-strip">
          <div className="trust-item">
            <ShieldCheck size={18} />
            <span>100% Secure Payment</span>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={18} />
            <span>Verified Products</span>
          </div>
          <div className="trust-item">
            <Sparkles size={18} />
            <span>Fast & Simple Setup</span>
          </div>
        </section>

        <section className="info-grid" id="download">
          <article className="info-card">
            <div className="icon-box">
              <CircleDollarSign size={20} />
            </div>
            <h3>শুরু করুন বিনা পুঁজিতে</h3>
            <p>কোনো বড় ইনভেস্টমেন্ট ছাড়াই আপনার ফোনে Easy Service অ্যাপ চালিয়ে অনলাইনে রিসেলিং শুরু করুন।</p>
          </article>

          <article className="info-card">
            <div className="icon-box">
              <TrendingUp size={20} />
            </div>
            <h3>আপনার লাভ নিজেই নিয়ন্ত্রণ করুন</h3>
            <p>প্রতিটি পণ্যে আপনার নিজের মার্জিন সেট করুন এবং আপনার আয়ের সুযোগ বাড়িয়ে তুলুন।</p>
          </article>

          <article className="info-card">
            <div className="icon-box">
              <BadgeCheck size={20} />
            </div>
            <h3>বিশ্বস্ত পণ্য ও ফাস্ট ডেলিভারি</h3>
            <p>ভ্যালিডেটেড পণ্য, নিরাপদ পেমেন্ট এবং নির্ভরযোগ্য ডেলিভারি — সবই এক জায়গায়।</p>
          </article>
        </section>

        <section className="steps-card">
          <h3>মাত্র ৪টি সহজ ধাপে আপনার ব্যবসা শুরু হোক</h3>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="step-item" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-band">
          <h3>দেরি কেন? আজই শুরু হোক আপনার উদ্যোক্তা হওয়ার যাত্রা!</h3>
          <div className="cta-row">
            <a className="btn btn-primary" href="/app-release.apk" download>
              <Store size={18} />
              APK ডাউনলোড করুন
            </a>
            <a className="btn btn-secondary" href="/app-release.apk" download>
              <Apple size={18} />
              অ্যাপ ইনস্টল করুন
            </a>
          </div>
        </section>

        <footer className="footer-card">
          <h4>যোগাযোগ ও সাপোর্ট</h4>
          <div className="footer-links">
            <a href="https://www.easysarvice.com" target="_blank" rel="noreferrer">
              <Globe size={16} /> www.easysarvice.com
            </a>
            <a href="mailto:support@easysarvice.com">
              <Mail size={16} /> support@easysarvice.com
            </a>
            <a href="https://facebook.com/easysarvice" target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Facebook Page
            </a>
            <a href="tel:+8801700000000">
              <Users size={16} /> +880 1700-000000
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default DownloadLanding;
