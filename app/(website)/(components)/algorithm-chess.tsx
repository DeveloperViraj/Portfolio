"use client";

import { useEffect, useState, useMemo } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { motion } from "framer-motion";

// IBM Deep Blue vs. Garry Kasparov (1997, Game 6)
// The exact game where AI dethroned the human World Champion in just 19 moves.
const moves = [
  "e4", "c6", "d4", "d5", "Nd2", "dxe4", "Nxe4", "Nd7", "Ng5", "Ngf6", 
  "Bd3", "e6", "N1f3", "h6", "Nxe6", "Qe7", "O-O", "fxe6", "Bg6+", "Kd8", 
  "Bf4", "b5", "a4", "Bb7", "Re1", "Nd5", "Bg3", "Kc8", "axb5", "cxb5", 
  "Qd3", "Bc6", "Bf5", "exf5", "Rxe7", "Bxe7", "c4"
];

export default function AlgorithmChess() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pre-compute the FEN history so the render loop is perfectly stable
  const fenHistory = useMemo(() => {
    const game = new Chess();
    const history = [game.fen()];
    for (const move of moves) {
      try {
        game.move(move);
        history.push(game.fen());
      } catch (e) {
        break;
      }
    }
    return history;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smart Loop: Plays a move every 1.5s, pauses for 5s at the resignation
  useEffect(() => {
    if (!mounted) return;

    let timeoutId: NodeJS.Timeout;

    const playNextMove = () => {
      setCurrentIndex((prev) => {
        const isFinished = prev >= fenHistory.length - 1;
        const delay = isFinished ? 5000 : 1500; 

        timeoutId = setTimeout(playNextMove, delay);
        return isFinished ? 0 : prev + 1;
      });
    };

    timeoutId = setTimeout(playNextMove, 1500);

    return () => clearTimeout(timeoutId);
  }, [mounted, fenHistory.length]);

  if (!mounted) return null;

  const currentFen = fenHistory[currentIndex];
  const moveLabelIndex = currentIndex === 0 ? 0 : currentIndex - 1;

  const boardOptions = {
    position: currentFen,
    boardWidth: 420,
    animationDuration: 400,
    arePiecesDraggable: false,
    customDarkSquareStyle: { backgroundColor: "#779556" },
    customLightSquareStyle: { backgroundColor: "#ebecd0" }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 items-center px-6">
        
        {/* LEFT SIDE: THE BOARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-[#4e3317] p-4 rounded-xl shadow-2xl inline-block relative">
            <Chessboard options={boardOptions} />
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl italic font-serif text-gray-900 tracking-tight">
            Algorithms in Motion
          </h2>

          {/* Clean Status Badge - FEN String Removed */}
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg font-mono text-sm shadow-sm inline-block w-full">
            <p className="text-blue-600 font-semibold flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Move: {currentIndex} / {moves.length}
              {currentIndex > 0 && (
                <span className="text-gray-500 ml-1">({moves[moveLabelIndex]})</span>
              )}
              {currentIndex === moves.length && (
                <span className="text-red-600 font-bold ml-2">BLACK RESIGNS</span>
              )}
            </p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            This board replays the exact moment a machine first broke the human spirit in chess: <strong>IBM&apos;s Deep Blue vs. Garry Kasparov (1997)</strong>. No poetic metaphors here—this is just raw computation overwhelming human intuition. 
          </p>

          <blockquote className="border-l-4 border-[#7b5631] pl-5 py-2 italic text-gray-700">
            “The question of whether machines can think is about as relevant as the question of whether submarines can swim.”
            <span className="block text-sm mt-3 font-sans not-italic font-bold text-gray-900">
              — Edsger W. Dijkstra
            </span>
          </blockquote>

          {/* FIDE Rating Block */}
          <div className="pt-2">
            <p className="font-bold text-lg text-gray-900 flex items-center gap-2">
              FIDE Rated Chess Player — Rating: 1426
            </p>
            <p className="text-gray-600 mt-2">
              Competed in 35+ national and international tournaments. I play to keep my logic sharp, but as developers, our job is to build the machine that wins.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}