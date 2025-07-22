import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ResponsePage() {
  const [searchParams] = useSearchParams();
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);

  const query = searchParams.get("query");

  useEffect(() => {
    const fetchReply = async () => {
      const res = await fetch(
        "https://portfoliobackend-production-ce66.up.railway.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: query }),
        }
      );

      const data = await res.json();
      setReply(data.reply);
      setLoading(false);
    };

    if (query) fetchReply();
  }, [query]);

  return (
    <div>
      <h2>Your Question:</h2>
      <p>{query}</p>

      <h2>AI Response:</h2>
      {loading ? <p>Loading...</p> : <p>{reply}</p>}
    </div>
  );
}

export default ResponsePage;
