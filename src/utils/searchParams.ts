export const updateSearchParam = (
  currentParams: URLSearchParams,
  key: string,
  value: string
): URLSearchParams => {
  const params = new URLSearchParams(currentParams);
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  return params;
};

export const updateCategoryFilter = (
  currentParams: URLSearchParams,
  category: string,
  checked: boolean
): URLSearchParams => {
  const params = new URLSearchParams(currentParams);
  const currentCategories = params.getAll('category');

  if (checked) {
    params.append('category', category);
  } else {
    params.delete('category');
    currentCategories
      .filter((c: string) => c !== category)
      .forEach((c: string) => params.append('category', c));
  }

  return params;
}; 