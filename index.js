import express from "express";
import cors from "cors";
const app = express();
const port = 8000;

const user = [
  {
    id: 1,
    name: "dani",
    email: "dani@gmail.com",
  },
  {
    id: 2,
    name: "daniyal",
    email: "daniyal@gmail.com",
  },
];
app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  res.send(user);
})
app.get("/", (req, res) => {
  res.send("hello smit");
})

app.post("/users", (req, res) => {
  user.push({ id: user.length + 1, ...req.body })
  res.send({ message: "user added sucessfullay" })
})

// delete
 app.delete("/users/:id", (req, res) => {
  let index = user.findIndex(v => v.id === Number(req.params.id));
  if(index!==-1){
  user.splice(index, 1)
}
  res.send({ message: "user deleted sucessfully" });
});

// update
app.put("/users/:id", (req, res) => {
  let index = user.findIndex(v => v.id === Number(req.params.id))
  if(index!==-1){
  user.splice(index, 1,{id :Number(req.params.id), ...req.body})
}
  res.send({ message: "user updated sucessfully" });
});
app.listen(port, () => console.log(`server is riunning on port ${port}`));
