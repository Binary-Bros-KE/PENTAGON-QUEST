export const galleryImages = [
  ...Array.from({ length: 19 }, (_, index) => `/gallery/img-${index + 1}.jpeg`),
  ...[21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42].map(
    (imageNumber) => `/gallery/img-${imageNumber}.jpeg`
  ),
  '/gallery/img-43.png',
  '/gallery/img-44.png',
  '/gallery/img-45.png',
];
