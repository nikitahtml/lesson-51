import React from 'react';

interface BallProps {
    number: number;
}

const Ball: React.FC<BallProps> = ({ number }) => {
    return (
        <div style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            lineHeight: '40px',
            margin: '10px',
        }}>
            {number}
        </div>
    );
};

export default Ball;