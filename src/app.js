const express = require ("express")
const app = express()
const port = process.env.PORT || 8000
const path = require('path')
const hbs = require('hbs')

// public static_path
const staticpath = path.join(__dirname , "../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

// view engine
app.set('view engine' , 'hbs')
app.set('views' , template_path)
hbs.registerPartials(partials_path)

app.use(express.static(staticpath))

// routing
app.get('/' , (req , res) => {
    res.render("index")
})

app.get('/about' , (req , res) => {
    res.render("about")
})

app.get('/weather' , (req , res) => {
    res.render("weather")
})

app.get('*' , (req , res) => {
    res.render("404error" , {
        errormsg: "error not found"
    })
})

app.listen(port , () => {
    console.log(`listening to the port ${port}`)
})