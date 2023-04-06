// import classes from './ListSection.module.css';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen',
    }}
  >
    {product.title}
  </li>
));

function ListSection() {
  return (
    <div>
      <ul>{listItems}</ul>
      <ul>
        {[
          <li
            key={4}
            style={{
              color: 'magenta',
            }}
          >
            Bananna
          </li>,
          <li
            key={5}
            style={{
              color: 'magenta',
            }}
          >
            Pineapple
          </li>,
          <li
            key={6}
            style={{
              color: 'magenta',
            }}
          >
            Papaya
          </li>,
        ]}
      </ul>
    </div>
  );
}

export default ListSection;
