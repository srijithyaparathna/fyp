import { useState, useEffect } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img"); // Get all images on the page
    let loadedCount = 0;

    const checkImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setIsLoading(false); // Hide loader when all images are loaded
      }
    };

    if (images.length === 0) {
      setIsLoading(false); // If there are no images, hide loader immediately
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded(); // If image is already loaded, count it
      } else {
        img.addEventListener("load", checkImagesLoaded);
        img.addEventListener("error", checkImagesLoaded); // Handle errors
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", checkImagesLoaded);
        img.removeEventListener("error", checkImagesLoaded);
      });
    };
  }, []);

  if (!isLoading) return null; // Hide loader when all images are loaded

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xl z-50 transition-opacity duration-700">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default PageLoader;
