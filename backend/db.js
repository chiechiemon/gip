const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "login",         
  password: "root", 
})

app.post("/register", (req, res) => {

  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  db.query("INSERT INTO users (username, password, email) VALUES (?,?,?)", [username, password, email], (err, result) => { console.log(err); });

})
app.listen(3001, () => {
  console.log("running serer")
})

app.post("/login", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  db.query("SELECT * FROM users WHERE password = ? AND email = ?", 
    [password, email],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Wrong email/password combination!" });
        }
      }
    }
  );
});

