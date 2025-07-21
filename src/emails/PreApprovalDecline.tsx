/* eslint-disable @next/next/no-img-element */
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';

export default function PreApprovalDeclineEmail(props: {
  name: string;
  reason: string;
}) {
  const { name, reason } = props;
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <Heading>PreApproval Declined</Heading>
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
            We’re sorry to inform you that your Pre Approval step has been
            declined.
          </Text>
          <Text>
            <strong>Reason:</strong> {reason}
          </Text>
          <Text>Thank you for your interest.</Text>
          <Text>- Team DEEPROOTS</Text>
        </Container>
      </Body>
    </Html>
  );
}
