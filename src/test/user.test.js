import User from "../models/user.js";
describe("Tests for User Model", () => {
  it("should output basic user properties", () => {
    const user = new User(1, "john_doe", "john@example.com");

    // Check if properties are set correctly
    expect(user.userId).toBe(1);
    expect(user.username).toBe("john_doe");
    expect(user.email).toBe("john@example.com");
  });
});
