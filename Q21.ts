
interface Book {
    title: string;
    author: string;
    publicationYear: number;
}


const myFavoriteBook: Book = {
    title: "The Inheritance Games ",
    author: "Jennifer lynn barnes",
    publicationYear: 2020
};

console.log("My favorite book:");
console.log(`Title: ${myFavoriteBook.title}`);
console.log(`Author: ${myFavoriteBook.author}`);
console.log(`Publication Year: ${myFavoriteBook.publicationYear}`);

