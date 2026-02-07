import { reverseString } from "./reverseString";

test('reverse the string',()=>{
    expect(reverseString("mango")).toBe("ognam");
});

test('reverse the string with space', ()=>{
    expect(reverseString("hello world")).toBe("dlrow olleh");
});