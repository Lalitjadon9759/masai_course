const library = {
    books: [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],
    addBook(book) {
      if (
        typeof book !== 'object' ||
        typeof book.title !== 'string' ||
        typeof book.author !== 'string' ||
        typeof book.year !== 'number'
      ) {
        console.log("Invalid book format. A valid book must include a title (string), author (string), and year (number).");
        return false;
      }
  
      this.books.push(book);
      return true;
    },
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
  
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        return removedBook;
      } else {
        console.log("Book not found.");
        return null;
      }
    }
  };
  library.addBook({ author: "George Orwell", year: 1949 });
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  
  console.log("Books in library:", library.books.length);
  
  
  console.log("Current Library:", library.books);