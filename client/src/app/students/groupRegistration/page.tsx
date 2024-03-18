import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import { FaAngleRight, FaHouse } from "react-icons/fa6";

export default function GroupRegistration() {
  return (
    <>
      <div className="text-xs m-2">
        <Breadcrumb spacing="8px" separator={<FaAngleRight color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <FaHouse />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/students/">For Students</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="">Group Registration</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
}
