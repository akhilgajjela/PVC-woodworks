import { useState } from "react";
import RevealSection from "../components/RevealSection.jsx";
import "./Contact.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <section className="contact__intro">
        <div className="contact__container">
          <h1 className="contact__title">Contact</h1>
          <p className="contact__lead">
            Visit us, call, or send a message — we will get back with estimates and lead times.
          </p>
        </div>
      </section>

      <section className="contact__main">
        <div className="contact__container contact__split">
          <RevealSection as="div" className="contact__info">
            <h2 className="contact__heading">Visit & reach us</h2>
            <address className="contact__address">
              <p>
                <strong>Address</strong>
                <br />
                12 Craftsman Street, Industrial Layout
                <br />
                Bengaluru, Karnataka 560001
              </p>
              <p>
                <strong>Phone</strong>
                <br />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href="mailto:hello@venkateshwarawood.in">hello@venkateshwarawood.in</a>
              </p>
              <p>
                <strong>Working hours</strong>
                <br />
                Monday – Saturday: 9:00 AM – 7:00 PM
                <br />
                Sunday: Closed
              </p>
            </address>
          </RevealSection>

          <RevealSection as="div" className="contact__form-wrap">
            <h2 className="contact__heading">Send an enquiry</h2>
            {submitted ? (
              <p className="contact__success" role="status">
                Thank you, {form.name || "friend"}. We have received your message and will contact you
                shortly.
              </p>
            ) : null}
            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <label className="contact__field">
                <span>Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  autoComplete="name"
                />
              </label>
              <label className="contact__field">
                <span>Phone</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </label>
              <label className="contact__field">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                />
              </label>
              <label className="contact__field">
                <span>Product / interest</span>
                <input
                  name="product"
                  value={form.product}
                  onChange={onChange}
                  placeholder="e.g. King bed, shop counter"
                />
              </label>
              <label className="contact__field contact__field--full">
                <span>Message</span>
                <textarea name="message" value={form.message} onChange={onChange} rows={4} />
              </label>
              <button type="submit" className="contact__submit">
                Submit enquiry
              </button>
            </form>
          </RevealSection>
        </div>
      </section>

      <section className="contact__map-section">
        <div className="contact__container">
          <h2 className="contact__map-title">Find us</h2>
          <RevealSection as="div" className="contact__map-placeholder">
            <p>Map area — embed Google Maps or your preferred provider here.</p>
            <p className="contact__map-hint">12 Craftsman Street · Bengaluru</p>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
