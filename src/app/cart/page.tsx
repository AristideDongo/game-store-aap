"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function CartPage() {
  const router = useRouter();
  const { user, cart, removeFromCart, clearCart } = useAppContext();
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const totalPrice = cart.reduce((sum, game) => sum + game.price, 0);

  const handleClear = () => {
    if (confirm("Es-tu sûr(e) de vouloir vider ton panier ?")) {
      clearCart();
    }
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Votre panier est vide.");
      return;
    }

    setIsOrdering(true);

    // Simuler une commande
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      userEmail: user?.email,
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };

    const updatedOrders = [...orders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    clearCart();

    setTimeout(() => {
      alert("Commande passée avec succès 🎉 !");
      setIsOrdering(false);
      router.push("/"); // Rediriger vers accueil ou /orders
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-6">🎮 Mon Panier</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((game) => (
              <li
                key={game.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-semibold">{game.title}</h3>
                  <p className="text-sm text-gray-600">{game.price}€</p>
                </div>
                <button
                  onClick={() => removeFromCart(game.id)}
                  className="text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right font-bold text-lg">
            Total : {totalPrice.toFixed(2)}€
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleClear}
              className="w-full sm:w-1/2 bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Vider le panier
            </button>
            <button
              onClick={handleOrder}
              disabled={isOrdering}
              className="w-full sm:w-1/2 bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isOrdering ? "Commande en cours..." : "Commander"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
