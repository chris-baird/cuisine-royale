import * as yup from 'yup';

const settingsFormSchema = yup.object({
  location: yup.string().required()
});

export default settingsFormSchema;
