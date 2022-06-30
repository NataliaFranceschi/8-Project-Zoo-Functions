const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const openingHour = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('caso não receba parametro retorna um objeto com todas as horas', () => {
    expect(getOpeningHours()).toEqual(openingHour);
  });
  it('caso receba os parametros Monday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('caso receba os parametros Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('caso receba os parametros Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('caso receba os parametros Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrowError(new Error('The hour should represent a number'));
  });
  it('caso receba os parametros Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => { getOpeningHours('Sunday', '9:c0-AM'); }).toThrowError(new Error('The minutes should represent a number'));
  });
  it('caso receba os parametros Monday e 13:00-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('caso receba os parametros Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('caso receba um dia inválido deve lançar uma exceção', () => {
    expect(() => { getOpeningHours('Tusday', '09:00-AM'); }).toThrow();
  });
});
