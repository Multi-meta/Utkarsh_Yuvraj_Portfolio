const highlights = [
  {
    iconSrc: "/about_section_icon/Clean_Code_Icon.png",
    title: "Clean Code",
    description:
      "Writing readable, structured code with a focus on maintainability and clean architecture.",
  },
  {
    iconSrc: "/about_section_icon/Performance_Icon.png",
    invert: true,
    title: "Performance",
    description:
      "Building REST APIs with proper structure, error handling, and efficient data flow.",
  },
  {
    iconSrc: "/about_section_icon/Collabaration_Icon.png",
    invert: true,
    title: "Collaboration",
    description:
      "Active contributor in GDG, TEDx, and Web3ssh communities at IIIT Sri City.",
  },
  {
    iconSrc: "/about_section_icon/Innovation_Icon.png",
    invert: true,
    iconSize: "w-10 h-10",
    title: "Innovation",
    description:
      "Always exploring new technologies and building real world full stack projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning every day,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate full stack developer currently pursuing B.Tech
                in Electronics and Communication Engineering at IIIT Sri City.
                My journey started with a curiosity for how the web works, and
                it has evolved into hands on experience in the MERN stack.
              </p>
              <p>
                I primarily work with Node.js, Express.js, React.js, and
                MongoDB, building everything from secure REST APIs to complete
                full stack applications. My approach focuses on clean
                architecture, JWT based authentication, and structured backend
                design.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to developer
                communities like GDG, participating in hackathons, or working on
                new full stack projects to sharpen my skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to write clean, readable code that solves real
                problems, backends that work, frontends that feel good, and
                projects I'm genuinely proud of."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <img
                    src={item.iconSrc}
                    alt={item.title}
                    className={`${item.iconSize ?? "w-6 h-6"} object-contain`}
                    style={item.invert ? { filter: "invert(1)" } : undefined}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
