"use client";

import Lottie from "lottie-react";
import chevronAnimation from "../animations/chevron.json";
import { useEffect, useRef, useState } from "react";
import { useObserveThreshold } from "@/hooks";

export function Chevron() {
  const containerRef = useRef(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInView = useObserveThreshold(containerRef, 0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [userNotMoving, setUserNotMoving] = useState(false);
  const [hasLeftView, setHasLeftView] = useState(false);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setUserNotMoving(true), 1500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!userNotMoving || hasLeftView) return;

    if (isInView) {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
      setHasLeftView(true);
    }
  }, [isInView, userNotMoving, hasLeftView]);

  return (
    <div ref={containerRef} className="w-40 h-40">
      {showAnimation && (
        <Lottie animationData={chevronAnimation} loop autoplay />
      )}
    </div>
  );
}
