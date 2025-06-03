export default interface SkipCardProps {
  capacity: number;
  hirePeriod: number;
  price: number;
  isSelected?: boolean;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
  onSelect: () => void;
}
