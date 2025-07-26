'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { GrKey } from 'react-icons/gr';
import { toast } from 'react-toastify';
import DashboardHeader from '@/Shared/Application/DashboardHeader';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!token) return setMessage('Missing or invalid token.');
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/seeder/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || 'Something went wrong.');
        return;
      }

      toast.success('Password reset successful! Redirecting...');
      setTimeout(() => router.push('/seeder/login'), 2000);
    } catch {
      toast.error('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-3 md:px-1 bg-[#EEEEEE] font-archivo min-h-screen text-[#525252]">
      <div className="py-3">
        <DashboardHeader label="Pre Seeder" />
      </div>

      <div className="max-w-[1200px] mx-auto mt-10">
        <div className="w-full max-w-[576px] mx-auto bg-white p-6 rounded-2xl">
          <h1 className="text-3xl font-semibold mb-4 text-center text-transparent bg-gradient-to-r from-gradient-from2 to-gradient-to2 bg-clip-text w-full max-w-[451px] mx-auto">
            Reset Your Password
          </h1>

          <h1 className="text-2xl text-[#525252] my-10 font-semibold w-fit mx-auto text-center">
            Enter new password to continue
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col gap-y-4 w-full max-w-[474px] mx-auto"
          >
            {/* New Password */}
            <div className="relative">
              <GrKey className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-3 py-2 border border-[#D4D4D4] rounded-2xl"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <GrKey className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-3 py-2 border border-[#D4D4D4] rounded-2xl"
                placeholder="Confirm Password Again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                tabIndex={-1}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Error Message */}
            {message && <p className="text-red-600 text-sm">{message}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full my-4 max-w-[399px] mx-auto bg-gradient-to-r from-gradient-from2 to-gradient-to2 rounded-xl text-white py-2 hover:bg-blue-700 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
