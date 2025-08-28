import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-bgSoft text-bgLight px-6 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-heading text-highlight">ZANTETSU</h2>
          <p className="mt-3 text-gray-300 text-sm">
            Premium Anime Action Figures, Katanas & Merch – True to pictures,
            trusted by fans.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-subheading text-xl font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-highlight transition-colors">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="hover:text-highlight transition-colors">
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li className="hover:text-highlight transition-colors">
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li className="hover:text-highlight transition-colors">
              <NavLink to={"/return-and-refund"}>Return & Refund</NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-subheading text-xl font-semibold mb-3">
            Customer Support
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-highlight" /> care@zantetsu.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-highlight" /> +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-subheading text-xl font-semibold mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-bgMuted hover:bg-highlight transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-bgMuted hover:bg-highlight transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-bgMuted hover:bg-highlight transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 pt-6 border-t border-bgMuted text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Zantetsu Store. All Rights Reserved.
      </div>
    </footer>
  );
}
