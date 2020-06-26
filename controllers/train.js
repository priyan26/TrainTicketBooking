const formidable = require("formidable");
const  _ = require("lodash");
const fs = require('fs');
const Train = require('../models/train');
const {errorHandler} = require('../helpers/dbErrorHandler')

exports.trainById = (req,res,next,id) => {
    Train.findById(id).exec((err,train) => {
        if (err || !train){
            return res.status(400).json({
                error: "Train not found"
            })
        }
        req.train = train;
        next();
    })
}

exports.read = (req, res) => {
    req.train.photo = undefined;
    return res.json(req.train);
}

exports.create = (req,res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err,feilds,files) => {
        if (err){
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }

        let train = new Train(feilds)

        if (files.photo){
            console.log('FILES PHOTO: ',files.photo);
            if (files.photo.size > 1000000) {
                    return res.status(400).json({
                        error: 'Image should be less than 1mb'
                    })
                }
            train.photo.data = fs.readFileSync(files.photo.path)
            train.photo.contentType = files.photo.type
        }

        train.save((err,result) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result);
        })
    })
}

exports.remove = (req,res) => {
    let train = req.train
    train.remove((err,deletedProduct) => {
        if (err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json({
            deletedProduct,
            "message": 'Train deleted successfully'
        })
    })
}

exports.update = (req,res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err,feilds,files) => {
        if (err){
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }

        let train = req.train
        train = _.extend(train, feilds)

        if (files.photo){
            console.log('FILES PHOTO: ',files.photo);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb'
                })
            }
            train.photo.data = fs.readFileSync(files.photo.path)
            train.photo.contentType = files.photo.type
        }

        train.save((err,result) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result);
        })
    })
}

exports.list = (req,res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
    let limit = req.query.limit ? parseInt(req.query.limit) : 6

    Train.find()
        .select("-photo")
        .populate('category')
        .sort([[sortBy,order]])
        .limit(limit)
        .exec((err,trains) => {
            if (err){
                return res.status(400).json({
                    error: 'Products not found'
                })
            }
            res.send(trains)
        })
}

exports.listRelated = (req,res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    Train.find({_id: {$ne: req.train}, category: req.train.category})
        .limit(limit)
        .populate("category","_id name")
        .exec((err, trains) => {
            if (err){
                return res.status(400).json({
                    error: "Train not found"
                })
            }
            res.json(trains)
        })
}

exports.listCategories = (re,res) => {
    Train.distinct("category",{},(err,categories) => {
        if (err){
            return res.status(400).json({
                error: "Category not found"
            })
        }
        res.json(categories)
    })
}

exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Train.find(findArgs)
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Trains not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};

exports.photo = (req,res,next) => {
    if (req.train.photo.data){
        res.set("Content-Type",req.train.photo.contentType);
        return res.send(req.train.photo.data)
    }
    next();
}

exports.listSearch = (req,res) => {
    const query = {}

    if (req.query.search){
        query.name={$regex: req.query.search, $options: 'i'}

        if (req.query.category && req.query.category != 'All'){
            query.category = req.query.category
        }

        Train.find(query, (err,trains) =>{
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(trains)
        }).select('-photo')
    }
}

