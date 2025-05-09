import AuthGuard from '@/components/AuthGuard';

export default function Home() {
  return (
    <AuthGuard>
      <div>
        <h1 className="text-5xl font-orbitron">Hello World</h1>
      </div>
    </AuthGuard>
  );
}
