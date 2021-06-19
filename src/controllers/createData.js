const store = require('../model');

const createData = (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: 'Request body is empty!',
        success: false,
      });
    }
    store.push(req.body);
    res.status(201).send({
      success: true,
      message: 'Data created successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      success: false,
    });
  }
};

module.exports = createData;
