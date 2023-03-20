const getBooksByAuthorId = (books, authorId) => {
  return books.filter((book) => book.authorId === authorId);
};