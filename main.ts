export function main(): string {
  const line = "The kettle hums and steam curls like a small cloud that forgot the sky, turning an ordinary morning softly miraculous.";
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  return line;
}
