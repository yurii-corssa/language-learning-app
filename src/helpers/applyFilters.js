export const applyFilters = (teachers, filters, favoriteIds = [], onlyFavorites) => {
  const { language, level, price } = filters;

  return teachers.filter((teacher) => {
    const matchesFavorite = onlyFavorites ? favoriteIds.includes(teacher.tid) : true;
    const matchesLanguage = language ? teacher.languages.includes(language) : true;
    const matchesLevel = level ? teacher.levels.includes(level) : true;
    const matchesPrice = price ? teacher.price_per_hour === Number(price) : true;

    return matchesLanguage && matchesLevel && matchesFavorite && matchesPrice;
  });
};
