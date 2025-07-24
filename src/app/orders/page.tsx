"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { Game } from "@/types/game";

type Order = {
  userEmail: string;
  items: Game[];
  total: number;
  date: string;
};

export default function OrdersPage() {
  const { user } = useAppContext();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    const allOrders: Order[] = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const userOrders = allOrders.filter(
      (order) => order.userEmail === user.email
    );

    setOrders(userOrders.reverse()); // du plus récent au plus ancien
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-6">📦 Mes Commandes</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">Vous n&#39;avez passé aucune commande.</p>
      ) : (
        <ul className="space-y-6">
          {orders.map((order, index) => (
            <li key={index} className="border p-4 rounded shadow-sm">
              <div className="mb-2 text-sm text-gray-500">
                Passée le {new Date(order.date).toLocaleString()}
              </div>
              <ul className="mb-2 space-y-1">
                {order.items.map((game) => (
                  <li key={game.id} className="flex justify-between text-sm">
                    <span>{game.title}</span>
                    <span>{game.price.toFixed(2)} €</span>
                  </li>
                ))}
              </ul>
              <div className="text-right font-bold">
                Total : {order.total.toFixed(2)} €
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
