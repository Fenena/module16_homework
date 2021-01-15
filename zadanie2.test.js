import { getPercents } from "./zadanie2.js";

describe ('Test', () => {
    const percent = 30;
    const number = 200;
    it("Проверка функции getPercents", () => {
        expect(getPercents(percent, number)).toBe(60); 
        expect(getPercents(number, percent)).toBe(60); 
        expect(getPercents()).toBe(NaN);
    });
})
