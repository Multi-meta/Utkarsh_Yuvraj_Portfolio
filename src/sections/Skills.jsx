import { Github } from "lucide-react";

const skills = [
  { label: "React.js", icon: "/skill_pic/React.js.png" },
  { label: "Node.js", icon: "/skill_pic/Node.js.png" },
  {
    label: "Express.js",
    icon: "/skill_pic/Express.js.png",
    iconSize: "h-9 w-9",
  },
  { label: "MongoDB", icon: "/skill_pic/MongoDB.png" },
  { label: "MySQL", icon: "/skill_pic/MySQL.png" },
  { label: "Firebase", icon: "/skill_pic/Firebase.png" },
  { label: "JavaScript", icon: "/skill_pic/Javascript.png" },
  { label: "Git", icon: "/skill_pic/Git.png" },
  { label: "GitHub", icon: Github },
  { label: "Docker", icon: "/skill_pic/Docker.png" },
  { label: "HTML", icon: "/skill_pic/HTML.png", iconSize: "h-10 w-10" },
  { label: "CSS", icon: "/skill_pic/CSS.png" },
  { label: "C++", icon: "/skill_pic/C++.png" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[0.4em] mt-4 text-foreground animate-fade-in animation-delay-100">
            SKI<span className="text-primary">LLS</span>
          </h2>
          <p className="text-muted-foreground mt-4 animate-fade-in animation-delay-200">
            Tools and technologies I use to build full stack products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-5xl mx-auto">
          {skills.map((skill, idx) => {
            const isTopRow = idx < 6;
            return (
              <div
                key={skill.label}
                className={`group flex items-center gap-3 rounded-full border border-border/70 bg-surface/70 font-medium text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 animate-fade-in ${
                  isTopRow
                    ? "px-6 py-3.5 text-base"
                    : "px-[22px] py-[0.85rem] text-[0.95rem]"
                }`}
                style={{ animationDelay: `${(idx + 1) * 80}ms` }}
              >
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className={`object-contain ${
                      skill.iconSize ??
                      (isTopRow ? "h-8 w-8" : "h-[30px] w-[30px]")
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <skill.icon
                    className={`${isTopRow ? "h-8 w-8" : "h-[30px] w-[30px]"}`}
                    aria-hidden="true"
                  />
                )}
                <span>{skill.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
