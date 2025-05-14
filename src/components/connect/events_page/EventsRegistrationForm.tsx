'use client';

import { Mail, User, MapPin, Globe, Bell } from 'lucide-react';
import useEventForm from './useEventForm';
import { interestsList } from './data';

const EventsRegistrationForm = () => {
  const { formData, handleChange, handleSubmit, setFormData } = useEventForm();

  return (
    <section className="bg-white dark:bg-white/5 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 rounded-3xl p-10 shadow-2xl shadow-[#ad1aaf]/10 transition-all duration-300">
      <div className="flex items-center mb-6">
        <Mail className="w-8 h-8 text-[#ad1aaf] mr-3" />
        <h2 className="text-3xl font-bold">Get Invited</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Register to receive exclusive invites, early access, and location
        details for upcoming events.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-4 top-4 text-[#0085a8] w-5 h-5" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#0085a8] focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-4 top-4 text-[#0085a8] w-5 h-5" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#0085a8] focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-4 top-4 text-[#0085a8] w-5 h-5" />
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City / Country"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#0085a8] focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Interests */}
        <div className="space-y-4">
          <div className="flex items-start">
            <Globe className="w-5 h-5 text-[#0085a8] mr-3 mt-1" />
            <div>
              <p className="mb-2 font-medium">Area of Interest:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {interestsList.map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center space-x-2 text-gray-800 dark:text-white"
                  >
                    <input
                      type="checkbox"
                      name={`interests.${key}`}
                      checked={
                        formData.interests[
                          key as keyof typeof formData.interests
                        ]
                      }
                      onChange={handleChange}
                      className="h-5 w-5 accent-[#ad1aaf] rounded border border-gray-400 dark:border-white/30 bg-transparent focus:ring-[#ad1aaf] transition-all duration-300"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Early Access */}
        <div className="space-y-4">
          <div className="flex items-start">
            <Bell className="w-5 h-5 text-[#ad1aaf] mr-3 mt-1" />
            <div>
              <p className="mb-2 font-medium">
                Want early access to private events?
              </p>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 text-gray-800 dark:text-white">
                  <input
                    type="radio"
                    name="earlyAccess"
                    checked={formData.earlyAccess === true}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        earlyAccess: true,
                      }))
                    }
                    className="h-5 w-5 accent-[#ad1aaf] border border-gray-400 dark:border-white/30 focus:ring-[#ad1aaf] transition-all duration-300"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-800 dark:text-white">
                  <input
                    type="radio"
                    name="earlyAccess"
                    checked={formData.earlyAccess === false}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        earlyAccess: false,
                      }))
                    }
                    className="h-5 w-5 accent-[#ad1aaf] border border-gray-400 dark:border-white/30 focus:ring-[#ad1aaf] transition-all duration-300"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-semibold py-3 px-10 rounded-xl text-lg shadow-md hover:shadow-[#ad1aaf]/40 hover:scale-105 transition-all duration-300"
          >
            Submit & Get Notified
          </button>
        </div>
      </form>
    </section>
  );
};

export default EventsRegistrationForm;
