// src/app/sequenceMachine.ts
export type SequenceState =
  | "INTRO_DOOR"
  | "BRAND_VIDEO"
  | "LIVE_HOMEPAGE";

export function nextState(state: SequenceState): SequenceState {
  switch (state) {
    case "INTRO_DOOR":
      return "BRAND_VIDEO";
    case "BRAND_VIDEO":
      return "LIVE_HOMEPAGE";
    default:
      return "LIVE_HOMEPAGE";
  }
}