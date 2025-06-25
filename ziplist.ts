function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): (T | U)[] {
  return list1.reduce<(T | U)[]>((acc, val, i) => {
    acc.push(val, list2[i]);
    return acc;
  }, []);
}

// Example usage:
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
