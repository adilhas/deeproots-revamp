'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { PiMapPinArea, PiUser, PiUserCircleCheck } from 'react-icons/pi';

const PrivateSeedForm = () => {
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
    signature: false,
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

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleRadio = (value: string) => {
    setFormData((prev) => ({ ...prev, canPassKyc: value }));
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto font-orbitron">
        Application Form
      </h1>
      <p className="text-center text-sm text-gray-500 mb-10 mx-auto font-medium">
        PrivateSeed Application – Foundation Full Seat
        <br />
        <span className="font-normal">(Pre-Approval)</span>
      </p>

      <form className="space-y-7 mx-auto">
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

        {/* Phone / Telegram */}
        <label className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full">
          <Phone className="w-5 h-5" />
          <input
            name="contact"
            value={formData.contact}
            onChange={handleInput}
            type="text"
            className="grow bg-transparent"
            placeholder="Phone / Telegram"
          />
        </label>

        {/* Country */}
        <label className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full">
          <PiMapPinArea className="w-5 h-5" />
          <input
            name="country"
            value={formData.country}
            onChange={handleInput}
            type="text"
            className="grow bg-transparent"
            placeholder="Country of Residence"
          />
        </label>

        {/* LinkedIn */}
        <label className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full">
          <PiUserCircleCheck className="w-5 h-5" />
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInput}
            type="text"
            className="grow bg-transparent"
            placeholder="LinkedIn or Personal Website"
          />
        </label>

        {/* Capital Commitment */}
        <label className="input input-bordered bg-white dark:bg-[#303030] flex items-center gap-2 rounded-full w-full">
          <PiUserCircleCheck className="w-5 h-5" />
          <input
            name="capital"
            value={formData.capital}
            onChange={handleInput}
            type="text"
            className="grow bg-transparent"
            placeholder="Estimated Capital Commitment ($5K–$1M+)"
          />
        </label>

        {/* Experience */}
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleInput}
          className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl"
          placeholder="Experience in Web3, Investing, or Strategic Partnerships"
        />

        {/* Value */}
        <textarea
          name="value"
          value={formData.value}
          onChange={handleInput}
          className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl"
          placeholder="What value can you add to our Foundation and ecosystem?"
        />

        {/* Why DeepRoots */}
        <textarea
          name="whyJoin"
          value={formData.whyJoin}
          onChange={handleInput}
          className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl"
          placeholder="Why are you interested in the DeepRoots Foundation?"
        />

        {/* Why Foundation */}
        <textarea
          name="whyFoundation"
          value={formData.whyFoundation}
          onChange={handleInput}
          className="textarea textarea-bordered bg-white dark:bg-[#303030] w-full rounded-xl"
          placeholder="Why are you interested in the DeepRoots Foundation?"
        />

        {/* KYC/NDA */}
        <div>
          <p className="text-sm font-medium mb-2">
            Are you able to pass KYC & NDA requirements? (Yes / No)
          </p>
          <div className="flex gap-6">
            {['Yes', 'No'].map((val) => (
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

        {/* Signature of Interest */}
        <label className="flex items-start gap-2 text-sm">
          <input
            name="signature"
            checked={formData.signature}
            onChange={handleInput}
            type="checkbox"
            className="checkbox bg-white text-black"
          />
          <span>Signature of Interest</span>
        </label>

        {/* Consent */}
        <label className="flex items-start gap-2 text-sm">
          <input
            name="confidentiality"
            checked={formData.confidentiality}
            onChange={handleInput}
            type="checkbox"
            className="checkbox bg-white text-black"
          />
          <span>I agree to be contacted under confidentiality</span>
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

        {/* Note Box */}
        <div className="rounded-[10px] mx-auto bg-[#F5FAFF] dark:bg-[#194185] border border-[#36BFFA] dark:border-[#36BFFA] px-4 py-3 shadow-sm max-w-md">
          <p className="text-sm text-[#3B82F6] dark:text-[#BFDBFE] font-semibold mb-1">
            Note:
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Applications are reviewed within 3–5 business days. All submissions
            are strictly confidential.
          </p>
          <p className=' className="text-sm text-gray-600 dark:text-gray-300 mt-2"'>
            As a PrivateSeed applicant, you may qualify for:
          </p>
          <ul className="list-disc text-sm ml-4 text-gray-700 dark:text-gray-300">
            <li>⚡ Major token discounts</li>
            <li>🔒 Exclusive product access</li>
            <li>🏛️ Long-term profit-sharing through the DeepRoots ecosystem</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            This is a once-in-a-lifetime opportunity to become part of the
            foundation layer of <span className="font-semibold">DeWorld</span> —
            before it goes public.
          </p>
        </div>
      </form>
    </section>
  );
};

export default PrivateSeedForm;
