import { expect, it } from "vitest";
import { generateToken } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@example.com";

  generateToken(testUserEmail, (err, token) => {
    //  expect(token).toBeDefined();

    try {
      expect(token).toBeDefined();
      //   expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});
