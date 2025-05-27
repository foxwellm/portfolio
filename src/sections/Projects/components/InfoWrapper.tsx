export function InfoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center text-left text-[clamp(0.75rem,2vw,1rem)] px-4">
      <div className="flex flex-col gap-3 w-fit text-left">{children}</div>
    </div>
  );
}
