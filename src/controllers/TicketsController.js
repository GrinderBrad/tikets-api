const { Router } = require('express');
const bodyParser = require('body-parser').json();
const logger = require('../services/LoggerService');
const TicketService = require('../services/TicketService');
const { errors } = require('../constants/messages');

const TicketsRouter = Router();

TicketsRouter.get('/', async (req, res) => {
  try {
    const tickets = await TicketService.getTickets();
    return res.status(200).json(tickets);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

TicketsRouter.post('/', bodyParser, async (req, res) => {
  const { direction, price } = req.body;
  try {
    const tickets = await TicketService.createTicket({ direction, price });
    return res.status(200).json(tickets);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

TicketsRouter.delete('/', bodyParser, async (req, res) => {
  const { id } = req.body;
  try {
    const tickets = await TicketService.deleteTicket({ _id: id });
    return res.status(200).json(tickets);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

TicketsRouter.get('/:id', bodyParser, async (req, res) => {
  const { id } = req.params;
  try {
    const tickets = await TicketService.findTicket({ _id: id });
    return res.status(200).json(tickets);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

TicketsRouter.put('/:id', bodyParser, async (req, res) => {
  const { id } = req.params;
  const updatedTicket = { direction: req.body.direction, price: req.body.price };
  try {
    const tickets = await TicketService.updateTicket(id, updatedTicket);
    return res.status(200).json(tickets);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

module.exports = TicketsRouter;
