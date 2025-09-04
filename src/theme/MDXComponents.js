import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
// import Highlight from "@site/src/components/Highlight";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Tabs,
  TabItem,
};
