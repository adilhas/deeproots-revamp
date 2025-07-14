'use client';

import { Mail, Eye, EyeOff } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HiOutlineKey } from 'react-icons/hi2';
import { toast } from 'react-toastify';

export default function SeederLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { status, data: session } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      const role = session?.user?.role;
      if (role === 'seeder') {
        router.push('/seeder/dashboard');
      } else {
        router.push('/admin/applications');
      }
    }
  }, [status, session, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn('credentials', {
      redirect: false,
      username: email,
      password,
    });

    if (res?.ok) {
      window.location.href = '/seeder/dashboard';
    } else {
      toast.error('Invalid seeder credentials');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] flex flex-col ">
      {/* Header */}
      <div className=" py-3">
        <div className="w-full max-w-[1200px] bg-[#DDDDDD] px-4 rounded-3xl mx-auto flex flex-row items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Image
              src={'/dashboard/dashboard-logo.png'}
              width={52}
              height={52}
              alt="dashboard logo"
            />
            <div className="text-2xl font-bold font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
              DEEPROOTS
            </div>
            <div className="text-xl bg-white/10 text-[#525252] border border-[#A1A1A1] px-3 py-1 flex items-center justify-center rounded-full font-semibold">
              Pre seed
            </div>
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="flex flex-1 items-center justify-center mx-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-md">
          <h2 className="text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto mb-6">
            Sign into your Dashboard
          </h2>

          {/* {error && <p className="text-red-600 text-sm mb-4">{error}</p>} */}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-600"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <HiOutlineKey
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full text-gray-700 pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-600"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 mt-4 md:mt-[20vh] rounded-xl font-medium text-white transition-all duration-200 ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gradient-from to-gradient-to'
              }`}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Bottom Links */}
          <div className="mt-4 text-sm text-center text-gray-600 flex flex-wrap items-center justify-between">
            <div>Can’t access your account?</div>
            <div className="text-blue-600 font-medium hover:underline">
              Forgot password?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
