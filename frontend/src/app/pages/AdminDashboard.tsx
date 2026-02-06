import { useEffect, useState } from "react";
import {
  getPendingKnowledge,
  approveKnowledge,
  rejectKnowledge,
} from "../../services/api";

export default function AdminDashboard() {
  const [items, setItems] = useState<any[]>([]);

  const load = async () => {
    const data = await getPendingKnowledge();
    setItems(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-10 bg-[#f7f2e9] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#2f5d50]">
        Pending Knowledge
      </h1>

      {items.length === 0 && (
        <p className="text-gray-500">No pending submissions</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((k) => (
          <div
            key={k._id}
            className="bg-white rounded-xl shadow p-6 border"
          >
            <h2 className="text-xl font-semibold">{k.title}</h2>
            <p className="text-gray-600 mt-2">{k.description}</p>

            <p className="mt-2 text-sm text-green-700">
              {k.category} • {k.region}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={async () => {
                  await approveKnowledge(k._id);
                  load();
                }}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Approve
              </button>

              <button
                onClick={async () => {
                  await rejectKnowledge(k._id);
                  load();
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
