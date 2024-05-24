const express = require("express");
const PORT = process.env.PORT || 4040;
const { handler } = require("./controller/index.js");

const app = express();
app.use(express.json());
app.post("*", async (req, res) => {
	console.log(req.body);
	// res.send("hello post");
	res.send(await handler(req));
});
app.get("*", async (req, res) => {
	// res.send("hello get");
	res.send(await handler(req));
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on port", PORT);
});
