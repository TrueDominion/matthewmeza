"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/resources";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

// The site is exported as static files, so pages are gated by the routes
// config only (no server-side password protection).
function isRouteEnabled(pathname: string | null): boolean {
  if (!pathname) return false;
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  if (path in routes) {
    return routes[path as keyof typeof routes];
  }

  const dynamicRoutes = ["/work"] as const;
  for (const route of dynamicRoutes) {
    if (path.startsWith(`${route}/`) && routes[route]) {
      return true;
    }
  }

  return false;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();

  if (!isRouteEnabled(pathname)) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export { RouteGuard };
