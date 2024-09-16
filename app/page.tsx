import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="outline" size="lg" className="capitalize m-8">
        Click me
      </Button>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
    </div>
  );
}
