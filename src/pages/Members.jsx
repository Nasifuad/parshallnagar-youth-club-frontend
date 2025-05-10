import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell } from "recharts";

// সদস্য ডেটা
const categories = {
  বিদেশন: ["Shuvo", "Roni", "Shakil", "Refat", "Nobel", "Riyad"],
  কর্মরত: [
    "Jonny",
    "Rokib",
    "Anik",
    "Badhon",
    "Payel",
    "Rakib",
    "Hasib",
    "Zahidul",
    "Mukul",
    "Shimul",
    "Foyez",
    "Sujon Bhai",
    "Nuru",
    "Shofikul",
    "Rofikul",
    "Robin",
    "Shaon",
    "Ohidul",
    "Ridoy",
    "Nasif",
    "Sajal",
    "Rubel",
    "Ramim",
    "Abdullah",
    "Jisan",
    "Ponir",
  ],
  "স্নাতক + বেকার": [
    "Azizul",
    "Ashik",
    "Rasel",
    "Nahid",
    "Daniel",
    "Ratul",
    "Binyas",
    "Limon",
    "Sajib",
  ],
  "ক্লাস ১১ - ১২": ["Riazul", "Yasin", "Al-Amin", "Torikul", "Atik"],
  "ক্লাস ৬ - ১০": [
    "Aranya",
    "Sovon",
    "Bistirno",
    "Sujon",
    "Sabbir",
    "Borkot",
    "Al-Amin 2",
    "Badol",
    "Prince",
    "Mamun",
    "Noyon",
    "Hasib Junior",
    "Shahriar",
    "Emon",
    "Rudro",
    "Arafat",
    "Dibyo",
    "Rejoan",
  ],
};

// ক্যাটাগরি অনুযায়ী রং ম্যাপিং
const categoryColors = {
  বিদেশন: "bg-blue-100 dark:bg-blue-900/30",
  কর্মরত: "bg-green-100 dark:bg-green-900/30",
  "স্নাতক + বেকার": "bg-purple-100 dark:bg-purple-900/30",
  "ক্লাস ১১ - ১২": "bg-yellow-100 dark:bg-yellow-900/30",
  "ক্লাস ৬ - ১০": "bg-pink-100 dark:bg-pink-900/30",
};

const slideFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MembersDashboard = () => {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("সব ক্যাটাগরি");
  const [currentMember, setCurrentMember] = useState(null);

  // ক্যাটাগরির তালিকা
  const catList = ["সব ক্যাটাগরি", ...Object.keys(categories)];

  // ফিল্টারড ও সর্টেড সদস্য
  const filtered = Object.entries(categories)
    .flatMap(([cat, names]) => names.map((name) => ({ cat, name })))
    .filter(
      (m) =>
        m.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCat === "সব ক্যাটাগরি" || m.cat === selectedCat)
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  // পাই চার্ট ডেটা
  const pieData = Object.entries(categories).map(([name, arr]) => ({
    name,
    value: arr.length,
  }));
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* শিরোনাম */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-indigo-700 dark:text-indigo-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        সদস্য তালিকা
      </motion.h1>

      {/* নিয়ন্ত্রণ প্যানেল */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="সদস্য খুঁজুন..."
            className="w-full md:w-64 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-48 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            {catList.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <div className="flex-1">
            <PieChart width={140} height={140}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                dataKey="value"
              >
                {pieData.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </motion.div>

      {/* সদস্য কার্ড গ্রিড % */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filtered.map((m, idx) => (
          <motion.div
            key={`${m.cat}-${idx}`}
            variants={slideFade}
            transition={{ delay: idx * 0.03 }}
            className={`${
              categoryColors[m.cat]
            } rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition-shadow`}
            onClick={() => setCurrentMember(m)}
          >
            <img
              src={`https://via.placeholder.com/150?text=${encodeURIComponent(
                m.name
              )}`}
              alt={m.name}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              {m.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {m.cat}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ডিটেইল মোডাল */}
      <AnimatePresence>
        {currentMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setCurrentMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`${
                categoryColors[currentMember.cat]
              } dark:bg-opacity-30 rounded-xl p-6 w-full max-w-md`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`https://via.placeholder.com/300?text=${encodeURIComponent(
                  currentMember.name
                )}`}
                alt={currentMember.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {currentMember.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                ক্যাটাগরি:{" "}
                <span className="font-medium">{currentMember.cat}</span>
              </p>
              <button
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                onClick={() => setCurrentMember(null)}
              >
                বন্ধ করুন
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MembersDashboard;
