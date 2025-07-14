import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { GrKey } from 'react-icons/gr';
import Link from 'next/link';
import { toast } from 'react-toastify';
import AuthLoader from '@/components/AuthLoader';

export default function CreateAccountPage() {
  const router = useRouter();
  const { token } = router.query;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (typeof token === 'string') {
      fetch(`/api/seeder/validate-token?token=${token}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) setError(data.error);
          else setEmail(data.email);
        })
        .catch(() => setError('Something went wrong'))
        .finally(() => setLoading(false));
    }
  }, [token]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      toast.error('Passwords do not match');
      return;
    }

    const res = await fetch('/api/seeder/create-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, email, password, confirmPassword }),
    });

    const data = await res.json();
    if (data.error) {
      setError(data.error);
      toast.error(data.error);
    } else {
      setSuccess(true);
      if (success) {
        return;
      }
      toast.success('Account created successfully! Redirecting...');
      router.push('/seeder/login');
    }
  }

  if (loading) return <AuthLoader />;

  return (
    <div className=" bg-[#EEEEEE] min-h-screen text-[#525252]">
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
      <div className="max-w-[1200px] mx-auto mt-10">
        <div className="w-full max-w-[474px] mx-auto bg-white p-6 rounded-2xl">
          <h1 className="text-2xl font-semibold mb-4 text-center text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
            Welcome, You received an invite to access your dashboard
          </h1>

          <h1 className="text-lg my-6 font-semibold mb-4 w-fit mx-auto text-center">
            Sign up to continue
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                placeholder="Email"
                readOnly
                className="w-full pl-10 pr-3 py-2 border border-[#D4D4D4] text-black bg-gray-100 rounded-2xl"
              />
            </div>

            <div className="relative">
              <GrKey className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-3 py-2 border border-[#D4D4D4] rounded-2xl"
                placeholder="Password"
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

            <div className="relative">
              <GrKey className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-3 py-2 border border-[#D4D4D4] rounded-2xl"
                placeholder="Enter password again"
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

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white py-2 hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>
          <div className="w-full flex items-center justify-between mt-6">
            <div>Already Have account?</div>
            <Link href={'/seeder/login'} className="text-blue-500 underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
