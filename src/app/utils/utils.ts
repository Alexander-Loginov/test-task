export const isObjectLike = val => val !== null && typeof val === 'object';

export const sortCompareFactory = (key): any => {
  return (a, b): number => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  };
};

export const sortArray = (arr: any[], sort): any[] => {
  const sorted = arr.sort(sortCompareFactory(sort.field));
  return sort.way === 'asc' ? sorted : sorted.reverse();
};
