const BookingModel = require("./../database/models/booking_model");


function index(req, res) {
    return res.render("test");
}

async function create(req, res) {
    const { 
        date, 
        firstName, 
        lastName, 
        email, 
        details, 
        status, 
        paid 
    } = req.body;
    
    const booking = await BookingModel.create(
        { 
            date, 
            firstName, 
            lastName, 
            email, 
            details, 
            status, 
            paid 
        }
    ).catch(err => res.status(500).send(err));
  
    console.log(booking);
    res.redirect("/booking");

    // res.json(booking);

}

async function make(req, res) {
    res.render("test"); //should render new form
}

async function show(req, res) {
    let { id } = req.params;
    let booking = await BookingModel.findById(id);
    console.log(booking);
    res.render("test");
}

async function destroy(req, res) {
    let { id } = req.params;
    await BookingModel.findByIdAndRemove(id);
    res.redirect("/booking");
}

async function update(req, res) {

}

async function edit(req, res) {

}


module.exports = {
    index,
    create,
    make,
    show,
    destroy,
    update,
    edit
}