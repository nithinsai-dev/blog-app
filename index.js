import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const posts = [];
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "blog",
    password: "NithiN02-04P*$tgr@$",
    port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM posts ORDER BY date DESC");
        res.render("index", { posts: results.rows });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error fetching posts from database"); s
    }
})

app.get("/create", (req, res) => {
    res.render("create-post");
})

app.post("/create", async (req, res) => {
    let title = req.body["blog-title"];
    let content = req.body["blog-content"];
    let author = req.body["blog-author"];
    let date = new Date();
    try {
        await db.query("INSERT INTO posts (title,content,author) VALUES ($1,$2,$3)", [title, content, author]);
        res.redirect("/");
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error creating post"); s
    }
})

app.get("/edit/:id", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM posts WHERE id = $1", [req.params.id]);
        const post = result.rows[0];
        res.render("edit-post", { post: post, id: req.params.id });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("error fetching the post from database");
    }
})

app.post("/edit/:id", async (req, res) => {
    try {
        await db.query("UPDATE posts SET title = $1, content = $2 WHERE id = $3", [req.body["blog-title"], req.body["blog-content"], req.params.id]);
        res.redirect("/");
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error updating the post");
    }
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.post("/delete/:id", async (req, res) => {
    try {
        await db.query("DELETE FROM posts WHERE id = $1", [req.params.id]);
        res.redirect("/");

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error deleting the post")
    }
})

app.get("/view/:id", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM posts WHERE id = $1", [req.params.id]);
        const post = result.rows[0];
        res.render("view-post.ejs", { post: post });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error fetching the post from database");
    }
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})