const { axiosInstance } = require("./axios");

function sendMessage(messageObj, messageText) {
	return axiosInstance.get("sendMessage", {
		chat_id: messageObj.chat.id,
		text: messageText,
	});
}

function handleMessage(messageObj) {
	const messageText = messageObj.text || "";

	if (messageText.charAt(0) === "/") {
		const command = messageText.substr(1);
		switch (command) {
			case "start":
				return sendMessage(
					messageObj,
					"Hi! I'm a bot. I can help you get started!"
				);
			case "make @ablgbv gay":
				return sendMessage(messageObj, "ERROR! User @ablgbv is already gay");
			case "check @shmiin":
				return sendMessage(messageObj, "OK! User @shmiin is not gay");
			default:
				return sendMessage(messageObj, "I don't know this command(");
		}
	} else {
		return sendMessage(messageObj, messageText);
	}
}

module.exports = { handleMessage };
