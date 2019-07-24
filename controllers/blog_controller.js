const BlogModel = require("./../database/models/blog_model");

async function create(req, res) {
    const { 
        title, 
        body, 
        tags
   } = req.body;
   
    const blogPost = await BlogModel.create(
        {
           title,
           body,
           tags
           }
    ).catch(err => res.status(500).send(err));
   
    res.json(blogPost);
}

async function index(req, res) {
    const blog = await BlogModel.find()
    .catch(err => res.status(500).send(err));
    res.json(blog);
}

async function show(req, res) {
    const { id } = req.params;
    const blogPost = await BlogModel.findById(id)
    .catch(err => res.status(500).send(err));
    res.json(blogPost);
}

async function destroy(req, res) {
    let { id } = req.params;
    await BlogModel.findByIdAndRemove(id)
    .catch(err => res.status(500).send(err));
    res.json(await BlogModel.find());
}

async function edit(req, res) {
    const { id } = req.params;
    const blogPost = await BlogModel.findById(id)
    .catch(err => res.status(500).send(err));
    res.json(blogPost);
}

async function update(req, res) {
    const { id } = req.params;
    const {
        title, 
        body, 
        tags
    } = req.body;

    const query = { _id: id };
    await BlogModel.updateOne(
        query,
        { $set: 
            {
                title, 
                body, 
                tags
            }
        }
    ).catch(err => res.status(500).send(err));
    return res.json(await BlogModel.findById(id));
}


module.exports = {
    create,
    index,
    show,
    destroy,
    update,
    edit
}