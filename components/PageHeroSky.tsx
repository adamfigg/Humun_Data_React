// The smaller night sky behind each subpage hero. The single drawn flight path is
// tinted Huginn-blue ("h") or Muninn-amber ("m") depending on the page.
export default function PageHeroSky({ variant }: { variant: "h" | "m" }) {
  return (
    <svg
      className="sky"
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g opacity=".6">
        <circle className="star tw" cx="220" cy="90" r="1.3" />
        <circle className="star tw" cx="480" cy="60" r="1" />
        <circle className="star tw" cx="720" cy="110" r="1.5" />
        <circle className="star tw" cx="960" cy="70" r="1.1" />
        <circle className="star tw" cx="1120" cy="160" r="1.2" />
        <circle className="star tw" cx="340" cy="200" r="1" />
        <circle className="star tw" cx="620" cy="240" r="1.2" />
        <circle className="star tw" cx="880" cy="210" r="1" />
        <circle className="star tw" cx="140" cy="300" r="1.1" />
        <circle className="star tw" cx="1040" cy="320" r="1.3" />
      </g>
      <path
        className={`flight ${variant}`}
        pathLength={1}
        d="M-40,340 C300,140 720,110 1240,220"
      />
    </svg>
  );
}
