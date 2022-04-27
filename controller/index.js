message = (req, res) => {
  const data = "Jordi";
  res.status(200).send(data);
};

module.exports = {
  message,
};
