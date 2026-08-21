import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "logo.png"),
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1f3a 0%, #14356a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori (ImageResponse) requires a plain <img>, not next/image */}
          <img src={logoDataUrl} width={72} height={72} alt="" style={{ borderRadius: "50%" }} />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "white" }}>
            {siteConfig.companyName}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 46, fontWeight: 700, color: "white", maxWidth: 900, lineHeight: 1.2 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#cbd5e1", marginTop: 20, maxWidth: 850 }}>
          {siteConfig.shortDescription}
        </div>
      </div>
    ),
    { ...size },
  );
}
