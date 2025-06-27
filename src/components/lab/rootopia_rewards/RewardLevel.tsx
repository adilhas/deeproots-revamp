// components/RewardLevel.tsx
import Image from 'next/image';

type RewardLevelProps = {
  level: number;
  title: string;
  percentage: string;
  arrowSize: number;
  headingSize: string;
  percentSize: string;
};

export const RewardLevel = ({
  level,
  title,
  percentage,
  arrowSize,
  headingSize,
  percentSize,
}: RewardLevelProps) => (
  <div className="flex flex-row justify-between items-center w-full max-w-[300px] mx-auto my-3">
    <div className="text-start">
      <div className={headingSize}>Level {level}</div>
      <p className="text-white">{title}</p>
    </div>
    <div className="flex flex-row items-center">
      <Image
        src="/lab/3d-uparrow.png"
        width={arrowSize}
        height={arrowSize}
        alt="up"
      />
      <div className={percentSize}>{percentage}</div>
    </div>
  </div>
);
