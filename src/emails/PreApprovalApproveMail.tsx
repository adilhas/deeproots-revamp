/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';

export default function PreApprovalApproveEmail(props: {
  name: string;
  url: string;
}) {
  const { name, url } = props;
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>{' '}
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <img
              src="https://www.deeproots.earth/landing/logo-big.png"
              alt="DeepRoots Logo"
              width="36"
              height="36"
              style={{
                display: 'block',
                marginRight: '12px',
                border: 'none',
                borderRadius: '100%',
              }}
            />
            <Heading
              style={{ margin: 0, fontFamily: "'Orbitron', Arial, sans-serif" }}
            >
              DEEPROOTS
            </Heading>
          </div>{' '}
          <Text>Hi {name},</Text>
          <Text>
            Congratulations—your Pre Approval step has been approved!{' '}
            <a
              href={`${url}/seeder/login`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Please log in to your dashboard
            </a>{' '}
            now to complete the next steps and secure your Full Seat in the
            Foundation. Thank you for your patience and welcome aboard.
          </Text>
          <Text>Team DEEPROOTS</Text>
        </Container>
      </Body>
    </Html>
  );
}
