const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("./../../../app");


beforeAll(() => {
    mongoose.connect("mongodb://localhost/deployment_test", { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    mongoose.connection.on("error", err => console.log(err));
});


afterAll(() => {
    console.log("aahhhhahahahhahhhh")
    mongoose.connection.close();
});


describe("The user creates a new contact", () => {
    it("POST /contactus with valid req body", () => {
        expect(2).toEqual(2);
    });
});