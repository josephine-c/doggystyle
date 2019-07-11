const BookingModel = require("./../database/models/booking_model");

//needs to return json to react client or a jwt, authentication can be done with cors and jwt in auth header from client end
async function index(req, res) {
    const bookings = await BookingModel.find();
    return res.json(bookings);
    // return res.render("test");
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
  
    console.log("post", booking);
    // res.redirect("/booking");
    return res.json(booking);

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