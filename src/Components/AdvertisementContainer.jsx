import React, { useState, useEffect, useCallback, useMemo } from 'react';

function AdvertisementContainer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = useMemo(
    () => [
      'https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?t=st=1693813033~exp=1693813633~hmac=e50843b0cb76490e45f34670f3b5ec06376d0ce04f0a403a882242b2be7a2663',
      'https://img.freepik.com/premium-vector/ad-template-beauty-product_317810-4010.jpg?t=st=1693813033~exp=1693813633~hmac=09c84f910f9f4795282c12a23d0e6ee61a347db18157ccb83c8c982fffd62dce',
      'https://img.freepik.com/free-vector/promo-poster-dry-stick-deodorant_88138-225.jpg?t=st=1693743298~exp=1693743898~hmac=1215f24cd133e73abcf451ebbe57acc4d03200b12135eab4e0ff608efe56abb7',
      // Add more image URLs as needed
    ],
    []
  );

  const rotateImages = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }, [imageUrls]);

  useEffect(() => {
    // Rotate images every 5 seconds (adjust the interval as needed)
    const rotationInterval = 5000;

    const intervalId = setInterval(rotateImages, rotationInterval);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [rotateImages]);

  return (
    <div className="advertisement-container">
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Advertisement ${currentImageIndex + 1}`}
      />
    </div>
  );
}

export default AdvertisementContainer;
