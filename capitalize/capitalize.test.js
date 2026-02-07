import { capitalize } from "./capitalize.js";

test('capitalize the first letter', ()=>{
    expect(capitalize("hello")).toBe("Hello");
});