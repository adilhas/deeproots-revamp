/* eslint-disable @next/next/no-img-element */
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Link,
  Heading,
} from '@react-email/components';

interface RequestSubmittedEmailProps {
  fullName: string;
}

export default function RequestSubmittedEmail({
  fullName,
}: RequestSubmittedEmailProps) {
  return (
    <Html>
      <Head>
        <style>
          {`
      @font-face {
        font-family: 'Orbitron';
        font-style: normal;
        font-weight: 700;
        src: url('https://fonts.gstatic.com/s/orbitron/v28/yMJRMIlzdpvBhQQL_Qq7dy5Gb-Y.woff2') format('woff2');
      }
    `}
        </style>
      </Head>{' '}
      <Preview>Complete your Seeder account setup</Preview>
      <Body
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f4f4f4',
          padding: '20px',
        }}
      >
        <Container
          style={{
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '8px',
          }}
        >
          <Text
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            Welcome to{' '}
            <span
              style={{
                fontFamily: "'Orbitron', Arial",
                fontWeight: 700,
                display: 'inline-block',
              }}
            >
              {' '}
              DEEPROOTS
            </span>
            , {fullName}!
          </Text>
          <Heading>Request submitted!</Heading>
          <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
            Thank you. Your application has been received & is under review.
          </Text>
          <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
            👉 Please check your email now to create your Full Foundation Seat
            account and complete the next step.
          </Text>
          <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
            Stay tuned to our socials and community channels.
          </Text>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '10px',
            }}
          >
            <Link
              href="https://x.com/DeepRoots_earth"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: 10 }}
            >
              <img
                src="http://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
                alt="X (Twitter)"
                width="24"
                height="24"
                style={{ display: 'inline-block' }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/deeproots-earth/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: 10 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                width="24"
                height="24"
                style={{ display: 'inline-block' }}
              />
            </Link>
            <Link
              href="https://t.me/deeproots_official"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: 10 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                alt="Telegram"
                width="24"
                height="24"
                style={{ display: 'inline-block' }}
              />
            </Link>
          </div>
          <Text style={{ fontSize: '14px', color: '#555', marginTop: '20px' }}>
            If you did not request this, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
