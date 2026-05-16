import { useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection.jsx";
import { products, categories } from "../data/products.js";
import "./Store.css";

const ALL = "All";

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const gridRef = useRef(null);

  const tabs = useMemo(() => [ALL, ...categories], []);

  const filtered = useMemo(() => {
    if (selectedCategory === ALL) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToGrid = useCallback(() => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onSelectCategory = (cat) => {
    setSelectedCategory(cat);
    requestAnimationFrame(() => scrollToGrid());
  };

  return (
    <div className="store">
      <section className="store__intro">
        <div className="store__container">
          <h1 className="store__title">Store</h1>
          <p className="store__lead">
            Filter by category to explore beds, sofas, seating, tables, doors, frames, and counters —
            all crafted for lasting daily use.
          </p>

          <div className="store__tabs" role="tablist" aria-label="Product categories">
            {tabs.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={
                  selectedCategory === cat ? "store__tab store__tab--active" : "store__tab"
                }
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section ref={gridRef} className="store__grid-section" id="store-products">
        <div className="store__container">
          <p className="store__count">
            Showing <strong>{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "product" : "products"}
            {selectedCategory !== ALL ? (
              <>
                {" "}
                in <strong>{selectedCategory}</strong>
              </>
            ) : null}
          </p>
          <div className="store__grid">
            {filtered.map((p) => (
              <RevealSection key={p.id} as="article" className="store__card">
                <div className="store__card-img-wrap">
                  <img src={p.image} alt="" className="store__card-img" />
                </div>
                <div className="store__card-body">
                  <p className="store__card-cat">{p.category}</p>
                  <h2 className="store__card-name">{p.name}</h2>
                  <p className="store__card-desc">{p.description}</p>
                  <Link to="/contact" className="store__enquire">
                    Enquire Now
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
