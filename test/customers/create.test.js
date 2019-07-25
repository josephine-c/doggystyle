require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const supertest = require("supertest");
const app = require("./../../app");

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

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact1 = await supertest(app)
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
    // expect(resContact1.body).toEqual({});
  });
});

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact2 = await supertest(app)
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
    expect(resContact2.body).toEqual({});
  });
});

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact3 = await supertest(app)
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
    expect(resContact3.body).toEqual({});
  });
});

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact4 = await supertest(app)
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
    expect(resContact4.body).toEqual({});
  });
});

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact5 = await supertest(app)
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
    expect(resContact5.body).toEqual({});
  });
});

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact6 = await supertest(app)
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
    expect(resContact6.body).toEqual({});
  });
});

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact7 = await supertest(app)
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
    expect(resContact7.body).toEqual({});
  });
});

describe("The user creates a new enquiry", () => {
  it("POST /contactus with valid req body", async () => {
    const resContact8 = await supertest(app)
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
    expect(resContact8.body).toEqual({});
  });
});

// Bookings Tests

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook1 = await supertest(app)
      .post("/bookings")
      .send({
        date: "",
        firstName: "a",
        lastName: "a",
        email: "a",
        details: "a"
      })
      .expect(500);
    expect(resBook1.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook2 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "",
        lastName: "a",
        email: "a",
        details: "a"
      })
      .expect(500);
    expect(resBook2.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook3 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "a",
        lastName: "",
        email: "a",
        details: "a"
      })
      .expect(500);
    expect(resBook3.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook4 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "a",
        lastName: "a",
        email: "",
        details: "a"
      })
      .expect(500);
    expect(resBook4.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook5 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "a",
        lastName: "a",
        email: "a",
        details: ""
      })
      .expect(500);
    expect(resBook5.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook6 = await supertest(app)
      .post("/bookings")
      .send({
        date: "a",
        firstName: "a",
        lastName: "a",
        email: "a",
        details: "a"
      })
      .expect(500);
    expect(resBook6.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook7 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: 1,
        lastName: "a",
        email: "a",
        details: "a"
      })
      .expect(500);
    expect(resBook7.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook8 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "a",
        lastName: 1,
        email: "a",
        details: "a"
      })
      .expect(500);
    expect(resBook8.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook9 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "a",
        lastName: "a",
        email: 1,
        details: "a"
      })
      .expect(500);
    expect(resBook9.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook10 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "a",
        lastName: "a",
        email: "a",
        details: 1
      })
      .expect(500);
    expect(resBook10.body).toEqual({});
  });
});

describe("The user creates a new booking", () => {
  it("POST /bookings with valid req body", async () => {
    const resBook11 = await supertest(app)
      .post("/bookings")
      .send({
        firstName: "a",
        lastName: "a",
        email: "test@test.com",
        details: "a",
        bookingDate: "Mon Jul 22 2019"
      })
      .expect(200);
    //expect(resBook11.body).toEqual({});
  });
});

// Advert test

describe("The Admin creates a new Ad", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/advert")
      .send({
        title: "a",
        body: "a",

        link: "a"
      })
      .expect(200);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Ad", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/advert")
      .send({
        body: "a",

        link: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Ad", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/advert")
      .send({
        title: "a",

        link: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Ad", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/advert")
      .send({
        title: "a",
        body: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Ad", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/advert")
      .send({
        title: "a",
        body: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

// Blogs

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/blog")
      .send({
        title: "a",
        body: "a",
        tags: "a"
      })
      .expect(200);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/blog")
      .send({
        body: "a",
        tags: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/blog")
      .send({
        title: "a",

        tags: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/blog")
      .send({
        title: "a",
        body: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

// Testimonials

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/testimonials")
      .send({
        title: "a",
        body: "a@test.com",
        author: "a"
      })
      .expect(200);
  });
});

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/testimonials")
      .send({
        body: "a@test.com",
        author: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/testimonials")
      .send({
        title: "a",

        author: "a"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});

describe("The Admin creates a new Blog", () => {
  it("POST /advert with valid req body", async () => {
    await supertest(app)
      .post("/testimonials")
      .send({
        title: "a",
        body: "a@test.com"
      })
      .expect(500);
    //expect(resBook11.body).toEqual({});
  });
});
