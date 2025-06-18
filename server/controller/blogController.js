import Blog from "../model/blogModel.js";


export const create = async(req, res) =>{
    try{
            const newBlog = new Blog(req.body);
            const{title} = newBlog;

            const blogExist = await UserActivation.findOne({title})
            if(blogExist){
                return res.status(400).json({message:"Blog Title already exist."})
            }

            const saveData = await newBlog.save();
            res.status(200).json(saveData);

    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}