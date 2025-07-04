import { useEffect, useState } from "react";
import ScoreButton from "../components/ScoreButton";
import Leaderboard from "../components/Leaderboard";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [initData, setInitData] = useState("");
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const tg = (window as any).Telegram.WebApp;
    tg.expand();
    setInitData(tg.initData || "");
    setUser(tg.initDataUnsafe?.user || null);
    fetch("/api/leaderboard").then(res => res.json()).then(setScores);
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-4">Мини-игра</h1>
      {user && <ScoreButton user={user} initData={initData} />}
      <Leaderboard data={scores} />
    </div>
  );
}