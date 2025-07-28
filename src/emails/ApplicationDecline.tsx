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

export default function ApplicationDeclineEmail(props: {
  name: string;
  reason: string;
  url: string;
}) {
  const { name, reason, url } = props;
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <Heading>Application Declined</Heading>
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
            We’re sorry to inform you that your application has been declined.
          </Text>
          <Text>
            <strong>Reason:</strong> {reason}
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
          <Text>Thank you for your interest.</Text>
          <Text>- Team DEEPROOTS</Text>
        </Container>
      </Body>
    </Html>
  );
}
