import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";

const URL = "https://questions.greatfrontend.com/api/questions/like-button";
export default function App() {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleButtonClick() {
    setLoading(true);
    setError(null);
    try {
      const action = liked ? "unlike" : "like";
      const payload = {
        action,
      };

      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();

      if (res.status === 200) {
        setLiked((prev) => !prev);
      } else {
        setError(json.message);
        throw json.message;
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <button
        disabled={loading}
        onClick={handleButtonClick}
        className={liked ? "liked" : ""}
      >
        {loading ? <SpinnerIcon /> : <HeartIcon />} Like
      </button>
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}
