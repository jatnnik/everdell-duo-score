export const CardKind = {
  Building: "building",
  Critter: "critter",
  Event: "event",
} as const;

export const CardCategory = {
  Destination: "destination", // Red
  Governance: "governance", // Blue
  Production: "production", // Green
  Prosperity: "prosperity", // Purple
  Traveler: "traveler", // Tan
} as const;
