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

export default function TwelveHrsLeftDealRoom(props: {
  fullName: string;
  url: string;
}) {
  const { fullName, url } = props;
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
          <Text>Hi {fullName},</Text>
          <Text>
            This is a friendly reminder — your access to the Foundation Deal
            Room will expire in 12 hours.
          </Text>
          <Text>
            Your private allocation is still reserved, but unconfirmed. To
            finalize your seat:
          </Text>
          <Text>
            ✅ Complete your Deal Room submission before the countdown ends.
          </Text>
          <Text>
            <a
              href={`${url}/seeder/login`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Return to Deal Room
            </a>{' '}
          </Text>
          <Text>
            If you have any questions or need assistance, we’re here to help.
          </Text>
          <Text>Team DEEPROOTS Foundation Team</Text>
        </Container>
      </Body>
    </Html>
  );
}
