import * as yup from 'yup';

export const promptValidationSchema = yup.object().shape({
  content: yup.string().required(),
  customer_id: yup.string().nullable(),
});
