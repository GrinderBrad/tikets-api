const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
  direction: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('tickets', TicketSchema);
