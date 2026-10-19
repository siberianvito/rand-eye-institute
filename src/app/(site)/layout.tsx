import AccessibilityWidget from "@/components/AccessibilityWidget";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import StickyCall from "@/components/StickyCall";

/**
 * Chrome for the public site. Pages outside this group, such as the unlisted
 * referral form, render without a header, a footer or a sticky call button so
 * there is nothing on them to navigate away with.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-blue-brand focus:px-5 focus:py-3 focus:text-white focus:font-semibold"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <StickyCall />
      <AccessibilityWidget />
    </>
  );
}
