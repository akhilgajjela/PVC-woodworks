import RevealSection from "../components/RevealSection.jsx";
import owner from "../assets/images/owner.jpg";
import "./About.css";

const milestones = [
  { year: "2008", title: "Workshop founded", text: "Started as a local carpentry unit focusing on teak and PVC wood hybrids." },
  { year: "2013", title: "PVC specialization", text: "Invested in modern edge-banding and modular systems for homes." },
  { year: "2018", title: "Retail & custom", text: "Expanded to full home packages — beds, sofas, kitchens, and doors." },
  { year: "2024", title: "Regional trust", text: "Serving families and businesses across Karnataka with consistent quality." },
];

const values = [
  {
    title: "Integrity",
    text: "Transparent quotes, honest timelines, and materials you can verify — no shortcuts.",
  },
  {
    title: "Quality",
    text: "Hardware, finishes, and joinery tested for daily wear in real Indian homes and shops.",
  },
  {
    title: "Customer First",
    text: "We listen first — your space, budget, and style drive every recommendation we make.",
  },
];

export default function About() {
  return (
    <div className="about">
      <section className="about__hero">
        <div className="about__container">
          <h1 className="about__page-title">Our story</h1>
          <p className="about__page-lead">
            VENKATESHWARA PVC Wood Works grew from a single bench to a trusted name in furniture and
            interior woodwork.
          </p>
        </div>
      </section>

      <section className="about__story">
        <div className="about__container about__story-grid">
          <RevealSection as="div" className="about__story-img-wrap">
            <img src={owner} alt="Craftsperson at work in the wood workshop" className="about__story-img" />
          </RevealSection>
          <RevealSection as="div" className="about__story-text">
            <h2>Rooted in craftsmanship</h2>
            <p>
              We combine the warmth of traditional wood aesthetics with the practicality of PVC and
              engineered solutions — ideal for humidity, busy households, and commercial traffic.
            </p>
            <p>
              Every piece — whether a storage bed or a reception counter — is planned with site
              realities in mind: clearance, wiring, movement, and long-term upkeep.
            </p>
            <p>
              Visit our workshop, feel the materials, and meet the team behind your furniture. We
              believe trust is built plank by plank.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="about__timeline-section">
        <div className="about__container">
          <RevealSection as="div">
            <h2 className="about__section-title">Milestones</h2>
          </RevealSection>
          <ol className="about__timeline">
            {milestones.map((m) => (
              <RevealSection key={m.year} as="li" className="about__timeline-item">
                <span className="about__timeline-year">{m.year}</span>
                <div className="about__timeline-body">
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </RevealSection>
            ))}
          </ol>
        </div>
      </section>

      <section className="about__values">
        <div className="about__container">
          <RevealSection as="div">
            <h2 className="about__section-title">Our values</h2>
          </RevealSection>
          <div className="about__values-grid">
            {values.map((v) => (
              <RevealSection key={v.title} as="article" className="about__value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
