import { Item } from "../types/type";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  const clickDelete = (data: Item) => {
    setItems(items.filter((item: Item) => item.itemId !== data.itemId));
  };

  const clickComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
  };

  return (
    <ul>
      {items.map((data: Item) => {
        return (
          <li
            className={`list-item ${data.clear ? "complete" : ""}`}
            key={data.itemId}
          >
            <p>{data.itemName}</p>
            <div>
              <button
                className="button-delete"
                onClick={() => clickDelete(data)}
              >{`Delete`}</button>
              <button
                className="button-complete"
                onClick={() => clickComplete(data)}
              >{`Complete`}</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
