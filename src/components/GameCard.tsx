"use client";
import { Game } from "@/types/game";
import { motion } from "framer-motion";

export default function GameCard({
  game,
  onAdd,
}: {
  game: Game;
  onAdd: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow p-4"
    >
      <img src={game.image} alt={game.title} className="rounded mb-4" />
      <h2 className="text-lg font-bold">{game.title}</h2>
      <p className="text-gray-600">{game.price}€</p>
      <button
        onClick={onAdd}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Ajouter au panier
      </button>
    </motion.div>
  );
}
