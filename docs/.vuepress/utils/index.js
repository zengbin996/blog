export const IsMedia = () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return 'm';
  }
  return 'p';
};
