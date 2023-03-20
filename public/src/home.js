function getTotalBooksCount(books) {
 return books.length;
}

function getTotalAccountsCount(accounts) {
 return accounts.length;
}

function getBooksBorrowedCount(books) {
 let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}

function getMostCommonGenres(books) {
  const genreName = books.map((book) => book.genre);
  const genreMap = genreName.reduce((prev, cur) => { 
    prev[cur] = (prev[cur] || 0) + 1; 
    return prev; 
  }, []);
  const genreArr = Object.entries(genreMap).map(([name, count]) => ({name, count}));
  const topGenres = genreArr.sort((ctPrev, ctCur) => ctCur.count - ctPrev.count).slice(0,5);
  return topGenres;
};
function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
