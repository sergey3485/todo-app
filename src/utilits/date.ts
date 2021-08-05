export const getNumberDay = () => {
  const currentDate = new Date();
  const currentNumberDate = currentDate.getDate();

  return currentNumberDate;
};

export const getCurrentDay = () => {
  const currentDate = new Date();

  const dateFormat = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  });

  const dateText = dateFormat.format(currentDate);

  return (
    dateText.slice(0, 1).toUpperCase() + dateText.slice(1, dateText.length)
  );
};

export const getCurrentMonth = () => {
  const currentDate = new Date();
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    month: "long",
  });
  const monthText = dateFormat.format(currentDate);

  return monthText;
};

export const formatTodoDate = (date: Date | string) => {
  const parsedDate = new Date(date);

  const hour = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();

  return `${hour}:${minutes}`;
};
