'use client';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  PiUser,
  PiMapPinArea,
  PiGlobeHemisphereWestLight,
  PiMedalLight,
  PiHourglassSimple,
} from 'react-icons/pi';
import { Mail, Clock } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { DropdownField } from './DropdownField';
import {
  defaultVolunteerForm,
  handleVolunteerSelect,
} from './volunteerFormUtils';
import { toast } from 'react-toastify';

const VolunteerForm = () => {
  const { t } = useTranslation('connect/volunteer');
  const [formData, setFormData] =
    useState<typeof defaultVolunteerForm>(defaultVolunteerForm);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const inputValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Required fields (except shortText)
    const requiredFields: (keyof typeof defaultVolunteerForm)[] = [
      'fullName',
      'email',
      'telegram',
      'country',
      'timezone',
      'language',
      'role',
      'hours',
      'whyJoin',
      'whatValue',
      'experience',
      'portfolio',
      'consent',
    ];

    for (const field of requiredFields) {
      const value = formData[field];
      const isEmpty = Array.isArray(value)
        ? value.length === 0
        : typeof value === 'boolean'
          ? value === false
          : !value;

      if (isEmpty) {
        toast.info(`⚠️ Please fill in the ${field} field.`);
        return;
      }
    }

    // Construct email content
    const subject = encodeURIComponent(
      `🌱 Volunteer Application from ${formData.fullName}`
    );

    const body = encodeURIComponent(
      `
🌿 New Volunteer Application

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
💬 Telegram: ${formData.telegram}
🌍 Country: ${formData.country}
🕒 Timezone: ${formData.timezone}
🗣️ Language: ${formData.language}
🎯 Role: ${formData.role}
⏱️ Hours: ${formData.hours}
💼 Experience: ${formData.experience}
🔗 Portfolio: ${formData.portfolio}

💡 Why Join:
${formData.whyJoin}

✨ What Value You Bring:
${formData.whatValue}

📝 Short Text (optional):
${formData.shortText || '—'}
`
    );

    // Open user's mail app
    const mailtoLink = `mailto:connect@deeproots.earth?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="volunteer-form" className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl mb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto font-orbitron">
        {t('form.title')}
      </h1>
      <p className="text-center text-sm text-gray-500 mb-10 mx-auto">
        {t('form.subtitle')}
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Simple Inputs */}
        {(['fullName', 'email', 'telegram'] as const).map((name) => (
          <label
            key={name}
            className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full "
          >
            {name === 'fullName' ? (
              <PiUser />
            ) : name === 'email' ? (
              <Mail />
            ) : (
              <FaTelegramPlane />
            )}
            <input
              name={name}
              value={formData[name]}
              onChange={handleInput}
              type={name === 'email' ? 'email' : 'text'}
              placeholder={t(`form.${name}`)}
              className="grow bg-transparent placeholder-[#525252] dark:placeholder-[#F1F5F9]"
            />
          </label>
        ))}
        <p className="text-xs text-gray-400 ml-2">
          {t('form.telegram_format')}
        </p>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row gap-4">
          <DropdownField
            label={t('form.country')}
            icon={<PiMapPinArea />}
            field="country"
            options={['Ireland', 'Morocco', 'Jordan', 'UAE']}
            value={formData.country}
            onSelect={(f, v) =>
              handleVolunteerSelect(formData, setFormData, f, v)
            }
          />
          <DropdownField
            label={t('form.timezone')}
            icon={<Clock />}
            field="timezone"
            options={[
              'UTC+00:00 Dublin',
              '(UTC+01:00) Casablanca',
              '(UTC+03:00) Aman',
              '(UTC+04:00) Abu Dhabi',
            ]}
            value={formData.timezone}
            onSelect={(f, v) =>
              handleVolunteerSelect(formData, setFormData, f, v)
            }
          />
        </div>
        <p className="text-xs text-gray-400 ml-2">{t('form.timezone_note')}</p>

        <DropdownField
          label={t('form.languages')}
          icon={<PiGlobeHemisphereWestLight />}
          field="language"
          options={['English', 'Arabic', 'French']}
          value={formData.language}
          onSelect={(f, v) =>
            handleVolunteerSelect(formData, setFormData, f, v)
          }
        />
        <DropdownField
          label={t('form.roles')}
          icon={<PiMedalLight />}
          field="role"
          options={[
            'Community Moderator',
            'Operations Assistant',
            'Foundation Coordinator',
            'Telegram / X / LinkedIn  Manager',
            'Social Media Strategist',
            'Content Creator',
            'Brand Storyteller',
            'Influencer Outreach / PR',
            'Video Editor / Motion Designer',
            'Web3 Developer (Solidity /Rust )',
            'AI Engineer / Prompt Developer',
            'API Integrator / Automation Assistant',
            'Smart Contract Tester',
            'Backend Developer — AI & Web3',
            'UI/UX Designer',
            'Graphic Designer',
            '3D /2D Artist',
            'NFT / Game Asset Designer',
            'Game Designer (Rootopia)',
            'Game Developer (Unity / Unreal)',
            'Player Experience Tester',
            'Gamification Architect',
            'Educator / Mentor',
            'Host / Podcaster (Saxophone)',
            'Translator / Multilingual Support',
          ]}
          value={formData.role}
          onSelect={(f, v) =>
            handleVolunteerSelect(formData, setFormData, f, v)
          }
        />
        <DropdownField
          label={t('form.hours')}
          icon={<PiHourglassSimple />}
          field="hours"
          options={['2-5 hrs', '5-10 hrs', '10+ hrs']}
          value={formData.hours}
          onSelect={(f, v) =>
            handleVolunteerSelect(formData, setFormData, f, v)
          }
        />

        {/* Textareas */}
        {(['whyJoin', 'whatValue'] as const).map((field) => (
          <textarea
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleInput}
            className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl placeholder-[#525252] dark:placeholder-[#F1F5F9]"
            placeholder={t(`form.${field}`)}
          />
        ))}

        {/* Radio buttons */}
        <div>
          <p className="text-sm font-medium mb-2">{t('form.experience')}</p>
          <div className="flex gap-6">
            {['yes', 'no'].map((val) => (
              <label
                key={val}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="experience"
                  checked={formData.experience === val}
                  onChange={() =>
                    handleVolunteerSelect(
                      formData,
                      setFormData,
                      'experience',
                      val
                    )
                  }
                  className="radio radio-sm"
                />
                <span>{t(`form.${val}`)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Inputs */}
        {(['shortText', 'portfolio'] as const).map((field) => (
          <div key={field}>
            <input
              name={field}
              value={formData[field]}
              onChange={handleInput}
              type="text"
              placeholder={t(`form.${field}`)}
              className="input input-bordered bg-white dark:bg-[#303030] w-full rounded-full placeholder-[#525252] dark:placeholder-[#F1F5F9]"
            />
            <p className="text-xs text-gray-400 ml-2">
              {t(`form.${field}_note`)}
            </p>
          </div>
        ))}

        {/* Consent */}
        <label className="flex items-center gap-2 text-sm">
          <input
            name="consent"
            checked={formData.consent}
            onChange={handleInput}
            type="checkbox"
            className="checkbox-success checkbox-lg bg-white text-black placeholder-[#525252] dark:placeholder-[#F1F5F9]"
          />
          <span>{t('form.consent')}</span>
        </label>

        {/* Submit Button */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 text-lg font-orbitron rounded-xl text-white bg-gradient-to-r from-gradient-from to-gradient-to shadow-md"
          >
            {t('form.submit')}
          </button>
        </div>

        {/* Note */}
        <div
          className="bg-gradient-to-r from-gradient-from to-gradient-to p-[2px] rounded-xl mt-6 w-fit mx-auto"
          style={{ boxShadow: `0px 4px 20px 8px #4D77F340` }}
        >
          <div className="rounded-[10px] bg-white dark:bg-[#303030] px-4 py-3 shadow-sm">
            <p className="text-sm text-orange-600 font-semibold mb-1">
              {t('form.note_label')}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('form.note_message')}
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default VolunteerForm;
