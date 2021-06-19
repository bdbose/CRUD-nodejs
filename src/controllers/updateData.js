const store = require('../model');

const updateData = (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: 'Request body is empty!',
        success: false,
      });
    }
    store.forEach((e) => {
      if (e.id == req.body.id) {
        e = req.body;
      }
    });
    res.status(203).send({
      success: true,
      message: 'Data updated!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      success: false,
    });
  }
};

module.exports = updateData;
