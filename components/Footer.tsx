import Link from "next/link";
import RunesMark from "./RunesMark";

// Site footer, shared across all pages.
export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <span>
          HuMun <RunesMark /> &mdash; thought &amp; memory for your data
        </span>
        <nav className="f" aria-label="Footer">
          <Link href="/measurement">Measurement</Link>
          <Link href="/implementation">Implementation</Link>
          <Link href="/reporting">Reporting</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
