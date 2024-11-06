import React from "react";
import useFetch from "./useFetch";

export default function Fetched({
  url,
  Loader = (
    <p style={{
      color: '#666',
      fontSize: '26px',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      Data is being loaded....
    </p>
  ),
  renderFaliure = error => (
    <p style={{
      color: '#dc3545',
      fontSize: '16px',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#fff3f4',
      border: '1px solid #dc3545',
      borderRadius: '4px',
      fontFamily: 'Arial, sans-serif'
    }}>
      Error has occurred: {error.message}
    </p>
  ),
  renderSuccess
}) {
  const { loading, data, error } = useFetch(url);
  
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '15px'
  };

  return (
    <div style={containerStyle}>
      {loading && Loader}
      {error && renderFaliure(error)}
      {data && renderSuccess({ data })}
    </div>
  );
}