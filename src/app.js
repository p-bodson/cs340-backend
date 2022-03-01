// here is where the server is defined
// and the routes are defined
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { example_query } from './operations/example-query.js'
import { get_books_and_authors } from './operations/get-books-and-authors.js'


const PORT = 3003
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());

///////////////////////////////////////

app.get("/", async (req, res) => {

    

    let payload = await example_query(req)

    // ---->
    // insert error handling here
    // <----

    res.send(payload)
})

app.get("/books-and-authors", async (req, res) => {

    

    let payload = await get_books_and_authors(req)

    // ---->
    // insert error handling here
    // <----

    res.send(payload)
})


///////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
