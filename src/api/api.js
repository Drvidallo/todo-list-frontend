// import cors from 'cors'

const express = require('express');

// Create an instance of Express
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// res.header('Access-Control-Allow-Origin', '*');
// app.use(cors())
// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/createPost', (req,res) => {
  
  console.log("post created")
  return {text:"createPost"}
})

app.get('/updatePost', (req,res) => {
  console.log("post updated")
  return {text:"updatePost"}
})

app.get('/deletePost', (req,res) => {
  console.log("post deleted")
  return {text:"deletePost"}
})


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});