const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Citizen Search!</h1><form action="/search" method="get"><input type="text" name="q"><button type="submit">Search</button></form>');
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  // Replace this with your own database query logic
  const results = [
    { name: 'John Smith', age: 35, address: '123 Main St, Anytown USA', phone: '555-555-1212' },
    { name: 'Jane Doe', age: 28, address: '456 Oak St, Anytown USA', phone: '555-555-1212' }
  ];
  let resultHTML = '<ul>';
  results.forEach(result => {
    resultHTML += `<li><a href="/record/${result._id}">${result.name}</a></li>`;
  });
  resultHTML += '</ul>';
  res.send(`<h2>Search results for "${query}":</h2>${resultHTML}`);
});
   
app.get('/record/:id', (req, res) => {
  const id = req.params.id;
  // Replace this with your own database query logic
  const record = { name: 'John Smith', age: 35, address: '123 Main St, Anytown USA', phone: '555-555-1212' };
  res.send(`<h2>Record for ${record.name}:</h2><ul><li>Age: ${record.age}</li><li>Address: ${record.address}</li><li>Phone: ${record.phone}</li></ul>`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
