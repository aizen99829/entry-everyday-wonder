export function main(): string {
  const wonderLine = "The kettle hums and steam curls like a small cloud that forgot the sky, turning an ordinary morning softly miraculous.";
  if (wonderLine.length < 1 || wonderLine.length > 200) {
    throw new Error("Wonder line must be between 1 and 200 characters long.");
  }
  if (wonderLine.trim().length === 0) {
    throw new Error("Wonder line must not be empty or blank.");
  }
  return wonderLine;
}
