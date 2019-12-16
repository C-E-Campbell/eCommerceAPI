const products = require("../node-1-afternoon/products.json");

const getProduct = (req, res) => {
	console.log(req.params);
	let productIndex = products.findIndex(obj => {
		return obj.id === parseInt(req.params.id);
	});
	res.status(200).send(products[productIndex]);
};

module.exports = getProduct;
