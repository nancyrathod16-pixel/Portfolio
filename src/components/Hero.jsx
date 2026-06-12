import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Nancy Rathod</h1>

          <h2>React Developer & Aspiring Full Stack Developer</h2>

          <p>
            B.Com Student at Vanita Vishram Women's University.
            Passionate about React.js, Web Development and Modern UI Design.
          </p>

         <div className="hero-buttons">
  <a
    href="https://github.com/nancyrathod16-pixel"
    target="_blank"
    rel="noreferrer"
  >
    <button>GitHub</button>
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
  >
    <button>View Resume</button>
  </a>
</div>
        </div>

       <div className="hero-image">
  <img
    src={profile}
    alt="Nancy Rathod"
    className="profile-img"
  />
</div>
      </div>
    </section>
  );
}

export default Hero;