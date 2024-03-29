// here is where the server is defined
// and the routes are defined
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import get_members from './operations/get-members.js'
import get_libraries from './operations/get-libraries.js'
import get_rentals from './operations/get-rentals.js'
import get_rental_items from './operations/get-rental-items.js'
import get_resources from './operations/get-resources.js'
import get_books_and_authors from './operations/get-books-and-authors.js'
import get_books from './operations/get-books.js'
import get_authors from './operations/get-authors.js'

import post_members from './operations/post-members.js'
import post_libraries from './operations/post-libraries.js'
import post_rentals from './operations/post-rentals.js'
import post_rental_items from './operations/post-rental-items.js'
import post_author from './operations/post-author.js'
import post_book from './operations/post-book.js'
import post_books_and_authors from './operations/post-books-and-authors.js'
import post_resources from './operations/post-resources.js'

import put_books from './operations/put-books.js'
import put_authors from './operations/put-authors.js'
import put_resources from './operations/put-resources.js'
import put_members from './operations/put-members.js'
import put_libraries from './operations/put-libraries.js'
import put_rentals from './operations/put-rentals.js'
import put_rental_items from './operations/put-rental-items.js'

import delete_books from './operations/delete-books.js'
import delete_authors from './operations/delete-authors.js'
import delete_books_and_authors from './operations/delete-books-and-authors.js'
import delete_resources from './operations/delete-resources.js'
import delete_members from './operations/delete-members.js'
import delete_libraries from './operations/delete-libraries.js'
import delete_rentals from './operations/delete-rentals.js'
import delete_rental_items from './operations/delete-rental-items.js'


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());

const ROOT = "/"

const paths = {
    "members": `${ROOT}members`,
    "books": `${ROOT}books`,
    "authors": `${ROOT}authors`,
    "libraries": `${ROOT}libraries`,
    "rentals": `${ROOT}rentals`,
    "rental_items": `${ROOT}rental-items*`,
    "resources": `${ROOT}resources`,
    "books_and_authors": `${ROOT}books-and-authors`
}


///////////////////////////////////////

app.get(ROOT, async (req, res) => {

    const payload = {"message": "You've reached the api root. Nothing to see here"}

    res.send(payload)
})

app.get(paths.members, async (req, res) => {
    
    let payload = await get_members(req)

    res.send(payload)
})

app.get(paths.libraries, async (req, res) => {

    let payload = await get_libraries(req)

    res.send(payload)
})

app.get(paths.rentals, async (req, res) => {

    let payload = await get_rentals(req)

    // turn rental date into an ISO date string for
    // frontend of form YYYY-MM-DD
    for (const rental of payload) {
        let date = rental["rental_date"];
        if (date !== null) {
            rental["rental_date"] = date.toISOString().slice(0,10);
        }
    }

    res.send(payload)
})

app.get(paths.rental_items, async (req, res) => {

    let payload = await get_rental_items(req)

    // turn return date into an ISO date string for
    // frontend of form YYYY-MM-DD
    for (const rental_item of payload) {
        let date = rental_item["return_date"];
        if (date !== null) {
            rental_item["return_date"] = date.toISOString().slice(0,10);
        }
    }

    res.send(payload)
})

app.get(paths.resources, async (req, res) => {

    let payload = await get_resources(req)

    res.send(payload)
})

app.get(paths.books_and_authors, async (req, res) => {

    let payload = await get_books_and_authors(req)

    res.send(payload)
})

app.get(paths.books, async (req, res) => {

    let payload = await get_books(req)

    res.send(payload)
})

app.get(paths.authors, async (req, res) => {

    let payload = await get_authors(req)

    res.send(payload)
})

///////////////////////////////////////

app.post(paths.members, async (req, res) => {

    let payload = await post_members(req)

    res.send(payload)
})

app.post(paths.libraries, async (req, res) => {

    let payload = await post_libraries(req)

    res.send(payload)
})


app.post(paths.rentals, async (req, res) => {

    let payload = await post_rentals(req)

    res.send(payload)
})

app.post(paths.rental_items, async (req, res) => {

    let payload = await post_rental_items(req)

    res.send(payload)
})

app.post(paths.books, async (req, res) => {

    let payload = await post_book(req)

    res.send(payload)
})

app.post(paths.authors, async (req, res) => {

    let payload = await post_author(req)

    if (payload == undefined) {
        payload = {}
    }

    res.send(payload)
})

app.post(paths.books_and_authors, async (req, res) => {

    let payload = await post_books_and_authors(req)

    if (payload == undefined) {
        payload = {}
    }

    res.send(payload)
})

app.post(paths.resources, async (req, res) => {

    let payload = await post_resources(req)

    if (payload == undefined) {
        payload = {}
    }

    res.send(payload)
})

//////////////////////////////////////

app.put(paths.books, async (req, res) => {

    let payload = await put_books(req)

    res.send(payload)
})

app.put(paths.authors, async (req, res) => {

    let payload = await put_authors(req)

    res.send(payload)
})

app.put(paths.resources, async (req, res) => {

    let payload = await put_resources(req)

    res.send(payload)
})

app.put(paths.members, async (req, res) => {

    let payload = await put_members(req)

    res.send(payload)
})

app.put(paths.libraries, async (req, res) => {

    let payload = await put_libraries(req)

    res.send(payload)
})

app.put(paths.rentals, async (req, res) => {

    let payload = await put_rentals(req)

    res.send(payload)
})

app.put(paths.rental_items, async (req, res) => {

    let payload = await put_rental_items(req)

    res.send(payload)
})

//////////////////////////////////////

app.delete(paths.books, async (req, res) => {

    let payload = await delete_books(req)

    res.send(payload)
})

app.delete(paths.authors, async (req, res) => {

    let payload = await delete_authors(req)

    res.send(payload)
})

app.delete(paths.books_and_authors, async (req, res) => {

    let payload = await delete_books_and_authors(req)

    res.send(payload)
})

app.delete(paths.resources, async (req, res) => {

    let payload = await delete_resources(req)

    res.send(payload)
})

app.delete(paths.members, async (req, res) => {

    let payload = await delete_members(req)

    res.send(payload)
})

app.delete(paths.libraries, async (req, res) => {

    let payload = await delete_libraries(req)

    res.send(payload)
})

app.delete(paths.rentals, async (req, res) => {

    let payload = await delete_rentals(req)

    res.send(payload)
})

app.delete(paths.rental_items, async (req, res) => {

    let payload = await delete_rental_items(req)

    res.send(payload)
})

///////////////////////////////////////

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
