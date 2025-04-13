"use client";

import { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

export default function VantaBackground() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1d1f20,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      id="homepage-background"
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
