import { ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";

export function ProductCopyBtn({ link }) {
  return (
    <CopyButton value={link} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon
            color={copied ? "teal" : "gray"}
            variant="subtle"
            onClick={copy}
          >
            {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
