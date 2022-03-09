// here is where the server is defined
// and the routes are defined
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import get_members from './operations/get-members.js'
import get_libraries from './operations/get-libraries.js'
import get_transfers from './operations/get-transfers.js'
import get_rentals from './operations/get-rentals.js'
import get_resources from './operations/get-resources.js'
import get_books_and_authors from './operations/get-books-and-authors.js'
import get_books from './operations/get-books.js'
import get_authors from './operations/get-authors.js'

import post_members from './operations/post-members.js'
import post_libraries from './operations/post-libraries.js'
import post_transfers from './operations/post-transfers.js'
import post_rentals from './operations/post-rentals.js'
import post_author from './operations/post-author.js'
import post_book from './operations/post-book.js'

import put_books from './operations/put-books.js'

import delete_books from './operations/delete-books.js'




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

app.get("/members", async (req, res) => {

    let payload = await get_members(req)

    res.send(payload)
})

app.get("/libraries", async (req, res) => {

    let payload = await get_libraries(req)

    res.send(payload)
})

app.get("/transfers", async (req, res) => {

    let payload = await get_transfers(req)

    res.send(payload)
})

app.get("/rentals", async (req, res) => {

    let payload = await get_rentals(req)

    res.send(payload)
})

app.get("/resources", async (req, res) => {

    let payload = await get_resources(req)

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

app.get("/authors", async (req, res) => {

    let payload = await get_authors(req)

    res.send(payload)
})


///////////////////////////////////////

app.post("/members", async (req, res) => {

    let payload = await post_members(req)

    res.send(payload)
})

app.post("/libraries", async (req, res) => {

    let payload = await post_libraries(req)

    res.send(payload)
})

app.post("/transfers", async (req, res) => {

    let payload = await post_transfers(req)

    res.send(payload)
})

app.post("/rentals", async (req, res) => {

    let payload = await post_rentals(req)

    res.send(payload)
})

app.post("/books", async (req, res) => {

    let payload = await post_book(req)

    res.send(payload)
})

app.post("/authors", async (req, res) => {

    let payload = await post_author(req)

    if (payload == undefined) {
        payload = {}
    }

    res.send(payload)
})

//////////////////////////////////////

app.put("/books", async (req, res) => {

    let payload = await put_books(req)

    res.send(payload)
})

//////////////////////////////////////

app.delete("/books", async (req, res) => {

    let payload = await delete_books(req)

    res.send(payload)
})


///////////////////////////////////////

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
