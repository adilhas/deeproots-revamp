'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { PiMapPinArea, PiUser, PiUserCircleCheck } from 'react-icons/pi';
import { useTranslation, Trans } from 'react-i18next';

const PrivateSeedForm = () => {
  const { t } = useTranslation('connect/private_seed');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    country: '',
    linkedin: '',
    capital: '',
    experience: '',
    value: '',
    whyJoin: '',
    whyFoundation: '',
    canPassKyc: '',
    // signature: false,
    confidentiality: false,
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const inputValue =
      type === 'checkbox' && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setFormData((prev) => ({ ...prev, [name]: inputValue }));
  };

  const handleRadio = (value: string) => {
    setFormData((prev) => ({ ...prev, canPassKyc: value }));
  };

  return (
    <section id="access-form" className=" mx-auto  py-16">
      <div className="p-[2px] mb-6 mt-2 md:shadow-[0px_12px_21px_0px_#0000002B] md:bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl w-fit mx-auto">
        <div className="bg-[#E9E9E9] dark:bg-[#161616] rounded-xl px-4 py-1">
          <h1 className="text-3xl mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to font-orbitron">
            {t('form.title')}
          </h1>
        </div>
      </div>

      <p className="text-center text-lg md:text-2xl text-gray-500 mb-10 mx-auto ">
        {t('form.subtitle')} {t('form.subtitle_note')}
      </p>
      <div className="md:bg-[#F1F1F1] px-2 rounded-4xl py-10 md:dark:bg-[#23232399] md:border border-[#D4D4D4] dark:border-black">
        <form className="space-y-7 w-full mx-auto max-w-[700px]">
          {[
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
              icon: <PiUserCircleCheck className="w-5 h-5" />,
              type: 'text',
            },
            {
              name: 'capital',
              icon: <PiUserCircleCheck className="w-5 h-5" />,
              type: 'text',
            },
          ].map(({ name, icon, type }) => {
            const value = formData[name as keyof typeof formData];

            return (
              <label
                key={name}
                className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full"
              >
                {icon}
                <input
                  name={name}
                  type={type}
                  onChange={handleInput}
                  className="grow bg-transparent"
                  placeholder={t(`form.placeholders.${name}`)}
                  value={
                    typeof value === 'string' || typeof value === 'number'
                      ? value
                      : ''
                  }
                />
              </label>
            );
          })}

          {['experience', 'value', 'whyJoin', 'whyFoundation'].map((field) => (
            <textarea
              key={field}
              name={field}
              value={formData[field as keyof typeof formData] as string}
              onChange={handleInput}
              className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl"
              placeholder={t(`form.placeholders.${field}`)}
            />
          ))}

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
                    name="canPassKyc"
                    className="radio radio-sm"
                    checked={formData.canPassKyc === val}
                    onChange={() => handleRadio(val)}
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* <label className="flex items-start gap-2 text-sm">
            <input
              name="signature"
              checked={formData.signature}
              onChange={handleInput}
              type="checkbox"
              className="checkbox bg-white text-black"
            />
            <span>{t('form.signature')}</span>
          </label> */}

          <label className="flex items-start gap-2 text-sm">
            <input
              name="confidentiality"
              checked={formData.confidentiality}
              onChange={handleInput}
              type="checkbox"
              className="checkbox bg-white text-black"
            />
            <span>{t('form.consent')}</span>
          </label>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="py-3 px-2 w-fit mx-auto text-lg font-orbitron rounded-xl text-white border-none bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 shadow-md"
            >
              {t('form.submit')}
            </button>
          </div>
        </form>
      </div>
      <div className="rounded-[10px] mt-10 mx-auto bg-[#F5FAFF] dark:bg-[#194185] border border-[#36BFFA] dark:border-[#36BFFA] px-4 py-3 shadow-sm max-w-md">
        <p className="text-sm text-[#3B82F6] dark:text-[#BFDBFE] font-semibold mb-1">
          {t('form.note_title')}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {t('form.note_line1')}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {t('form.note_line2')}
        </p>
        <ul className="list-disc ml-4 text-sm text-gray-700 dark:text-gray-300">
          <li>{t('form.note_points.discount')}</li>
          <li>{t('form.note_points.access')}</li>
          <li>{t('form.note_points.profit')}</li>
        </ul>
        <p className="mt-2 text-sm dark:text-gray-300">
          <Trans
            i18nKey="form.note_line3"
            t={t}
            components={{ 1: <span className="font-semibold" /> }}
          />
        </p>
      </div>
    </section>
  );
};

export default PrivateSeedForm;
