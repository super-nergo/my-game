export default function Leaderboard({ data }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg mb-2">🏆 Рейтинг</h2>
      <ul className="text-left inline-block">
        {data.map((user, i) => (
          <li key={user.telegramId}>
            {i + 1}. {user.name} — {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
}