# 📝 Blog App

A full-stack blog application built with Node.js, Express.js and EJS as part of my web development learning journey.

> ⚠️ **Note:** This project does not use a database yet. Posts are stored in memory and will be lost when the server restarts. MongoDB integration coming in a future update!

## 🌐 Live Demo
[🔗 Link](https://blog-app-oirh.onrender.com)

## ✨ Features
- Create new blog posts
- View all posts on home page
- View single post in full
- Edit existing posts
- Delete posts
- Responsive design with Bootstrap 5
- About page with tech stack

---

## 🛠️ Tech Stack
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| EJS | Templating engine |
| Bootstrap 5 | Frontend styling |
| HTML & CSS | Structure and custom styles |


## 🚀 How to Run Locally

1. Clone the repository
```bash
git clone your-repo-link
```

2. Go into the project folder
```bash
cd blog-app
```

3. Install dependencies
```bash
npm install
```

4. Start the server
```bash
node index.js
```

5. Open browser and go to
```
http://localhost:3000
```


## 📁 Project Structure
```
blog-app/
├── index.js          — Express server and routes
├── package.json
├── LICENSE           — MIT License
├── README.md
├── views/
│   ├── index.ejs     — Home page
│   ├── create-post.ejs
│   ├── edit-post.ejs
│   ├── view-post.ejs
│   ├── about.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
└── public/
    └── styles.css
```

## 🔮 Future Updates
- [ ] Add MongoDB for permanent data storage
- [ ] User authentication (login/signup)
- [ ] Image upload for posts
- [ ] Search functionality


## 👨‍💻 Author
Made by Nithin Sai