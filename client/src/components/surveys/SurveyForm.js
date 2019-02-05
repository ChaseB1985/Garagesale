// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  textField: {
    width: "80%",
    marginBottom: 20,
    marginTop: 10
  }
});
class SurveyForm extends Component {
  state = {};

  renderFields() {
    const { classes } = this.props;

    return _.map(formFields, ({ label, name }) => {
      return (
        <form>
        <TextField
        key={name}
        className={classes.textField}
        component={SurveyField}
        type="text"
        label={label}
        name={name}
        />
        </form>
        
        );
          SurveyForm.propTypes = {
            classes: PropTypes.object.isRequired
          };
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
                    
          <Button 
          href="/surveys"
          variant="contained"
          color="inherit">Back</Button>
          <Button
          type="submit"
          variant="contained"
          color="primary">Next</Button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  styles,
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
