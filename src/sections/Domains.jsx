const domains = [
  {
    title: "Full Stack Web Development",
    description:
      "Currently my strongest domain. I build complete web applications from frontend to backend, using React.js for UI, Node.js and Express.js for server side logic, and Firebase or MongoDB for data storage. Projects like Bookify and Blogify reflect my ability to deliver end to end solutions.",
    iconSrc: "/Domain_Icon/Full%20Stack%20Web%20Development%20Icon.png",
    invert: true,
  },
  {
    title: "Backend Development and REST APIs",
    description:
      "My primary focus area. I design and build well structured REST APIs with proper authentication using JWT, middleware validation, and MVC architecture. Projects like the Secure URL Shortener and Threads Style Backend are built entirely around core backend principles.",
    iconSrc:
      "/Domain_Icon/Backend%20Development%20and%20REST%20APIs%20icon.png",
    invert: true,
  },
  {
    title: "Database Design and Management",
    description:
      "I work with both SQL and NoSQL databases that is MySQL for structured data, MongoDB for flexible document storage, and Firebase Firestore for real time applications. I focus on structured schema design and clean data organization.",
    iconSrc: "/Domain_Icon/Database%20Design%20and%20Management%20icon.png",
    invert: true,
  },
];

export const Domains = () => {
  return (
    <section id="domains" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Core Domains
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            What I work with,
            <span className="font-serif italic font-normal text-white">
              {" "}
              end to end.
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            Three focused areas that define the kind of problems I solve and the
            projects I love to build.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {domains.map((domain, idx) => (
            <div
              key={domain.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-surface/90 via-surface/80 to-card/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/15 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -left-8 w-24 h-24 bg-highlight/10 rounded-full blur-2xl" />

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center shadow-inner">
                  <img
                    src={domain.iconSrc}
                    alt={domain.title}
                    className="w-7 h-7 object-contain"
                    style={domain.invert ? { filter: "invert(1)" } : undefined}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {domain.label}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {domain.title}
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
