import { Button, Tabs, Modal } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import "./SectionTabs.module.css";
import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import supabase from "../../services/supabase-client";
import { ProductCard } from "../Product/ProductCard";
import { ProductGallery } from "./ProductGallery";
import { SectionModal } from "./SectionModal";

export function SectionTabs() {
  const [section, setSection] = useState();
  const [opened, { close, open }] = useDisclosure(false);

  useEffect(() => {
    const fetchSection = async () => {
      const { data, error } = await supabase.from("sections").select("*");
      if (error) {
        console.error("Error fetching sections:", error);
      } else {
        setSection(data);
      }
    };
    fetchSection();
  }, []);

  return (
    <Tabs
      classNames={{ tab: "no-ring-tab" }}
      variant="outline"
      radius="md"
      defaultValue="gallery"
    >
      <Tabs.List>
        {/* Dynamically create section after api call */}
        {section?.map((section) => (
          <Tabs.Tab key={section.name} value={section.name}>
            {section.name}
          </Tabs.Tab>
        ))}
        <SectionModal opened={opened} close={close} />
        <Button
          value="add"
          variant="light"
          color="blue"
          radius="md"
          style={{ padding: "10px" }}
          onClick={open}
        >
          <IconPlus size={16} stroke={1.5} />
        </Button>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        <ProductGallery />
        <ProductGallery />
      </Tabs.Panel>

      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
