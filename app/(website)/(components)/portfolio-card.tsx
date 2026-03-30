"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const PortfolioCard = ({
  images,
  title,
  description,
  tags,
  live,
  github,
}: {
  index: number;
  images: any[];
  tags: string[];
  title: string;
  description: string;
  live: string;
  github: string;
}) => {
  const imageUrl = images?.[0]?.asset?.url || "/placeholder.png";

  return (
    <Card
      className="
        relative shadow-none overflow-hidden border border-gray-200 rounded-3xl 
        bg-white transition-all duration-500 ease-in-out
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)]
        hover:-translate-y-2 group flex flex-col p-2
      "
    >
      {/* Image Container - object-contain ensures no cropping */}
      <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-6">
        <Link href={live} target="_blank" className="absolute inset-0 z-10">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </Link>
      </div>

      <CardContent className="relative z-10 flex flex-col flex-1 p-6 pb-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.slice(0, 4)?.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="font-sans font-semibold text-[10px] uppercase tracking-wider text-gray-500 bg-gray-100 border-transparent"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Text */}
        <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-sm font-sans font-light text-gray-500 leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {/* Cohesive Action Buttons with Black Borders */}
        <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100">
          
          {/* View Live */}
          <Link href={live} target="_blank">
            <button className="group/btn w-full flex items-center justify-between bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border border-black hover:bg-black hover:text-white">
              <span>View Live</span>
              <div className="bg-black text-white rounded-full p-2 group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-300">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </Link>

          {/* Source Code */}
          <Link href={github} target="_blank">
            <button className="group/btn w-full flex items-center justify-between bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border border-black hover:bg-black hover:text-white">
              <span>Source Code</span>
              <div className="bg-black text-white rounded-full p-2 group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-300">
                <Github size={14} />
              </div>
            </button>
          </Link>

        </div>
      </CardContent>
    </Card>
  );
};