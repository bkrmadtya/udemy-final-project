var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware/index.js"); // require middleware if we just leave ../middlware it will automatically require index.js file as a default file

//INDEX - show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("campgrounds/index",{campgrounds: allCampgrounds, page: 'campgrounds'});
       }
    });
});


//CREATE - add new campgrounds to database
router.post("/", middleware.isLoggedIn, function (req, res){
    // get data from form and add to campgrounds array
    var name= req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, price: price, image: image, description: desc, author:author};
   //create a new campground and save to db
   Campground.create(newCampground, function(err, newlyCreated){
      if (err) {
          console.log(err);
      } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
          res.redirect("/campgrounds"); //
      }
   });
});


//NEW - show form to create new campground 
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new");
});


//SHOW - shows more info about campground selected - to be declared after NEW to not overwrite
router.get("/:id", function(req, res){
    //find the campground with the provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if (err) {
           console.log(err);
       } else {
            if (!foundCampground) {
                return res.status(400).send("Item not found.");
            }
            //render show template with that campground
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
});

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function (req, res){
       Campground.findById(req.params.id, function(err, foundCampground){
            if (!foundCampground) {
                return res.status(400).send("Item not found.");
            }
          res.render("campgrounds/edit", {campground: foundCampground});
    });
});


//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
   //find and update the correct campground
   Campground.findOneAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
      if(err){
          res.send("ERROR");
      } else {
          res.redirect("/campgrounds/" + req.params.id);
      }
   });
   //redirect to show page
});


//DESTROY CAMPGROUND ROUTE

router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
   Campground.findOneAndDelete(req.params.id, function(err){
      if(err){
          res.redirect("/campgrounds");
      } else {
          res.redirect("/campgrounds");
             }
    });
});



module.exports = router;