export function capitalizeFirstLetter(word: string) {
  if (!word) {
    return;
  }

  const firstLetter = word.charAt(0);
  return firstLetter.toUpperCase() + word.slice(1);
}
