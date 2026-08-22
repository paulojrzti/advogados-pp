type CornerVignetteProps = {
  side: "left" | "right";
};

export default function CornerVignette({ side }: CornerVignetteProps) {
  const isLeft = side === "left";
  const positionClass = isLeft ? "left-0" : "right-0";
  const anchor = isLeft ? "left center" : "right center";

  return (
    <div
      className={`pointer-events-none absolute inset-y-0 ${positionClass} w-32 sm:w-48 lg:w-72`}
      style={{
        background: `radial-gradient(ellipse 100% 100% at ${anchor}, rgba(0,0,0,0.92), rgba(0,0,0,0.5) 45%, transparent 78%)`,
      }}
    />
  );
}
