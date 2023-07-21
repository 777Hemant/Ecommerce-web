import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const Home = () => {
  const initialText = "Welcome to Hemant Mishra's Shop";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const textArray = initialText.split('');
    let animationTimer;

    setDisplayText(''); // Clear the text initially

    // Function to animate the typing effect
    const animateTyping = (index) => {
      if (index < textArray.length) {
        setDisplayText((prevText) => prevText + textArray[index]);
        animationTimer = setTimeout(() => {
          animateTyping(index + 1);
        }, 100); 
      } else {
    
        animationTimer = setTimeout(() => {
          setDisplayText('');
          animateTyping(0);
        }, 500);
      }
    };

    // Start the animation when the component mounts
    animateTyping(0);

    // Clean up the animation timer when the component unmounts
    return () => {
      clearTimeout(animationTimer);
    };
  }, [initialText]);

  return (
    <div className="min-h-screen max-w-screen flex justify-center items-center bg-gradient-to-b from-gray-800 to-indigo-900 min-h-screen p-4 text-white text-center font-serif">
      <h1 className="text-4xl font-bold mb-8">{displayText}</h1>
      <p className="text-xl mt-20 animate-bounce">
        <img
          className="w-44 h-44 rounded-full"
          src="https://img.freepik.com/premium-vector/online-shopping-logo-wordmark-collection-set-design-vector-template_556845-189.jpg?size=626&ext=jpg&ga=GA1.1.2008654676.1689830924&semt=ais"
          alt=""
        />
      </p>
    </div>
  );
};

export default Home;
