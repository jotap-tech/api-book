const Express = require("express")

const app = Express()
const PORT = 3000
const books = [
  {id: 1, title: "Harry Potter", autor: "J.K Rowling"},
  {id: 2, title: "Harry Potter e a pedra filosofal", autor: "J.K Rowling"},
  {id: 3, title: "Harry Potter e a camara secreta", autor: "J.K Rowling"},
]

app.get('/books', (req, res) => {
  res.json(books)
})

app.post('/books', (req, res) => {
  const bookCreate = {
    id: books.length + 1,
    title: req.body.title,
    autor: req.body.autor
  }

  books.push(bookCreate)
  
  res.status(401).json({
    message: "Livro adicionado"
  })
})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})