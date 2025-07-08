import Blog from "../model/blogModel.js";

export const create = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const { title } = newBlog;

    const blogExist = await Blog.findOne({ title });
    if (blogExist) {
      return res.status(400).json({ message: "Blog Title already exist." });
    }

    const saveData = await newBlog.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const blogData = await Blog.find();
    if (!blogData || blogData.length === 0) {
      return res.status(404).json({ message: "Blog data nnot found" });
    }

    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getBlogByID = async (req, res) =>{
    try{
        const id = req.params.id;
        const blogExist = await Blog.findById(id);
        if(!blogExist){
            return res.status(404).json({ message: "Blog data nnot found" });
        }

        res.status(200).json(blogExist);
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
};
