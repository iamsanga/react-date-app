import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const DateDisplay = ((props) => (
  <Paper className="container">
      <List>
          <ListItem>
          <ListItemText>Day: {props.apiResponse[0]} </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Month:{props.apiResponse[1]} </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Year: {props.apiResponse[2]} </ListItemText>
      </ListItem>
      </List>
  </Paper>
));

DateDisplay.propTypes = {
  apiResponse: PropTypes.array
}

export default DateDisplay;
