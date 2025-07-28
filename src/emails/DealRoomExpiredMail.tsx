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

export default function DealRoomExpiredMail(props: {
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
            No action was taken within 24 hours. Your deal room has been
            automatically declined.
          </Text>
          <Text>
            If you have any questions or need assistance, we’re here to help.
          </Text>
          <Link
            href={`${url}/seeder/login/`}
            style={{
              display: 'inline-block',
              padding: '12px 20px',
              backgroundColor: '#AD1AAF',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
            }}
          >
            Go to Dashboard
          </Link>
          <Text>- Team DEEPROOTS Foundation Team</Text>
        </Container>
      </Body>
    </Html>
  );
}
