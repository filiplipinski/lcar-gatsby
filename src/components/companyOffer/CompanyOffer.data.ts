import { CarJobTypeEnum } from './carJobTypeSelection/CarJobTypeSelection.types';

export const companyOfferData = {
  [CarJobTypeEnum.Detailing]: [
    {
      title: 'Usuwanie wgnieceń',
      description:
        'Usuwanie wgnieceń karoserii samochodowych bez konieczności późniejszego lakierowania metodą bezinzwazyjną PDR',
    },
    {
      title: 'Korekta lakieru',
      description:
        'Poprawienie lakieru, odświeżenie koloru, nakładanie połysku i warstw ochronnych. Odswieża wygląd auta.',
    },
    {
      title: 'Polerowanie',
      description:
        'Obróbka wykańczająca, która ma na celu uzyskanie żądanej gładkości/chropowatości i połysku powierzchni przedmiotu polerowanego.',
    },
  ],
  [CarJobTypeEnum.Rent]: [
    {
      title: 'Samochody osobowe',
      description: 'Wynajem samochodów osobowych, różnych marek, dostosowane do potrzeb klienta',
    },
    {
      title: 'Busy',
      description:
        'Wynajem busów, przystosowanych do przewożenia dużej liczby osób, bagaży, z licznymi umilaczami jazdy takie jak mocne głośniki, telewizor, podświetlenia LED, rozkładany stolik.',
    },
  ],
  [CarJobTypeEnum.Modernization]: [
    {
      title: 'Przebudowa całkowita',
      description:
        'Całkowita modernizacja i przebudowa pojazdu, nawet duzych gabarytów, czy pojazdów specjalnych.',
    },
    {
      title: 'Ulepszenia',
      description:
        'Tuningowanie - czyli ulepszanie pojazdu, zwiększenie mocy, wyglądu auta, dodanie aerodynamiczności. ',
    },
  ],
};
