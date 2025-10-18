import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Link,
} from '@react-email/components';

interface SeederTokenEmailProps {
  fullName: string;
  link: string;
}

export default function SeederTokenEmail({
  fullName,
  link,
}: SeederTokenEmailProps) {
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

          <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
            Please click the button below to create your Full Foundation Seat
            Account on the Deep Roots Foundation.
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
            Create Your Account
          </Link>

          <Text style={{ fontSize: '14px', color: '#555', marginTop: '20px' }}>
            If you did not request this, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
