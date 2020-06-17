import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  IconButton,
  Divider,
} from '@material-ui/core';
import { addOrdinalToNumber } from '../constants/helpers';

const IndicatorsModal = ({
  indicatorsStatistic, selectedIndicators, selectedRegion, selectedYear, onClose,
}) => {
  const beautifulValues = selectedIndicators ? selectedIndicators.map((indicator) => {
    return {
      Indicator: indicator,
      value: addOrdinalToNumber(`${(indicatorsStatistic
        && selectedRegion
        && indicatorsStatistic[indicator.id]
        && indicatorsStatistic[indicator.id].values
        && indicatorsStatistic[indicator.id].values[selectedRegion.reg_alias_fias_id]
        && indicatorsStatistic[indicator.id].values[selectedRegion.reg_alias_fias_id].value) || ''}`
        .replace(',', '.')),
      measurement_unit: indicatorsStatistic
      && selectedRegion
      && indicatorsStatistic[indicator.id]
      && indicatorsStatistic[indicator.id].values
      && indicatorsStatistic[indicator.id].values[selectedRegion.reg_alias_fias_id]
      && indicatorsStatistic[indicator.id].values[selectedRegion.reg_alias_fias_id].measurement_unit,
    };
  }) : [];

  const stat = selectedIndicators
  && selectedIndicators.length > 0
  && indicatorsStatistic
  && selectedRegion
  && indicatorsStatistic[selectedIndicators[0].id]
  && indicatorsStatistic[selectedIndicators[0].id].values
  && indicatorsStatistic[selectedIndicators[0].id].values[selectedRegion.reg_alias_fias_id];


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
        <span>{(selectedRegion && selectedRegion.reg_alias_human_name) || ''}</span>
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
      {
        beautifulValues && beautifulValues.length > 0
        && (
        <div style={{
          padding: '8px 0',
        }}
        >
          {`За ${(selectedYear) || ''} год`}
        </div>
        )
      }
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
