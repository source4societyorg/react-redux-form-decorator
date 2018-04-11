import { SCEPTER_POST_FORM } from './constants';

export const scepterPostForm = (formValues, formName, initialValues) => ({
  type: SCEPTER_POST_FORM,
  formValues,
  formName,
  initialValues,
});
