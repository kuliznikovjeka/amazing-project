import { classNames } from './class-names';

describe('Проверка работы функции classNames', () => {
  test('Возврат переданного класса', () => {
    const expectedValue = 'isOpen';
    expect(classNames(expectedValue)).toBe(expectedValue);
  });

  test('Работа модов по условию c falsy и truthy значением', () => {
    const expectedValue = 'class isOpen';
    expect(classNames('class', { isOpen: true, isDark: false })).toBe(expectedValue);
  });

  test('Проверка additional классов', () => {
    const expectedValue = 'class isOpen isDark';
    expect(classNames('class', {}, ['isOpen isDark'])).toBe(expectedValue);
  });

  test('Проверка работы при всех переданных аргументах ', () => {
    const expectedValue = 'class isDark isOpen';
    expect(classNames('class', { isOpen: true, isBlue: false }, ['isDark'])).toBe(expectedValue);
  });

  test('Проверка работы при undefined значении ', () => {
    const expectedValue = 'class';
    expect(classNames('class', { isOpen: undefined, isBlue: undefined }, [undefined])).toBe(
      expectedValue,
    );
  });
});
