import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Scale Company — Sua máquina de aquisição jurídica, pronta para crescer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const heroBg = await readFile(
  join(process.cwd(), "public/images/hero-home-bg.png"),
  "base64"
);
const heroBgSrc = `data:image/png;base64,${heroBg}`;

const canelaRegular = await readFile(
  join(process.cwd(), "src/fonts/canela-deck/CanelaDeck-Regular-Trial.otf")
);
const canelaBold = await readFile(
  join(process.cwd(), "canela-text-trial/CanelaDeck-Bold-Trial.otf")
);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#000000",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroBgSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(0deg, #000000 8%, rgba(0,0,0,0.78) 38%, rgba(0,0,0,0.35) 68%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 56,
            left: 64,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 10,
              height: 34,
              backgroundColor: "#3A43E3",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontFamily: "Canela",
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: "0.02em",
              color: "#ffffff",
            }}
          >
            Scale
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            bottom: 64,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
            }}
          >
            <div style={{ width: 28, height: 1, backgroundColor: "#ffffff" }} />
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Especialistas em Marketing Jurídico
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Canela",
              fontWeight: 700,
              fontSize: 58,
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              maxWidth: 980,
            }}
          >
            <span>Sua máquina de aquisição jurídica,&nbsp;</span>
            <span style={{ color: "#6C86FF" }}>pronta para crescer.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 25,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 760,
            }}
          >
            Estratégia, tráfego, design e conteúdo em uma única operação de
            aquisição previsível.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Canela", data: canelaRegular, style: "normal", weight: 400 },
        { name: "Canela", data: canelaBold, style: "normal", weight: 700 },
      ],
    }
  );
}
