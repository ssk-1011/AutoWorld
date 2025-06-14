import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { CartProvider } from '../context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoWorld - Premium Cars and Motorcycles',
  description: 'Your premium destination for cars and motorcycles',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <header>
            <div className="container">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">AutoWorld</div>
                <nav>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/cars">Cars</Link>
                    </li>
                    <li>
                      <Link href="/bikes">Bikes</Link>
                    </li>
                    <li>
                      <Link href="/cart">Cart</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main>
            <div className="container">
              {children}
            </div>
          </main>

          <footer>
            <div className="container">
              <div className="footer-grid">
                <div className="footer-section">
                  <h3>About Us</h3>
                  <p>
                    Your trusted source for premium cars and motorcycles. We bring you the best selection of vehicles from around the world.
                  </p>
                </div>
                <div className="footer-section">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/cars">Cars</Link></li>
                    <li><Link href="/bikes">Bikes</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h3>Contact</h3>
                  <p>
                    Email: info@autoworld.com<br />
                    Phone: (555) 123-4567<br />
                    Address: 123 Auto Street, Car City
                  </p>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2024 AutoWorld. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
