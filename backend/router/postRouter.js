const express=require("express")
const postController=require("../controller/controler")
const uploadImage=require("../middleware/uploadImage")
const router=express.Router()


// block posts
router.post("/create/block", uploadImage.single("img"), postController.createblock)
router.get("/read/block", postController.readblock)





//   contact
router.post("/Create/Contact",postController.CreateContact)
router.get("/Read/Contact",postController.ReadContact)

// create project
router.post("/create/post", uploadImage.single("img"), postController.createPost)

router.get("/read/post", postController.readPost)

router.get("/readSingle/post/:id", postController.readSingle)

router.put("/update/post/:id",uploadImage.single("img") ,postController.updateData)

router.delete("/deletePost/post/:id", postController.deletePost)

module.exports=router