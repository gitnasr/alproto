import Link from "next/link";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <section className="flex w-full flex-col items-center bg-canvas px-xxl py-hero text-center">
      <div className="flex max-w-2xl flex-col items-center gap-lg">
        <span className="inline-flex items-center gap-xs rounded-full bg-surface-soft px-base py-xxs shadow-sm">
          <Icon name="error" size={16} className="text-primary" />
          <span className="text-caption-bold uppercase tracking-wider text-ink-deep">
            404 — Route Not Found
          </span>
        </span>
        <h1 className="text-display-lg-mobile font-semibold tracking-tight text-ink-deep md:text-display-lg">
          This endpoint returned <span className="text-primary">nothing.</span>
        </h1>
        <p className="max-w-[36rem] text-subtitle-md leading-relaxed text-charcoal">
          The page you requested doesn&rsquo;t exist or has been moved. Head back to the homepage,
          or explore our services and case studies.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-base pt-base">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-xs rounded-full bg-ink-deep px-xxl py-sm text-body-sm-bold text-canvas transition-colors duration-200 hover:bg-charcoal"
          >
            <Icon name="home" size={18} />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-xs rounded-full bg-surface-container-low px-xxl py-sm text-body-sm-bold text-ink-deep transition-colors duration-200 hover:bg-surface-container"
          >
            Explore Services
            <Icon name="arrow_forward" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
