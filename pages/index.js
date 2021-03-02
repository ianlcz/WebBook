import Layout from "../components/Layout";

const Home = ({ books }) => (
  <Layout>
    <ul>
      {books.map((book) => (
        <li key={book._id}>{book.title}</li>
      ))}
    </ul>
  </Layout>
);

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { host } = req.headers;

  const res = await fetch(
    `${
      process.env.NODE_ENV !== "production"
        ? `http://${host}`
        : `https://${host}`
    }/api/book`
  );
  const books = await res.json();

  if (books) {
    return {
      props: {
        books,
      },
    };
  }
};

export default Home;
