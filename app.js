var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    flash           = require("connect-flash"),
    LocalStrategy   = require("passport-local"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds"),
    methodOverride  = require("method-override");

var campgroundRoutes    = require("./routes/campgrounds"),
    commentRoutes       = require("./routes/comments"),
    indexRoutes         = require("./routes/index")

mongoose.connect(process.env.DATABASEURL);
/*mongoose.connect("mongodb://taylor:PinBack30@ds217351.mlab.com:17351/camphound");*/

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//__dirname is dir where your script is running, just in case things get weird
//This is start SERVING THE PUBLIC DIR
//Still need to link to it in header
/*seedDB();*/
app.use(flash());
app.use(require("express-session")({
    secret: "Rocket is the cutest dog in the world!",
    save: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(methodOverride("_method"));

app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/", indexRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Camphound server has started on port " + process.env.PORT);
});
