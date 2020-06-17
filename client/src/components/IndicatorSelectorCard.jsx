import React from 'react';
import { connect } from 'react-redux';
import {
  Checkbox,
  TextField,
  Paper,
  Chip,
  Grid,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import VirtualizedSelect from './VertualizedSelect';


const IndicatorSelectorCard = ({
  handleSelectedCatogories,
  categories, selectedCatogories,
  currentIndicator, handleCurrentIndicatorChange,
  indicators,
}) => {
  return (
    <>
      <Paper elevation={3} square style={{ padding: '24px' }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Autocomplete
              options={categories}
              multiple
              onChange={handleSelectedCatogories}
              value={selectedCatogories}
              noOptionsText="Не найдено"
              disableCloseOnSelect
            // renderTags={() => {}}
            // renderTags={(value, getTagProps) => (
            //   <div>
            //     <span style={{ whiteSpace: 'nowrap' }}>
            //       {`${value.map((reg) => reg.reg_alias_human_name).join(', ')}`}
            //     </span>
            //   </div>
            // )}
              renderTags={(value, getTagProps) => (
                <div className="chips">
                  {value.map((category) => (
                    <Chip key={category.id} label={category.title} className="chips" />
                  ))}
                </div>
              )}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Категории метрик"
                  InputLabelProps={{ shrink: true }}
                />
              )}
              renderOption={(option, { selected }) => (
                <>
                  <Checkbox
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </>
              )}
              getOptionSelected={(option, value) => value.id === option.id}
            />
          </Grid>
          <Grid item>
            <VirtualizedSelect
              id="grouped-select"
              label="Метрика"
              value={currentIndicator || ''}
              options={indicators || []}
              onChange={handleCurrentIndicatorChange}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default IndicatorSelectorCard;
