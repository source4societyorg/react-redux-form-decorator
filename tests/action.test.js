import { scepterPostForm } from '../src/actions';
import { SCEPTER_POST_FORM } from '../src/constants';

test('scepterPostForm returns an action object with the proper type and properties', () => {
  const mockFormValues = { hasProperties: 'mockFormValues' };
  const mockFormName = 'mockFormName';
  const mockInitialValues = { hasProperties: 'mockInitialValues' };

  expect(scepterPostForm(mockFormValues, mockFormName, mockInitialValues)).toEqual({
    type: SCEPTER_POST_FORM,
    formValues: mockFormValues,
    formName: mockFormName,
    initialValues: mockInitialValues,
  });
});
