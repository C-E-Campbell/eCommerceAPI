const products = require("../node-1-afternoon/products.json");

const getProducts = (req, res) => {
	console.log(req.query);
	if (req.query.price) {
		let filtered = products.filter(product => {
			return product.price >= parseInt(req.query.price);
		});
		res.status(200).send(filtered);
	}
	res.status(200).send(products);
};

module.exports = getProducts;
