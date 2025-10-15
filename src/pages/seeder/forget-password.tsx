'use client';

import DashboardHeader from '@/Shared/Application/DashboardHeader';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/router';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/seeder/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Reset link sent to your email.');
        router.replace('/seeder/login');
        setEmail('');
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch {
      toast.error('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-archivo bg-[#F2F2F2] flex flex-col">
      {/* Header */}
      <div className="py-3 px-2 md:px-2">
        <DashboardHeader label="Pre seed" />
      </div>

      {/* Form Section */}
      <div className="flex flex-1 items-start mt-10 justify-center mx-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-[588px]">
          <h2 className="text-center text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradient-from2 to-gradient-to2 w-fit mx-auto mb-8">
            Forgot Password
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 max-w-[512px] mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-gray-700 pl-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r disabled:opacity-60 from-gradient-from2 to-gradient-to2 text-white w-full py-2 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
