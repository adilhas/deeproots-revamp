import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'authenticated') {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover flex justify-end items-center bg-center px-4 lg:px-20"
      style={{ backgroundImage: 'url("/landing/deeproots-banner.webp")' }}
    >
      <div className="flex flex-col w-full max-w-lg rounded-lg shadow-md transition-opacity p-5 md:p-8">
        <div className="flex justify-center items-center flex-col bg-gray-800/90 backdrop-blur-sm p-6 md:p-8 rounded-md">
          <div className="flex justify-center items-center">
            <h2 className="md:text-4xl shadow-2xl text-2xl font-bold bg-gradient-to-bl from-[#ad1aaf] to-[#0085a8] bg-clip-text text-transparent font-orbitron">
              DEEPROOTS LOGIN
            </h2>
          </div>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form
            className="bg-transparent w-full rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-2 mb-4 w-full rounded bg-neutral-700 text-white border border-neutral-600 focus:border-purple-500 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 mb-4 w-full rounded bg-neutral-700 text-white border border-neutral-600 focus:border-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer text-white p-2 bg-gradient-to-r rounded from-[#0085a8] to-[#ad1aaf] w-full hover:from-[#007693] hover:to-[#9c179e] transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
