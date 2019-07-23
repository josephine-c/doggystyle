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
   
    console.log("Blog post created", blogPost);
    return res.json(blogPost);
}

async function index(req, res) {
    const blog = await BlogModel.find();
    return res.json(blog);
}

async function show(req, res) {
    const { id } = req.params;
    const blogPost = await BlogModel.findById(id);
    return res.json(blogPost);
}

async function destroy(req, res) {
    let { id } = req.params;
    await BlogModel.findByIdAndRemove(id);
    return res.json(await BlogModel.find());
}

async function edit(req, res) {
    const { id } = req.params;
    const blogPost = await BlogModel.findById(id);
    return res.json(blogPost);
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
    );
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