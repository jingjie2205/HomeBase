import { IconChevronRight } from "@tabler/icons-react";
import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import "./UserButton.module.css";

export function UserButton() {
  return (
    <UnstyledButton className="user">
      <Group>
        <Avatar
          // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="lg"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette
          </Text>

          <Text c="dimmed" size="xs">
            hspoer@outlook.com
          </Text>
        </div>

        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}
