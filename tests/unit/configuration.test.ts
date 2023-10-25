import { expect } from "chai";
import { Relo, getTestDialect } from "../support";

const dialect = getTestDialect();
describe("Relo Constructor", () => {
  it("throws when no dialect is supplied", () => {
    expect(() => {
      new Relo("localhost, test", "test-password");
    }).to.throw(Error);
  });

  it("throws when dialect is not an object", () => {
    expect(() => {
      new Relo("localhost, test", "test-password", "test");
    }).to.throw(Error);
  });

  // it("works when dialect is supplied", () => {
  //   expect(() => {
  //     new Relo("localhost", "test", "test", {
  //       dialect,
  //     });
  //   }).not.to.throw(Error);
  // });
});

