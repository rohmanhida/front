"use client";

import { useEffect, useState } from "react";

export default function ShipmentsPage() {
  const [armadas, setArmadas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArmadas() {
      try {
        const res = await fetch("http://localhost:8000/api/armada");
        const data = await res.json();
        setArmadas(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shipments:", err);
        setLoading(false);
      }
    }

    fetchArmadas();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">Armada List</h1>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Armada ID</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Type</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Availability</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {armadas.map((armada) => (
            <tr key={armada.armada_id}>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{armada.armada_id}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{armada.type}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{armada.availability ? "Available" : "Not Available"}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{armada.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
