"use client";

import GameCard from "@/components/GameCard";
import { games } from "@/data/games";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const { addToCart } = useAppContext();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 rounded-md mb-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenue sur GameStore 🎮
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Achetez vos jeux préférés en un clic !
        </p>
        <Link
          href="/games"
          className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-100 transition"
        >
          Voir tous les jeux
        </Link>
      </section>

      {/* Jeux en vedette */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🎯 Jeux en vedette</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.slice(0, 6).map((game) => (
            <GameCard key={game.id} game={game} onAdd={() => addToCart(game)} />
          ))}
        </div>
      </section>

      {/* Appel à action */}
      <section className="text-center mt-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Prêt à jouer ?</h3>
          <Link
            href="/cart"
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
          >
            Finaliser mon panier
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
