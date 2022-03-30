import paypal from "@paypal/checkout-server-sdk";
// Creating an environment
let clientId =
  "AdMfXdgoCgeGx0xRnokhIFsY2vbvHbF3NE2Y_m7UhwuHG-ZYLIg14OLNZZDBW61sER8IJLJIObIwF2Ji";
let clientSecret =
  "EA-x6ewLomu3-f3RuNeswpaLlj6jSk_SAwm_8UAIkis5BIDkMrAfakDhP9smDG2GVv47M7uiS7NB-gq_";

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const request = new paypal.orders.OrdersCreateRequest();
    if (req.body.totalProducts) {
      const itemsFormated = req.body.items.map(element => ({
        name:element.title,
        description:element.description,
        unit_amount:{
          currency_code:'USD',
          value:element.price
        },
        quantity:element.amount
      }))
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: req.body.totalProducts.total,
              breakdown: {
                item_total: {
                  /* Required when including the `items` array */
                  currency_code: "USD",
                  value: req.body.totalProducts.total,
                },
              },
            },
            items: [...itemsFormated]
          },
        ],
      });
    } else {
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: req.body.price * req.body.amount,
              breakdown: {
                item_total: {
                  /* Required when including the `items` array */
                  currency_code: "USD",
                  value: req.body.total,
                },
              },
            },
            items: [
              {
                name: req.body.title,
                description: req.body.description,
                unit_amount: {
                  currency_code: "USD",
                  value: req.body.price,
                },
                quantity: req.body.amount,
              },
            ],
          },
        ],
      });
    }

    const response = await client.execute(request);

    return res.json({ id: response.result.id });
  }
}
