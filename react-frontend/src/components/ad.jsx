import { useEffect, useState } from "react";

const Ad = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("ad-component");
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="ad-component"
      className={`hidden md:flex flex-col w-full md:w-[25%] h-[90%] rounded-xl mt-[2.4rem] 
      bg-cover bg-center bg-no-repeat shadow-lg
      bg-[url('https://images.unsplash.com/photo-1695345272166-4efd76dd7a21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Overlay for content */}
      <div className="flex flex-col items-center w-full h-full rounded-xl bg-black bg-opacity-50 p-4 md:p-6 text-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-[#B3B3B3] ">
          Timex
        </h2>
        <p className="text-md text-gray-500 opacity-80 mb-4">Timeless Reliability</p>
        <p className="text-sm md:text-base text-gray-300 mt-auto mb-4">
          It takes a licking and keeps on ticking. Explore reliable, affordable, and timeless watch
          designs.
        </p>
        <p className="text-xs md:text-sm text-gray-400 mb-6">
          Limited-time offer: Enjoy 15% off your first purchase!
        </p>
        <button
          className="inline-block shrink-0 w-[55%] rounded-md border border-accentBackground bg-accentBackground py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-accentBackground focus:outline-none focus:ring active:text-accentBackground dark:hover:bg-blue-700 dark:hover:text-white"
          onClick={() => alert("Shop Timex Now")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Ad;
