import Card from "../components/Card";

const Grid = ({ content }) => (
  <ul className="mt-8 grid grid-cols-4">
    {content.map((book) => (
      <li key={book._id}>
        <Card content={book} />
      </li>
    ))}
  </ul>
);

export default Grid;
