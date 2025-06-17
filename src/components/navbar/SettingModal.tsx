import { useThemeContext } from '@/context/ThemeContext';
import { ArrowLeftRight, ChevronDown, Globe, Sun } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const SettingModal = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { isDark, toggleTheme } = useThemeContext();

  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
    if (modal) modal.showModal();
  };
  return (
    <div className="font-sans">
      <div onClick={openModal}>
        <Image
          src="/profile-pic.jpg"
          alt="profile"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-primary-dark bg-neutral-300 max-w-[307px]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Image
            src="/profile-pic.jpg"
            alt="profile"
            width={88}
            height={88}
            className="rounded-full mx-auto"
          />
          <div className="relative">
            <button
              className="flex items-center justify-between w-full px-2 py-2 rounded  cursor-pointer"
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span className="text-sm">Language • {selectedLanguage}</span>
              </div>
              <ChevronDown size={16} />
            </button>

            {isLangOpen && (
              <div className="absolute z-10 dark:bg-primary-dark bg-neutral-300 mt-1 w-full  border rounded shadow-md">
                <div
                  className="px-4 py-2 text-sm  cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage('English');
                    setIsLangOpen(false);
                  }}
                >
                  English
                </div>
              </div>
            )}
          </div>

          <div
            className="flex items-center justify-between px-2 py-2 rounded  cursor-pointer"
            onClick={toggleTheme}
          >
            <div className="flex items-center gap-2">
              <Sun size={16} />
              <span className="text-sm">
                Theme • {`${isDark ? 'Dark' : 'Light'}`}
              </span>
            </div>
            <ArrowLeftRight size={16} />
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="space-y-2 text-sm">
            <div className="cursor-pointer">Privacy Policy</div>
            <div className="cursor-pointer">Cookie Policy</div>
            <div className="cursor-pointer">Terms of Use</div>
            <div className="cursor-pointer">Public Relations</div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SettingModal;
