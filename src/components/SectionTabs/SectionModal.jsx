import { Modal, Fieldset, TextInput, Button, Group } from "@mantine/core";
import { useState } from "react";
import supabase from "../../services/supabase-client";

export function SectionModal({ opened, close, postSection }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    postSection(name);
    setName("");
  };

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <Fieldset legend="Add Section">
          <TextInput
            placeholder="Enter Section Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Fieldset>
        <Group justify="flex-end" mt="md">
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "violet", deg: 90 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Group>
      </Modal>
    </>
  );
}
