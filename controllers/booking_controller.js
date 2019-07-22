const BookingModel = require("./../database/models/booking_model");
const CustomerModel = require("./../database/models/customer_model");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.EMAIL_KEY
    }
  })
);

//retrieves all confirmed bookings and creates object holding booking count on each date
async function getConfirmed(req, res) {
  const bookings = await BookingModel.find({ status: "Confirmed" });

  let count = bookings.reduce((acc, obj) => {
    if (!acc[obj.bookingDate]) {
      acc[obj.bookingDate] = 1;
    } else {
      acc[obj.bookingDate]++;
    }
    return acc;
  }, {});

  return res.json(count);
}

async function confirm(req, res) {
  const { id } = req.params;
  const query = { _id: id };
  await BookingModel.updateOne(query, {
    $set: {
      status: "Confirmed"
    }
  });

  return res.json(await BookingModel.findById(id));
}

async function index(req, res) {
  const bookings = await BookingModel.find();
  return res.json(bookings);
}

//send email to both user and admin when booking is completed
async function create(req, res) {
  const {
    date,
    bookingDate,
    firstName,
    lastName,
    email,
    details,
    status,
    paid
  } = req.body;

  const booking = await BookingModel.create({
    date,
    bookingDate,
    firstName,
    lastName,
    email,
    details,
    status,
    paid
  }).catch(err => res.status(500).send(err));

  //should move into services
  //bookng email sent to admin
  await transporter.sendMail({
    to: [
      "johnrubio93@gmail.com",
      "kensukeshibata@gmail.com",
      "josephine.yt.chong@gmail.com",
      "nathanielmorales01@gmail.com"
    ],
    from: email,
    subject: "Booking Pending",
    html: "<h1>A booking has been made please confirm!</h1>",
    priority: "high"
  });
  //bookng email sent to user
  await transporter.sendMail({
    to: [
      "johnrubio93@gmail.com",
      "kensukeshibata@gmail.com",
      "josephine.yt.chong@gmail.com",
      "nathanielmorales01@gmail.com"
    ],
    from: "dog@trainer.com",
    subject: "Booking Sent",
    html: "<h1>Your booking has been sent!</h1>",
    priority: "high"
  });

  //may move this to customer controller
  //if customer email does not already exist, create new customer with it
  //else push booking to existing customer
  const customer = await CustomerModel.findOne({ email: email });
  if (!customer) {
    const customer = await CustomerModel.create({
      date,
      firstName,
      lastName,
      email,
      bookings: [booking],
      status
    }).catch(err => res.status(500).send(err));
    console.log("Customer created", customer);
  } else {
    customer.bookings.push(booking);
    await customer.save();
  }

  console.log("Booking created", booking);
  // return res.json(booking);
  return res.send(200, { message: "ok" });
}

async function show(req, res) {
  const { id } = req.params;
  const booking = await BookingModel.findById(id);
  return res.json(booking);
}

async function destroy(req, res) {
  let { id } = req.params;
  await BookingModel.findByIdAndRemove(id);
  console.log("deleted the booking");
  return res.json(await BookingModel.find());
}

async function edit(req, res) {
  const { id } = req.params;
  const booking = await BookingModel.findById(id);
  return res.json(booking);
}

async function update(req, res) {
  console.log("params extract", req.params.id);
  console.log("last name extract", req.body.lastName);

  const { id } = req.params;
  const {
    bookingDate,
    firstName,
    lastName,
    email,
    details,
    status,
    paid
  } = req.body;

  const query = { _id: id };
  await BookingModel.updateOne(query, {
    $set: {
      bookingDate,
      firstName,
      lastName,
      email,
      details,
      status,
      paid
    }
  });

  return res.json(await BookingModel.findById(id));
}

module.exports = {
  index,
  create,
  show,
  destroy,
  update,
  edit,
  getConfirmed,
  confirm
};
