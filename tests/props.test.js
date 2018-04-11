import PropTypes from 'prop-types';
import { defaultProps, propTypes, mapDispatchToProps } from '../src/props';
import { scepterPostForm } from '../src/actions';

test('propTypes are defined properly', () => {
  expect(propTypes).toEqual({
    formName: PropTypes.string.isRequired,
    initialValues: PropTypes.func.isRequired,
    FormComponent: PropTypes.any.isRequired,
    onSubmit: PropTypes.func,
    validationRoutineFunction: PropTypes.func,
  });
});

test('defaultProps are defined properly', () => {
  expect(defaultProps).toEqual({});
});

test('mapDispatchToProps maps the form post dispatch to the submitForm property', () => {
  const mockFormValues = { hasProperties: 'mockFormValues' };
  const mockFormName = 'mockFormName';
  const mockInitialValues = { hasProperties: 'mockInitialValues' };
  const mockActionObject = scepterPostForm(mockFormValues, mockFormName, mockInitialValues);
  const mockDispatch = (actionObject) => actionObject;
  expect(mapDispatchToProps(mockDispatch).submitForm(mockFormValues, mockFormName, mockInitialValues)).toEqual(mockActionObject);
});
