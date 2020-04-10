import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DateButton = ((props) => (
  <div className="button-container">
    <Button
      variant="contained"
      onClick={props.onClickButton}
      color="primary">
      Display Date
    </Button>
    <Button
      variant="contained"
      onClick={props.onClear}
      color="primary">
      Clear
    </Button>
  </div>
));


DateButton.propTypes = {
    onClickButton: PropTypes.func
}

export default DateButton;
