// here is where the server is defined
// and the routes are defined
import 'dotenv/config'
import express from 'express'
import { example_query } from './operations/example-query.js'


const PORT = 3003
const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))

///////////////////////////////////////

app.get("/", async (req, res) => {

    

    let payload = await example_query(req)

    // ---->
    // insert error handling here
    // <----

    if (payload == undefined) {
        payload = {}
    }

    res.send(payload)
})


///////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
