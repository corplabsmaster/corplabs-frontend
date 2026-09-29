import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { OG_IMAGE } from "@/lib/metadata";

export const alt = OG_IMAGE.alt;
export const size = { width: OG_IMAGE.width, height: OG_IMAGE.height };
export const contentType = OG_IMAGE.type;

/**
 * Site-wide OpenGraph/Twitter card, generated at build time. Pages don't
 * inherit it on their own — any page-level openGraph replaces it — so
 * pageMetadata() in lib/metadata.ts references it explicitly.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 500px at 50% -10%, #2b0a70 0%, #07070c 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#5300ea",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Bringing your ideas to life, one line of code at a time
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#b28aff" }}>
          {`${site.tagline} · Malaysia & Singapore`}
        </div>
      </div>
    ),
    size
  );
}
