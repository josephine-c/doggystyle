const BookingModel = require("./../database/models/booking_model");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.EMAIL_KEY
    }
  })
);

async function index(req, res) {
  const bookings = await BookingModel.find().catch(err =>
    res.status(500).send(err)
  );
  return res.json(bookings);
}

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

  console.log("Booking created", booking);
  // return res.json(booking);
  res.send(200, { message: "ok" });
}

async function show(req, res) {
  const { id } = req.params;

  const booking = await BookingModel.findById(id).catch(err =>
    res.status(500).send(err)
  );
  return res.json(booking);
}

async function destroy(req, res) {
  let { id } = req.params;

  await BookingModel.findByIdAndRemove(id).catch(err =>
    res.status(500).send(err)
  );
  res.json(await BookingModel.find());
}

async function edit(req, res) {
  const { id } = req.params;

  const booking = await BookingModel.findById(id).catch(err =>
    res.status(500).send(err)
  );
  return res.json(booking);
}

async function update(req, res) {
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
  }).catch(err => res.status(500).send(err));
  return res.json(await BookingModel.findById(id));
}

//retrieves all confirmed bookings and creates object counting how many on each date
async function getConfirmed(req, res) {
  const bookings = await BookingModel.find({ status: "Confirmed" }).catch(err =>
    res.status(500).send(err)
  );

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

//confirms a booking
async function confirm(req, res) {
  const { id } = req.params;
  const query = { _id: id };

  await BookingModel.updateOne(query, { $set: { status: "Confirmed" } }).catch(
    err => res.status(500).send(err)
  );
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
