export default function ScoreButton({ user, initData }) {
  const handleClick = async () => {
    await fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ telegramId: user.id, name: user.first_name, initData })
    });
  };

  return (
    <button onClick={handleClick} className="px-4 py-2 bg-blue-600 text-white rounded">
      Получить очко
    </button>
  );
}