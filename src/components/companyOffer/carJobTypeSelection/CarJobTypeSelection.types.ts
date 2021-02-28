export enum CarJobTypeEnum {
  Detailing = 'detailing',
  Rent = 'rent',
  Modernization = 'modernization',
}

export type CarJobTypeSelectionProps = {
  selectedCarJobType: CarJobTypeEnum;
  onSelect: (selectedCarJobType: CarJobTypeEnum) => void;
};
