import { Github } from "lucide-react";

const projects = [
  {
    title: "Smart PDF Zone Scanner",
    description:
      "A web based tool to scan large batches of PDF files for specific text in the header, footer, content area, or entire document, with OCR support for Hindi and English on scanned PDFs and CSV export of results.",
    image: "/projects/Smart_PDF_Zone_Scanner.png",
    tags: ["Node.js", "Express.js", "Python", "Tesseract OCR"],
    github: "https://github.com/Multi-meta/Smart_PDF_Zone_Scanner",
  },
  {
    title: "Bookify",
    description:
      "A full stack bookstore platform supporting book listings, cart management, and order processing with Firebase Authentication and Firestore for secure, structured data storage.",
    image: "/projects/Bookify.png",
    tags: ["React.js", "Firebase", "Firestore"],
    github: "https://github.com/Multi-meta/Bookify",
  },
  {
    title: "Blogify",
    description:
      "A full stack blogging platform with JWT based authentication, REST APIs for content creation, editing, and deletion, built using MVC architecture with middleware validation.",
    image: "/projects/Blogify.png",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Multi-meta/Blogify-addBlog-",
  },
  {
    title: "Secure URL Shortener",
    description:
      "A URL shortening backend with simple and fast link generation, redirection, and user authentication for secure URL access, with structured MongoDB collections for data storage.",
    image: "/projects/Secure_url_shorten.png",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/Multi-meta/URL_Shortner",
  },
  {
    title: "Threads Style Backend",
    description:
      "A backend application for user profiles and post management with REST APIs for user interactions, JWT based authentication, and structured MongoDB data storage.",
    image: "/projects/Thread_app_backend.png",
    tags: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Multi-meta/threads-app-graphql",
  },
];

const ProjectCard = ({ project, delay }) => (
  <div
    className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col h-full"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Image */}
    <div className="relative overflow-hidden min-h-[220px]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

      {/* Github Link */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          aria-label={`${project.title} source code`}
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, tagIdx) => (
          <span
            key={tagIdx}
            className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-2xl mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              I have built so far.
            </span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work that I have actually built and learned
            from using the MERN stack.
          </p>
        </div>

        {/* ================= Desktop Layout ================= */}
        <div className="hidden xl:block max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-3 gap-10 mb-10">
            {projects.slice(0, 3).map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                delay={(idx + 1) * 100}
              />
            ))}
          </div>

          {/* Bottom Row Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-10 w-[66.66%]">
              {projects.slice(3).map((project, idx) => (
                <ProjectCard
                  key={idx + 3}
                  project={project}
                  delay={(idx + 4) * 100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= Tablet + Mobile Layout ================= */}
        <div className="xl:hidden max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                delay={(idx + 1) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
