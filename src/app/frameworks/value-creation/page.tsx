import { Column, Heading, Meta, Text } from "@once-ui-system/core";
import { baseURL, home } from "@/resources";
import { ValueFramework } from "@/components/frameworks/ValueFramework";

const path = "/frameworks/value-creation";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: "Value Creation Framework",
    description:
      "How the finance function creates value: analysis, planning and control acting through four decision areas.",
    baseURL,
    image: home.image,
    path,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function ValueCreationPage() {
  return (
    <Column maxWidth="l" fillWidth gap="l" paddingTop="24" paddingBottom="40">
      <Column gap="8" horizontal="center" align="center" paddingX="l" s={{ paddingX: "8" }}>
        <Text variant="label-default-s" onBackground="brand-weak">
          Framework · Corporate finance
        </Text>
        <Heading as="h1" variant="display-strong-xs" wrap="balance">
          How finance creates value
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          The goal sets the test. Three functions act through four decisions. The market keeps
          score, and the score feeds the next round of analysis.
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Adapted from Johns Hopkins Carey Business School EMBA coursework, translated for hospital
          finance.
        </Text>
      </Column>
      <ValueFramework />
    </Column>
  );
}
