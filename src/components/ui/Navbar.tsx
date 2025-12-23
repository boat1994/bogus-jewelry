"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";


const tranparenatNavPages = ['/', '/how-to-custom-order', '/masterpiece']

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  });

  if (pathname === '/contact') return null;

  const navLinks = [
    { href: "/how-to-custom-order", text: "สั่งทำเครื่องประดับ" },
    { href: "/our-gallery", text: "ผลงานของเรา" },
    { href: "/material-compare", text: "คู่มือวัสดุ" },
    { href: "/care-card", text: "การดูแลรักษา" },
    // { href: "/size-guide", text: "คู่มือวัดขนาด" },
    { href: "/contact", text: "ติดต่อเรา" },
  ];


  const isTransparentTopNav = tranparenatNavPages.includes(pathname)
  // Determine if we should show the white background style
  // - On Homepage: Only when scrolled and menu is closed
  // - On Other Pages: Always (unless menu is open, but usually we want the header visible)

  const showWhiteNav = !isTransparentTopNav || (scrolled && !isMobileMenuOpen);

  return (
    <>
      <motion.nav
        initial="top"
        animate={showWhiteNav ? "scrolled" : "top"}
        variants={{
          top: {
            backgroundColor: "rgba(255, 255, 255, 0)",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            borderBottomColor: "rgba(226, 216, 216, 0)",
            boxShadow: "none"
          },
          scrolled: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            borderBottomColor: "rgba(226, 232, 240, 0.5)",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
          }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${isTransparentTopNav ? "fixed" : "sticky"} top-0 z-50 w-full border-b `}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo - Left on both Mobile and Desktop */}
          <Link
            href="/"
            className="relative z-50 block w-28 h-8 md:w-32 md:h-10"
          >
            <Image
              src="/logos/nav_logo_black.png"
              alt="BOGUS"
              width={100}
              height={100}
              className={`object-contain object-left transition-all duration-300 ${showWhiteNav ? 'brightness-0' : 'brightness-0 invert'
                }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-xl uppercase tracking-[0.15em] transition-colors duration-300 py-2 font-medium ${showWhiteNav ? "text-slate-600 hover:text-slate-900" : "text-off-white/80 hover:text-white"}`}
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Right on Mobile */}
          <div className="lg:hidden z-50 flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`focus:outline-none transition-colors duration-300 ${showWhiteNav ? "text-slate-900 hover:text-bronze" : "text-off-white hover:text-bronze"}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    onClick={() => setIsMobileMenuOpen(false)}
                    href={link.href}
                    className="text-xl font-serif text-off-white/90 hover:text-bronze transition-colors tracking-wide"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
