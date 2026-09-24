export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  name: string;
  href?: string;
  items?: NavDropdownItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    name: "Solution",
    href: "/solutions",
  },
  {
    name: "Company",
    items: [
      {
        label: "About Us",
        href: "/about",
        description: "Who we are, principles & team",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join us in building Modulifyr",
      },
      {
        label: "Case Studies",
        href: "/work",
        description: "Featured projects & client outcomes",
      },
      {
        label: "Technical Standards",
        href: "/about/technical-standards",
        description: "Our engineering guidelines & practices",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Resources",
    items: [
      {
        label: "Resources Hub",
        href: "/resources",
        description: "Guides, templates & system blueprints",
      },
      {
        label: "Engineering Blog",
        href: "/blog",
        description: "Insights on software architecture & tech",
      },
    ],
  },
];
