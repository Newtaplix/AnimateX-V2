"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  "Amazing experience!",
  "Highly recommended.",
  "Superb support team!",
  "Changed my business!",
  "Lovely interface!",
  "Exceptional quality!",
  "Fast & reliable!",
  "Brilliant design!",
  "Great collaboration!",
  "Simply perfect!",
];

export default function BloomingTestimonials() {
  const [visibleCards, setVisibleCards] = useState([]);

  // Generate random positions for n cards
  const generateRandomCards = () => {
    const count = 4; // number of cards visible per cycle
    const randomCards = [];
    for (let i = 0; i < count; i++) {
      const t = testimonials[Math.floor(Math.random() * testimonials.length)];
      randomCards.push({
        id: Math.random(),
        text: t,
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
      });
    }
    return randomCards;
  };

  // Refresh cards every few seconds
  useEffect(() => {
    setVisibleCards(generateRandomCards());
    const interval = setInterval(() => {
      setVisibleCards(generateRandomCards());
    }, 6000); // 6s per cycle
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
      {/* center content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Our Happy Users</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Thousands of customers love our product — see what they’re saying.
        </p>
      </div>

      {/* animated floating testimonials */}
      {visibleCards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `calc(50% + ${card.x}px)`,
            top: `calc(50% + ${card.y}px)`,
          }}
          className="absolute bg-white text-gray-700 shadow-lg rounded-xl px-4 py-3 text-sm w-56 text-center"
        >
          “{card.text}”
        </motion.div>
      ))}
    </div>
  );
}
