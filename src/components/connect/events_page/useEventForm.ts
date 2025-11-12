import React, { useState } from 'react';

const useEventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interests: {
      web3: false,
      gamefi: false,
      nfts: false,
      governance: false,
      updates: false,
    },
    earlyAccess: false,
    submitted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name.startsWith('interests.')) {
      const interestKey = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        interests: {
          ...prev.interests,
          [interestKey]: checked,
        },
      }));
    } else if (type === 'radio' && name === 'earlyAccess') {
      setFormData((prev) => ({
        ...prev,
        earlyAccess: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, submitted: true }));
  };

  return { formData, setFormData, handleChange, handleSubmit };
};

export default useEventForm;
