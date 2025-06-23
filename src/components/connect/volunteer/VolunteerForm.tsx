'use client';

import { useState } from 'react';
import { Mail, Clock, ChevronDown } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  PiGlobeHemisphereWestLight,
  PiHourglassSimple,
  PiMapPinArea,
  PiMedalLight,
  PiUser,
} from 'react-icons/pi';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telegram: '',
    country: '',
    timezone: '',
    language: [] as string[], // multi-select
    role: [] as string[], // multi-select
    hours: '',
    whyJoin: '',
    whatValue: '',
    shortText: '',
    portfolio: '',
    experience: '',
    consent: false,
  });

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => {
      const currentValue = prev[field as keyof typeof formData];

      if (Array.isArray(currentValue)) {
        const updatedValue = currentValue.includes(value)
          ? currentValue.filter((v) => v !== value)
          : [...currentValue, value];
        return { ...prev, [field]: updatedValue };
      }

      return { ...prev, [field]: value };
    });
  };

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

  const Dropdown = ({
    label,
    icon,
    field,
    options,
  }: {
    label: string;
    icon: React.ReactNode;
    field: keyof typeof formData;
    options: string[];
  }) => {
    const selected = formData[field];
    const isMulti = Array.isArray(selected);
    const selectedText = isMulti
      ? (selected as string[]).join(', ') || label
      : (selected as string) || label;

    return (
      <div className="dropdown w-full">
        <div
          tabIndex={0}
          role="button"
          className="input input-bordered bg-white dark:bg-[#303030] flex items-center justify-between rounded-full w-full"
        >
          <div className="flex items-center gap-2 text-[#4B5563] dark:text-white truncate">
            {icon}
            <span className="truncate">{selectedText}</span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-[#303030] rounded-box w-full max-h-60 overflow-y-auto"
        >
          {options.map((opt) => {
            const isSelected = isMulti
              ? (selected as string[]).includes(opt)
              : selected === opt;
            return (
              <li key={opt} className="w-full">
                <button
                  type="button"
                  onClick={() => handleSelect(field, opt)}
                  className={`flex items-center justify-between text-[#4B5563] dark:text-white w-full px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 `}
                >
                  <span className="truncate">{opt}</span>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="checkbox checkbox-sm pointer-events-none bg-white dark:bg-[#303030] border-gray-300 dark:border-gray-600 text-blue-600"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl mb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto font-orbitron">
        Apply to Volunteer
      </h1>
      <p className="text-center text-sm text-gray-500 mb-10 mx-auto">
        We review applications weekly and onboard volunteers into private
        channels. All roles are remote, flexible, and part of the mission to
        decentralize the internet.
      </p>

      <form className="space-y-4 mx-auto">
        {/* Full Name */}
        <label className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full">
          <PiUser className="w-5 h-5" />
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleInput}
            type="text"
            className="grow bg-transparent"
            placeholder="Full Name"
          />
        </label>

        {/* Email */}
        <label className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full">
          <Mail className="w-5 h-5" />
          <input
            name="email"
            value={formData.email}
            onChange={handleInput}
            type="email"
            className="grow bg-transparent"
            placeholder="Email Address"
          />
        </label>

        {/* Telegram */}
        <label className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full">
          <FaTelegramPlane className="w-5 h-5" />
          <input
            name="telegram"
            value={formData.telegram}
            onChange={handleInput}
            type="text"
            className="grow bg-transparent"
            placeholder="Telegram Username / Contact"
          />
        </label>
        <p className="text-xs text-gray-400 ml-2">Format: @yourusername</p>

        {/* Country & Timezone */}
        <div className="flex flex-col md:flex-row gap-4">
          <Dropdown
            label="Country"
            icon={<PiMapPinArea className="w-5 h-5" />}
            field="country"
            options={['Ireland', 'Morocco', 'Jordan', 'UAE']}
          />
          <Dropdown
            label="Time Zone"
            icon={<Clock className="w-5 h-5" />}
            field="timezone"
            options={[
              'UTC+00:00 Dublin, Edinburgh, Lisbon, London',
              '(UTC+01:00) Casablanca',
              '(UTC+02:00) Chisinau',
              '(UTC+03:00) Aman',
              '(UTC+04:00) Abu Dhabi, Muscat',
            ]}
          />
        </div>
        <p className="text-xs text-gray-400 ml-2">Where are you based?</p>

        {/* Languages - Multi Select */}
        <Dropdown
          label="Languages You Speak"
          icon={<PiGlobeHemisphereWestLight className="w-5 h-5" />}
          field="language"
          options={['English', 'Arabic', 'French', 'Spanish', 'Chinese']}
        />

        {/* Roles - Multi Select */}
        <Dropdown
          label="What roles are you interested in?"
          icon={<PiMedalLight className="w-5 h-5" />}
          field="role"
          options={[
            'Community Moderator (Telegram, Discord, X, Reddit)',
            'Translator',
            'Graphic Designer / Meme Maker',
            'Beta Tester (Wallet, GameFi)',
            'Educator / Event Host',
            'Other (Specify)',
          ]}
        />

        {/* Hours per week */}
        <Dropdown
          label="How many hours/week can you contribute?"
          icon={<PiHourglassSimple className="w-5 h-5" />}
          field="hours"
          options={['2-5 hrs', '5-10 hrs', '10+ hrs']}
        />

        {/* Why Join */}
        <textarea
          name="whyJoin"
          value={formData.whyJoin}
          onChange={handleInput}
          className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl"
          placeholder="Why do you want to join the DeepRoots Volunteer Program?"
        />

        {/* What Value */}
        <textarea
          name="whatValue"
          value={formData.whatValue}
          onChange={handleInput}
          className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl"
          placeholder="What value can you bring to the ecosystem?"
        />

        {/* Experience radio */}
        <div>
          <p className="text-sm font-medium mb-2">
            Have you been involved in any Web3, DAO, or community project
            before?
          </p>
          <div className="flex gap-6">
            {['yes', 'no'].map((val) => (
              <label
                key={val}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="experience"
                  className="radio radio-sm"
                  checked={formData.experience === val}
                  onChange={() => handleSelect('experience', val)}
                />
                <span>{val[0].toUpperCase() + val.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Short Text */}
        <input
          name="shortText"
          value={formData.shortText}
          onChange={handleInput}
          type="text"
          placeholder="Short Text"
          className="input input-bordered bg-white dark:bg-[#303030] w-full rounded-full"
        />
        <p className="text-xs text-gray-400 ml-2">Optional</p>

        {/* Portfolio */}
        <input
          name="portfolio"
          value={formData.portfolio}
          onChange={handleInput}
          type="text"
          placeholder="Portfolio / Socials"
          className="input input-bordered bg-white dark:bg-[#303030] w-full rounded-full"
        />
        <p className="text-xs text-gray-400 ml-2">
          Enter Link (LinkedIn, Twitter, GitHub, or past work)
        </p>
        <p className="text-xs text-gray-400 ml-2">Optional</p>

        {/* Consent */}
        <label className="flex items-start gap-2 text-sm">
          <input
            name="consent"
            checked={formData.consent}
            onChange={handleInput}
            type="checkbox"
            className="checkbox bg-white text-black"
          />
          <span>
            I understand this is a volunteer role and agree to be contacted by
            the DeepRoots.earth team.
          </span>
        </label>

        {/* Submit */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="py-3 px-2 w-fit mx-auto text-lg font-orbitron rounded-xl text-white border-none bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 shadow-md"
          >
            Submit Application
          </button>
        </div>

        {/* Note */}
        <div
          className="bg-gradient-to-r from-gradient-from to-gradient-to p-[2px] rounded-xl mt-6 w-fit mx-auto"
          style={{ boxShadow: `0px 4px 20px 8px #4D77F340` }}
        >
          <div className="rounded-[10px] bg-white dark:bg-[#303030] px-4 py-3 shadow-sm">
            <p className="text-sm text-orange-600 font-semibold mb-1">Note:</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Submissions are reviewed weekly. All data is confidential.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default VolunteerForm;
