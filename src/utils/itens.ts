export function removeItem(array: number[], item: number) {
  return array.filter((value: number) => {
    return value !== item;
  });
}
