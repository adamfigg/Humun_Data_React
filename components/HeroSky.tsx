// The animated night sky behind the home hero: twinkling data-stars, two drawn
// flight paths, and the two ravens (Huginn + Muninn) flying their loops.
export default function HeroSky() {
  return (
    <svg
      className="sky"
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g opacity=".7">
        <circle className="star tw" cx="180" cy="120" r="1.4" />
        <circle className="star tw" cx="340" cy="90" r="1" />
        <circle className="star tw" cx="520" cy="150" r="1.6" />
        <circle className="star tw" cx="700" cy="80" r="1.1" />
        <circle className="star tw" cx="880" cy="140" r="1.3" />
        <circle className="star tw" cx="1060" cy="100" r="1" />
        <circle className="star tw" cx="240" cy="260" r="1.1" />
        <circle className="star tw" cx="460" cy="300" r="1.5" />
        <circle className="star tw" cx="640" cy="240" r="1" />
        <circle className="star tw" cx="820" cy="290" r="1.4" />
        <circle className="star tw" cx="1000" cy="250" r="1.1" />
        <circle className="star tw" cx="1140" cy="330" r="1.3" />
        <circle className="star tw" cx="150" cy="420" r="1" />
        <circle className="star tw" cx="380" cy="480" r="1.2" />
        <circle className="star tw" cx="560" cy="430" r="1" />
        <circle className="star tw" cx="760" cy="500" r="1.5" />
        <circle className="star tw" cx="940" cy="440" r="1.1" />
        <circle className="star tw" cx="1100" cy="520" r="1" />
        <circle className="star tw" cx="90" cy="560" r="1.2" />
        <circle className="star tw" cx="620" cy="580" r="1" />
      </g>
      {/* flight paths: out over the data and back */}
      <path
        className="flight h"
        pathLength={1}
        d="M-60,320 C100,140 540,85 850,140 C1070,180 1120,300 920,352 C690,408 180,430 -60,320 Z"
      />
      <path
        className="flight m"
        pathLength={1}
        d="M-60,320 C240,480 700,535 980,465 C1160,415 1150,275 950,248 C700,214 260,225 -60,320 Z"
      />
      {/* the ravens */}
      <g className="fly-h">
        <path
          className="raven h"
          transform="scale(.72)"
          d="M9,0 C3,-.8 -1,-5 -8,-9 C-4,-4 -2,-1.4 0,-.2 C-3,.8 -6,1.8 -10,2.6 C-5,2.4 0,1 9,0 Z"
        />
      </g>
      <g className="fly-m">
        <path
          className="raven m"
          transform="scale(.72)"
          d="M9,0 C3,-.8 -1,-5 -8,-9 C-4,-4 -2,-1.4 0,-.2 C-3,.8 -6,1.8 -10,2.6 C-5,2.4 0,1 9,0 Z"
        />
      </g>
    </svg>
  );
}
