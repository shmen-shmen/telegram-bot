const express = require("express");
const PORT = process.env.PORT || 4040;
const { handler } = require("./controller/index.js");

const app = express();
app.use(express.json());
app.post("*", async (req, res) => {
	// console.log("a", req.body);
	res.send(await handler(req, "POST"));
});
app.get("*", async (req, res) => {
	// console.log("b", req.body);
	res.send(await handler(req, "GET"));
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on port", PORT);
});
