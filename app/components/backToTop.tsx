'use client'
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = 300;
      const bottomThreshold = 200; // Adjust this value as needed

      if (scrollY > scrollThreshold && scrollY + windowHeight < document.documentElement.scrollHeight - bottomThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Transition
      show={isVisible}
      as={React.Fragment}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-25"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-25"
      leaveTo="opacity-0"
    >
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gray-800 hover:opacity-75 ease-in-out duration-100 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </Transition>
  );
};

export default BackToTop;
