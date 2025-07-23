// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Colonne 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">GameStore</h4>
          <p className="text-gray-400">
            Achetez vos jeux préférés rapidement et en toute sécurité.
          </p>
        </div>

        {/* Colonne 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-blue-400">
                Accueil
              </a>
            </li>
            <li>
              <a href="/games" className="hover:text-blue-400">
                Jeux
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-blue-400">
                Panier
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-blue-400">
                Connexion
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8">
        &copy; {new Date().getFullYear()} GameStore. Tous droits réservés.
      </div>
    </footer>
  );
}
