// src/components/layout/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Sessions", href: "#sessions" },
    { name: "Speakers", href: "#speakers" },
    { name: "Ticket Options", href: "#ticket" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#180031]/80 backdrop-blur-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              BlockchainDisrupt
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-white hover:text-purple-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/tickets"
              className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Register Your Ticket
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#180031]"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-white hover:text-purple-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/tickets"
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register Your Ticket
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
