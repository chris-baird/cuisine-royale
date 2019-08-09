import * as yup from 'yup';

const settingsFormSchema = yup.object({
  location: yup.string().required(),
  geoLocation: yup.string()
});

export default settingsFormSchema;
