const express = require('express');
const router = express.Router();

const {create, trainById,read,remove,update,list,listRelated,listCategories,listBySearch,photo,listSearch} = require("../controllers/train");
const {requireSignin,isAuth,isAdmin} = require("../controllers/auth");
const {userById} = require("../controllers/user")

router.get('/train/:trainId',read);
router.post("/train/create/:userId",requireSignin,isAdmin,isAdmin,create);
router.delete('/train/:trainId/:userId',requireSignin,isAdmin,isAdmin,remove);
router.put('/train/:trainId/:userId',requireSignin,isAdmin,isAdmin,update);
router.get('/trains',list);
router.get("/trains/search", listSearch);
router.get('/trains/related/:trainId',listRelated);
router.get('/trains/categories',listCategories);
router.post("/trains/by/search", listBySearch);
router.get('/train/photo/:trainId',photo)

router.param('userId',userById)
router.param('trainId',trainById)

module.exports = router;