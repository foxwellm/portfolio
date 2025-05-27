export function InfoWrapper({
  header,
  techStacks,
  description,
  links,
}: {
  header: React.ReactNode | string;
  techStacks: string[];
  description: string;
  links: React.ReactNode;
}) {
  return (
    <div className="flex justify-center text-center text-[clamp(0.75rem,2vw,1rem)] px-4">
      <div className="flex flex-col gap-3 w-fit">
        <h3 className="text-[1.75em] text-sky-400 font-bold">{header}</h3>
        <div className="flex flex-col text-gray-400 -mt-4">
          {techStacks.map((techStack, i) => {
            return (
              <span key={i} className="text-[0.75em] max-w-full text-gray-400">
                {techStack}
              </span>
            );
          })}
        </div>
        <span className="text-[0.875em] text-gray-200 max-w-full">
          {description}
        </span>
        <div className="flex justify-around items-center">{links}</div>
      </div>
    </div>
  );
}
