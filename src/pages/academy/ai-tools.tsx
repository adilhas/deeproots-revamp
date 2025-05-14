import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import AiToolsHero from '@/components/academy_page/ai_tools-page/AiToolsHero';
import AiRoolsInto from '@/components/academy_page/ai_tools-page/AiRoolsInto';
import AiToolsFeatures from '@/components/academy_page/ai_tools-page/AiToolsFeatures';
import BuiltInsideSection from '@/components/academy_page/ai_tools-page/BuiltInsideSection';
import BenefitsSection from '@/components/academy_page/ai_tools-page/BenefitsSection';
import AiToolsCTA from '@/components/academy_page/ai_tools-page/AiToolsCTA';

const AIToolsPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neural-300 dark:bg-primary-dark transition-colors duration-300">
        <Head>
          <title>AI Tools - Powering the Mind of DeWorld</title>
          <meta
            name="description"
            content="Deep Roots AI tools boost creativity, simplify tasks, and enhance every layer of the ecosystem."
          />
        </Head>

        <AiToolsHero />

        <div className="max-w-7xl mx-auto relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <AiRoolsInto />
            <AiToolsFeatures />
            <BuiltInsideSection />
            <BenefitsSection />
            <AiToolsCTA />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AIToolsPage;
