import { useNavigate } from "react-router-dom";
import RevealSection from "../components/RevealSection.jsx";
import hero from "../assets/images/hero.jpg";
import "./Home.css";

const whyCards = [
  {
    title: "Master Craftsmanship",
    text: "Decades of joinery experience with PVC wood systems built to last in Indian climates.",
    icon: "◆",
  },
  {
    title: "Premium Materials",
    text: "Carefully selected finishes in deep teak tones, paired with resilient hardware.",
    icon: "◇",
  },
  {
    title: "Tailored for You",
    text: "From bedrooms to showrooms, we scale designs to your space and budget.",
    icon: "○",
  },
];

const categories = [
  { label: "Beds", sub: "Restful nights, solid frames" },
  { label: "Sofas", sub: "Lounges that welcome family" },
  { label: "Tables", sub: "Dine, work, gather" },
  { label: "Doors", sub: "Secure, beautiful entrances" },
];

const testimonials = [
  {
    quote:
      "Our modular kitchen and dining set transformed the home. Finish and punctuality were excellent.",
    name: "Priya N.",
    role: "Homeowner, Bengaluru",
  },
  {
    quote:
      "Supplied display counters for our boutique. Sturdy, on-brand, and easy to maintain.",
    name: "Arjun M.",
    role: "Retail owner",
  },
  {
    quote:
      "Custom door frames and main door exceeded expectations. Very professional team.",
    name: "Lakshmi R.",
    role: "Architect",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-bg" style={{ backgroundImage: `url(${hero})` }} aria-hidden />
        <div className="home__hero-overlay" />
        <div className="home__hero-content">
          <p className="home__eyebrow">PVC Wood · Furniture · Interiors</p>
          <h1 className="home__hero-title">VENKATESHWARA PVC Wood Works</h1>
          <p className="home__hero-sub">
            Warm, premium furniture and woodwork — from bespoke beds to showroom counters — crafted
            with integrity and care.
          </p>
          <button type="button" className="home__cta" onClick={() => navigate("/store")}>
            Explore the Store
          </button>
        </div>
      </section>

      <section className="home__section home__why">
        <div className="home__container">
          <RevealSection as="div">
            <h2 className="home__section-title">Why choose us</h2>
            <p className="home__section-lead">
              A family-led workshop blending traditional wood sensibility with modern PVC durability.
            </p>
          </RevealSection>
          <div className="home__cards home__cards--3">
            {whyCards.map((card) => (
              <RevealSection key={card.title} as="article" className="home__card home__card--lift">
                <span className="home__card-icon" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="home__card-title">{card.title}</h3>
                <p className="home__card-text">{card.text}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="home__section home__categories">
        <div className="home__container">
          <RevealSection as="div">
            <h2 className="home__section-title">Featured categories</h2>
            <p className="home__section-lead">Tap a category to browse our full catalogue.</p>
          </RevealSection>
          <div className="home__cat-grid">
            {categories.map((cat) => (
              <RevealSection key={cat.label} as="div" className="home__cat-card">
                <button
                  type="button"
                  className="home__cat-btn"
                  onClick={() => navigate("/store")}
                >
                  <span className="home__cat-label">{cat.label}</span>
                  <span className="home__cat-sub">{cat.sub}</span>
                  <span className="home__cat-arrow">View in store →</span>
                </button>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="home__section home__testimonials">
        <div className="home__container">
          <RevealSection as="div">
            <h2 className="home__section-title">What customers say</h2>
          </RevealSection>
          <div className="home__cards home__cards--3">
            {testimonials.map((t) => (
              <RevealSection key={t.name} as="blockquote" className="home__quote home__card--lift">
                <p className="home__quote-text">&ldquo;{t.quote}&rdquo;</p>
                <footer className="home__quote-meta">
                  <cite className="home__quote-name">{t.name}</cite>
                  <span className="home__quote-role">{t.role}</span>
                </footer>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
