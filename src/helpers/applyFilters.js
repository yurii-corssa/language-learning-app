export const applyFilters = (teachers, filters, favoriteIds = []) => {
  const { language, level, price, onlyFavorites } = filters;

  return teachers.filter((teacher) => {
    const matchesFavorite = onlyFavorites ? favoriteIds.includes(teacher.tid) : true;
    const matchesLanguage = language ? teacher.languages.includes(language) : true;
    const matchesLevel = level ? teacher.levels.includes(level) : true;
    const matchesPrice = price ? teacher.price_per_hour === price : true;

    return matchesLanguage && matchesLevel && matchesFavorite && matchesPrice;
  });
};
