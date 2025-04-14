"use client";

import { useEffect, useState } from "react";
import VantaBackground from "./VantaBackground";

export default function VantaBackgroundWrapper() {
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  useEffect(() => {
    setIsClientLoaded(true);
  }, []);
  return isClientLoaded ? <VantaBackground /> : <></>;
}
