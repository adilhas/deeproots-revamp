import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function SignIn() {
  const [username, setUsername] = useState('Deeproots');
  const [password, setPassword] = useState('AdamRoots');
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
      className="w-full h-screen bg-cover flex justify-center items-center bg-center"
      style={{ backgroundImage: 'url("/login/login-page-bg.png")' }}
    >
      <div className="flex flex-col lg:w-1/2 w-full rounded-lg backdrop-blur-md shadow-md transition-opacity p-5 md:p-10 items-center justify-center">
        <div className="flex justify-center items-center flex-col bg-gray-800 md:p-8 rounded-md">
          <div className="flex justify-center items-center">
            <h2 className="md:text-4xl shadow-2xl text-2xl font-bold bg-gradient-to-bl from-[#ad1aaf] to-[#0085a8] bg-clip-text text-transparent font-orbitron">
              DEEPROOTS LOGIN
            </h2>
          </div>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form
            className="bg-transparent p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-2 mb-4 w-full rounded dark:bg-neutral-700 dark:text-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 mb-4 w-full rounded dark:bg-neutral-700 dark:text-white"
            />
            <button
              type="submit"
              className="cursor-pointer text-white p-2 bg-gradient-to-r rounded from-[#0085a8] to-[#ad1aaf] w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
