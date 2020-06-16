import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  IconButton,
  Divider,
} from '@material-ui/core';


const IndicatorsModal = ({
  indicatorsStatistic, selectedIndicators, selectedRegionId, onClose,
}) => {
  console.log('IndicatorsModalindicatorsStatistic', indicatorsStatistic);
  console.log('IndicatorsModalselectedIndicators', selectedIndicators);

  const beautifulValues = selectedIndicators.map((indicator) => {
    return {
      Indicator: indicator,
      value: parseFloat(`${(indicatorsStatistic
        && indicatorsStatistic[indicator.id]
        && indicatorsStatistic[indicator.id].values
        && indicatorsStatistic[indicator.id].values[selectedRegionId]
        && indicatorsStatistic[indicator.id].values[selectedRegionId].value) || ''}`
        .replace(',', '.')).toFixed(2),
      measurement_unit: indicatorsStatistic
      && indicatorsStatistic[indicator.id]
      && indicatorsStatistic[indicator.id].values
      && indicatorsStatistic[indicator.id].values[selectedRegionId]
      && indicatorsStatistic[indicator.id].values[selectedRegionId].measurement_unit,
    };
  });

  const stat = indicatorsStatistic
  && indicatorsStatistic[selectedIndicators[0].id]
  && indicatorsStatistic[selectedIndicators[0].id].values
  && indicatorsStatistic[selectedIndicators[0].id].values[selectedRegionId];

  console.log('beautifulValues', beautifulValues);

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
        <span>{(stat && stat.Region && stat.Region.reg_alias_human_name) || ''}</span>
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
        {`За ${(stat && stat.year) || ''} год`}
      </div>
      <>
        {
        beautifulValues.map((val) => (
          <>
            <Divider style={{ width: 'auto' }} />
            <div key={val.Indicator.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                {`${(val.Indicator && val.Indicator.title) || ''}`}
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
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                {`${val.value !== 'NaN' ? val.value : 'Данных нет'}${(val && val.measurement_unit) || ''}`}
              </div>
            </div>
          </>
        ))
      }
      </>
      {/* <Typography>
        {selectedIndicators.description}
      </Typography> */}
    </div>
  );
};

export default IndicatorsModal;
