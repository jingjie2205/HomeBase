import { IconFlagExclamation, IconHeart } from "@tabler/icons-react";
import {
  Flex,
  Badge,
  Button,
  Card,
  Group,
  Stack,
  Image,
  Text,
  Rating,
  NumberFormatter,
  HoverCard,
  CloseButton,
} from "@mantine/core";
import classes from "./ProductCard.module.css";
import { ProductCopyBtn } from "./CopyButton";

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  link: "https://www.google.com/",
  name: "XXTAB",
  price: 25.99,
  quantity: 2,
  rating: 4,
};

export function ProductCard() {
  const { image, link, name, price, quantity, rating } = mockdata;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Stack gap="md" align="center" justify="center">
          <HoverCard width="fit" shadow="md">
            <HoverCard.Target>
              <Text fz="lg" fw={500}>
                {name}
              </Text>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Group justify="center">
                <CloseButton />
                <ProductCopyBtn link={link} />
              </Group>
            </HoverCard.Dropdown>
          </HoverCard>
          <Badge size="xl" variant="light">
            <NumberFormatter prefix="$ " value={price} thousandSeparator />
          </Badge>
          <Rating defaultValue={1} value={rating} />
          <Group>
            <Flex justify="center" align="center" gap="xl">
              <Button> – </Button>
              <Text>{quantity}</Text>
              <Button> + </Button>
            </Flex>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  );
}
