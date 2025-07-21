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

export default function ImmediateDealRoomUpdate(props: {
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
            You’ve unlocked access to the DeepRoots Foundation Deal Room — but
            your submission is still incomplete. This is a private allocation,
            and your seat is currently held.{' '}
          </Text>
          <Text>
            To secure your position, please complete your submission before the
            access window expires.
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
          <Text>We’re here if you need support.</Text>
          <Text>Team DEEPROOTS Foundation Team</Text>
        </Container>
      </Body>
    </Html>
  );
}
