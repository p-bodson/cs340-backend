// here is where the server is defined
// and the routes are defined
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import get_books_and_authors from './operations/get-books-and-authors.js'
import get_books from './operations/get-books.js'
import get_authors from './operations/get-authors.js'
import post_author from './operations/post-author.js'
import post_book from './operations/post-book.js'



const PORT = 3003
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());

///////////////////////////////////////

app.get("/", async (req, res) => {

    const payload = {"message": "You've reached the api root. Nothing to see here"}

    res.send(payload)
})

app.get("/books-and-authors", async (req, res) => {

    let payload = await get_books_and_authors(req)

    res.send(payload)
})

app.get("/books", async (req, res) => {

    let payload = await get_books(req)

    res.send(payload)
})

app.post("/books", async (req, res) => {

    let payload = await post_book(req)

    res.send(payload)
})

app.get("/authors", async (req, res) => {

    let payload = await get_authors(req)

    res.send(payload)
})

app.post("/authors", async (req, res) => {

    let payload = await post_author(req)

    res.send(payload)
})


///////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
