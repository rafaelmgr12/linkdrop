import { CreateLinkUseCase } from './../../src/modules/links/useCase/create/CreateLinkUseCase';
import { beforeEach, describe, expect, it } from "vitest";
import { LinkRepositoryInMemory } from "../repositories/InMemoryLinkRepository";

let linksRepositoryInMemory: LinkRepositoryInMemory;
let createLinkUseCase: CreateLinkUseCase;

describe("Create Link Use Case tests", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new LinkRepositoryInMemory();
    createLinkUseCase = new CreateLinkUseCase(linksRepositoryInMemory);

  });
  it("Should allow to create a new link", async () => {
    const link = await createLinkUseCase.execute({
      title: "Link Test",
      url: "https://linktest.com",
      description: "Link Test Description",
      user_id: "1",
    });
    expect(link).toHaveProperty("_id");
  })

});
