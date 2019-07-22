const ContactModel = require("./../database/models/contact_model");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.EMAIL_KEY
    }
  })
);

//needs to return json to react client or a jwt, authentication can be done with cors and jwt in auth header from client end
async function index(req, res) {
  const contacts = await ContactModel.find();
  return res.json(contacts);
}

async function create(req, res) {
  const { name, email, phone, suburb, dogDetails, details } = req.body;

  const contact = await ContactModel.create({
    name,
    email,
    phone,
    suburb,
    dogDetails,
    details
  }).catch(err => res.status(500).send(err));

  //enquires email sent to admin
  await transporter.sendMail({
    to: "josephine.yt.chong@gmail.com",
    from: email,
    subject: "New Enquiry/Comment",
    html: "<h1>An enquiry has been made please reply!</h1>",
    priority: "high"
  });
  //enquires email sent to user
  await transporter.sendMail({
    to: email,
    from: "dog@trainer.com",
    subject: "Enquiry/Comment has been Sent",
    html: "<h1>Your enquiry/comment has been sent!</h1>",
    priority: "high"
  });

  console.log("Message sent", contact);
  // res.redirect("/contact");
  return res.json(contact);
}

async function show(req, res) {
  const { id } = req.params;
  const contact = await ContactModel.findById(id);
  console.log(contact);
  return res.json(contact);
}

async function destroy(req, res) {
  let { id } = req.params;
  await ContactModel.findByIdAndRemove(id);
  res.redirect("/contact");
}

async function update(req, res) {
  const { id } = req.params;
  const contact = await ContactModel.findById(id);
  return res.json(contact);
}

async function edit(req, res) {
  const { id } = req.params;
  let query = { _id: id };
  const contact = await ContactModel.update(query, {
    $set: {
      name,
      email,
      phone,
      suburb,
      dogDetails,
      details
    }
  });

  return res.json(contact);
}

module.exports = {
  index,
  create,
  show,
  destroy,
  update,
  edit
};
