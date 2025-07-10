import { StatusType } from '@/types/application';

const statusColorMap: Record<Exclude<StatusType, 'not-submitted'>, string> = {
  received: '#67B1FB',
  'under-review': '#F2C35E',
  approved: '#71FF8F',
  declined: '#E78181',
};

export default function StatusDot({ status }: { status: StatusType }) {
  const color = statusColorMap[status as Exclude<StatusType, 'not-submitted'>];

  if (status === 'not-submitted') return null;

  return (
    <div
      className="w-4 h-4 rounded-full"
      style={{
        background: `radial-gradient(
          51.85% 51.85% at 68.52% 35.19%,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(255, 255, 255, 0) 100%
        ), ${color}`,
        backgroundBlendMode: 'overlay',
        boxShadow: `1.33px -1.33px 5.33px 0px #75550659 inset`,
      }}
      title={status}
    ></div>
  );
}
