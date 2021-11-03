const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () => {
  service.generateRandomNumber = jest.fn().mockReturnValue(10);

  expect(service.generateRandomNumber().toBe(10));
  expect(service.generateRandomNumber).toHaveBeenCalled();
  expect(service.generateRandomNumber).toHaveBeenCalled(1);
});