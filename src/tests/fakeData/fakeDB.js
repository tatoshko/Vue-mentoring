module.exports = () => {
  const { faker } = require("@faker-js/faker/locale/ru");

  const FAKE_DATA_COUNT = 100;

  const vacationTypes = [
    { name: "Очердной отпуск", type: "VAC" },
    { name: "Внеочередной отпуск", type: "EXT" },
    { name: "Больничный", type: "ILL" },
  ];

  const createVacation = () => {
    const startDate = faker.date.past(2);
    return {
      id: faker.datatype.uuid(),
      userId: faker.random.numeric(1, {
        bannedDigits: ["0", "1", "3", "5", "7", "9"],
      }),
      status: faker.helpers.arrayElement([
        "Черновик",
        "На согласование",
        "Согласован",
        "Закрыт",
      ]),
      type: faker.helpers.arrayElement([
        "Очердной",
        "Внеочередной",
        "По болезни",
        "Овертайм",
      ]),
      start: startDate,
      end: faker.date.future(0.04, startDate),
      approver: faker.name.fullName(),
    };
  };

  const createUser = () => ({
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    avatar: faker.image.abstract(),
  });

  return {
    vacations: Array.from({ length: FAKE_DATA_COUNT }).map(() =>
      createVacation()
    ),
    vacationBalance: { taken: 10, balance: 23 },
    user: createUser(),
    vacationTypes,
  };
};
