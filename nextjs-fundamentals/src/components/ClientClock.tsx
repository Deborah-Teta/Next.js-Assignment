'use client';

import { useState, useEffect } from "react";

export default function ClientClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-2xl font-mono font-semibold">
      {time.toLocaleTimeString()}
    </p>
  );
}