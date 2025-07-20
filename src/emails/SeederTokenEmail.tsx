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
      <Head />
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
            Welcome to DeepRoots, {fullName}!
          </Text>
          <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
            Please click the button below to create your Seeder account. This
            link is valid for 12 hour only.
          </Text>
          <Link
            href={link}
            style={{
              display: 'inline-block',
              padding: '12px 20px',
              backgroundColor: '#0A6948',
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
