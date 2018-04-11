import PropTypes from 'prop-types';
import { scepterPostForm } from './actions';

export const defaultProps = {};

export const propTypes = {
  formName: PropTypes.string.isRequired,
  initialValues: PropTypes.func.isRequired,
  FormComponent: PropTypes.any.isRequired,
  onSubmit: PropTypes.func,
  validationRoutineFunction: PropTypes.func,
};

export const mapDispatchToProps = (dispatch) => ({
  submitForm: (formValues, formName, initialValues) => dispatch(scepterPostForm(formValues, formName, initialValues)),
});
