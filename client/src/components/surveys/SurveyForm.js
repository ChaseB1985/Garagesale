
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

import Button from '@material-ui/core/Button';



class SurveyForm extends Component {
  state = {};

  renderFields() {
   
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          style={{weight:'30px'}}
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
        
        );
      });
    }
    
  render() {
    
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          
          <Button 
          style={{ margin: '15px' }}
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
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
