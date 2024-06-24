// src/utils/chartUtils.ts
export const Utils = {
  months({ count }: { count: number }) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames.slice(0, count);
  },
  numbers({ count, min, max }: { count: number; min: number; max: number }) {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
  },
  rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  namedColor(index: number) {
    const colors = [
      "red",
      "blue",
      "green",
      "purple",
      "orange",
      "yellow",
      "pink",
    ];
    return colors[index % colors.length];
  },
  CHART_COLORS: {
    red: "rgba(255, 99, 132, 1)",
    blue: "rgba(54, 162, 235, 1)",
  },
  transparentize(color: string, opacity: number) {
    return color.replace("1)", `${opacity})`);
  },
};
