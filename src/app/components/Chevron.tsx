"use client";

import Lottie from "lottie-react";
import chevronAnimation from "../../../public/animations/chevron.json";
import { useEffect, useState } from "react";

export function Chevron() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-50 h-50">
      {show && <Lottie animationData={chevronAnimation} loop autoplay />}
    </div>
  );
}
