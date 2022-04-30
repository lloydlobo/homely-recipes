const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

/*
This test used expect and toBe to test that two values were exactly identical.
To learn about the other things that Jest can test, see Using Matchers. => https://jestjs.io/docs/using-matchers
*/
