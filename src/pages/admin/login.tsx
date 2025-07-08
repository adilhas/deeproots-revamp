import { X } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false);
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

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.ok) {
      window.location.href = '/admin/applications'; // trust backend role check
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-[url('/landing/deeproots-banner-mobile.png')] md:bg-[url('/landing/deeproots-banner.webp')]">
      <button
        onClick={() => setShowLogin(true)}
        className="absolute text-sm md:text-md top-3 right-3 lg:top-10 lg:right-15 px-6 py-2 bg-gradient-to-r from-[#AD1AAF] via-[#A34BF0] to-[#0085a8] text-white rounded-4xl hover:scale-105 font-bold border-2 border-[#FFFFFF30] hover:border-[#FFFFFF60] shadow-[0_0_15px_0_rgba(91,72,255,0.5)] hover:shadow-[0_0_20px_0_rgba(91,72,255,0.7)]"
      >
        Login
      </button>

      {showLogin && (
        <>
          <div
            className="fixed inset-0 bg-opacity-60 z-40"
            onClick={() => setShowLogin(false)}
          ></div>

          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-full max-w-xl p-4 md:p-8 bg-gray-800/70 backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-transform duration-300 hover:scale-[1.01]">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-1 right-1 md:inline-block hidden font-extrabold m-4 text-white hover:text-gray-300"
              aria-label="Close login modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center">
              <h2 className="md:text-4xl text-lg sm:text-2xl font-bold bg-gradient-to-bl from-[#ad1aaf] to-[#0085a8] bg-clip-text text-transparent font-orbitron mb-4">
                ADMIN LOGIN
              </h2>

              {error && (
                <p className="text-red-500 mb-4 text-center">{error}</p>
              )}

              <form className="w-full" onSubmit={handleLogin}>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="p-2 md:p-3 mb-4 w-full rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-2 md:p-3 mb-4 w-full rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-purple-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="cursor-pointer text-white p-2 md:p-3 rounded-lg bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] w-full hover:from-[#007693] hover:to-[#9c179e] transition-all"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
