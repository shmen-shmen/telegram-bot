const { handleMessage } = require("./lib/Telegram");
const { getNewLoginURL } = require("./lib/google-auth");

async function handler(req, method) {
	if (method === "GET") {
		if (req.url === "/test") {
			const data = await getNewLoginURL();
			return data.config.url;
		} else return "unknown request";
	}

	const { body } = req;
	if (body & (body != {})) {
		const messageObj = body.message;
		await handleMessage(messageObj);
	}
	return;
}

module.exports = { handler };
