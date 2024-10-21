const { default: axios } = require("axios");
const qs = require("qs");
require('dotenv').config();

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const getAccessToken = async (auth_code) => {
    console.log(auth_code);
    if (auth_code) {
        const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
        const params = new URLSearchParams({
            grant_type: 'authorization_code',
            code: auth_code,
            redirect_uri: "http://localhost:5173/auth/linkedin",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        });
        //console.log("redirect uri", encodeURIComponent("http://localhost:5173/auth/linkedin"));
        try {
            const response = await axios.post(tokenUrl, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', 
                },
            });
            return response.data; 
        } catch (error) {
            console.error('Error fetching access token:', error.response ? error.response.data : error.message);
            throw new Error('Token exchange failed');
        }
    }
}

module.exports = {
    "getAccessToken": getAccessToken
}