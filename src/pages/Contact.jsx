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

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setForm(initialForm);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      {/* Intro Section */}
      <section className="contact__intro">
        <div className="contact__container">
          <h1 className="contact__title">Contact</h1>

          <p className="contact__lead">
            Visit us, call, or send a message — we will get back
            with estimates and lead times.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="contact__main">
        <div className="contact__container contact__split">

          {/* Contact Info */}
          <RevealSection as="div" className="contact__info">
            <h2 className="contact__heading">
              Visit & Reach Us
            </h2>

            <address className="contact__address">
              <p>
                <strong>Address</strong>
                <br />
                Thorrur 506163
                <br />
                Mahabubabad, Telangana
              </p>

              <p>
                <strong>Phone</strong>
                <br />
                <a href="tel:+919949453139">
                  +91 9949453139
                </a>
              </p>

              <p>
                <strong>Email</strong>
                <br />
                <a href="mailto:gajjelaakhil39@gmail.com">
                  gajjelaakhil39@gmail.com
                </a>
              </p>

              <p>
                <strong>Working Hours</strong>
                <br />
                Monday – Sunday: 9:00 AM – 7:00 PM
                
              </p>
            </address>
          </RevealSection>

          {/* Contact Form */}
          <RevealSection
            as="div"
            className="contact__form-wrap"
          >
            <h2 className="contact__heading">
              Send an Enquiry
            </h2>

            {submitted && (
              <p className="contact__success" role="status">
                Thank you, {form.name || "friend"}.
                We have received your message and
                will contact you shortly.
              </p>
            )}

            <form
              className="contact__form"
              onSubmit={onSubmit}
            >
              {/* Name */}
              <label className="contact__field">
                <span>Name</span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  autoComplete="name"
                />
              </label>

              {/* Phone */}
              <label className="contact__field">
                <span>Phone</span>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                  autoComplete="tel"
                />
              </label>

              {/* Email */}
              <label className="contact__field">
                <span>Email</span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                />
              </label>

              {/* Product */}
              <label className="contact__field">
                <span>Product / Interest</span>

                <input
                  type="text"
                  name="product"
                  value={form.product}
                  onChange={onChange}
                  placeholder="e.g. PVC wardrobe, TV unit"
                />
              </label>

              {/* Message */}
              <label className="contact__field contact__field--full">
                <span>Message</span>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  required
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="contact__submit"
              >
                Submit Enquiry
              </button>
            </form>
          </RevealSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact__map-section">
        <div className="contact__container">
          <h2 className="contact__map-title">
            Find Us
          </h2>

          <RevealSection
            as="div"
            className="contact__map-placeholder"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <p className="contact__map-hint">
              Thorrur 506163 · Mahabubabad, Telangana
            </p>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}