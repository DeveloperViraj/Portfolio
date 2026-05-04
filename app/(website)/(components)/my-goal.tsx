"use client";

import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import {
  Brain,
  Code2,
  Layers,
  Database,
  Cpu,
  Zap,
} from "lucide-react";

function MyGoal() {
  const TEXT =
  "I build high-performance systems with scalable architecture and modern full-stack engineering, enhanced by AI."; 
  return (
    <div className="relative py-24 md:py-32 mt-10 max-w-7xl mx-auto">

      {/* LEFT BADGES (only show on xl and above) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-10">
        <Badge icon={Brain} label="Artificial Intelligence" color="indigo" />
        <Badge icon={Code2} label="Frontend Engineering" color="sky" />
        <Badge icon={Layers} label="Backend Systems" color="emerald" />
      </div>

      {/* RIGHT BADGES (only show on xl and above) */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-10">
        <Badge icon={Database} label="Database Architecture" color="amber" />
        <Badge icon={Cpu} label="System Design" color="violet" />
        <Badge icon={Zap} label="Performance Optimization" color="rose" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl relative z-10 font-newsreader italic text-center font-extralight">
        My Goal
      </h2>

      {/* Clean Animated Text */}
      <div className="relative z-10 font-dm-sans text-center font-light leading-[1.4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto mt-10 px-6">
        <SplittingText
          text={TEXT}
          type="chars"
          inView
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default MyGoal;

const Badge = ({
  label,
  icon: Icon,
  color,
}: {
  label: string;
  icon: any;
  color: "indigo" | "sky" | "emerald" | "amber" | "violet" | "rose";
}) => {
  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-500",
    sky: "bg-sky-500",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    violet: "bg-violet-500",
    rose: "bg-rose-500",
  };

  return (
    <Magnetic>
      <div
        className="
        group
        px-5 py-3
        bg-white
        border border-neutral-200
        rounded-full
        flex items-center gap-3
        shadow-sm
        transition-all duration-300
        hover:shadow-lg
        hover:-translate-y-1
        hover:border-neutral-400
        cursor-pointer
      "
      >
        <span
          className={`p-2 rounded-full text-white transition-all duration-300 group-hover:scale-110 ${colorMap[color]}`}
        >
          <Icon size={14} />
        </span>

        <span className="text-sm font-medium tracking-tight text-neutral-700 group-hover:text-black transition-colors">
          {label}
        </span>
      </div>
    </Magnetic>
  );
};