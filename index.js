const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
// const { nanoid } = require("nanoid")

const db = lowDb(new FileSync('db.json'))

db.defaults({ notes: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 8000;

app.get("/", function (req, res, next) {
  const data = db.get().value()
  return res.json(data)
});

app.get('/about', function (req, res) {
    res.send('about');
  });

app.get('/demo', function (req, res ) {
res.send('demo');
});

app.get('/notes', function (req, res)  {
  const data = db.get("notes").value()
  return res.json(data)
})

app.post('/notes/new',function (req, res) {
  const note = req.body
  db.get("notes").push({
    ...note, id: nanoid()
  }).write()
  res.json({ success: true })
})

app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})