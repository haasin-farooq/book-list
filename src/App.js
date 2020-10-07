import React from 'react';

import Navbar from './components/navbar.component';
import BookList from './components/book-list.component';
import BookForm from './components/book-form.component';

import BookContextProvider from './contexts/book.context';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
