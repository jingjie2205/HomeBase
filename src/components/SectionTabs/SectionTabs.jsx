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

  const addSection = async (name) => {
    const newSectionData = {
      name: name,
    };
    const { data, error } = await supabase
      .from("sections")
      .insert([newSectionData])
      .single();

    if (error) {
      console.log("Error adding Sections: ", error);
    } else {
      setSection((prev) => [...prev, data]);
    }
  };

  useEffect(() => {
    const fetchSection = async () => {
      const { data, error } = await supabase
        .from("sections")
        .select("name, id");
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
        {section &&
          section.map((s) => (
            <Tabs.Tab key={s.name} value={s.name}>
              {s.name}
            </Tabs.Tab>
          ))}
        <SectionModal opened={opened} close={close} postSection={addSection} />
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
