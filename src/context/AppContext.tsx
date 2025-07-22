"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type User = {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  password?: string;
};

type Game = {
  id: string | number;
  title: string;
  price: number;
  image?: string;
};

type AppContextType = {
  user: User | null;
  cart: Game[];
  login: (user: User) => void;
  logout: () => void;
  addToCart: (game: Game) => void;
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Game[]>([]);

  // Charger user et cart au démarrage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));

    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Sauvegarder panier à chaque changement
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  };

  const addToCart = (game: Game) => {
    setCart((prev) => [...prev, game]);
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((game) => game.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        cart,
        login,
        logout,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext doit être utilisé dans un AppProvider");
  }
  return context;
}
