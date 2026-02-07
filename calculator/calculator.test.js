import { calculator } from "./calculator";

test('add 1, 2 to get 3',()=>{
    expect(calculator.add(2,3)).toBe(5);
});
test('subtract 3 from 5 to get 2', ()=>{
    expect(calculator.subtract(5,3)).toBe(2);
});
test('multiply 3 from 5 to get 15',()=>{
    expect(calculator.multiply(5,3)).toBe(15);
});
test('divide 5 by 2 to get 2.5',()=>{
    expect(calculator.divide(5,2)).toBe(2.5);
});