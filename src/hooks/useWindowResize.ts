import { useEffect, useState } from "react";

export function useWindowResize(breakpointTrigger?: number): {
  width: number;
  isBelowBreakpoint: boolean;
} {
  const [width, setWidth] = useState(0);
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);

      if (!breakpointTrigger) return;

      if (breakpointTrigger > newWidth) {
        setIsBelowBreakpoint(true);
      } else {
        setIsBelowBreakpoint(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpointTrigger]);

  return { width, isBelowBreakpoint };
}
