const AdvertModel = require("./../database/models/advert_model");

async function create(req, res) {
    const { 
        title, 
        body, 
        image,
        link
   } = req.body;
   
    const advertPost = await AdvertModel.create(
        {
           title,
           body,
           image,
           link
           }
    ).catch(err => res.status(500).send(err));
   
    console.log("Advert post created", advertPost);
    return res.json(advertPost);
}

async function index(req, res) {
    const blog = await AdvertModel.find();
    return res.json(blog);
}

async function show(req, res) {
    const { id } = req.params;
    const advertPost = await AdvertModel.findById(id);
    return res.json(advertPost);
}

async function destroy(req, res) {
    let { id } = req.params;
    await AdvertModel.findByIdAndRemove(id);
    return res.json(await AdvertModel.find());
}

async function edit(req, res) {
    const { id } = req.params;
    const advertPost = await AdvertModel.findById(id);
    return res.json(advertPost);
}

async function update(req, res) {
    const { id } = req.params;
    const {
            title,
            body,
            image,
            link
    } = req.body;

    const query = { _id: id };
    await AdvertModel.updateOne(
        query,
        { $set: 
            {
            title,
            body,
            image,
            link
            }
        }
    );
    return res.json(await AdvertModel.findById(id));
}


module.exports = {
    create,
    index,
    show,
    destroy,
    update,
    edit
}