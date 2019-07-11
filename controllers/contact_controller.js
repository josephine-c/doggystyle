const ContactModel = require("./../database/models/contact_model");

//needs to return json to react client or a jwt, authentication can be done with cors and jwt in auth header from client end
async function index(req, res) {
    const contacts = await ContactModel.find();
    return res.json(contacts);
    // return res.render("test");
}

async function create(req, res) {
    const { 
        date,  
        email, 
        subject,
        body,
        answers 
    } = req.body;
    
    const contact = await ContactModel.create(
        { 
            date,  
            email, 
            subject,
            body,
            answers
        }
    ).catch(err => res.status(500).send(err));
  
    console.log("post", contact);
    // res.redirect("/contact");
    return res.json(contact);

}

async function show(req, res) {
    const { id } = req.params;
    const contact = await ContactModel.findById(id);
    console.log(contact);
    // res.render("test");
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

//function may need fixing
async function edit(req, res) {
    const { id } = req.params;
    let query = { _id: id };
    const contact = await ContactModel.update(
        query,
        { $set: 
            {
                date,  
                email, 
                subject,
                body,
                answers 
            }
        }
    );
    return res.json(contact);
}


module.exports = {
    index,
    create,
    show,
    destroy,
    update,
    edit
}