import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  const getNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="quote-container">
      <h1>QUOTE OF THE DAY</h1>
      <div className="quote">
        <p>"{quote}"</p>
        <p>- {author}</p>
      </div>
      <button className="button type1" onClick={getNewQuote}>
        {" "}
        <span class="btn-txt">New Quote</span>
      </button>
    </div>
  );
};

export default QuoteGenerator;
