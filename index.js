require('dotenv').config()
const express = require('express')


const app = express();
const port = process.env.PORT;

app.post("/auth_code",(req, res)=>{
    
});
app.listen(port, () => {
    console.log(`Oauth Backend app listening on port ${port}`)
  })