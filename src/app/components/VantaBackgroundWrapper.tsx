"use client";

import { useDocumentReady } from "../../../hooks/useDocumentReady";
import VantaBackground from "./VantaBackground";

export default function VantaBackgroundWrapper() {
  const isDocumentReady = useDocumentReady();
  return isDocumentReady ? <VantaBackground /> : <></>;
}
