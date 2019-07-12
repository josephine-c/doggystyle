const BookingModel = require("./../database/models/booking_model");
const CustomerModel = require("./../database/models/customer_model");

async function index(req, res) {
    const bookings = await BookingModel.find();
    return res.json(bookings);
}

async function create(req, res) {
    console.log("started creating booking", req.body);
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
  

    // console.log("test customer model", await CustomerModel.findOne({ email: email }));

    //if customer email does not already exist, create new customer with it
    //else push booking to existing customer
    const customer = await CustomerModel.findOne({ email: email });
    if (!customer) { 
        const customer = await CustomerModel.create(
            { 
                date, 
                firstName, 
                lastName, 
                email, 
                bookings: [booking],
                status
            }
        ).catch(err => res.status(500).send(err));
        console.log("Customer created", customer); 
    } else {
        customer.bookings.push(booking);
        await customer.save();
    }

        console.log("Booking created", booking);
        return res.json(booking);
}

async function show(req, res) {
    const { id } = req.params;
    const booking = await BookingModel.findById(id);
    console.log(booking);
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