'use client';

import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { PiMapPinArea, PiUser, PiUserCircleCheck } from 'react-icons/pi';
import { useTranslation, Trans } from 'next-i18next';

const PrivateSeedFormV2 = () => {
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
    <section id="access-form" className="mx-auto py-16 px-4">
      {/* Title with gradient and glow */}
      <div className="relative mb-10 w-fit mx-auto rounded-xl bg-gradient-to-br from-gradient-from to-gradient-to p-[2px] shadow-[0_0_20px_#00FFF780]">
        <div className="bg-white/90 dark:bg-[#161616]/90 backdrop-blur-sm px-6 py-3 rounded-xl">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to font-orbitron drop-shadow-md">
            {t('form.title')}
          </h1>
        </div>
      </div>

      <p className="text-center text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
        {t('form.subtitle')} {t('form.subtitle_note')}
      </p>

      {/* Form Card */}
      <div className="bg-white/70 dark:bg-[#121212]/80 backdrop-blur-md border border-[#D4D4D4] dark:border-gradient-from rounded-3xl px-6 md:px-10 py-12 max-w-3xl mx-auto shadow-lg">
        <form className="space-y-7">
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
                className="flex items-center gap-3 px-4 py-3 rounded-full bg-white dark:bg-[#222] border border-gray-300 dark:border-[#333] text-black dark:text-white"
              >
                {icon}
                <input
                  name={name}
                  type={type}
                  onChange={handleInput}
                  className="grow bg-transparent outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
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

          {/* Textareas */}
          {['experience', 'value', 'whyJoin'].map((field) => (
            <textarea
              key={field}
              name={field}
              value={formData[field as keyof typeof formData] as string}
              onChange={handleInput}
              className="w-full p-4 rounded-xl bg-white dark:bg-[#222] border border-gray-300 dark:border-[#333] text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder={t(`form.placeholders.${field}`)}
            />
          ))}

          {/* KYC Radio */}
          <div>
            <p className="text-sm font-medium mb-2 text-gray-700 dark:text-white">
              {t('form.kyc')}
            </p>
            <div className="flex gap-6">
              {(['Yes', 'No'] as const).map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2 text-gray-800 dark:text-gray-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="canPassKyc"
                    className="radio radio-sm border-gradient-from"
                    checked={formData.canPassKyc === val}
                    onChange={() => handleRadio(val)}
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Confidentiality Checkbox */}
          <label className="flex items-start gap-2 text-sm text-gray-800 dark:text-white">
            <input
              name="confidentiality"
              checked={formData.confidentiality}
              onChange={handleInput}
              type="checkbox"
              className="checkbox checkbox-sm border-gradient-from"
            />
            <span>{t('form.consent')}</span>
          </label>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="py-3 px-6 font-orbitron text-white text-lg bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl hover:opacity-90 transition-shadow duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            >
              {t('form.submit')}
            </button>
          </div>
        </form>
      </div>

      {/* Info Box */}
      <div className="rounded-xl mt-10 mx-auto bg-[#F5FAFF] dark:bg-[#194185] border border-[#36BFFA] px-6 py-4 shadow-inner max-w-md text-gray-800 dark:text-white">
        <p className="text-sm font-semibold text-gradient-from mb-2">
          {t('form.note_title')}
        </p>
        <p className="text-sm mb-2">{t('form.note_line1')}</p>
        <p className="text-sm mt-2">{t('form.note_line2')}</p>
        <ul className="list-disc ml-4 text-sm">
          <li>{t('form.note_points.discount')}</li>
          <li>{t('form.note_points.access')}</li>
          <li>{t('form.note_points.profit')}</li>
        </ul>
        <p className="mt-2 text-sm">
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

export default PrivateSeedFormV2;
