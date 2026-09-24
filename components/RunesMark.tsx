// The two-rune wordmark glyph (Huginn stroke + Muninn stroke), used in nav and footer.
export default function RunesMark() {
  return (
    <svg className="runes-mark" viewBox="0 0 306 262" aria-hidden="true">
      <g stroke="var(--huginn)" strokeWidth="30" strokeLinecap="round" fill="none">
        <path d="M15,15 V247 M103,15 V247 M15,91 L103,171" />
      </g>
      <g stroke="var(--muninn)" strokeWidth="30" strokeLinecap="round" fill="none">
        <path d="M203,15 V247 M291,15 V247 M203,15 L291,143 M291,15 L203,143" />
      </g>
    </svg>
  );
}
