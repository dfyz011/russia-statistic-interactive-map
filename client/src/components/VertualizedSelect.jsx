import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { VariableSizeList } from 'react-window';
import { Typography } from '@material-ui/core';

const LISTBOX_PADDING = 8;

function renderRow(props) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef((props, ref) => {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child) => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const useStyles = makeStyles({
  listbox: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

export default function VirtualizedSelect({ options, label, ...rest }) {
  const classes = useStyles();

  return (
    <Autocomplete
      disableListWrap
      classes={classes}
      ListboxComponent={ListboxComponent}
      noOptionsText="Не найдено"
      options={options}
      renderInput={(params) => <TextField {...params} InputLabelProps={{ shrink: true }} label={label} />}
      renderOption={(option) => <Typography noWrap key={option.id} value={option}>{option.title}</Typography>}
      getOptionLabel={(option) => {
        return option.title || '';
      }}
      getOptionSelected={(option, value) => value.id === option.id}
      {...rest}
    />
  );
}
