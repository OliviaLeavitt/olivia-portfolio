import './App.css'

function App() {
  return (
    <main className="portfolio">
      <p className="eyebrow">SOFTWARE ENGINEER</p>
      <h1>Olivia Leavitt</h1>
      <p className="intro">
        I build web applications, cloud systems, and products that solve real problems.
      </p>
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About Me</h2>
        <p>
          I'm a software engineer interested in full-stack development, AWS,
          system architecture, and building great products.
        </p>
      </section>
      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <article className="project">
          <h3>Livletics</h3>
          <p>A fitness application for tracking workouts, strength, and progress.</p>
          <span>In development</span>
        </article>
      </section>
      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>Connect with me on <a href="https://github.com/OliviaLeavitt">GitHub</a>.</p>
      </section>
    </main>
  )
}

export default App
