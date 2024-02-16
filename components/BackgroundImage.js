import { useState, useEffect } from 'react';
import Image from 'next/image';

const BackgroundImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrls = ['/image5.jpeg', '/image6.jpeg', '/image7.jpeg']; // Use your high-quality image URLs here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change the interval duration as needed (5000 milliseconds = 5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-image">
      {/* Display the current background image */}
      <div className="background-img-container">
        <Image
          src={imageUrls[currentImageIndex]}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100} // Adjust image quality as needed
        />
      </div>
      <style jsx>{`
        .background-image {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .background-img-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default BackgroundImage;
