import React, { useState } from 'react';
import PAStep1 from './PAStep1';
import PAStep2 from './PAStep2';
import { useApplication } from '@/context/ApplicationContext';

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
      <div className="flex flex-row justify-between max-w-[800px] mb-5 gap-2 mx-auto text-center">
        <div className="w-fit">
          <div className={`text-purple-500 font-semibold`}>Step - 1</div>
          <div className="text-nowrap">NDA & Signature</div>
        </div>
        <div className="flex items-center space-x-2 w-full">
          <div className="bg-white p-1 border-purple-600 border-2 rounded-full">
            <div className="w-4 h-4 rounded-full bg-purple-600"></div>
          </div>
          <div className="w-full border-t border-dashed border-neutral-500 flex-grow"></div>
          <div
            className={`bg-white p-1 ${currentStep === 2 ? 'border-purple-500' : 'border-neutral-500'} border-2 rounded-full`}
          >
            <div
              className={`w-4 h-4 rounded-full ${currentStep === 2 ? 'bg-purple-500' : 'bg-neutral-500'}`}
            ></div>
          </div>
        </div>
        <div className="w-fit">
          <div
            className={`${currentStep === 2 ? 'text-purple-500' : 'text-[#696969]'} font-semibold`}
          >
            Step - 2
          </div>
          <div className="text-nowrap">KYC & Documentation</div>
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
