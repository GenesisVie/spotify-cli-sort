import {generateRandomString} from "../../utils/tools.js";

import express from 'express'; // Express web server framework
import request from 'request'; // "Request" library
import cors from 'cors';
import cookieParser from 'cookie-parser';

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = 'https://localhost:8888'; //

export const spotifyLogin = () => {
    const app = express();

    app.get('/login', function(req, res) {
        const stateKey = 'spotify_auth_state';
        const state = generateRandomString(16);
        res.cookie(stateKey, state);

        const scope = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize?' +
            JSON.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            }));
    });
    app.listen(8888);
}
