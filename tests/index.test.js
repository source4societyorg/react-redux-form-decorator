import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { ReduxForm, makeDefaultValidationRoutine, makeDefaultOnSubmitHandler } from '../src/index';

test('ReduxForm renders without problems', () => {
  const mockFormName = 'mockFormName';
  const onSubmit = () => null;
  const mockFormComponent = () => <div></div>;
  const mockInitialValues = () => {};
  shallow(<ReduxForm formName={mockFormName} initialValues={mockInitialValues} onSubmit={onSubmit} FormComponent={mockFormComponent} />);
});

test('makeDefaultValidationRoutine takes a validation routine as an argument and returns a function that will validate an immutable object of key/value pairs', () => {
  const mockValues = fromJS({ hasProperties: 'mockValues' });
  const mockValidations = { hasProperties: 'mockValidations' };
  const mockValidator = (values, validations) => {
    expect(values).toEqual(mockValues.toJS());
    expect(validations).toEqual(mockValidations);
  };
  const mockGetValidations = () => mockValidations;
  makeDefaultValidationRoutine(mockGetValidations, mockValidator)(mockValues);
});

test('makeDefaultOnSubmitHandler returns a submit handler with proper arguments passed in', () => {
  const mockFormValues = 'mockFormValues';
  const mockFormName = 'mockFormName';
  const mockInitialValues = 'mockInitialValues';
  const mockDispatchFunction = (formValues, formName, initialValues) => {
    expect(formValues).toEqual(mockFormValues);
    expect(formName).toEqual(mockFormName);
    expect(initialValues).toEqual(mockInitialValues);
  };
  makeDefaultOnSubmitHandler(mockDispatchFunction, mockFormName, mockInitialValues)(mockFormValues);
});

