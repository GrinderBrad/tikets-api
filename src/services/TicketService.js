const TicketRepository = require('../repositories/TicketsRepository');

const getTickets = () => TicketRepository.getAllTickets();

module.exports = {
  getTickets,
};
