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

export default function MoreFundReqApproveMain(props: {
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
            Thank you for your interest in adding more funds to the DeepRoots
            program.
          </Text>
          <Text>
            At this moment, we’re unable to approve your request due to limited
            availability of additional slots. However, we truly appreciate your
            enthusiasm and participation.
          </Text>
          <Text>
            If new opportunities open up, we’ll notify you immediately so you
            can proceed with your contribution.
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
          <Text>
            Thank you once again for your continued support and understanding.
          </Text>
          <Text>Team DEEPROOTS</Text>
        </Container>
      </Body>
    </Html>
  );
}
