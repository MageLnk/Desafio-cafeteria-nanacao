const supertest = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("Test get -/cafes- path for 200 code", async () => {
    const response = await supertest(server).get("/cafes").send();
    const status = response.statusCode;
    const { body: cafes } = response;
    //console.log("cafes", cafes);
    expect(status).toBe(200);
    //expect(cafes).toEqual(expect.arrayContaining([expect.objectContaining({ id: 1 })]));
    //expect(cafes).toEqual(expect.arrayContaining([expect.toMatchSnapshot({ id: expect.any(number) })]));
    //expect(cafes).toContain(expect.arrayContaining([expect.objectContaining({ id: expect.any(Number) })]));
    //expect(cafes).toEqual(expect.arrayContaining([expect.toBeInstanceOf(Object)]));
    expect(cafes).toBeInstanceOf(Array);
  });

  it("Test delete -/cafes/:id- path for 404 code in case for wrong id", async () => {
    const jwt = "jwtTest";
    const idTestingForDelete = 6;
    const response = await supertest(server).delete(`/cafes/${idTestingForDelete}`).set("Authorization", jwt).send();
    const status = response.statusCode;
    expect(status).toBe(404);
  });
});
