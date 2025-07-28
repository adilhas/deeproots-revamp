/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Link,
} from '@react-email/components';

export default function TwoHrsLeftDealRoom(props: {
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
            This is your final reminder — your access to the DeepRoots
            Foundation Deal Room will expire in <strong>2 hours.</strong>
          </Text>
          <Text>After that, your seat will no longer be guaranteed.</Text>
          <Text>To confirm your participation and secure your allocation:</Text>
          <Text>
            <Link
              href={`${url}/seeder/login`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0070f3',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Return to Deal Room
            </Link>
          </Text>
          <Text>
            If you're encountering any issues, contact us immediately.
          </Text>
          <Text>
            <div>With respect,</div>
            <div>- Team DEEPROOTS Foundation Team</div>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
