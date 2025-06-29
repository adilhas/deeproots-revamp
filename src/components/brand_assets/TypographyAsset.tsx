import { FiPenTool } from 'react-icons/fi';

const fontDetails = [
  {
    label: 'Primary Font',
    fontFamily: 'Orbitron',
    sample: 'Orbitron',
    size: '12 - 128px',
    lineHeight: '120%',
    className: 'font-orbitron',
  },
  {
    label: 'Heading 2',
    fontFamily: 'Archivo',
    sample: 'Archivo',
    size: '24px - 128px',
    lineHeight: '130%',
    className: 'font-archivo',
  },
  {
    label: 'Body',
    fontFamily: 'Segoe UI',
    sample: 'Segoe UI',
    size: '10px - 20px',
    lineHeight: '150%',
    className: 'font-segoe',
  },
];

export default function TypographyAsset() {
  return (
    <section id="typography-assets" className="py-12">
      <div className="mb-10 flex items-center gap-2  font-semibold text-3xl">
        <FiPenTool className="w-8 h-8" />
        <span>Typography</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-fit md:w-full mx-auto">
        {fontDetails.map((font, index) => (
          <div key={index} className=" text-left">
            <div className="text-sm  mb-2">{font.label}</div>
            <div
              className={`text-4xl  mb-3 ${font.className}`}
              style={{ fontFamily: font.fontFamily }}
            >
              {font.sample}
            </div>
            <div className="text-sm ">Size: {font.size}</div>
            <div className="text-sm ">Line height: {font.lineHeight}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
