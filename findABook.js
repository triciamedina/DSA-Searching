//  Imagine you are looking for a book in a library
//  with a Dewey Decimal index. How would you go 
//  about it? Can you express this process as a 
//  search algorithm? Implement your algorithm to 
//  find a book whose Dewey and book title is 
//  provided.

function findABook(books, dewey, title, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? books.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const book = books[index];

    if (book.dewey == dewey) {
        if (book.title == title) {
            return index;
        }
        
        for (let i = index + 1; i.dewey == dewey; i++) {
            if (books[index].title == title) {
                return index;
            }
        }

        for (let i = index - 1; i.dewey == dewey; i++) {
            if (books[index].title == title) {
                return index;
            }
        }

        return -1;
    }
    else if (book.dewey < dewey) {
        return findABook(books, dewey, title, index + 1, end);
    }
    else if (book.dewey > dewey) {
        return findABook(books, dewey, title, start, index - 1);
    }
};

// use hash map

const books =[
    {
        dewey: '005.133',
        title: 'The Hobbit'
    },
    {
        dewey: '005.133',
        title: 'Do Androids Dream of Electric Sheep?'
    },
    {
        dewey: '005.133',
        title: 'Dune'
    },
    {
        dewey: '005.2762',
        title: 'Neuromancer'
    },
    {
        dewey: '005.2762',
        title: 'Farenheit 451'
    },
    {
        dewey: '005.44684',
        title: 'The Left Hand of Darkness'
    },
    {
        dewey: '220.52081',
        title: 'Nineteen Eighty-Four'
    },
    {
        dewey: '231.7652',
        title: 'Brave New World'
    },
    {
        dewey: '623.82509051',
        title: 'Slaughterhouse Five'
    },
    {
        dewey: '796.8092',
        title: 'The Three-Body Problem'
    },
]

console.log(findABook(books, '005.44684', 'The Left Hand of Darkness'))