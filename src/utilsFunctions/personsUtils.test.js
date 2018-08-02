import {getPersonsData} from './personsUtils';

test('shouldGetTheCorectFirstPersonFromData', () => {
  expect( expect(getPersonsData()[0]).toBe("Jon-Doe-23"));
});