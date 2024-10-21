require('dotenv').config()
const express = require('express')
const { createSuccessResposeData } = require("./functions/succesResponse")
const { getAccessToken } = require("./functions/getAccessToken")
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
};
const app = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.post("/auth_code", async (req, res)=>{
    try{
        const accessToken = await getAccessToken(req.body.auth_code);
        res.send(createSuccessResposeData({
            "accessToken": accessToken
        }))
    } catch(error) {
        res.send({
            "meta": {
                "code":1,
                "message": error
                
            }
        })
    }
});
app.listen(port, () => {
    console.log(`Oauth Backend app listening on port ${port}`)
  })