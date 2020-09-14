import { Request, Response } from 'express';

const stripe = require('stripe')(process.env.API_KEY_TEST || '')

export const handlerSessionPay = async (req: Request, res: Response) => {
  const amount = parseInt(req.params.amount) * 100;
  const service = req.params.service;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: service,
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://pricing-cards.herokuapp.com/success",
    cancel_url: "https://pricing-cards.herokuapp.com/cancel",
});

return res.json({ id: session.id });
};