const supertest = require("supertest");
const { number } = require("yargs");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("Test get path for 200 code", async () => {
    const response = await supertest(server).get("/cafes").send();
    const status = response.statusCode;
    const { body: cafes } = response;
    console.log("cafes", cafes);
    expect(status).toBe(200);
    //expect(cafes).toEqual(expect.arrayContaining([expect.objectContaining({ id: 1 })]));
    //expect(cafes).toEqual(expect.arrayContaining([expect.toMatchSnapshot({ id: expect.any(number) })]));
    //expect(cafes).toContain(expect.arrayContaining([expect.objectContaining({ id: expect.any(Number) })]));
    //expect(cafes).toEqual(expect.arrayContaining([expect.toBeInstanceOf(Object)]));
    expect(cafes).toBeInstanceOf(Array);
  });
});
