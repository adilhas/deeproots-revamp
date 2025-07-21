import { Calendar, Download } from 'lucide-react';
import { useApplication } from '@/context/ApplicationContext';
import { formatDate } from '@/utils/formatDate';
import { FiImage } from 'react-icons/fi';
import React, { useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { AgreementPDF } from './AgreementPDF';

interface PAStep1Props {
  fullName: string;
  setFullName: (val: string) => void;
  signatureFile: File | null;
  setSignatureFile: (val: File | null) => void;
  isChecked: boolean;
  setIsChecked: (val: boolean) => void;
  onContinue: () => void;
}

const PAStep1: React.FC<PAStep1Props> = ({
  fullName,
  setFullName,
  signatureFile,
  setSignatureFile,
  isChecked,
  setIsChecked,
  onContinue,
}) => {
  const { application } = useApplication();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSignatureFile(file);
    }
  };

  return (
    <div className="w-full mx-auto border border-[#A1A1A1] rounded-2xl">
      {/* Header */}
      <div className="text-center py-[18px] px-2">
        <h1 className="text-2xl font-semibold bg-gradient-to-r px-2 from-gradient-from2 to-gradient-to2 w-fit mx-auto bg-clip-text text-transparent">
          Non-Disclosure Agreement & Simple Agreement for Future Tokens (SAFT)
        </h1>
      </div>

      <div className="">
        <div
          ref={contentRef}
          className="p-6 flex flex-col border-y relative border-[#A1A1A1] gap-y-2 text-lg h-[575px] overflow-y-scroll max-w-none bg-white text-gray-700 leading-relaxed"
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            WebkitBackgroundClip: 'initial',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            eligendi consectetur tempore voluptates iusto. Deleniti laudantium
            veritatis voluptatum reprehenderit expedita, reiciendis quaerat vel
            vero sapiente, mollitia officia facilis cupiditate delectus quas
            dolorum, culpa exercitationem voluptate nobis fugiat ullam.
            Veritatis aliquam velit eius perferendis sed non nulla ratione
            exercitationem reiciendis in.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque
            qui deleniti hic facilis minus, fugit sapiente, animi deserunt, rem
            maiores. Illo autem nesciunt debitis numquam. Eum consectetur
            mollitia repellendus dignissimos sed beatae odit, maiores corrupti?
            Illo, earum laborum doloribus sint cum repellat, iusto temporibus
            commodi optio nisi cumque similique nulla! Nulla, animi. Illo
            voluptates voluptas non qui voluptatem. At laudantium soluta odio
            totam, nostrum ipsum explicabo nemo adipisci, dolores enim deleniti
            maxime! Eligendi, unde? Nam doloribus rem inventore at numquam
            perferendis dolorem exercitationem voluptate, consequuntur facere
            quas voluptates maiores sit illo quod temporibus. Non laudantium
            perferendis vitae qui laboriosam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolorum, nihil neque corrupti ex rem recusandae reiciendis
            voluptatibus eveniet culpa atque? Quam, expedita! Consectetur, quos
            dolorem suscipit architecto illo esse quia numquam officia voluptas
            maxime voluptatibus odit cupiditate odio. Officia in provident iusto
            unde placeat quod consequuntur odit ullam delectus enim earum, est
            consequatur mollitia eius qui corrupti fugiat obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            sapiente esse eligendi necessitatibus voluptate praesentium placeat
            ea veniam beatae maxime enim molestiae fugiat autem, voluptates
            corrupti. Corporis hic cupiditate nostrum impedit harum soluta, ipsa
            quo quod minus sed molestias maxime optio iste accusamus velit,
            voluptate deserunt eveniet nihil aut quam. Minima, nesciunt ipsam,
            exercitationem magni et ad qui nulla provident odio, ipsa modi quod
            quis natus commodi cum laboriosam porro nisi numquam! Rem recusandae
            expedita maxime magnam amet molestiae sunt eaque, vero commodi
            exercitationem accusantium eius adipisci natus earum. Ea sequi
            dolore eligendi neque id natus error, distinctio laudantium dolorem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio quae non totam, doloribus corporis veritatis, rem eum
            officiis sit corrupti consectetur, facilis molestias beatae minus?
            Non, odit maxime autem consectetur quisquam natus! Delectus aut
            voluptatem optio corrupti quisquam voluptates blanditiis amet
            molestiae libero?
          </p>
          <div className="sticky bottom-0 right-0 w-full z-10 flex justify-end">
            <PDFDownloadLink
              document={
                <AgreementPDF
                  fullName={fullName}
                  createdAt={application?.createdAt ?? new Date().toISOString()}
                  signatureURL={
                    signatureFile
                      ? URL.createObjectURL(signatureFile)
                      : undefined
                  }
                />
              }
              fileName="NDA_SAFT_Document.pdf"
            >
              {({ loading }) => (
                <button
                  className="flex items-center gap-3 bg-black text-white text-lg rounded-xl py-2 px-4 shadow-lg disabled:opacity-50"
                  disabled={loading}
                >
                  <Download className="w-6 h-6" />
                  <span className="hidden md:inline-block">
                    {' '}
                    {loading ? 'Preparing...' : 'Download Document'}
                  </span>
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>

        {/* Agreement Section */}
        <div className=" p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <label className="flex items-start sm:items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary mt-1 sm:mt-0"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="text-[#525252] font-medium">
                I have read and agreed to the NDA & Participation Agreement.
              </span>
            </label>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span className="font-medium">
                Date: {formatDate(application?.createdAt ?? '')}
              </span>
            </div>
          </div>

          <div className=" bg-gradient-to-r text-2xl my-8 from-gradient-from2 to-gradient-to2 w-fit font-medium bg-clip-text text-transparent">
            Signature
          </div>

          {/* Signature Section */}
          <div className="flex flex-col  md:flex-row items-start gap-4 w-full">
            <div className="w-full max-w-[503px]">
              <label className="block text-lg w-full font-medium mb-3">
                E-Signature (Enter full Legal name)
              </label>
              <input
                type="text"
                placeholder="Enter your full legal name"
                className="input rounded-3xl input-bordered placeholder-[#525252] text-lg w-full bg-white"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end w-full max-w-[437px]">
              {/* File Upload */}
              <div className="flex flex-row items-end justify-between w-full">
                <div className="w-full">
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="signature-upload"
                    />
                    <label
                      htmlFor="signature-upload"
                      className="flex items-start justify-center gap-2 border-2 border-dashed border-gray-300 rounded-2xl py-4 cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <FiImage size={24} className="text-[#3F3F3F]" />
                      <span className="">
                        {signatureFile ? (
                          signatureFile.name
                        ) : (
                          <div className="text-lg text-center">
                            <div className="text-[#525252]">
                              Upload Digital Signature
                            </div>
                            <div className="text-[#696969] font-normal">
                              PNG / JPG
                            </div>
                          </div>
                        )}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Continue Button */}
          <div className="w-full flex justify-end mt-8">
            <button
              onClick={onContinue}
              className="w-full max-w-none md:max-w-[236px] bg-gradient-to-r from-gradient-from2 to-gradient-to2 border-0 text-white px-6 py-[10px]  rounded-lg font-medium transition-all disabled:opacity-70"
              disabled={
                !isChecked || !fullName.trim() || signatureFile === null
              }
            >
              Sign & Continue to KYC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAStep1;
