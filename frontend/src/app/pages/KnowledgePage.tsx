import { useEffect, useState } from "react";
import { fetchKnowledge } from "../../services/api";
import { motion } from "framer-motion";

interface Knowledge {
  _id: string;
  title: string;
  description: string;
  category: string;
  region: string;
  author: string;
}

export default function KnowledgePage() {
  const [knowledge, setKnowledge] = useState<Knowledge[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetchKnowledge()
      .then((data) => {
        setKnowledge(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load knowledge", err);
        setLoading(false);
      });
  }, []);

  // Extract unique categories and regions from backend data
  const categories = [...new Set(knowledge.map((k) => k.category))];
  const regions = [...new Set(knowledge.map((k) => k.region))];

  // Apply filters
  const filteredKnowledge = knowledge.filter(
    (item) =>
      (category === "" || item.category === category) &&
      (region === "" || item.region === region)
  );

  if (loading) {
    return <div className="text-center py-20">Loading wisdom… 🌿</div>;
  }

  return (
    <section className="bg-[#f6efe4] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-green-900 mb-8 text-center">
          🌿 Community Knowledge
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-green-300 shadow"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-4 py-2 rounded-lg border border-green-300 shadow"
          >
            <option value="">All Regions</option>
            {regions.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>
        </div>

        {/* Knowledge Cards */}
        {filteredKnowledge.length === 0 ? (
          <p className="text-center text-gray-500">
            No knowledge found for selected filters.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKnowledge.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-green-100 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-green-700">
                  <span>🌿 {item.category}</span>
                  <span>📍 {item.region}</span>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  By {item.author}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
