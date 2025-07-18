export type FoundationRoundType = {
  round: string;
  title: string;
  allocation: string;
  discount: string;
  access: string;
  who: string;
};

const FoundationRoundCard = ({ data }: { data: FoundationRoundType }) => {
  return (
    <div className="flex bg-[#E9E9E9] p-6 rounded-3xl dark:bg-[#303030] flex-col h-full justify-between">
      <p className="text-sm text-[#8F8F8F] font-semibold">{data.round}</p>
      <h3 className="text-xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to w-fit bg-clip-text text-transparent mb-4">
        {data.title}
      </h3>
      <div className="text-sm space-y-1 w-full ">
        <div className="flex flex-row gap-2 justify-between">
          <div className="font-semibold">Allocation:</div>{' '}
          <div className="text-end">{data.allocation}</div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="font-semibold">Discount:</div>{' '}
          <div className="text-end">{data.discount}</div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="font-semibold">Access:</div>{' '}
          <div className="text-end">{data.access}</div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="font-semibold">Who it&apos;s for:</div>{' '}
          <div className="text-end">{data.who}</div>
        </div>
      </div>
    </div>
  );
};

export default FoundationRoundCard;
