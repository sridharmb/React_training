import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const books = [
  {
    image: "/images/images1.jpg",
    title: "title 2",
    author: "author1",
  },
  {
    image: "/images/images2.jpg",
    title: "title 2",
    author: "author2",
  },
  {
    image: "/images/images3.jpg",
    title: "title 3",
    author: "author3",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book, idx) => (
        <Book
          key={idx}
          image_of={book.image}
          title_of={book.title}
          author_of={book.author}
        />
      ))}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form");
  };
  const handleButtonInput = () => {
    alert("handle form");
  };
  return (
    <section className="event">
      <form>
        <h2>Typical Form</h2>
        <label
          htmlFor="name"
          style={{ display: "block", marginTop: "0.125rem" }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="username"
          onChange={handleFormInput}
          style={{ margin: "0.825rem 0" }}
        ></input>
      </form>
      <button onClick={handleButtonInput}>Click Me</button>
    </section>
  );
};

const Book = ({ image_of, title_of, author_of }) => {
  return (
    <article className="book">
      <div className="banner">#1</div>
      <Image im_g={image_of} />
      <Title ti_t={title_of} />
      <Author au_t={author_of} />
    </article>
  );
};

const Image = ({ im_g }) => (
  <img src={im_g} alt="book cover" className="image" />
);
const Title = ({ ti_t }) => <h2 className="title">{ti_t}</h2>;
const Author = ({ au_t }) => <h3 className="author">{au_t}</h3>;

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
