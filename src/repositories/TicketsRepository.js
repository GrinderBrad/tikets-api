const TicketEntity = require('../entities/TicketEntity');

const getAllTickets = () => TicketEntity.find();

module.exports = {
  getAllTickets,
};
