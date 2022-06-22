const getTheTitles = function(books) {

  const titulos = [];

  for(let i=0; i<books.length; i++) {
    titulos.push(books[i].title)
  }
  return titulos
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
