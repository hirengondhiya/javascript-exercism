const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = (colors) => {
  return colors
            .filter((c, i) => i < 2) // take first two elements only, this line can be removed if we want to add up all the passed color values
            .reverse() // reverse them
            .reduce((sum, color, index) => sum + COLORS.indexOf(color) * 10 ** index, 0); // using reducer sum all the values as we do with decimal system
};
