'use client';

import React, { JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Globe, Mail, Phone } from 'lucide-react';
import { PiCurrencyDollarSimple, PiMapPinArea, PiUser } from 'react-icons/pi';
import { useTranslation } from 'next-i18next';
import { useThemeContext } from '@/context/ThemeContext';
import NoteSection from './NoteSection';
import SubmitSuccessModal from './SubmitSuccessModal';
import { PrivateSeedSchema } from '@/schema/privateSeedSchema';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import OpenSoonModal from './OpenSoonModal';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

countries.registerLocale(enLocale); // Register English

const countryNames = countries.getNames('en', { select: 'official' });

type PrivateSeedFormData = z.infer<typeof PrivateSeedSchema>;
type FieldKey = keyof PrivateSeedFormData;

const PrivateSeedForm = () => {
  const { t } = useTranslation('connect/private_seed');
  const { isDark } = useThemeContext();
  const [customCapital, setCustomCapital] = useState('');
  const countryList = Object.entries(countryNames).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, name]) => name !== 'United States of America'
  );
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<PrivateSeedFormData>({
    resolver: zodResolver(PrivateSeedSchema),
  });

  const [submitting, setSubmitting] = useState(false);
  const selectedCapital = watch('capital');

  const onSubmit = async (data: PrivateSeedFormData) => {
    // (
    //   document.getElementById('opensoon_modal') as HTMLDialogElement
    // )?.showModal();
    // reset();
    setCustomCapital('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/private-seed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        (
          document.getElementById(
            'form_success_submit_modal'
          ) as HTMLDialogElement
        )?.showModal();
        reset();
        setCustomCapital('');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to submit form.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };
  const capitalOptions = [
    { label: '$5k', value: 5000 },
    { label: '$10k', value: 10000 },
    { label: '$20k', value: 20000 },
    { label: '$25k', value: 25000 },
    { label: '$50k', value: 50000 },
    { label: '$100k', value: 100000 },
    { label: '$250k', value: 250000 },
    { label: '$500k', value: 500000 },
    { label: '$1M+', value: 1000000 },
  ] as const;
  // const values = watch(); // watch all fields

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
        className="md:bg-[#F1F1F1] px-2 rounded-4xl py-20 md:dark:bg-[#23232399] bg-center bg-no-repeat md:border border-[#CBD5E1] dark:border-[#334155]"
        style={{ backgroundImage: "url('/connect/private-seed-form-bg.png')" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 w-full mx-auto max-w-[750px]"
        >
          {(
            [
              {
                name: 'fullName',
                icon: <PiUser className="w-6 h-6" />,
                type: 'text',
              },
              {
                name: 'email',
                icon: <Mail className="w-6 h-6" />,
                type: 'email',
              },
              {
                name: 'contact',
                icon: <Phone className="w-6 h-6" />,
                type: 'text',
              },

              {
                name: 'linkedin',
                icon: <Globe className="w-6 h-6" />,
                type: 'text',
              },
            ] as { name: FieldKey; icon: JSX.Element; type: string }[]
          ).map(({ name, icon, type }) => (
            <div key={name}>
              {watch(name) && (
                <p className="text-md text-[#525252] dark:text-[#F1F5F9] mb-2 px-4">
                  {t(`form.placeholders.${name}`)}
                </p>
              )}
              <label className="input border-0 shadow-[0px_4px_20px_0px_#0000001A] dark:shadow-[0px_4px_20px_0px_#00000073] bg-white dark:bg-[#303030] p-3 flex items-center gap-2 rounded-full w-full">
                {icon}
                <input
                  {...register(name)}
                  name={name}
                  type={type}
                  className="grow bg-transparent py-3 dark:text-[#F1F5F9] text-[#525252] placeholder-[#525252] text-lg dark:placeholder-[#F1F5F9]"
                  placeholder={t(`form.placeholders.${name}`)}
                />
              </label>
              {errors[name] && (
                <p className="text-red-500 text-md mt-1">
                  {errors[name]?.message as string}
                </p>
              )}
            </div>
          ))}

          <div>
            {watch('country') && (
              <p className="text-md text-[#525252] dark:text-[#F1F5F9] mb-2 px-4">
                {t('form.placeholders.country')}
              </p>
            )}
            <div className="">
              <label className="relative  border-0 shadow-[0px_4px_20px_0px_#0000001A] dark:shadow-[0px_4px_20px_0px_#00000073] bg-white dark:bg-[#303030] p-3 flex items-center gap-2 rounded-full w-full">
                <PiMapPinArea className="w-6 h-6" />
                <select
                  {...register('country')}
                  defaultValue={''}
                  className="select-md text-lg shadow-none bg-white dark:bg-[#303030] w-full border-none dark:text-[#F1F5F9] text-[#525252]  focus:outline-none"
                >
                  <option value="" disabled>
                    {t('form.placeholders.country')}
                  </option>
                  {countryList.map(([code, name]) => (
                    <option key={code} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {errors.country && (
              <p className="text-red-500 text-md mt-1">
                {errors.country.message as string}
              </p>
            )}
          </div>

          {/* Capital Selector */}
          <div className="border-0 shadow-[0px_4px_20px_0px_#0000001A] dark:shadow-[0px_4px_20px_0px_#00000073] bg-white dark:bg-[#303030] gap-2 rounded-2xl w-full py-3 px-4 ">
            <div className="flex flex-col items-start gap-y-2 lg:items-center lg:flex-row w-full justify-between">
              <div>
                <div className="flex items-center text-lg">
                  <PiCurrencyDollarSimple className="w-6 h-6" />
                  <div>{t(`form.placeholders.capital`)}</div>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  className="grow border  border-[#D4D4D4] text-sm dark:border-gray-300 px-3 py-2 rounded-xl placeholder-[#525252] dark:placeholder-gray-300"
                  placeholder={'Custom Amount'}
                  value={customCapital}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCustomCapital(value);
                    setValue('capital', Number(value), {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}
                />
              </div>
            </div>
            <div
              className="flex w-full flex-wrap gap-1 text-white mx-auto  justify-start md:justify-between px-2 my-3 py-4 bg-gradient-to-r from-[#AD1AAF] to-[#0085A8] dark:from-[#26252E] dark:to-[#26252E] rounded-lg"
              style={{
                boxShadow: isDark
                  ? `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,0px 0px 20px 0px #433E57 inset,10px 10px 30px 0px #000000B2`
                  : `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,0px 0px 20px 0px #FFFFFFE5 inset,0px 5px 14px 0px #0000004F`,
                backdropFilter: `blur(40px)`,
              }}
            >
              {capitalOptions.map(({ label, value }, index, array) => (
                <React.Fragment key={value}>
                  <div
                    className={`flex items-center cursor-pointer px-2 rounded-md ${
                      selectedCapital === value
                        ? 'bg-[#FFFFFF] text-black'
                        : 'hover:bg-[#FFFFFF] hover:text-black'
                    }`}
                    onClick={() => {
                      setCustomCapital('');
                      setValue('capital', value, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
                    }}
                  >
                    {label}
                  </div>

                  {/* Add separator only between items */}
                  {index !== array.length - 1 && (
                    <div className="text-[#EB8787] mx-[1px] select-none w-fit">
                      |
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            {errors.capital && (
              <p className="text-red-500 text-sm mt-1">
                {errors.capital.message}
              </p>
            )}
          </div>

          {/* Textareas */}
          {(['value', 'whyJoin'] as FieldKey[]).map((field) => (
            <div key={field}>
              {watch(field) && (
                <p className="text-md text-[#525252] dark:text-[#F1F5F9] mb-2 px-4">
                  {t(`form.placeholders.${field}`)}
                </p>
              )}
              <textarea
                {...register(field)}
                rows={5}
                className="textarea text-lg textarea-bordered p-3 shadow-[0px_4px_20px_0px_#0000001A] dark:shadow-[0px_4px_20px_0px_#00000073] bg-white border-0 dark:bg-[#303030] w-full rounded-xl"
                placeholder={t(`form.placeholders.${field}`)}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field]?.message}
                </p>
              )}
            </div>
          ))}

          {/* Individual or Org */}
          <div>
            <p className="text-sm font-medium mb-2">
              Are you applying as an Individual or Organization?
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              {(
                [
                  {
                    key: 'Ind',
                    title: 'Individual (Personal Contribution)',
                    subtitle: '(Personal applicant applying for themselves.)',
                  },
                  {
                    key: 'Org',
                    title: 'Organization (Company / Group Contribution)',
                    subtitle:
                      '(Applying on behalf of a company or organization.)',
                  },
                ] as const
              ).map((val) => (
                <label
                  key={val.key}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={val.key}
                    {...register('indvOrOrg')}
                    className="radio radio-sm"
                  />
                  <div>
                    <div>{val.title}</div>
                    <div className="text-xs italic">{val.subtitle}</div>
                  </div>
                </label>
              ))}
            </div>
            {errors.indvOrOrg && (
              <p className="text-red-500 text-sm mt-1">
                {errors.indvOrOrg.message}
              </p>
            )}
          </div>

          {/* Checkboxes */}
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...register('confidentiality')}
              className="checkbox bg-white text-black checked:bg-green-500"
            />
            <span>I agree to be contacted under a confidentiality clause.</span>
          </label>
          {errors.confidentiality && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confidentiality.message}
            </p>
          )}

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...register('canPassKyc')}
              className="checkbox bg-white text-black checked:bg-green-500"
            />
            <span>
              I confirm my willingness to complete KYC and sign the NDA if
              required.
            </span>
          </label>
          {errors.canPassKyc && (
            <p className="text-red-500 text-sm mt-1">
              {errors.canPassKyc.message}
            </p>
          )}

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...register('acknowledgement')}
              className="checkbox bg-white text-black checked:bg-green-500"
            />
            <span>
              I acknowledge that the information I provide will be treated under
              confidentiality, and I agree not to share or disclose any
              project-related details without written consent. I understand that
              full access may require additional KYC and NDA steps.
            </span>
          </label>
          {errors.acknowledgement && (
            <p className="text-red-500 text-sm mt-1">
              {errors.acknowledgement.message}
            </p>
          )}

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...register('disclosureTerm')}
              className="checkbox bg-white text-black checked:bg-green-500"
            />
            <span>
              I agree not to share or disclose any project-related information
              without written consent. I understand that full access may require
              KYC and NDA completion.
            </span>
          </label>
          {errors.disclosureTerm && (
            <p className="text-red-500 text-sm mt-1">
              {errors.disclosureTerm.message}
            </p>
          )}
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...register('nonUsCitizen')}
              className="checkbox bg-white text-black checked:bg-green-500"
            />
            <span>
              I confirm I am not a U.S. citizen, resident, or under U.S.
              jurisdiction. Participation is not available to U.S. persons or
              entities.
            </span>
          </label>
          {errors.nonUsCitizen && (
            <p className="text-red-500 text-sm mt-1">
              {errors.nonUsCitizen.message}
            </p>
          )}

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="py-3 px-3 font-semibold w-fit mx-auto text-lg font-orbitron rounded-xl text-white border-none bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 shadow-md"
            >
              {submitting ? 'Submitting...' : t('form.submit')}
            </button>
          </div>
        </form>
        <SubmitSuccessModal />
        <OpenSoonModal />
      </div>

      {/* Note Section */}
      <NoteSection />
    </section>
  );
};

export default PrivateSeedForm;
