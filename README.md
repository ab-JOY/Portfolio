# My Portfolio & Tech Blog (In Progress)

A full-stack personal portfolio site with an integrated blog where I share my journey, projects, and tech-related learnings. Built using the MERN stack, styled with Bootstrap, and deployed with GitHub Pages (frontend) and Render (backend).

---

## Preview

> _[demo]_

---

## Features

- Personal Portfolio (About Me, Projects, Contact)
- Tech Blog with Create, Read, Update, Delete (CRUD) features
- Admin-only dashboard for managing blog posts
- Responsive design powered by Bootstrap
- JWT-based authentication (optional)
- Deployment: GitHub Pages (frontend) + Render (backend)

---

## Tech Stack

| Frontend      | Backend       | Database | Deployment      |
|---------------|---------------|----------|-----------------|
| React         | Node.js       | MongoDB  | GitHub Pages (FE) |
| Bootstrap     | Express.js    | Mongoose | Render (BE)     |

---

## Folder Structure

```
root/
│
├── client/             # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
│
├── server/             # Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
│
├── README.md
└── package.json
```

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Portfolio.git
cd your-repo-name
```

---

### 2. Run the Backend (Render-compatible)
```bash
cd server
npm install
```

Create a `.env` file:
```
PORT=5000
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-secret
```

Then:
```bash
npm start
```

---

### 3. Run the Frontend
```bash
cd client
npm install
npm start
```

---

## Deployment

### Frontend (GitHub Pages)
```bash
npm run build
npm run deploy
```

> Set `"homepage": "https://your-username.github.io/Portfolio"` in `package.json`.

### Backend (Render)
- Push `server` folder to a separate GitHub repo or branch.
- Create a new **Web Service** on [Render](https://render.com).
- Use build command `npm install` and start command `node server.js`.

---

## API Routes

### Blog Post Routes
- `GET /api/posts` — Get all posts
- `GET /api/posts/:id` — Get a single post
- `POST /api/posts` — Create a post (requires auth)
- `PUT /api/posts/:id` — Edit a post
- `DELETE /api/posts/:id` — Delete a post

> Add `/projects` endpoint as needed

---

## Author

**Allen Joy Bueza** – [@ab-JOY](https://github.com/ab-JOY)

---

## License

