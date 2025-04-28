import { RefObject, useEffect, useRef, useState } from "react";

export function useObserveThreshold(
  containerRef: RefObject<HTMLDivElement | null>,
  threshold: number = 0.5
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsInView(false);
          } else {
            setIsInView(true);
          }
        });
      },
      {
        threshold,
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerRef, threshold]);

  return isInView;
}
