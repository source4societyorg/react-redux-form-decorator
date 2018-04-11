import React from 'react';
import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { valueOrDefault } from '@source4society/scepter-utility-lib';
import { validate } from '@source4society/scepter-validation-lib';
import { defaultProps, propTypes, mapDispatchToProps } from './props';

export const makeDefaultValidationRoutine = (validations, validatorFunction) => (values) => {
  const validator = valueOrDefault(validatorFunction, validate);
  validator(values.toJS(), validations());
};

export const makeDefaultOnSubmitHandler = (dispatchFunction, formName, initialValues) => (formValues) => dispatchFunction(formValues, formName, initialValues);

export class ReduxForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { formName, validations, initialValues, validationRoutineFunction, onSubmit, FormComponent, submitForm, ...rest } = this.props;
    const validationRoutine = valueOrDefault(validationRoutine, makeDefaultValidationRoutine(validations));
    const onSubmitHandler = valueOrDefault(onSubmit, makeDefaultOnSubmitHandler(submitForm, formName, initialValues));
    const formWithStore = reduxForm({
      form: formName,
      validate: validationRoutineFunction,
    })(FormComponent);

    const ReduxFormConnected = connect(
      createStructuredSelector({
        initialValues,
      })
    )(formWithStore);

    return (<ReduxFormConnected
      onSubmit={onSubmitHandler}
      {...rest}
    />);
  }
}

ReduxForm.defaultProps = defaultProps;
ReduxForm.propTypes = propTypes;

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(ReduxForm);
