import { CarJobTypeEnum } from './carJobTypeSelection/CarJobTypeSelection.types';

export const companyOfferData = {
  [CarJobTypeEnum.Detailing]: [
    {
      title: 'Usuwanie wgnieceń',
      description:
        'Donec volutpat eleifend augue, quis feugiat est interdum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      title: 'Korekta lakieru',
      description:
        'Sed semper velit at porta tempor. Vestibulum eget nisi rutrum, pretium nunc nec, mollis leo. Sed at diam ut nibh pellentesque tempus eget feugiat nulla.',
    },
    {
      title: 'Polerowanie',
      description:
        'Maecenas tempor quis libero sed tristique. Ut eleifend, purus viverra placerat placerat, ante dolor volutpat odio.',
    },
  ],
  [CarJobTypeEnum.Rent]: [
    {
      title: 'Samochody osobowe',
      description:
        'Donec volutpat eleifend augue, quis feugiat est interdum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      title: 'Busy',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
  ],
  [CarJobTypeEnum.Modernization]: [
    {
      title: 'Przebudowa całkowita',
      description:
        'Donec volutpat eleifend augue, quis feugiat est interdum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada. Etiam id consequat ligula',
    },
    {
      title: 'Ulepszenia',
      description:
        'Sed semper velit at porta tempor. Vestibulum eget nisi rutrum, pretium nunc nec, mollis leo. Sed at diam ut nibh pellentesque tempus egetsenectus et n',
    },
  ],
};
