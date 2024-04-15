import {
  Avatar,
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export const Header = () => {
  const activePage = window.location.pathname.replace("/", "");

  return (
    <Navbar position="static" className="w-full rounded-md bg-background">
      <NavbarBrand>
        <p className="font-bold text-inherit">BITROCK SKILLS</p>
        <img src="/img/logo/logo.png" alt="logo" height="30" width="30" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={activePage === "skills"}>
          <Link href="/skills">Skills</Link>
        </NavbarItem>
        <NavbarItem isActive={activePage === "people"}>
          <Link href="/people" aria-current="page">
            People
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePage === "projects"}>
          <Link href="/projects">Projects</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
