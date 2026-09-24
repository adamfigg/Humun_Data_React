import Link from "next/link";
import RunesMark from "./RunesMark";

// Top navigation, shared across all pages. Absolutely positioned over each page's hero.
export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <Link className="wordmark" href="/">
          HuMun <RunesMark />
        </Link>
        <div className="nav-links">
          <Link href="/measurement">Measurement</Link>
          <Link href="/implementation">Implementation</Link>
          <Link href="/reporting">Reporting</Link>
          <Link href="/about">About</Link>
          <Link className="btn btn-bone" href="/contact">
            Send a raven
          </Link>
        </div>
      </div>
    </nav>
  );
}
