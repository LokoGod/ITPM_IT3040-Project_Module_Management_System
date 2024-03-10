import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import ControlledExample from "@/components/forms/NewForm";

const Attendance = () => {
  return (
    <div>
      <div className="text-xs m-2">
          <Breadcrumb
            spacing="8px"
            separator={<IoChevronForward color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
              <FaHouseChimney />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/humanResource">Human Resource</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem className="text-blue-600">
              <BreadcrumbLink href="humanResource/attendance">Attendance</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>     


        <ControlledExample />

    </div>
  );
};

export default Attendance;
