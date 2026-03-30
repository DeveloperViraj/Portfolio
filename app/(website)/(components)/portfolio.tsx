"use client";

import { PortfolioCard } from "@/app/(website)/(components)/portfolio-card";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import CustomButton from "@/components/custom-btn";
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const { push } = useRouter();

  const portfolios = [
    {
      title: "CineGo — Movie Ticket Booking",
      description:
        "Full-stack MERN movie ticket booking platform with authentication, seat selection and backend APIs.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://cinego-chi.vercel.app/",
      github: "https://github.com/DeveloperViraj/CineGo",
      images: [
        {
          asset: {
            url: "/portfolio/portfolio-1.png",
          },
        },
      ],
    },
    {
      title: "EXTRA — Expense Tracker",
      description:
        "Modern expense tracker built with React featuring intuitive UI and real-time expense tracking.",
      tags: ["React", "Redux", "Tailwind", "Node.js"],
      live: "https://extra-expense-tracker.vercel.app/",
      github: "https://github.com/DeveloperViraj/EXTRA",
      images: [
        {
          asset: {
            url: "/portfolio/portfolio-2.png",
          },
        },
      ],
    },
  ];

  return (
    <div
      id="portfolio"
      className="relative py-20 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <SectionHeading primaryHeading="Portfolio" secondHeading="Best Works" />

      <div className="grid mt-16 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {portfolios.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            images={item.images}
            live={item.live}
            github={item.github}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <CustomButton
          onClick={() => push("/portfolio")}
          label="See All Works"
        />
      </div>
    </div>
  );
}