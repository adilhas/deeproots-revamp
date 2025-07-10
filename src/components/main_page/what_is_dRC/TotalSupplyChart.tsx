import { totalSupplyData } from '@/constants/totalSuppyData';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface TotalSupplyChartProps {
  showGradient?: boolean;
  theme?: 'light' | 'dark'; // Optional theme override
}

const TotalSupplyChart: React.FC<TotalSupplyChartProps> = ({
  showGradient = true,
  theme,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  return (
    <div className="relative flex items-center justify-center w-[330px] h-[269px]">
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
        <PieChart width={269} height={269} style={{ zIndex: 1 }}>
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
        <div
          className={`w-[170px] h-[170px] rounded-full flex flex-col items-center justify-center
            ${!theme ? 'bg-[#EBEBEB] dark:bg-[#1E1E2D]' : ''}
            ${isDark ? 'bg-[#1E1E2D]' : ''}
            ${isLight ? 'bg-[#EBEBEB]' : ''}
          `}
        >
          <span
            className={`text-[12px] font-[400]
              ${!theme ? 'dark:text-[#A1A1AA]' : ''}
              ${isDark ? 'text-[#A1A1AA]' : ''}
              ${isLight ? 'text-[#6B7280]' : ''}
            `}
          >
            Total Supply
          </span>
          <span
            className={`text-5xl font-[700] leading-[56px]
              ${!theme ? 'dark:text-white' : ''}
              ${isDark ? 'text-white' : ''}
              ${isLight ? 'text-black' : ''}
            `}
          >
            100M
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalSupplyChart;
