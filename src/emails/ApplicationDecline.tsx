import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';

export default function ApplicationDeclineEmail(props: {
  name: string;
  reason: string;
}) {
  const { name, reason } = props;
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <Heading>Application Declined</Heading>
          <Text>Hi {name},</Text>
          <Text>
            We’re sorry to inform you that your application has been declined.
          </Text>
          <Text>
            <strong>Reason:</strong> {reason}
          </Text>
          <Text>Thank you for your interest.</Text>
        </Container>
      </Body>
    </Html>
  );
}
