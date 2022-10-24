import { SignUpUseCase } from "../../modules/users/useCases/signUp/SignUpUseCase";
import { UsersRepositoryInMemory } from "../repositories/InMemoryUserRepository";
import { beforeEach, describe, expect, it } from "vitest";
import { AppError } from "../../errors/AppError";

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
      password: "usertest123",
    });
    expect(user).toHaveProperty("_id");
  });
  it("Should not allow to create a new user with same email from another", async () => {
    await signUpUseCase.execute({
      name: "User Test",
      username: "user_test",
      email: "user_test@example.com",
      password: "usertest123",
    });

    await expect(
      signUpUseCase.execute({
        name: "User Test",
        username: "user_test_2",
        email: "user_test@example.com",
        password: "usertest123",
      })
    ).rejects.toEqual(new AppError("Email already registered"));
  });
  it("Should not allow to create a new user with same username from another", async () => {
    await signUpUseCase.execute({
      name: "User Test",
      username: "user_test",
      email: "user_test@example.com",
      password: "usertest123",
    });
    await expect(
      signUpUseCase.execute({
        name: "User Test",
        username: "user_test",
        email: "new_user_test@example.com",
        password: "usertest123",
      })
    ).rejects.toEqual(new AppError("Username already registered"));
  });
  it("Should not allow to create a new user with empty name", async () => {
    await expect(
      signUpUseCase.execute({
        name: "",
        username: "user_test",
        email: "user_test@example.com",
        password: "usertest123",
      })
    ).rejects.toEqual(new AppError("Name is required"));
  });
  it("Should not allow to create a new user with empty username", async () => {
    await expect(
      signUpUseCase.execute({
        name: "User Test",
        username: "",
        email: "userS_test@example.com",
        password: "usertest123",
      })
    ).rejects.toEqual(new AppError("Username is required"));
  });
  it("Should not allow to create a new user with empty email", async () => {
    await expect(
      signUpUseCase.execute({
        name: "User Test",
        username: "user_test",
        email: "",
        password: "usertest123",
      })
    ).rejects.toEqual(new AppError("Email is required"));
  });
  it("Should not allow to create a new user with empty password", async () => {
    await expect(
      signUpUseCase.execute({
        name: "User Test",
        username: "user_test",
        email: "user_test@example",
        password: "",})
    ).rejects.toEqual(new AppError("Password is required"));
      });
  it("Should not allow to create a new user with weak password", async () => {
    await expect(
      signUpUseCase.execute({
        name: "User Test",
        username: "user_test",
        email: "user_test@example.com",
        password: "2",
      })).rejects.toEqual(new AppError("Password must have at least 8 characters, 1 letter and 1 number"));
  });
  it("Should not allow to create a new user with invalid email", async () => {
    await expect(
      signUpUseCase.execute({
        name: "User Test",
        username: "user_test",
        email: "user_testexample.com",
        password: "usertest123",
      })).rejects.toEqual(new AppError("Invalid email"));
  });
});
