"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">John Doe</span>
            <span className="block truncate text-sm font-medium">Name</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
