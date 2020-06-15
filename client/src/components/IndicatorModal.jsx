import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  IconButton,
  Divider,
} from '@material-ui/core';


const IndicatorModal = ({ selectedRegion, currentIndicator, onClose }) => {
  return (
    <div style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>
      <div
        style={{
          fontSize: '19px',
          lineHeight: '24px',
          fontStyle: 'normal',
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{(selectedRegion && selectedRegion.Region && selectedRegion.Region.reg_alias_human_name) || ''}</span>
        {onClose && (
        <IconButton
          component="span"
          size="small"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        )}
      </div>
      <div style={{
        padding: '8px 0',
      }}
      >
        {(currentIndicator && currentIndicator.title) || ''}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{
          padding: '16px',
          fontSize: '17px',
          lineHeight: '28px',
          fontStyle: 'normal',
          fontWeight: 400,
          width: '50%',
          textAlign: 'center',
        }}
        >
          {`За ${(selectedRegion && selectedRegion.year) || ''} год`}
        </div>
        <Divider style={{ height: 'auto' }} orientation="vertical" />
        <div
          style={{
            padding: '16px',
            fontSize: '17px',
            lineHeight: '28px',
            fontStyle: 'normal',
            fontWeight: 400,
            width: '50%',
            textAlign: 'center',
          }}
        >
          {`${parseFloat(`${(selectedRegion && selectedRegion.value) || ''}`.replace(',', '.')).toFixed(2)}${(selectedRegion && selectedRegion.measurement_unit) || ''}`}
        </div>
      </div>
      {/* <Typography>
              {currentIndicator.description}
            </Typography> */}
    </div>
  );
};

export default IndicatorModal;
