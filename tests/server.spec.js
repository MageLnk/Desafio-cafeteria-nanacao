const supertest = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("Test get -/cafes- path for 200 code", async () => {
    const response = await supertest(server).get("/cafes").send();
    const status = response.statusCode;
    const { body: cafes } = response;
    expect(status).toBe(200);
    expect(cafes).toBeInstanceOf(Array);
  });

  it("Test delete -/cafes/:id- path for 404 code in case you delete a wrong id", async () => {
    const jwt = "jwtTest";
    const idTestingForDelete = 6;
    const response = await supertest(server).delete(`/cafes/${idTestingForDelete}`).set("Authorization", jwt).send();
    const status = response.statusCode;
    expect(status).toBe(404);
  });

  it("Test post -/cafes- path for 201 in case to add a new cafe, and check the new cafe", async () => {
    const newRandomIdForTesting = 500;
    const newCafe = { id: newRandomIdForTesting, nombre: "Cafe test" };
    const response = await supertest(server).post("/cafes").send(newCafe);
    const cafes = response.body;
    const status = response.statusCode;
    expect(cafes).toContainEqual(newCafe);
    expect(status).toBe(201);
  });

  it("Test put -/cafes/:id- path for 400 if we try to update the cafes with a wrong id", async () => {
    const idTestingForUpdateOnPayload = 2;
    const idTestingForUpdateOnId = 3;
    const updateCafe = { id: idTestingForUpdateOnPayload, nombre: "Cafe test" };
    const response = await supertest(server).put(`/cafes/${idTestingForUpdateOnId}`).send(updateCafe);
    const status = response.statusCode;
    expect(status).toBe(400);
  });
  //
});
