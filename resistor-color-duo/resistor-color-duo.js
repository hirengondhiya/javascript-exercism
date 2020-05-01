import {colorCode} from './resistor-color';

export const decodedValue = (colors) => {
  return (colorCode(colors[0]).toString() + colorCode(colors[1]).toString()) * 1;
};
