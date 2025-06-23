export const defaultVolunteerForm = {
  fullName: '',
  email: '',
  telegram: '',
  country: '',
  timezone: '',
  language: [] as string[],
  role: [] as string[],
  hours: '',
  whyJoin: '',
  whatValue: '',
  shortText: '',
  portfolio: '',
  experience: '',
  consent: false,
};

export const handleVolunteerSelect = (
  formData: typeof defaultVolunteerForm,
  setFormData: React.Dispatch<
    React.SetStateAction<typeof defaultVolunteerForm>
  >,
  field: string,
  value: string
) => {
  const currentValue = formData[field as keyof typeof formData];
  if (Array.isArray(currentValue)) {
    const updatedValue = currentValue.includes(value)
      ? currentValue.filter((v) => v !== value)
      : [...currentValue, value];
    setFormData({ ...formData, [field]: updatedValue });
  } else {
    setFormData({ ...formData, [field]: value });
  }
};
