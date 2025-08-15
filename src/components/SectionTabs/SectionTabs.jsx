import { Button, Tabs } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import "./SectionTabs.module.css";
import { useState, useEffect } from "react";
import supabase from "../../services/supabase-client";
import { ProductCard } from "../Product/ProductCard";
import { ProductGallery } from "./ProductGallery";

export function SectionTabs() {
  const [section, setSection] = useState();

  // useEffect(() => {
  //   const fetchSection = async () => {
  //     const { data, error } = await supabase.from("sections").select("*");
  //     if (error) {
  //       console.error("Error fetching sections:", error);
  //     } else {
  //       setSection(data);
  //     }
  //   };

  //   fetchSection();
  //   console.log("Section Data Fetched");
  // }, []);

  // const sectionTabs = section.map((section) => (
  //   <Tabs.Tab value={section.name}>{section.name}</Tabs.Tab>
  // ));
  console.log(section);
  return (
    <Tabs
      classNames={{ tab: "no-ring-tab" }}
      variant="outline"
      radius="md"
      defaultValue="gallery"
    >
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        {/* {section} */}
        <Button
          value="add"
          variant="light"
          color="blue"
          radius="md"
          style={{ padding: "10px" }}
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
