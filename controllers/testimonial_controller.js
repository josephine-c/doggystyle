const TestimonialModel = require("./../database/models/testimonial_model");

async function create(req, res) {
    const { title, body, author } = req.body;

    const testimonial = await TestimonialModel.create({ title, body, author })
    .catch(err => res.status(500).send(err));
    console.log("testimonial created", testimonial);
    res.json(testimonial);
}

async function index(req, res) {
    const testimonial = await TestimonialModel.find()
    .catch(err => res.status(500).send(err));
    res.json(testimonial);
}

async function show(req, res) {
    const { id } = req.params;

    const testimonial = await TestimonialModel.findById(id)
    .catch(err => res.status(500).send(err));
    res.json(testimonial);
}

async function destroy(req, res) {
    let { id } = req.params;

    await TestimonialModel.findByIdAndRemove(id)
    .catch(err => res.status(500).send(err));
    res.json(await TestimonialModel.find());
}

async function edit(req, res) {
    const { id } = req.params;

    const testimonial = await TestimonialModel.findById(id)
    .catch(err => res.status(500).send(err));;
    res.json(testimonial);
}

async function update(req, res) {
    const { id } = req.params;
    const { title, body, author } = req.body;
    const query = { _id: id };

    await TestimonialModel.updateOne(query, { $set: { title, body, author } })
    .catch(err => res.status(500).send(err));
    res.json(await TestimonialModel.findById(id));
}

// async function approveToggle(req, res) {
//     const { id } = req.params;

//     await TestimonialModel.findById(id, (err, testimonial) => {
//         testimonial.approved = !testimonial.approved;
//         testimonial.save((err, updatedBook) => {
//             res.json(updatedBook)
//         });
//     }).catch(err => res.status(500).send(err));
// }

module.exports = {
    create,
    index,
    show,
    destroy,
    update,
    edit,
    // approveToggle
}