"use client";

import { useEffect, useState } from "react";

export default function ShipmentsPage() {
  const [armadas, setArmadas] = useState([]);
  const [orders, setShippingOrders] = useState([]);
  const [shipments, setShipments] = useState([]);
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
    async function fetchShippingOrders() {
      try {
        const res = await fetch("http://localhost:8000/api/shippingorder");
        const data = await res.json();
        setShippingOrders(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shipments:", err);
        setLoading(false);
      }
    }
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

    fetchArmadas();
    fetchShippingOrders();
    fetchShipments();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Armada List</h1>
      <table>
        <thead>
          <tr>
            <th>Armada ID</th>
            <th>Type</th>
            <th>Availability</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {armadas.map((armada) => (
            <tr key={armada.armada_id}>
              <td>{armada.armada_id}</td>
              <td>{armada.type}</td>
              <td>{armada.availability ? "Available" : "Not Available"}</td>
              <td>{armada.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Shipping Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Vehicle Type</th>
            <th>Date</th>
            <th>Detail</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.name}</td>
              <td>{order.vehicle_type}</td>
              <td>{order.date}</td>
              <td>{order.detail}</td>
              <td>{order.order_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Shipments</h1>
      <table>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Armada ID</th>
            <th>Shipping Order ID</th>
            <th>Date</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Detail</th>
            <th>Log</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((s) => (
            <tr key={s.shipment_id}>
              <td>{s.shipment_id}</td>
              <td>{s.armada_id}</td>
              <td>{s.shipping_order_id}</td>
              <td>{s.date}</td>
              <td>{s.dep_loc}</td>
              <td>{s.des_loc}</td>
              <td>{s.status}</td>
              <td>{s.detail}</td>
              <td>{s.shipping_log}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
