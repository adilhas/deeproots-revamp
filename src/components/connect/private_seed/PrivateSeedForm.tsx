'use client';

import { JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Globe, Mail, Phone } from 'lucide-react';
import { PiCurrencyDollarSimple, PiMapPinArea, PiUser } from 'react-icons/pi';
import { useTranslation } from 'next-i18next';
import { useThemeContext } from '@/context/ThemeContext';
import NoteSection from './NoteSection';

interface PrivateSeedFormData {
  fullName: string;
  email: string;
  contact: string;
  country: string;
  linkedin: string;
  capital: string;
  value: string;
  whyJoin: string;
  canPassKyc: 'Yes' | 'No';
  indvOrOrg: 'Ind' | 'Org';
  confidentiality: boolean;
  acknowledgement: boolean;
}
type FieldKey = keyof PrivateSeedFormData;

const PrivateSeedForm = () => {
  const { t } = useTranslation('connect/private_seed');
  const { isDark } = useThemeContext();

  const { register, handleSubmit, setValue, reset, watch } =
    useForm<PrivateSeedFormData>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: PrivateSeedFormData) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/private-seed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        reset();
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };
  const selectedCapital = watch('capital');

  return (
    <section id="access-form" className="mx-auto py-16">
      <div className="p-[2px] mb-6 mt-2 md:shadow-[0px_12px_21px_0px_#0000002B] md:bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl w-fit mx-auto">
        <div className="bg-[#E9E9E9] dark:bg-[#161616] rounded-xl px-4 py-1">
          <h1 className="text-3xl mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to font-orbitron">
            {t('form.title')}
          </h1>
        </div>
      </div>

      <p className="text-center text-lg md:text-2xl text-gray-500 mb-10 mx-auto">
        {t('form.subtitle')} {t('form.subtitle_note')}
      </p>

      <div
        className="md:bg-[#F1F1F1] px-2 rounded-4xl py-20 md:dark:bg-[#23232399] bg-center md:border border-[#CBD5E1] dark:border-[#334155]"
        style={{ backgroundImage: "url('/connect/private-seed-form-bg.png')" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 w-full mx-auto max-w-[700px]"
        >
          {/* Inputs */}
          {(
            [
              {
                name: 'fullName',
                icon: <PiUser className="w-5 h-5" />,
                type: 'text',
              },
              {
                name: 'email',
                icon: <Mail className="w-5 h-5" />,
                type: 'email',
              },
              {
                name: 'contact',
                icon: <Phone className="w-5 h-5" />,
                type: 'text',
              },
              {
                name: 'country',
                icon: <PiMapPinArea className="w-5 h-5" />,
                type: 'text',
              },
              {
                name: 'linkedin',
                icon: <Globe className="w-5 h-5" />,
                type: 'text',
              },
            ] as { name: FieldKey; icon: JSX.Element; type: string }[]
          ).map(({ name, icon, type }) => (
            <label
              key={name}
              className="input border-0 bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full"
              style={{ boxShadow: `0px 4px 20px 0px #00000073` }}
            >
              {icon}
              <input
                {...(register(name),
                {
                  required: !['contact', 'linkedin'].includes(name),
                })}
                name={name}
                type={type}
                className="grow bg-transparent"
                placeholder={t(`form.placeholders.${name}`)}
              />
            </label>
          ))}

          {/* Capital Selector */}
          <div
            className="border-0 bg-white dark:bg-[#303030] gap-2 rounded-2xl w-full py-3 px-4"
            style={{ boxShadow: `0px 4px 20px 0px #00000073` }}
          >
            <div className="flex items-center">
              <PiCurrencyDollarSimple className="w-5 h-5" />
              <div>{t(`form.placeholders.capital`)}</div>
            </div>
            <div
              className="flex flex-wrap gap-3 text-white w-fit mx-auto justify-start px-6 my-3 py-4 bg-gradient-to-r from-[#AD1AAF] to-[#0085A8] dark:from-[#26252E] dark:to-[#26252E] rounded-lg"
              style={{
                boxShadow: isDark
                  ? `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,0px 0px 20px 0px #433E57 inset,10px 10px 30px 0px #000000B2`
                  : `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,0px 0px 20px 0px #FFFFFFE5 inset,0px 5px 14px 0px #0000004F`,
                backdropFilter: `blur(40px)`,
              }}
            >
              {[
                '$5k',
                '$10k',
                '$20k',
                '$25k',
                '$50k',
                '$100k',
                '$250k',
                '$500k',
                '$1M+',
              ].map((val, index, array) => (
                <div key={index} className="flex items-center">
                  <span
                    className={`cursor-pointer  ${
                      selectedCapital === val ? 'underline' : 'hover:underline'
                    }`}
                    onClick={() => setValue('capital', val)}
                  >
                    {val}
                  </span>
                  {index !== array.length - 1 && (
                    <span className="mx-2 text-[#EB8787]">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Textareas */}
          {(['value', 'whyJoin'] as FieldKey[]).map((field) => (
            <textarea
              key={field}
              {...(register(field), { required: true })}
              className="textarea textarea-bordered bg-white border-0 dark:bg-[#303030] w-full rounded-xl"
              placeholder={t(`form.placeholders.${field}`)}
              style={{ boxShadow: `0px 4px 20px 0px #00000073` }}
            />
          ))}

          {/* KYC */}
          <div>
            <p className="text-sm font-medium mb-2">{t('form.kyc')}</p>
            <div className="flex gap-6">
              {(['Yes', 'No'] as const).map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={val}
                    {...(register('canPassKyc'), { required: true })}
                    className="radio radio-sm"
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Individual or Org */}
          <div>
            <p className="text-sm font-medium mb-2">
              Are you applying as an individual or organization?
            </p>
            <div className="flex gap-6">
              {(['Ind', 'Org'] as const).map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={val}
                    {...(register('indvOrOrg'), { required: true })}
                    className="radio radio-sm"
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Checkboxes */}
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...(register('confidentiality'), { required: true })}
              className="checkbox bg-white text-black"
            />
            <span>{t('form.consent')}</span>
          </label>

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...register('acknowledgement', { required: true })}
              className="checkbox bg-white text-black"
            />
            <span>
              I acknowledge that the information I provide will be treated under
              confidentiality, and I agree not to share or disclose any
              project-related details without written consent. I understand that
              full access may require additional KYC and NDA steps.
            </span>
          </label>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="py-3 px-2 w-fit mx-auto text-lg font-orbitron rounded-xl text-white border-none bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 shadow-md"
            >
              {submitting ? 'Submitting...' : t('form.submit')}
            </button>
          </div>
        </form>
      </div>

      {/* Note Section */}
      <NoteSection />
    </section>
  );
};

export default PrivateSeedForm;
