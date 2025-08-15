import {
  IconPlus,
  IconSearch,
  IconBuildingWarehouse,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Box,
  Code,
  Group,
  Text,
  TextInput,
  Tooltip,
  Button,
} from "@mantine/core";
import { UserButton } from "../UserButton/UserButton";
import classes from "./Navbar.module.css";

const links = [{ icon: IconBuildingWarehouse, label: "Home" }];

const collections = [{ emoji: "👍", label: "Sales" }];

export function NavBar() {
  const mainLinks = links.map((link) => (
    <Button key={link.label} className={classes.mainLink} variant="default">
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
    </Button>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <Box component="span" mr={9} fz={16}>
        {collection.emoji}
      </Box>{" "}
      {collection.label}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <UserButton />
      </div>

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch size={12} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  );
}
