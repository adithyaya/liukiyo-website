// src/app/App.tsx
import { useState } from "react";
import DoorIntro from "../components/DoorIntro";
import BrandVideo from "../components/BrandVideo";
import LiveHomepage from "../components/LiveHomepage";
import type { SequenceState } from "./sequenceMachine";

export default function App() {
  const [state, setState] = useState<SequenceState>("INTRO_DOOR");

  return (
    <>
      {state === "INTRO_DOOR" && (
        <DoorIntro onComplete={() => setState("BRAND_VIDEO")} />
      )}

      {state === "BRAND_VIDEO" && (
        <BrandVideo onComplete={() => setState("LIVE_HOMEPAGE")} />
      )}

      {state === "LIVE_HOMEPAGE" && <LiveHomepage />}
    </>
  );
}