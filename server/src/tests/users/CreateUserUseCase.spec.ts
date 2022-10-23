import { SignUpUseCase } from "../../modules/users/useCases/signUp/SignUpUseCase";
import { UsersRepositoryInMemory } from "../repositories/InMemoryUserRepository";
import { beforeEach, describe, expect, it } from "vitest";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let signUpUseCase: SignUpUseCase;

describe("All User Cases tests", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    signUpUseCase = new SignUpUseCase(usersRepositoryInMemory);
  });
  it("Should allow to create a new user", async () => {
    const user = await signUpUseCase.execute({
      name: "User Test",
      username: "user_test",
      email: "user_test@example.com",
      password: "123456",
    });
    console.log(user);
    expect(user).toHaveProperty("_id");

  });
});
