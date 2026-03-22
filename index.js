import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.render("index", { posts: posts });
})

app.get("/create", (req, res) => {
    res.render("create-post");
})

app.post("/create", (req, res) => {
    let title = req.body["blog-title"];
    let content = req.body["blog-content"];
    posts.push({ title: title, content: content });
    console.log(posts);
    res.redirect("/");
})

app.get("/edit/:index", (req, res) => {
    const post = posts[req.params.index];
    res.render("edit-post", { post: post, index: req.params.index });
})

app.post("/edit/:index", (req, res) => {
    posts[req.params.index].title = req.body["blog-title"];
    posts[req.params.index].content = req.body["blog-content"];
    res.redirect("/")
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.post("/delete/:index", (req, res) => {
    posts.splice(req.params.index, 1);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})