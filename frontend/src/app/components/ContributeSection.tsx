import { useState } from "react";
import { submitKnowledge } from "../../services/api";

export default function ContributeSection() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    region: "",
    author: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await submitKnowledge(form);
      setMessage("🌿 Knowledge submitted for admin approval!");
      setForm({
        title: "",
        description: "",
        category: "",
        region: "",
        author: "",
      });
    } catch {
      setMessage("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contribute" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-serif text-green-900 mb-8 text-center">
        Share Your Village Wisdom 🌾
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-5">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full p-3 border rounded" />

        <textarea name="description" placeholder="Describe the knowledge..." value={form.description} onChange={handleChange} required className="w-full p-3 border rounded h-32" />

        <input name="category" placeholder="Category (Ayurveda, Folk, etc)" value={form.category} onChange={handleChange} required className="w-full p-3 border rounded" />

        <input name="region" placeholder="Region (Udupi, Karnataka, etc)" value={form.region} onChange={handleChange} required className="w-full p-3 border rounded" />

        <input name="author" placeholder="Your name" value={form.author} onChange={handleChange} required className="w-full p-3 border rounded" />

        <button disabled={loading} className="bg-green-800 text-white px-6 py-3 rounded-lg w-full">
          {loading ? "Submitting..." : "Submit Knowledge"}
        </button>

        {message && <p className="text-center mt-3 text-green-700">{message}</p>}
      </form>
    </section>
  );
}
