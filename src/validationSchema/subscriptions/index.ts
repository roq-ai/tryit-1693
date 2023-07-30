import * as yup from 'yup';

export const subscriptionValidationSchema = yup.object().shape({
  status: yup.string().required(),
  attempts: yup.number().integer().required(),
  customer_id: yup.string().nullable(),
});
