const CustomerModel = require("./../database/models/customer_model");

async function index(req, res) {
    const customers = await CustomerModel.find();
    return res.json(customers);
}

async function show(req, res) {
    const { id } = req.params;
    const customer = await CustomerModel.findById(id);
    return res.json(customer);
}

async function destroy(req, res) {
    let { id } = req.params;
    await CustomerModel.findByIdAndRemove(id);
    return res.json(await CustomerModel.find());
}

async function edit(req, res) {
    const { id } = req.params;
    const customer = await CustomerModel.findById(id);
    return res.json(customer);
}

//Add feature if customer has not made booking in n months, change them to inactive
async function update(req, res) {
    const { id } = req.params;
    const {
        firstName, 
        lastName, 
        email, 
        details, 
        status
    } = req.body;

    const query = { _id: id };
    const customer = await CustomerModel.update(
        query,
        { $set: 
            {
                firstName, 
                lastName, 
                email, 
                details, 
                status
            }
        }
    );
    return res.json(customer);
}


module.exports = {
    index,
    show,
    destroy,
    update,
    edit
}