import { Github } from "lucide-react";

const projects = [
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

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-2xl mb-10">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              I have buit so far.
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work that is the things I have actually
            built and learned from, using the MERN stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden flex-[3] min-h-[180px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`${project.title} source code`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex-[2] p-4 space-y-2.5">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-0.5 rounded-full bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
