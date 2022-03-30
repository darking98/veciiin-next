import mail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    mail.setApiKey(
      "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"
    );
    const msg = {
      to: "drodriguez@castor.app", // Change to your recipient
      
      from: "diego.gabrielrodriguez@hotmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Funny",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    const response = await mail.send(msg)
    console.log(response)
    return res.json(response);
    /*await mail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return "mensaje enviado";
      })
      .catch((error) => {
        console.error(error);
      });*/
  }
}
