import express from "express"

import { create, getAllBlog, getBlogByID, updateBlog, deleteBlogById } from "../controller/blogController.js"

const route = express.Router();

route.post("/blog", create);
route.get("/blogs", getAllBlog);
route.get("/blog/:id", getBlogByID);
route.put("/blog/:id", updateBlog);
route.delete("/blog/:id", deleteBlogById);

export default route;