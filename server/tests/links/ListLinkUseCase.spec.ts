import { CreateLinkUseCase } from './../../src/modules/links/useCase/create/CreateLinkUseCase';
import { beforeEach, describe, expect, it } from "vitest";
import { LinkRepositoryInMemory } from "../repositories/InMemoryLinkRepository";
import { ListAllLinksUseCase } from './../../src/modules/links/useCase/list/ListAllLinksUseCase';

let linksRepositoryInMemory: LinkRepositoryInMemory;
let createLinkUseCase: CreateLinkUseCase;
let listAllLinksUseCase: ListAllLinksUseCase;

describe("List Links Use Case tests", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new LinkRepositoryInMemory();
    createLinkUseCase = new CreateLinkUseCase(linksRepositoryInMemory);
    listAllLinksUseCase = new ListAllLinksUseCase(linksRepositoryInMemory);

  });

  it("Should allow to list all links", async () => {
    await createLinkUseCase.execute({
      title: "Link Test",
      url: "https://linktest.com",
      description: "Link Test Description",
      user_id: "1",
    });
    await createLinkUseCase.execute({
      title: "Link Test 2",
      url: "https://linktest2.com",
      description: "Link Test Description 2",
      user_id: "1",
    });
    const links = await listAllLinksUseCase.execute();
    expect(links.length).toBe(2);
  });
 

});
