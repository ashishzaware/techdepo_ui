import Script from "next/script";

/**
 * Google Analytics (GA4) is only loaded if NEXT_PUBLIC_GA_MEASUREMENT_ID is
 * set. No tracking runs until that env var is configured. See README /
 * .env.example for setup, and Google Search Console setup is separate
 * (verify ownership via a DNS/HTML-file method — no code change needed here).
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
