const TestimonialModel = require("./../database/models/testimonial_model");

async function create(req, res) {
    const { author, body, dog} = req.body;

    const testimonial = await TestimonialModel.create({ author, body, dog })
    .catch(err => res.status(500).send({msg: err}));
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
    const { author, body, dog } = req.body;
    const query = { _id: id };

    await TestimonialModel.updateOne(query, { $set: { author, body, dog } })
    .catch(err => res.status(500).send(err));
    res.json(await TestimonialModel.findById(id));
}

module.exports = {
    create,
    index,
    show,
    destroy,
    update,
    edit
}