'use client';

import React from 'react';
import { X } from 'lucide-react';

interface HarvestRecord {
  date: string;
  daily: string;
  aggregate: string;
}

const harvestData: HarvestRecord[] = [
  { date: '14/06/2025; 12:00 pm', daily: '+ 30 dRC', aggregate: '10,090 dRC' },
  { date: '13/06/2025; 12:00 pm', daily: '+ 30 dRC', aggregate: '10,060 dRC' },
  { date: '12/06/2025; 12:00 pm', daily: '+ 30 dRC', aggregate: '10,030 dRC' },
];

interface HarvestHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HarvestHistoryModal: React.FC<HarvestHistoryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 00-8 8 6 6 0 008 8 6 6 0 008-8 8 8 0 00-8-8zm-1 11H7v-2h2v2zm4 0h-2v-2h2v2z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Harvest History
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed text-sm text-left text-gray-600">
            <thead>
              <tr className="border-b text-gray-800 font-medium">
                <th className="w-1/3 pb-2">Date</th>
                <th className="w-1/3 pb-2">Daily Harvest</th>
                <th className="w-1/3 pb-2">Aggregate Harvest</th>
              </tr>
            </thead>
            <tbody>
              {harvestData.map((row, idx) => (
                <tr key={idx} className="border-b last:border-b-0">
                  <td className="py-3 pr-2">{row.date}</td>
                  <td className="py-3 font-semibold text-gray-800">
                    {row.daily}
                  </td>
                  <td className="py-3 font-medium text-gray-800">
                    {row.aggregate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HarvestHistoryModal;
