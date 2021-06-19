const store = require('../model');

const getData = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      data: store,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      success: false,
    });
  }
};

module.exports = getData;
