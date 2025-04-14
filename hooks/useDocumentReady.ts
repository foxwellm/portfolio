import { useEffect, useState } from "react";

export function useDocumentReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleReady = () => setIsReady(true);

    if (document.readyState === "complete" || document.readyState === "interactive") {
      handleReady();
    } else {
      document.addEventListener("DOMContentLoaded", handleReady);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleReady);
    };
  }, []);

  return isReady;
}
