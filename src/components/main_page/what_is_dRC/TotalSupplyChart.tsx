import { getTotalSupplyData } from '@/constants/totalSuppyData';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { PieChart, Pie, Cell } from 'recharts';

interface TotalSupplyChartProps {
  showGradient?: boolean; // optional prop to control the gradient
}

const TotalSupplyChart: React.FC<TotalSupplyChartProps> = ({
  showGradient = true,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { t } = useTranslation('landing_page');
  const totalSupplyData = getTotalSupplyData(t);

  const generateConicGradient = (data: typeof totalSupplyData) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let current = 0;
    return `conic-gradient(${data
      .map((item) => {
        const start = (current / total) * 100;
        const end = ((current + item.value) / total) * 100;
        const colorStop = `${item.color} ${start.toFixed(2)}% ${end.toFixed(2)}%`;
        current += item.value;
        return colorStop;
      })
      .join(', ')})`;
  };

  return (
    <div className="relative flex items-center justify-center w-[330px] h-[200px]">
      {showGradient && (
        <div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            width: 240,
            height: 240,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: generateConicGradient(totalSupplyData),
            filter: 'blur(10px) brightness(0.8)',
            opacity: 0.7,
            zIndex: 0,
          }}
        />
      )}

      {mounted && (
        <PieChart width={200} height={200} style={{ zIndex: 1 }}>
          <Pie
            data={totalSupplyData}
            cx="50%"
            cy="50%"
            innerRadius={85}
            outerRadius={100}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {totalSupplyData.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      )}

      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
        style={{ zIndex: 2 }}
      >
        <div className="w-[170px] h-[170px] rounded-full bg-[#EBEBEB] dark:bg-[#1E1E2D] flex flex-col items-center justify-center">
          <span className="text-[12px] dark:text-[#A1A1AA] font-[400]">
            Total Supply
          </span>
          <span className="text-[48px] font-[700] dark:text-[white] leading-[56px]">
            100M
          </span>
          <span className="text-[12px] dark:text-[#A1A1AA] font-[400]">
            Total dRC minted
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalSupplyChart;
