"use client";

import { useEffect, useState } from "react";

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShipments() {
      try {
        const res = await fetch("http://localhost:8000/api/shipment");
        const data = await res.json();
        setShipments(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shipments:", err);
        setLoading(false);
      }
    }

    fetchShipments();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">Shipments</h1>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Shipment ID</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Armada ID</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Shipping Order ID</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Date</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Departure</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Destination</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Status</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Detail</th>
            <th className="text-left px-6 py-3 border-b border-gray-300 text-sm font-medium text-gray-700">Log</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((s) => (
            <tr key={s.shipment_id}>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.shipment_id}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.armada_id}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.shipping_order_id}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.date}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.dep_loc}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.des_loc}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.status}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.detail}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500">{s.shipping_log}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
