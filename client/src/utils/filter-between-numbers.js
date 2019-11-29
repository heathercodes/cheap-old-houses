
import { parseNumber } from './parse-data';

export default function filterBetween(searchPrice, housePrice) {
  const min = parseNumber(searchPrice) / 1.5;
  const max = parseNumber(searchPrice) * 1.5;

  return parseNumber(housePrice) >= min && parseNumber(housePrice) <= max;
}
