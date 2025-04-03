const Message = require('../models/message');

exports.createMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Všechna pole jsou povinná!" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: "Zpráva byla úspěšně odeslána." });
  } catch (err) {
    res.status(500).json({ error: "Došlo k chybě při ukládání zprávy." });
  }
};  