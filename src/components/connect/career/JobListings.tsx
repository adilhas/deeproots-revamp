import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  description?: string;
  location: string;
  type: string;
}

interface JobCategory {
  name: string;
  jobs: Job[];
}

const JobListings = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Technical',
    'Creative',
    'Growth & Operations',
  ]);

  const jobCategories: JobCategory[] = [
    {
      name: 'Technical',
      jobs: [
        {
          id: '1',
          title: 'Frontend Developer',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '2',
          title: 'Backend Developer',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '3',
          title: 'Core Blockchain Engineer',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '4',
          title: 'Smart Contract Auditor',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '5',
          title: 'Game Developer',
          location: 'Remote',
          type: 'Full Time',
        },
      ],
    },
    {
      name: 'Creative',
      jobs: [
        {
          id: '6',
          title: '2D Game Artist',
          description: 'RootOpia characters, creatures & environment design',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '7',
          title: 'UI/UX Designers',
          description: 'Web3 dashboards, mobile-first flows',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '8',
          title: 'Motion Designer / Animator',
          description: 'Game trailers, cinematic teasers, ad FX',
          location: 'Remote',
          type: 'Full Time',
        },
      ],
    },
    {
      name: 'Growth & Operations',
      jobs: [
        {
          id: '9',
          title: 'Marketing Assistant Manager',
          description: 'Blockchain, GameFi, and campaign growth',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '10',
          title: 'Executive Assistant',
          description: 'Remote coordination, reporting, task tracking',
          location: 'Remote',
          type: 'Full Time',
        },
        {
          id: '11',
          title: 'Community Manager',
          description: 'Telegram, Discord, events, and ecosystem engagement',
          location: 'Remote',
          type: 'Full Time',
        },
      ],
    },
  ];

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((name) => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  return (
    <div className="mx-auto p-6">
      <div className="my-6">
        <h2 className="text-center leading-tight text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-bold text-4xl lg:text-5xl w-fit mx-auto">
          Open Roles
        </h2>
        <div className="text-center leading-tight text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-bold text-lg md:text-xl w-fit mx-auto">
          Join the Builders of DeWorld
        </div>
      </div>
      <div>
        {jobCategories.map((category) => (
          <div key={category.name}>
            {/* Section Header */}
            <button
              onClick={() => toggleSection(category.name)}
              className="w-full flex items-center justify-between py-4 gap-2 text-left hover:opacity-80 transition-opacity"
            >
              <h2 className="text-2xl font-semibold w-max text-nowrap ">
                {category.name}
              </h2>
              <div className="divider my-4  bg-[#D4D4D4] dark:bg-[#737373] h-[2px] w-full"></div>

              {expandedSections.includes(category.name) ? (
                <ChevronUp className="w-8 h-8 " />
              ) : (
                <ChevronDown className="w-8 h-8 " />
              )}
            </button>
            {expandedSections.includes(category.name) && (
              <div className="mt-4 space-y-0 max-w-4xl mx-auto">
                {category.jobs.map((job, index) => (
                  <div key={job.id}>
                    {/* Job card */}
                    <div className="py-6 flex items-center justify-between transition-colors -mx-4 px-4 rounded-lg">
                      <div className="flex-1">
                        <div className="flex justify-start flex-col md:flex-row items-start md:items-center gap-1 mb-2">
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <div>
                            {job.description && (
                              <p className="text-sm">• {job.description}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-6 text-sm ">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href="mailto:hello@deeproots.earth"
                        className="ml-8 px-4 py-2 bg-neutral-300 text-[#303030] rounded-md font-medium transition-colors flex items-center space-x-2"
                      >
                        <span>Apply</span>
                        <ChevronDown className="w-4 h-4" />
                      </a>
                    </div>

                    {index < category.jobs.length - 1 && (
                      <div className="divider my-4  bg-[#D4D4D4] dark:bg-[#737373] h-[2px]"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
