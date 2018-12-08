var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment   = require("./models/comment");



var data = [
    {
        name: "Mount Ama Dablam",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Ama_Dablam.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Mount Everest",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRup9nlr4R2EoV921cA07LhAOsNKartO4fNzn3VQhrYm7sf_hkt",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Mount Api",
        image: "https://www.caingram.info/Nepalpeaks/Pix/Api_nw_nepal.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        //add a few campgrounds
            // data.forEach(function(seed){
            //     Campground.create(seed, function(err, campground){
            //         if(err){
            //             console.log(err);
            //         } else {
            //             console.log("Added a new campground");
            //             //create a comment
            //             Comment.create({
            //                 text:"This place is greate, but I wish there was internet",
            //                 author: "Homer"
            //             }, function(err, comment){
            //                 if(err){
            //                     console.log(err);
            //                 } else {
            //                     campground.comments.push(comment);
            //                     campground.save();
            //                     console.log("Created new comment.")
            //                 }
            //             })
            //         }
            //     });
            // }); 
    });
        
    //add a few comments
}

module.exports = seedDB;

