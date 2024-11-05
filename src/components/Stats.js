export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your shopping list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've already spent all money! It's time to go home 🏡"
          : `📝 You have ${numItems} item on your list, and you already bought
        ${numPacked} (${percentage}%) ✅`}
      </em>
    </footer>
  );
}
