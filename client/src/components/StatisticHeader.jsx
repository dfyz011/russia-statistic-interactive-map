import React from 'react';

const StatisticHeader = ({ currentIndicator, selectedYears }) => {
  return (
    <div style={{ paddingTop: '16px' }}>
      <div
        style={{
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 400,
        }}
      >
        {(currentIndicator && currentIndicator.title) || ''}
      </div>
      {selectedYears && selectedYears.length > 0 && (
        <div
          style={{
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 400,
          }}
        >
          {`${Math.min(...selectedYears)}-${Math.max(...selectedYears)}`}
        </div>
      )}
    </div>
  );
};

export default StatisticHeader;
