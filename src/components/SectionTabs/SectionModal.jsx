import { Modal, Fieldset, TextInput, Button, Group } from "@mantine/core";

export function SectionModal({ opened, close }) {
  return (
    <>
      <Modal opened={opened} onClose={close}>
        <Fieldset legend="Add Section">
          <TextInput placeholder="Enter Section Name" />
        </Fieldset>
        <Group justify="flex-end" mt="md">
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "violet", deg: 90 }}
          >
            Submit
          </Button>
        </Group>
      </Modal>
    </>
  );
}
