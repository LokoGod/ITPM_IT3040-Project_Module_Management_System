import Link from "next/link";
import { MenuButton } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <div className="global">
      <h2 className="text-3xl font-semibold text-center">404 | Not Found</h2>
      <div className="flex justify-center mt-2">
        {/* <MenuButton asChild>
          <Link href="/">Return Home</Link>
        </MenuButton> */}
      </div>
    </div>
  );
}
