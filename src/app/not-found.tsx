import Link from "next/link";
import { Mark } from "@/components/Brand";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="container not-found">
      <Mark size={40} />
      <p className="eyebrow eyebrow--center">404</p>
      <h1>This span doesn&apos;t connect.</h1>
      <p className="lede">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link className="btn btn--primary" href="/">
        Back home <ArrowRight />
      </Link>
    </div>
  );
}
