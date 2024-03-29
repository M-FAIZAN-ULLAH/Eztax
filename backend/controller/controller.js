
exports.sayHello = (req, res) => {
    res.json({ message: 'Hello, world!' });
  };
  
  exports.calculate = (req, res) => {
    console.log(req.body); // Log the form data
    res.status(200).json({ message: "Data received successfully." });
  };