const store = require('../model');

const delData = (req, res) => {
  try {
    const { id } = req.params;
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: 'Request body is empty!',
        success: false,
      });
    }
    store.forEach((e, indx) => {
      if (e.id == id) {
        store.pop(indx);
      }
    });
    res.status(200).send({
      success: true,
      message: 'Data deleted successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      success: false,
    });
  }
};

module.exports = delData;
