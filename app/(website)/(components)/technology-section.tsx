import SectionHeading from "@/app/(website)/(components)/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { TechnologyBadge } from "@/app/(website)/(components)/technology-badge";

export const technologies = [
  // --- LANGUAGES ---
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  // --- FRONTEND ---
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux Toolkit", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

  // --- BACKEND ---
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

  // --- DEPLOYMENT ---
  { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  {name: "Railway", img: "https://railway.app/brand/logo-light.svg"},
  { name: "Render", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },

  // --- TOOLS ---
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  {name: "Stripe", img: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg"},
  // --- DESIGN ---
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe Premiere Pro", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "Adobe After Effects", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
];

const chunkSize = Math.ceil(technologies.length / 3);

export const firstRow = technologies.slice(0, chunkSize);
export const secondRow = technologies.slice(chunkSize, chunkSize * 2);
export const thirdRow = technologies.slice(chunkSize * 2);

function TechnologySection() {
  return (
    <div className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading
        primaryHeading="Tech Stack"
        secondHeading="Technologies I build with"
      />

      <div className="relative flex w-full flex-col mt-12 items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((tech) => (
            <TechnologyBadge key={tech.name} {...tech} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((tech) => (
            <TechnologyBadge key={tech.name} {...tech} />
          ))}
        </Marquee>

        <Marquee pauseOnHover className="[--duration:80s]">
          {thirdRow.map((tech) => (
            <TechnologyBadge key={tech.name} {...tech} />
          ))}
        </Marquee>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
      </div>
    </div>
  );
}

export default TechnologySection;