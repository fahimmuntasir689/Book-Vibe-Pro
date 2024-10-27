


const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('read-books')
    if (storedBooks) {
        return JSON.parse(storedBooks)
    }
    return [];
}
const saveStoredBooks = id => {
    const storedBooks = getStoredBooks()
    const exist = storedBooks.find(bookId => bookId === id)
    if (!exist) {
        storedBooks.push(id)
        localStorage.setItem('read-books', JSON.stringify(storedBooks))
      
        
    }

}
const getStoredWishedBooks = () => {
    const storedBooks = localStorage.getItem('wished-books')
    if (storedBooks) {
        return JSON.parse(storedBooks)
    }
    return [];
}
const saveStoredWishedBooks = id => {
    const storedBooks = getStoredWishedBooks()
    const exist = storedBooks.find(bookId => bookId === id)
    if (!exist) {
        storedBooks.push(id)
        localStorage.setItem('wished-books', JSON.stringify(storedBooks))
    }

}

export { getStoredBooks, saveStoredBooks , getStoredWishedBooks , saveStoredWishedBooks }