"use client";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

function ControlledExample() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const handleNextButtonClick = () => {
    const nextIndex = (tabIndex + 1) % 3; // Assuming there are 3 tabs
    setTabIndex(nextIndex);
  };

  return (
    <Box>
      <Tabs
        isFitted
        variant="enclosed"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Click the tabs or click Next to cycle through tabs</p>
            <Input></Input>
            {/* Button to move to the next tab */}
            <Button onClick={handleNextButtonClick}>Next</Button>
          </TabPanel>
          <TabPanel>
            <p>Yeah yeah. What up?</p>
            {/* Button to move to the next tab */}
            <Button onClick={handleNextButtonClick}>Next</Button>
          </TabPanel>
          <TabPanel>
            <p>Oh, hello there.</p>
            {/* Button to move to the next tab */}
            <Button type="submit">Submit</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ControlledExample;
