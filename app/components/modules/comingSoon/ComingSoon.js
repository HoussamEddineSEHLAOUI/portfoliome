'use client'
// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when component mounts (client-side)
    setLoading(false);
    
    const targetDate = new Date('2025-03-31T23:59:59');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };
    
    // Update time left immediately
    setTimeLeft(calculateTimeLeft());
    
    // Update time left every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format number to always have 2 digits
  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800 text-white p-4">
      <Head>
        <title>Coming Soon | Launching March 31, 2025</title>
        <meta name="description" content="We are launching soon! Stay tuned for something amazing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl mb-12">We&apos;re working hard to bring you something amazing. Stay tuned!</p>
        
        {loading ? (
          <div className="text-xl">Loading countdown...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl">
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(timeLeft.days)}
              </div>
              <div className="text-lg mt-2">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(timeLeft.hours)}
              </div>
              <div className="text-lg mt-2">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(timeLeft.minutes)}
              </div>
              <div className="text-lg mt-2">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(timeLeft.seconds)}
              </div>
              <div className="text-lg mt-2">Seconds</div>
            </div>
          </div>
        )}
      </main>
      
      <footer className="w-full max-w-4xl mx-auto mt-auto pt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Sehlaoui houssam eddine . All rights reserved.</p>
      </footer>
    </div>
  );
}