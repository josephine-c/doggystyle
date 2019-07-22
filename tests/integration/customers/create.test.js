const mongoose = require("mongoose");
const express = require("express");
const supertest = require("supertest");
const app = require("./../../../app");

beforeAll(() => {
  mongoose.connect("mongodb://localhost/deployment_test", {
    useNewUrlParser: true
  });
  mongoose.Promise = global.Promise;
  mongoose.connection.on("error", err => console.log(err));
});

afterAll(() => {
  console.log("aahhhhahahahhahhhh");
  mongoose.connection.close();
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response = await supertest(app)
      .post("/contactus")
      .send({
        name: "Nathaniel",
        email: "test@test.com",
        phone: 123456789,
        suburb: "suburb",
        dogDetails: "bacon",
        details: "bacon detailss"
      })
      .expect(200);
    expect(response.body).toEqual({});
  });
});
