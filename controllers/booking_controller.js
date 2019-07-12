const BookingModel = require("./../database/models/booking_model");
const CustomerModel = require("./../database/models/customer_model");

async function index(req, res) {
    const bookings = await BookingModel.find();
    return res.json(bookings);
}

async function create(req, res) {
    const { 
        date,
        bookingDate,
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
            bookingDate,
            firstName, 
            lastName, 
            email, 
            details, 
            status, 
            paid 
        }
    ).catch(err => res.status(500).send(err));
  
    //may move this to customer controller
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
    return res.json(booking);
}

async function destroy(req, res) {
    let { id } = req.params;
    await BookingModel.findByIdAndRemove(id);
    return res.json(await BookingModel.find());
}

async function edit(req, res) {
    const { id } = req.params;
    const booking = await BookingModel.findById(id);
    return res.json(booking);
}

async function update(req, res) {
    console.log("params extract", req.params.id);
    console.log("last name extract", req.body.lastName);

    const { id } = req.params;
    const {
        bookingDate,
        firstName, 
        lastName, 
        email, 
        details, 
        status,
        paid
    } = req.body;

    const query = { _id: id };
    await BookingModel.update(
        query,
        { $set: 
            {
                bookingDate,
                firstName, 
                lastName, 
                email, 
                details, 
                status, 
                paid 
            }
        }
    );

    return res.json(await BookingModel.findById(id));
}


module.exports = {
    index,
    create,
    show,
    destroy,
    update,
    edit
}