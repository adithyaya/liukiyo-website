export const liukiyoTheme = {
  colors: {
    skyWhisper: "#F7FBFE",
    angelMist: "#F0F7FD",
    babyBlueCloud: "#E6F1FA",
    softSkyWash: "#C9DEEF",
    powderBlueHaze: "#AFCBE3",
    coolCerulean: "#8EB1D1",
    babyBlueEyes: "#A7C7E7",
    goldFusion: "#79864B",
    mistyMoss: "#BDB77C",
    spanishBistre: "#78793F",
    darkTan: "#8A7D4C",
    pullmanGreen: "#27301B",
    bronzetone: "#41521E",
    ickyGreen: "#909632",
    greenSmoke: "#99A558",
    orinoco: "#D8DDA8",
    ivory: "#FDFBF7",
    ink: "#30362A",
  },
  spacing: { xs: "0.5rem", sm: "1rem", md: "1.5rem", lg: "2.5rem", xl: "4rem", section: "clamp(6rem, 11vw, 10rem)" },
  radius: { soft: "1.25rem", card: "2rem", frame: "2.75rem", pill: "999px" },
  shadows: {
    whisper: "0 10px 35px rgba(75, 92, 105, 0.06)",
    card: "0 22px 60px rgba(71, 91, 108, 0.09)",
  },
  typography: {
    display: '"Cormorant Garamond", serif',
    body: '"EB Garamond", serif',
    script: '"Allura", cursive',
  },
  duration: { fast: 220, standard: 420, slow: 800 },
} as const;

export type LiukiyoTheme = typeof liukiyoTheme;
