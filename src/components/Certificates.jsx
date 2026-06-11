function Certificates() {
  return (
    <section id="certificates">
      <h2 className="section-title">Certifications</h2>

      <div className="certificate-grid">

        <div className="certificate-card">
          <h3>Digital Marketing Certification</h3>

          <p>
            Certified in Digital Marketing.
          </p>

          <a
            href="/digital_marketing.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>

        <div className="certificate-card">
          <h3>Full Stack Development Certification</h3>

          <p>
            Certified in Full Stack Development.
          </p>

          <a
            href="/full-stack.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certificates;