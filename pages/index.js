import Layout from "../components/Layout";
import Grid from "../components/Grid";

const Home = ({ books }) => {
  return (
    <Layout>
      <Grid content={books} />
    </Layout>
  );
};

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
