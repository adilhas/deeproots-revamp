import React, { useState } from 'react';
import PAStep1 from './PAStep1';
import PAStep2 from './PAStep2';
import { useApplication } from '@/context/ApplicationContext';
import Image from 'next/image';

const PreAprovalSubmission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { application } = useApplication();

  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [signatureFile, setSignatureFile] = useState<File | null>(null);

  const [activeTab] = useState<'individual' | 'organization'>(
    application?.indvOrOrg === 'Ind' ? 'individual' : 'organization'
  );

  return (
    <div>
      {/* Progress Bar */}
      <div className="flex flex-row justify-between max-w-[800px] my-10 gap-2 mx-auto text-center">
        <div className="w-fit">
          <div className={`text-purple-500 font-semibold text-2xl`}>
            Step - 1
          </div>
          <div className="text-nowrap text-[#696969] text-lg">
            NDA & Signature
          </div>
        </div>
        <div className="flex items-center w-full">
          <Image
            src="/dashboard/step-active.svg"
            width={24}
            height={24}
            alt="step active"
          />
          <div
            className={`w-full border-t ${currentStep === 2 ? 'border-[#9333EA]' : 'border-dashed'} border-neutral-500 flex-grow`}
          ></div>

          <Image
            src={`${currentStep === 2 ? '/dashboard/step-active.svg' : '/dashboard/step-inactive.svg'}`}
            width={24}
            height={24}
            alt="step active"
          />
        </div>
        <div className="w-fit">
          <div
            className={`${currentStep === 2 ? 'text-purple-500' : 'text-[#696969]'} font-semibold text-2xl`}
          >
            Step - 2
          </div>
          <div className="text-nowrap text-[#696969] text-lg">KYC & Docs</div>
        </div>
      </div>

      <div>
        {currentStep === 1 && (
          <PAStep1
            fullName={fullName}
            setFullName={setFullName}
            signatureFile={signatureFile}
            setSignatureFile={setSignatureFile}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            onContinue={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <PAStep2
            fullName={fullName}
            signatureFile={signatureFile}
            isChecked={isChecked}
            activeTab={activeTab}
          />
        )}
      </div>
    </div>
  );
};

export default PreAprovalSubmission;
