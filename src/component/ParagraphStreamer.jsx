import React, { useState } from 'react';

function ParagraphStreamer() {
    const [paragraph, setParagraph] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchParagraph = async () => {
        setLoading(true);
        setParagraph('');
        try {
            const res = await fetch('https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/dev/hipster');
            const data = await res.json();
            let i = 0;
            const interval = setInterval(() => {
                if (i >= data.chunks.length) {
                    clearInterval(interval);
                    setLoading(false);
                    return;
                }
                setParagraph(prev => prev + data.chunks[i] + ' ');
                i++;
            }, 500);
        } catch (err) {
            console.error('Error fetching data:', err);
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '30px', borderRadius: '8px' }}>
            <h2>Paragraph Streamer</h2>
            <button onClick={fetchParagraph} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Paragraph'}
            </button>
            <p style={{ marginTop: '20px', fontSize: '1.1em', lineHeight: '1.6' }}>{paragraph}</p>
        </div>
    );
}

export default ParagraphStreamer;
