import React from 'react';
import Select from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';

const suggestions = [
  { label: 'Alabama', value: 'AL'},
  { label: 'Alaska', value: 'AK'},
  { label: 'Arizona', value: 'AZ'},
  { label: 'Arkansas', value: 'AR'},
  { label: 'California', value: 'CA'},
  { label: 'Colorado', value: 'CO'},
  { label: 'Connecticut', value: 'CT'},
  { label: 'Delaware', value: 'DE'},
  { label: 'Florida', value: 'FL'},
  { label: 'Georgia', value: 'GA'},
  { label: 'Hawaii', value: 'HI'},
  { label: 'Idaho', value: 'ID'},
  { label: 'Illinois', value: 'IL'},
  { label: 'Indiana', value: 'IN'},
  { label: 'Iowa', value: 'IA'},
  { label: 'Kansas', value: 'KS'},
  { label: 'Kentucky', value: 'KY'},
  { label: 'Louisiana', value: 'LA'},
  { label: 'Maine', value: 'ME'},
  { label: 'Maryland', value: 'MD'},
  { label: 'Massachusetts', value: 'MA'},
  { label: 'Michigan', value: 'MI'},
  { label: 'Minnesota', value: 'MN'},
  { label: 'Mississippi', value: 'MS'},
  { label: 'Missouri', value: 'MO'},
  { label: 'Montana', value: 'MT'},
  { label: 'Nebraska', value: 'NE'},
  { label: 'Nevada', value: 'NV'},
  { label: 'New Hampshire', value: 'NH'},
  { label: 'New Jersey', value: 'NJ'},
  { label: 'New Mexico', value: 'NM'},
  { label: 'New York', value: 'NY'},
  { label: 'North Carolina', value: 'NC'},
  { label: 'North Dakota', value: 'ND'},
  { label: 'Ohio', value: 'OH'},
  { label: 'Oklahoma', value: 'OK'},
  { label: 'Oregon', value: 'OR'},
  { label: 'Pennsylvania', value: 'PA'},
  { label: 'Rhode Island', value: 'RI'},
  { label: 'South Carolina', value: 'SC'},
  { label: 'South Dakota', value: 'SD'},
  { label: 'Tennessee', value: 'TN'},
  { label: 'Texas', value: 'TX'},
  { label: 'Utah', value: 'UT'},
  { label: 'Vermont', value: 'VT'},
  { label: 'Virginia', value: 'VA'},
  { label: 'Washington', value: 'WA'},
  { label: 'West Virginia', value: 'WV'},
  { label: 'Wisconsin', value: 'WI'},
  { label: 'Wyoming', value: 'WY'},
  
].map(suggestion => ({
  value: suggestion.value,
  label: suggestion.label,
}));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 50,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}));

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.TextFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
};

const components = {
  Control,
  Menu,
  Option,
  Placeholder,
  SingleValue,
};

function Selector(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);

  function handleChangeSingle(value) {
    setSingle(value);
    props.changeValue(value);
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <div className={classes.divider} />
        <Select
          classes={classes}
          styles={selectStyles}
          options={suggestions}
          components={components}
          value={single}
          onChange={handleChangeSingle}
          placeholder="Search for a state"
        />
      </NoSsr>
    </div>
  );
}

export default Selector;