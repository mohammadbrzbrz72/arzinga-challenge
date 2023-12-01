export function removeItemFromArray(value: number, array: number[]) {
  const index = array.indexOf(value);
  if (index > -1) {
    // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
  }

  return array;
}
