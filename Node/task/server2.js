import express from "express";

const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Dax Patel", email: "dax@example.com" },
  { id: 2, name: "Dev Patel", email: "dev@example.com" },
  { id: 3, name: "Kalp Patel", email: "kalp@example.com" },
];

export default function registerRoutes(app) {
  app.get("/users", (req, res) => {
    res.json(users);
  });
}
