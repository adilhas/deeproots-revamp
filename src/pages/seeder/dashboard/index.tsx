import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import { signOut, useSession } from 'next-auth/react';

export default function ContributorDashboard() {
  const { data } = useSession();
  console.log('data', data);
  return (
    <div className="border bg-[#E7E7E7] text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gradient-from  to-gradient-to text-white p-4 ">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold font-orbitron">DEEPROOTS</span>
            <span className="text-xs bg-white text-[#9B28F1] px-2 py-0.5 rounded-full ml-2 font-semibold">
              Pre seed
            </span>
          </div>
          <button className="text-sm underline" onClick={() => signOut()}>
            Log Out
          </button>
        </div>
      </header>

      {/* Status Legend */}
      <div className="max-w-[1200px] mx-auto">
        <div className=" px-6 py-3 text-sm flex flex-wrap items-center gap-4">
          Application Status Legend <ApplicationStatusInfo />
        </div>

        {/* Profile Card */}
        <div className="bg-[#FEC956] p-6 rounded-xl m-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm flex items-center gap-2">
              📧 johndoe@gmail.com
            </p>
            <p className="text-sm flex items-center gap-2">
              🧑 Individual (IND)
            </p>
          </div>
          <div>
            <p className="text-sm flex items-center gap-2">
              📞 +2844 3682 8392
            </p>
            <p className="text-sm flex items-center gap-2">📍 Dubai, UAE</p>
            <p className="text-sm flex items-center gap-2">
              🌐{' '}
              <a
                href="https://www.helo.com"
                className="text-blue-800 underline"
              >
                https://www.helo.com
              </a>
            </p>
            <p className="text-sm flex items-center gap-2">
              🔗{' '}
              <a
                href="https://www.linkedin.com"
                className="text-blue-800 underline"
              >
                https://www.linkedin.com
              </a>
            </p>
          </div>
          <div className="text-center mt-6 md:mt-0">
            <div className="text-xl font-bold">02 : 24 : 03 : 38</div>
            <div className="text-sm text-gray-800">Days</div>
            <div className="text-2xl font-bold mt-2">$ 0.00</div>
          </div>
        </div>

        {/* Navigation Pills */}
        <div className="bg-white mx-6 mb-6 p-4 rounded-full flex flex-wrap justify-between items-center gap-6 text-sm font-medium">
          <span className="flex items-center gap-2 bg-gray-200 p-2 rounded-2xl">
            Dashboard{' '}
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full"></span>
          </span>
          <span className="p-2">Application</span>
          <span className="flex p-2">Pre- Approval </span>
          <span className="p-2">Deal Room</span>
        </div>
        <div className="w-full h-[40vh]"></div>
        {/* Seeders Notification */}
        <div className="bg-white mx-6 mb-4 p-6 rounded-2xl flex justify-between items-center">
          <h3 className="font-semibold">Seeders Notification</h3>
          <button className="bg-gradient-to-r from-[#9B28F1] to-[#0B86D4] text-white text-sm px-6 py-2 rounded-full">
            Send
          </button>
        </div>

        {/* Management Note */}
        <div className="bg-white mx-6 mb-10 p-6 rounded-2xl space-y-4">
          <div>
            <h3 className="font-semibold">Management Note</h3>
            <p className="text-xs text-gray-500">Management Note</p>
          </div>
          <div className="flex justify-end gap-4">
            <button className="bg-gray-200 text-sm px-6 py-2 rounded-full">
              Decline
            </button>
            <button className="bg-gradient-to-r from-[#9B28F1] to-[#0B86D4] text-white text-sm px-6 py-2 rounded-full">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
