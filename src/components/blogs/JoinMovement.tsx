import { Link } from 'lucide-react';
import React from 'react';

const JoinMovement = () => {
  return (
    <div className="py-6">
      <div className="border border-[#D4D4D4] dark:border-[#737373] p-2.5 text-center rounded-3xl mt-6">
        <div className="bg-[#D4D4D4] dark:bg-[#3F3F3F] p-2 rounded-2xl font-bold">
          <div>
            Join the Movement – Discover DeWorld at{' '}
            <Link href={'/'} className="underline">
              DeepRoots.earth
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMovement;
