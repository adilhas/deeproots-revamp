import { PiPaintBrush } from 'react-icons/pi';

const colors = [
  {
    name: '',
    hexStart: '#AD1AAF',
    hexEnd: '#0085A8',
    isGradient: true,
  },
  {
    name: 'Cocoa Brown',
    hex: '#D06328',
  },
  {
    name: 'Penn blue',
    hex: '#101245',
  },
  {
    name: 'Platinum',
    hex: '#E9E9E9',
  },
  {
    name: 'White',
    hex: '#FFFFFF',
  },
];

export default function ColorAsset() {
  return (
    <section id="color-assets" className="py-10">
      <div className="mb-6 flex items-center gap-2 font-semibold text-3xl">
        <PiPaintBrush className="w-8 h-8" />
        <span>Color</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              color.isGradient ? 'col-span-2' : ''
            }`}
          >
            <div
              className="h-[145px] w-full rounded-xl shadow-sm border"
              style={{
                background: color.isGradient
                  ? `linear-gradient(to right, ${color.hexStart}, ${color.hexEnd})`
                  : color.hex,
              }}
            />
            <div className="flex justify-between items-center w-full mt-2 text-sm">
              <span className=" font-mono">
                {color.isGradient ? color.hexStart : color.hex}
              </span>
              <span className="text-xs ">
                {color.isGradient ? color.hexEnd : color.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
