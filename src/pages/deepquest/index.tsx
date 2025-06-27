import QuizStart from '@/components/quiz/QuizStart';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const QuizPage = () => {
  return (
    <AppLayout>
      <div className="bg-primary-light dark:bg-primary-dark text-[#404040] dark:text-neutral-200 min-h-screen">
        <QuizStart />
      </div>
    </AppLayout>
  );
};

export default QuizPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
