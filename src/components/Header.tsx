"use client";

import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

export default function Header() {
  const { user, logout, cart } = useAppContext();

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold">
        🎮 GameStore
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative">
          🛒 ({cart.length})
        </Link>

        {user ? (
          <>
            <Link
              href="/orders"
              className="text-sm text-gray-600 hover:underline"
            >
              Mes commandes
            </Link>
            <span className="text-sm">
              Bonjour, {user.firstName ?? user.email}
            </span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-blue-600 hover:underline">
              Connexion
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Inscription
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
