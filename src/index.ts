import express, { Request, Response } from "express";
import Post from "./model/post";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!!");
});

app.post("/posts", async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newPost = new Post({ title });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
