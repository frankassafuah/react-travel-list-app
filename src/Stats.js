
export default function Stats({ items }) {
    const numItems = items.length; //derived state
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round([(+numPacked / +numItems) * 100]);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : ` 🧳 You have ${numItems} item(s) on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }