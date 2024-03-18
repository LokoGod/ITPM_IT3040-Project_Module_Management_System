import GroupRegistrationForm from "@/components/forms/GroupRegistrationForm";
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
      <div className="text-xs my-2">
        <Breadcrumb spacing="8px" separator={<FaAngleRight color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <FaHouse />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/students/">For Students</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Group Registrationsss
        </h2>
      </div>

      
    </>
  );
}
