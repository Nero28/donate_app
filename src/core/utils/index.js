import * as moment from "moment";

export const calculateSumOfNumbers = (numbers) => {
  let sum = 0;
  numbers.map((number) => {
    if (number !== Number(number)) {
      alert(`Значение ${number} не является числом!`);
      return;
    }
    sum += number;
    return sum;
  });
  return sum;
};

export const getFormattedTime = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};
