const CustomerModel = require("./../database/models/customer_model");

async function index(req, res) {
    const customers = await CustomerModel.find();
    return res.json(customers);
}

async function create(req, res) {
    const { 
        date, 
        firstName, 
        lastName, 
        email, 
        bookings,//need to get bookings of 
        status
    } = req.body;
    
    const customer = await CustomerModel.create(
        { 
            date, 
            firstName, 
            lastName, 
            email, 
            bookings,
            status
        }
    ).catch(err => res.status(500).send(err));
  
    return res.json(customer);

}

async function show(req, res) {
    const { id } = req.params;
    const booking = await BookingModel.findById(id);
    console.log(booking);
    // res.render("test");
    return res.json(booking);
}

async function destroy(req, res) {
    let { id } = req.params;
    await BookingModel.findByIdAndRemove(id);
    res.redirect("/booking");
}

async function update(req, res) {
    const { id } = req.params;
    const booking = await BookingModel.findById(id);
    return res.json(booking);
}

//function may need fixing
async function edit(req, res) {
    const { id } = req.params;
    let query = { _id: id };
    const booking = await BookingModel.update(
        query,
        { $set: 
            {
                date, 
                firstName, 
                lastName, 
                email, 
                details, 
                status, 
                paid 
            }
        }
    );
    return res.json(booking);
}


module.exports = {
    index,
    create,
    show,
    destroy,
    update,
    edit
}