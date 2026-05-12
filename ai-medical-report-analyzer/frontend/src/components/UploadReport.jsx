import React, { useState } from 'react';
import axios from 'axios';

const UploadReport = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();

    formData.append('report', file);

    const response = await axios.post(
      'http://localhost:5000/api/report/upload',
      formData
    );

    setResult(response.data);
  };

  return (
    <div>
      <h1>Upload Medical Report</h1>

      <input
        type='file'
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={uploadFile}>Analyze</button>

      {result && (
        <div>
          <h2>Summary</h2>
          <p>{result.summary}</p>

          <h2>Abnormalities</h2>
          <ul>
            {result.abnormalities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadReport;