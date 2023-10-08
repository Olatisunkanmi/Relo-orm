// import { expect } from "chai";
// import { Relo } from "../support";

// describe("Relo", () => {
//   describe("Uninitialized Relo", () => {
//     it("throws an error when no arguments are passed", () => {
//       expect(() => new Relo()).to.throw("Invalid constructor arguments");
//     });
//   });
//   it("is a function", () => {
//     expect(Relo).to.be.a("function");
//   });

//   describe("Initialized Relo", () => {
//     it("can be initialized with options as arguments", () => {
//       const relo = new Relo("test.db", "user", "password", {});
//       expect(relo).to.be.an("object");
      
//     });

//     it("can be initialized with options as an object", () => {
//       const relo = new Relo({});
//       expect(relo).to.be.an("object");
//     });

//     it("can be initialized with a uri", () => {
//       const relo = new Relo("sqlite://test.db");
//       expect(relo).to.be.an("object");
//     });
//   });
// });
