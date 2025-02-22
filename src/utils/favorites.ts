
export const addToFavorites = (productId: string) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    window.dispatchEvent(new Event('favoritesUpdated'));
  }
};

export const removeFromFavorites = (productId: string) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const newFavorites = favorites.filter((id: string) => id !== productId);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
  window.dispatchEvent(new Event('favoritesUpdated'));
};

export const isInFavorites = (productId: string): boolean => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(productId);
};
