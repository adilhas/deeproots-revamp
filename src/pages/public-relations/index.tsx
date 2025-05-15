import Image from 'next/image';
import Head from 'next/head';
import {
  Megaphone,
  MessageCircle,
  FileText,
  Calendar,
  BookOpen,
  Brain,
  ShieldCheck,
  Globe,
  Lock,
  Coins,
  Gamepad2,
  Lightbulb,
  Box,
  Download,
  Mail,
  Check,
} from 'lucide-react';
import AppLayout from '@/Shared/AppLayout';

const PublicRelationsPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark">
        <Head>
          <title>Public Relations - Deep Roots</title>
          <meta
            name="description"
            content="Our voice. Our vision. Shared with the world."
          />
        </Head>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] mb-6 leading-tight">
            Our Voice. Our Vision. Shared with the World.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Deep Roots is not just a platform — it's a movement with a message.
            We welcome authentic conversations, real storytelling, and bold
            voices.
          </p>
          <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden max-w-3xl mx-auto">
            <Image
              src="/public-relations.jpeg"
              alt="Public Relations at Deep Roots"
              width={960}
              height={540}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Megaphone className="w-8 h-8 text-[#0085a8] mr-3" />
              <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
                What We Offer
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <MessageCircle className="w-6 h-6 text-[#ad1aaf]" />,
                  text: 'Official statements and ecosystem updates',
                },
                {
                  icon: <FileText className="w-6 h-6 text-[#0085a8]" />,
                  text: 'Interviews and founder quotes',
                },
                {
                  icon: <Download className="w-6 h-6 text-[#ad1aaf]" />,
                  text: 'Media kits and product releases',
                },
                {
                  icon: <Calendar className="w-6 h-6 text-[#0085a8]" />,
                  text: 'Speaking opportunities and event invites',
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-[#ad1aaf]" />,
                  text: 'Background on DeWorld, dRC, and the 14-product ecosystem',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="mr-3 mt-0.5">{item.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Topics We Speak On */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 text-[#ad1aaf] mr-3" />
              <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
                Topics We Speak On
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#0085a8]" />,
                  text: 'Decentralization and ownership',
                },
                {
                  icon: <Globe className="w-6 h-6 text-[#ad1aaf]" />,
                  text: 'AI + Web3 integration',
                },
                {
                  icon: <Coins className="w-6 h-6 text-[#0085a8]" />,
                  text: 'Financial access and tokenized economies',
                },
                {
                  icon: <Lock className="w-6 h-6 text-[#ad1aaf]" />,
                  text: 'Privacy and digital rights',
                },
                {
                  icon: <Gamepad2 className="w-6 h-6 text-[#0085a8]" />,
                  text: 'GameFi, NFTs, and cultural design',
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-[#ad1aaf]" />,
                  text: 'Building for long-term value, not hype',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="mr-3 mt-0.5">{item.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Press Kit Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Box className="w-8 h-8 text-[#0085a8] mr-3" />
              <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
                Press & Media Kit
              </span>
            </h2>
            <div className="space-y-8">
              {[
                'Brand Logos',
                'Project Overview',
                'Product One-Pagers',
                'High-Res Images',
                'Contact Sheet',
              ].map((title, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    ✅ {i + 1}. {title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {/* Placeholder: Replace with dynamic content or more detailed sections if needed */}
                    See documentation for details on what to include and why it
                    matters.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#ad1aaf] mr-3" />
              Contact Public Relations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Have a press request, interview inquiry, or media opportunity?
            </p>
            <a
              href="mailto:hello@deeproots.earth"
              className="inline-flex items-center text-lg font-medium text-[#0085a8] dark:text-[#ad1aaf] hover:underline"
            >
              <Mail className="w-5 h-5 mr-2" />
              hello@deeproots.earth
            </a>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default PublicRelationsPage;
