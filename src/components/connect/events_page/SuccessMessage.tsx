import { CheckCircle } from 'lucide-react';

const SuccessMessage = () => (
  <section className="bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-200 dark:border-green-900/30 text-center">
    <div className="flex flex-col items-center">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        You&apos;re in!
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        Thank you for registering! We&apos;ll send you exclusive invites and
        updates for upcoming Deep Roots events.
      </p>
    </div>
  </section>
);

export default SuccessMessage;
