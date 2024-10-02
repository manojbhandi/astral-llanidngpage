import React, { useState, useEffect } from 'react';

const GraphQLComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define your GraphQL query
    const query = `
      {
        // Sample query, modify according to the API schema
        yourQueryName {
          field1
          field2
        }
      }
    `;

    // Make the API call
    fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          setError(result.errors);
        } else {
          setData(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>GraphQL API Data</h1>
      {/* Render data based on the API response */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GraphQLComponent;
