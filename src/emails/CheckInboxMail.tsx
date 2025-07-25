import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Link,
} from '@react-email/components';

interface CheckInboxMailProps {
  link: string;
}

export default function CheckInboxMail({ link }: CheckInboxMailProps) {
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
      <Preview>You have notification</Preview>
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
          <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
            You have new notification on your dashboard.
          </Text>
          <Link
            href={link}
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
            Click to go on your dashboard
          </Link>
        </Container>
      </Body>
    </Html>
  );
}
