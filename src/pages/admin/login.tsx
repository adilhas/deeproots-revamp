import DashboardHeader from '@/Shared/Application/DashboardHeader';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GrKey } from 'react-icons/gr';
import { toast } from 'react-toastify';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { status, data: session } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      const role = session?.user?.role;
      if (role === 'admin') {
        router.push('/admin/applications');
      } else {
        router.push('/seeder/dashboard'); // redirect seeder or unknown users
      }
    }
  }, [status, session, router]);

  // Optional: block UI rendering for already-authenticated non-admins
  if (status === 'authenticated' && session?.user?.role !== 'admin') {
    return router.push('/seeder/dashboard');
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.ok) {
      window.location.href = '/admin/applications'; // trust backend role check
    } else {
      toast.error('Invalid admin credentials');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] flex flex-col ">
      {/* Header */}
      <div className=" py-3">
        <DashboardHeader label="Admin" />
      </div>

      {/* Login Card */}
      <div className="flex flex-1 items-start  justify-center mx-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-[588px] mt-[3%] shadow-md">
          <h2 className="text-center text-3xl leading-normal font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradient-from2 to-gradient-to2 w-fit mx-auto mb-6">
            Sign into your Dashboard
          </h2>

          <form
            onSubmit={handleLogin}
            className="space-y-4 w-full max-w-[399px] mx-auto"
          >
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-600"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <GrKey
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
                  : 'bg-gradient-to-r from-gradient-from2 to-gradient-to2'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="loading-spinner"></div>
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}{' '}
            </button>
          </form>

          {/* Bottom Links */}
          <div className="mt-4 text-sm max-w-[474px] text-center text-[#525252] flex flex-wrap items-center justify-between">
            <div>Can’t access your account?</div>
            <div className="text-[#2563EB] font-medium hover:underline">
              Forgot password?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
