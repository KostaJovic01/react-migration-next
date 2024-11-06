const items = [
  { id: 1 },
  // More items...
];

type Props = {};
const CardList = (props: Props) => {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden rounded-md bg-white px-6 py-4 shadow"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  );
};
export default CardList;
