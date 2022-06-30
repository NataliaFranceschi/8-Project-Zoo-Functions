const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('caso receba o parametro count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('caso receba o parametro name retorna um array que contenha o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('caso receba o parametro averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('caso receba o parametro location retorna NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('caso receba o parametro popularity retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('caso receba o parametro availability retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('caso não receba parametros retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('caso receba um objeto vazio ({}) retorna a string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('caso receba uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('lastName')).toBe(null);
  });
});
