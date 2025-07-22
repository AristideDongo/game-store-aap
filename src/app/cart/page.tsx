"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext"; // si tu as un contexte pour le panier

export default function CartPage() {
  const router = useRouter();
  const [user, setUser] = useState<null | { email: string }>(null);
  const { cart, removeFromCart, clearCart } = useAppContext();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      router.push("/login"); // pas connecté, redirige
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [router]);

  if (!user) {
    return null; // Ou un loader
  }

  const totalPrice = cart.reduce((sum, game) => sum + game.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-6">Mon Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>{/* ... contenu panier ... */}</>
      )}
    </div>
  );
}
