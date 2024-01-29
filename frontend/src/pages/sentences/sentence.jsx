import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import './sentence.css';

function Sentence() {
  const [word, setWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFileFromAssets = async () => {
    try {
      const response = await fetch('/assets/sentences.tsv');
      const text = await response.text();
      const result = Papa.parse(text, {
        header: false,
        delimiter: '\t',
      });
      setFileData(result.data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading file:', error);
      setError('Error loading file. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFileFromAssets();
  }, []);

  const searchWord = () => {
    if (!word || word.trim() === '') {
      setSearchResults([]);
      return;
    }

    if (fileData) {
      const foundSentence = fileData.find((row) => {
        if (row && row[1]) {
          const sentence = row[1].toLowerCase();
          const wordToSearch = word.toLowerCase();

          const regex = new RegExp(`\\b${wordToSearch}\\b`);
          return regex.test(sentence);
        }
        return false;
      });

      setSearchResults(foundSentence ? [foundSentence] : []);
    }
  };

  return (
    <div className="sentence">
      <Link to="/home">Back</Link> 
      <h1>Search in Context</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={searchWord} disabled={loading}>
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {searchResults.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>English Sentence</th>
                <th>Dutch Translation</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((row, index) => (
                <tr key={index}>
                  <td>{row[1]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {searchResults.length === 0 && !loading && <p>No matching sentences found.</p>}
      </div>
    </div>
  );
}

export default Sentence;
