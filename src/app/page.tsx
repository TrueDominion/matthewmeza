import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Grid,
  Background,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Column fillWidth gap="8" paddingX="l" s={{ paddingX: "8" }}>
      <Text variant="label-default-s" onBackground="brand-weak">
        {eyebrow}
      </Text>
      <Heading as="h2" variant="display-strong-xs" wrap="balance">
        {title}
      </Heading>
    </Column>
  );
}

export default function Home() {
  const linkedin = social.find((item) => item.name === "LinkedIn");

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={200} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={400} horizontal="center" paddingLeft="12">
            <Row gap="12" wrap horizontal="center">
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                      aria-hidden
                    />
                  )}
                  About Matthew
                </Row>
              </Button>
              <Button
                data-border="rounded"
                href={`mailto:${person.email}`}
                variant="primary"
                size="m"
                weight="default"
                prefixIcon="email"
              >
                Connect
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* Proof */}
      {home.proof.display && (
        <RevealFx translateY="16" delay={600} fillWidth>
          <Column fillWidth gap="l" marginTop="l">
            <SectionHeading eyebrow="Proof" title={home.proof.title} />
            <Grid
              fillWidth
              columns="4"
              gap="12"
              paddingX="l"
              m={{ columns: "2" }}
              s={{ columns: "1", paddingX: "0" }}
            >
              {home.proof.metrics.map((metric) => (
                <Column
                  key={metric.label}
                  fillWidth
                  padding="l"
                  gap="8"
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                >
                  <Text variant="display-strong-s" onBackground="brand-strong">
                    {metric.value}
                  </Text>
                  <Text variant="label-strong-s">{metric.label}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {metric.description}
                  </Text>
                </Column>
              ))}
            </Grid>
          </Column>
        </RevealFx>
      )}

      {/* Case studies */}
      <Column fillWidth gap="l">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <SectionHeading eyebrow="The Bridge" title="Three crossings. One operating model." />
        <Projects range={[1, 3]} />
      </Column>

      {/* Audiences */}
      {home.audiences.display && (
        <Column fillWidth gap="l">
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
          <SectionHeading eyebrow="Audiences" title={home.audiences.title} />
          <Column fillWidth paddingX="l" s={{ paddingX: "8" }}>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
              {home.audiences.description}
            </Text>
          </Column>
          <Grid fillWidth columns="2" gap="12" paddingX="l" s={{ columns: "1", paddingX: "0" }}>
            {home.audiences.items.map((item, index) => (
              <Column
                key={item.title}
                fillWidth
                padding="l"
                gap="8"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
              >
                <Text variant="label-default-s" onBackground="brand-weak">
                  {`A${index + 1}`}
                </Text>
                <Heading as="h3" variant="heading-strong-m">
                  {item.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      )}

      {/* Connect */}
      {home.connect.display && (
        <Column
          id="connect"
          overflow="hidden"
          fillWidth
          padding="xl"
          radius="l"
          marginBottom="m"
          horizontal="center"
          align="center"
          background="surface"
          border="neutral-alpha-weak"
          position="relative"
        >
          <Background
            top="0"
            position="absolute"
            mask={{ x: 50, y: 0, radius: 100, cursor: true }}
            gradient={{
              display: true,
              opacity: 90,
              x: 50,
              y: 0,
              width: 50,
              height: 50,
              tilt: 0,
              colorStart: "brand-background-strong",
              colorEnd: "static-transparent",
            }}
            dots={{
              display: true,
              opacity: 20,
              size: "2",
              color: "brand-on-background-weak",
            }}
          />
          <Column maxWidth="s" gap="16" horizontal="center" align="center" zIndex={1}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {home.connect.title}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
              {home.connect.description}
            </Text>
            <Row gap="12" wrap horizontal="center" paddingTop="16">
              <Button
                href={`mailto:${person.email}`}
                prefixIcon="email"
                variant="primary"
                size="m"
                data-border="rounded"
              >
                {person.email}
              </Button>
              {linkedin && (
                <Button
                  href={linkedin.link}
                  prefixIcon="linkedin"
                  variant="secondary"
                  size="m"
                  data-border="rounded"
                >
                  LinkedIn
                </Button>
              )}
            </Row>
          </Column>
        </Column>
      )}
    </Column>
  );
}
