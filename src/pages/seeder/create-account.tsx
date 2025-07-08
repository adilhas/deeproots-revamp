import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateAccountPage() {
  const router = useRouter();
  const { token } = router.query;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

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
    } else {
      setSuccess(true);
      router.push('/seeder/login');
    }
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (success)
    return (
      <p className="text-center mt-10 text-green-600">
        ✅ Account created successfully! Redirecting...
      </p>
    );

  return (
    <div className="max-w-md mx-auto p-4 mt-10 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Create Seeder Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full p-2 border text-black bg-gray-100 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
