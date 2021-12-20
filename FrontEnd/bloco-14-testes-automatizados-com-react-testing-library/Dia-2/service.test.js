// requisito 1
const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () => {
  service.generateRandomNumber = jest.fn().mockReturnValue(10);

  expect(service.generateRandomNumber().toBe(10));
  expect(service.generateRandomNumber).toHaveBeenCalled();
  expect(service.generateRandomNumber).toHaveBeenCalled(1);
});
// requisito 2

test("testando se a função foi chamada e a nova implementação de divisão foi aplicada", () => {
  service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.generateRandomNumber(10, 2)).toBe(5);
  expect(service.generateRandomNumber).toHaveBeenCalled();
  expect(service.generateRandomNumber).toHaveBeenCalled(1);
  expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 2);
});

//requisito 3

test("testando se a função retorna a mutiplicação dos parâmetros", () => {
  service.generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(service.generateRandomNumber(2, 3, 4)).toBe(24);
  expect(service.generateRandomNumber).toHaveBeenCalled();
  expect(service.generateRandomNumber).toHaveBeenCalled(1);
  expect(service.generateRandomNumber).toHaveBeenCalledWith(2, 3, 4);
});