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
    const userId = req.session.user._id;
    let user = await UserModel.findById(userId);
    res.render("pigeon/new", {user});
  }
  
  async function show(req, res) {
    const userId = req.session.user._id;
    let user = await UserModel.findById(userId);
  
    let { id } = req.params;
    let pigeon = await PigeonModel.findById(id);
    console.log("show page", pigeon);
    res.render("pigeon/show", {pigeon, user});
  }
  
  async function destroy(req, res) {
    let { id } = req.params;
    await PigeonModel.findByIdAndRemove(id);
    res.redirect("/pigeons");
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