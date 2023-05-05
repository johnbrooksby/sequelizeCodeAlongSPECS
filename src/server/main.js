const express = require("express");
const ViteExpress = require("vite-express");
const db = require('./util/database')
const {User} = require('./util/models')

const app = express();
app.use(express.json())

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.post('/api/register', async (req, res) => {
    try {
        let newUser = await User.create(req.body)
        res.status(200).send(newUser)
    }
    catch(err) {
        res.status(400).send(err)
    }
})



db.sync()

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
