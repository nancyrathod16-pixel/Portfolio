function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        <div className="contact-card">
          <h3>Email</h3>
          <p>
            <a href="mailto:nancyrathod16@gmail.com">
              nancyrathod16@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>
            <a href="tel:9898103327">
              +91 9898103327
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/nancyrathod16-pixel"
              target="_blank"
              rel="noreferrer"
            >
              github.com/nancyrathod16-pixel
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;