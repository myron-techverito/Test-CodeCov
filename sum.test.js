const { sum, sub, mul, div} = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("subtracts 2 from 1 to  equal 1", () => {
    expect(sub(2, 1)).toBe(1);
});

test("multiplies 2 with 1 to  equal 2", () => {
    expect(mul(2, 1)).toBe(2);
});

test("divides 2 with 1 to  equal 2", () => {
    expect(div(2, 1)).toBe(2);
});