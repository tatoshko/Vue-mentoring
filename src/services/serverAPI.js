const getDataFromServer = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
export const getVacationBalance = async (userId) => {
  return getDataFromServer(
    `http://localhost:3000/vacationBalance?userid=${userId}`
  );
};

export const getVacations = async (userId) => {
  return getDataFromServer(`http://localhost:3000/vacations?userid=${userId}`);
};

export const getCurrentUser = async () => {
  return getDataFromServer(`http://localhost:3000/user`);
};

export const getVacationTypes = async () => {
  return getDataFromServer(`http://localhost:3000/vacationTypes`);
};
