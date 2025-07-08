import express from "express"

import { create, getAllBlog, getBlogByID } from "../controller/blogController.js"

const route = express.Router();

route.post("/blog", create);
route.get("/blogs", getAllBlog);
route.get("/blog/:id", getBlogByID);

export default route;