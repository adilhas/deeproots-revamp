import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';

export default function ApplicationApproveEmail(props: { name: string }) {
  const { name } = props;
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <Heading>🎉 Application Approved!</Heading>
          <Text>Hi {name},</Text>
          <Text>
            Your application has been approved successfully. Thank you for your
            patience.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
