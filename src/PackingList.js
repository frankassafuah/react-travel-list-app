import Item from './Item.js'

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
              item={item}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    );
  }