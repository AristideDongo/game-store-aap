"use client";
import { Game } from "@/types/game";

interface CartProps {
  items: Game[];
  onClose: () => void;
}

export default function Cart({ items, onClose }: CartProps) {
  const total = items.reduce((sum, game) => sum + game.price, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 z-50">
      <button onClick={onClose} className="mb-4 text-re d-500">
        Fermer
      </button>
      <h2 className="text-xl font-bold mb-4">Panier</h2>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {items.map((game) => (
              <li key={game.id} className="mb-2">
                {game.title} - {game.price}€
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: €{total.toFixed(2)}</p>
          <button className="mt-2 w-full px-4 py-2 bg-green-600 text-white rounded">
            Acheter
          </button>
        </>
      )}
    </div>
  );
}
