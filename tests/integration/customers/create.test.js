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
        phone: "123456789",
        suburb: "suburb",
        dogDetails: "bacon",
        details: "bacon detailss"
      })
      .expect(200);
    expect(response.body).toEqual({});
  });
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response2 = await supertest(app)
      .post("/contactus")
      .send({
        name: "Test2NoEmail",
        email: "",
        phone: "123456789",
        suburb: "suburb",
        dogDetails: "bacon",
        details: "bacon detailss"
      })
      .expect(500);
    expect(response2.body).toEqual({});
  });
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response3 = await supertest(app)
      .post("/contactus")
      .send({
        name: "Test3NoPhoneLessThan8",
        email: "test@test.com",
        phone: "1234567",
        suburb: "suburb",
        dogDetails: "bacon",
        details: "bacon detailss"
      })
      .expect(500);
    expect(response3.body).toEqual({});
  });
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response4 = await supertest(app)
      .post("/contactus")
      .send({
        name: "Test4NoPhoneBlank",
        email: "test@test.com",
        phone: "",
        suburb: "suburb",
        dogDetails: "bacon",
        details: "bacon detailss"
      })
      .expect(500);
    expect(response4.body).toEqual({});
  });
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response5 = await supertest(app)
      .post("/contactus")
      .send({
        name: "Test5NaN",
        email: "test@test.com",
        phone: "a",
        suburb: "suburb",
        dogDetails: "bacon",
        details: "bacon detailss"
      })
      .expect(500);
    expect(response5.body).toEqual({});
  });
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response6 = await supertest(app)
      .post("/contactus")
      .send({
        name: "Test6 No Suburb",
        email: "test@test.com",
        phone: "123456789",
        suburb: "",
        dogDetails: "bacon",
        details: "bacon detailss"
      })
      .expect(500);
    expect(response6.body).toEqual({});
  });
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response7 = await supertest(app)
      .post("/contactus")
      .send({
        name: "Test 7 No dogDetails",
        email: "test@test.com",
        phone: "123456789",
        suburb: "suburb",
        dogDetails: "",
        details: "bacon detailss"
      })
      .expect(500);
    expect(response7.body).toEqual({});
  });
});

describe("The user creates a new contact", () => {
  it("POST /contactus with valid req body", async () => {
    const response8 = await supertest(app)
      .post("/contactus")
      .send({
        name: "Test8 No Details",
        email: "test@test.com",
        phone: "123456789",
        suburb: "suburb",
        dogDetails: "bacon",
        details: ""
      })
      .expect(500);
    expect(response8.body).toEqual({});
  });
});
