export function VideoWebM({ fileName }: { fileName: string }) {
  return (
    <video
      className="w-full h-auto object-contain"
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    >
      <source
        src={`/projects/expense-tracker/${fileName}.webm`}
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  );
}
