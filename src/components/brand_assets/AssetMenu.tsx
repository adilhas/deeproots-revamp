import { useState } from 'react';

const AssetMenu = () => {
  const [selectedAsset, setSelectedAsset] = useState('Logo');
  const assetMenuItems = ['Logo', 'Color', 'Typography', 'Assets'];

  return (
    <div className="py-10">
      <div className="flex flex-row flex-wrap gap-3 justify-center items-center bg-white dark:bg-neutral-800 w-fit mx-auto p-3 px-4 rounded-2xl text-lg font-bold">
        {assetMenuItems.map((item) => {
          const isSelected = selectedAsset === item;

          return (
            <div
              key={item}
              onClick={() => {
                setSelectedAsset(item);
                const sectionId = `${item.toLowerCase()}-assets`;
                document.getElementById(sectionId)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className={`cursor-pointer px-4 py-2 rounded-xl transition-all duration-200 ${
                isSelected ? 'bg-[#E9E9E9]' : 'hover:bg-gray-100'
              }`}
            >
              <span
                className={`${
                  isSelected
                    ? 'text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text'
                    : 'text-[#525252] dark:text-neutral-400'
                }`}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssetMenu;
