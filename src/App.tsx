import './App.css'

const projects = [
  { name: 'Livletics', repo: 'livletics', description: 'A fitness dashboard prototype with an interactive muscle map, recovery metrics, and a layered frontend architecture.', stack: 'React / TypeScript / Vite', status: 'In development - sample data' },
  { name: 'Multiplayer Chess', repo: 'multiplayer-chess', description: 'A terminal chess client and Java server with HTTP APIs, WebSocket gameplay, and MySQL persistence.', stack: 'Java / MySQL / WebSockets', status: 'Software construction course project' },
  { name: 'MealMate Recipes', repo: 'mealmate-recipes', description: 'Saved recipes, a meal-planning calendar, grocery lists, and live chat in a full-stack web app.', stack: 'React / Express / MongoDB', status: 'Web programming course project' },
  { name: 'Community Resource Finder', repo: 'community-resource-finder', description: 'Search for Utah food assistance by city, with typed data access and a sample-data fallback.', stack: 'TypeScript / React / Supabase', status: 'Database course project' },
  { name: 'JWT Pizza', repo: 'jwt-pizza-web', description: 'DevOps coursework on an upstream application: CI pipelines, browser and API tests, Docker packaging, and observability.', stack: 'GitHub Actions / Playwright / Docker', status: 'Course fork - upstream attribution preserved' },
  { name: 'Refresh Token Rotation', repo: 'refresh-token-rotation-demo', description: 'A focused Express demo showing JWT refresh-token rotation and rejection of reused refresh tokens.', stack: 'Node.js / Express / JWT', status: 'Educational demo' },
]

function App() {
  return (
    <main className="portfolio">
      <p className="eyebrow">SOFTWARE ENGINEER</p>
      <h1>Olivia Leavitt</h1>
      <p className="intro">I build web applications, cloud systems, and products that solve real problems.</p>
      <nav className="page-nav" aria-label="Page sections">
        <a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </nav>
      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">About Me</h2>
        <p>I'm a software engineer interested in full-stack development, AWS, system architecture, and building great products.</p>
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Selected Projects</h2>
        <p>Explore the code, architecture, and development notes behind my work.</p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.repo}>
              <p className="project-stack">{project.stack}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="project-status">{project.status}</span>
              <a className="project-link" href={'https://github.com/OliviaLeavitt/' + project.repo} aria-label={'View ' + project.name + ' source on GitHub'}>View source on GitHub <span aria-hidden="true">&rarr;</span></a>
            </article>
          ))}
        </div>
      </section>
      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>Connect with me on <a href="https://github.com/OliviaLeavitt">GitHub</a>.</p>
      </section>
    </main>
  )
}

export default App
