const axios = require("axios");
const config = require("../config/config.json").web;

function getNewLoginURL() {
	const url = `https://accounts.google.com/o/oauth2/v2/auth?
  client_id=${config.client_id}&
  redirect_uri=${config.redirect_uris[0]}&
  access_type=offline&
  response_type=code&
  scope=https://www.googleapis.com/auth/photoslibrary/readonly&
  state=new_access_token&
  include_granted_scopes=true&
  prompt=consent`;
	return axios.get(url);
}

module.exports = { getNewLoginURL };
