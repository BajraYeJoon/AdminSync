import { Button, DarkThemeToggle, Flowbite } from "flowbite-react";

export default function App() {
  return (
    <Flowbite>
      <Button className="bg-red-800">Click me</Button>
      <DarkThemeToggle />
    </Flowbite>
  );
}
