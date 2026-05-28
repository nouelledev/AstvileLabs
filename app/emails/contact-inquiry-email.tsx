import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "react-email";

export type ContactInquiryEmailValues = {
  brandProduct: string;
  budgetRange: string;
  email: string;
  message: string;
  name: string;
  timeline: string;
  videoLength: string;
};

type ContactInquiryEmailProps = {
  values: ContactInquiryEmailValues;
};

const detailRows: Array<[label: string, key: keyof ContactInquiryEmailValues]> =
  [
    ["Name", "name"],
    ["Email", "email"],
    ["Brand / Product", "brandProduct"],
    ["Video Length", "videoLength"],
    ["Budget Range", "budgetRange"],
    ["Timeline", "timeline"],
  ];

export function ContactInquiryEmail({ values }: ContactInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New AstvileLabs project inquiry from {values.name}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={eyebrow}>AstvileLabs Contact Form</Text>
          <Heading as="h1" style={heading}>
            New project inquiry
          </Heading>

          <Section style={table}>
            {detailRows.map(([label, key]) => (
              <Row key={key}>
                <Column style={labelCell}>
                  <Text style={labelText}>{label}</Text>
                </Column>
                <Column style={valueCell}>
                  <Text style={valueText}>{values[key]}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Heading as="h2" style={subheading}>
            Message
          </Heading>
          <Text style={message}>{values.message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f6f4ef",
  color: "#111111",
  fontFamily: "Arial, sans-serif",
  margin: 0,
  padding: "32px 16px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e7e0d2",
  borderRadius: "8px",
  margin: "0 auto",
  maxWidth: "620px",
  padding: "32px",
};

const eyebrow = {
  color: "#69645b",
  fontSize: "12px",
  letterSpacing: "0.16em",
  lineHeight: "18px",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
};

const heading = {
  color: "#111111",
  fontSize: "24px",
  lineHeight: "32px",
  margin: "0 0 24px",
};

const table = {
  border: "1px solid #ddd6c8",
  borderBottom: 0,
  borderRadius: "6px",
};

const labelCell = {
  borderBottom: "1px solid #ddd6c8",
  padding: "0 12px",
  verticalAlign: "top" as const,
  width: "180px",
};

const valueCell = {
  borderBottom: "1px solid #ddd6c8",
  borderLeft: "1px solid #ddd6c8",
  padding: "0 12px",
  verticalAlign: "top" as const,
};

const labelText = {
  color: "#5f5a51",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "10px 0",
};

const valueText = {
  color: "#111111",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "10px 0",
};

const subheading = {
  color: "#111111",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "28px 0 8px",
};

const message = {
  color: "#111111",
  fontSize: "14px",
  lineHeight: "22px",
  margin: 0,
  whiteSpace: "pre-wrap" as const,
};
