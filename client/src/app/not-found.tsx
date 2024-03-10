import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="global">
      <h2 className="text-3xl font-semibold text-center">404 | Not Found</h2>
      <div className="flex justify-center mt-2">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
