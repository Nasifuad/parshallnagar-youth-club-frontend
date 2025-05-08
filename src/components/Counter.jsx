import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const stats = [
  { label: "Members", value: 70 },
  { label: "Events Held", value: 5 },
  { label: "Social Work", value: 30 },
];

export default function Counter() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, 50);
    });
  }, []);

  return (
    <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.3, type: "spring", stiffness: 120 }}
          className="p-4 bg-white rounded-lg shadow"
        >
          <h2 className="text-4xl font-bold mb-2 text-blue-600">{counts[i]}</h2>
          <p className="text-lg text-gray-700">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
