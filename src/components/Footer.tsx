import Link from "next/link";
import { site } from "@/content";
import { Lockup } from "./Brand";
import { NodeDivider } from "./Truss";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <NodeDivider />
        <div className="site-footer__inner">
          <Link href="/" aria-label={`${site.name}, home`}>
            <Lockup compact />
          </Link>
          <ul className="site-footer__links">
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="mono site-footer__meta">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
