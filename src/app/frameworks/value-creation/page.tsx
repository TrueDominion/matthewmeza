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
  // Personal reference page: reachable by link, kept out of search and the sitemap.
  return { ...metadata, robots: { index: false, follow: false } };
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
      </Column>
      <ValueFramework />
    </Column>
  );
}
