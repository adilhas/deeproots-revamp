import { Mail, Phone, Globe } from 'lucide-react';
import { PiMapPinArea, PiUser } from 'react-icons/pi';
import { useTranslation } from 'next-i18next';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { PrivateSeedFormData } from '@/schema/privateSeedSchema';

type Props = {
  register: UseFormRegister<PrivateSeedFormData>;
  errors: FieldErrors<PrivateSeedFormData>;
};

export const FormFields = ({ register, errors }: Props) => {
  const { t } = useTranslation('connect/private_seed');
  const fields = [
    { name: 'fullName', icon: <PiUser />, type: 'text' },
    { name: 'email', icon: <Mail />, type: 'email' },
    { name: 'contact', icon: <Phone />, type: 'text' },
    { name: 'country', icon: <PiMapPinArea />, type: 'text' },
    { name: 'linkedin', icon: <Globe />, type: 'text' },
  ] as const;

  return (
    <>
      {fields.map(({ name, icon, type }) => (
        <div key={name}>
          <label className="input flex items-center gap-2 bg-white dark:bg-[#303030] rounded-full shadow">
            {icon}
            <input
              {...register(name)}
              type={type}
              className="grow bg-transparent"
              placeholder={t(`form.placeholders.${name}`)}
            />
          </label>
          {errors[name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[name]?.message as string}
            </p>
          )}
        </div>
      ))}
    </>
  );
};
