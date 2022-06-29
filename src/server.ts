import express from "express";
const PORT = 5000;

const DUMMY_USER = [
  {
    id: 1,
    name: "Fumina",
    age: 28,
  },
  {
    id: 2,
    name: "Ayaka",
    age: 27,
  },
  {
    id: 3,
    name: "Sho",
    age: 29,
  },
];

const app = express();

app.post("/", (req, res) => {
  res.send({
    id: 4,
    name: "Kyosuke",
    age: 32,
  });
});

app.get("/", (req, res) => {
  res.json(DUMMY_USER);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
