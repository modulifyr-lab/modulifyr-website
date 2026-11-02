export const GENERAL_APPLICATION_ROLE = "Other / General Application";

export type DepartmentId =
  | "executive-office"
  | "engineering"
  | "product"
  | "client-services"
  | "sales-partnerships"
  | "customer-success"
  | "game-development"
  | "game-design"
  | "art-creative"
  | "qa-playtesting"
  | "publishing-community"
  | "growth-marketing"
  | "revenue-analytics"
  | "hr-people-ops"
  | "finance-legal"
  | "it-security"
  | "brand-communications"
  | "operations";

export interface Department {
  id: DepartmentId;
  label: string;
}

export interface CareerRole {
  title: string;
  department: DepartmentId;
  /** true = shown on /careers and selectable in the application form. false = hidden everywhere. */
  open: boolean;
  /** Number of open seats. Must be an integer >= 1 when `open` is true. Use 0 while closed. */
  seats: number;
}

export const CAREER_DEPARTMENTS: readonly Department[] = [
  { id: "executive-office", label: "Executive Office" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "client-services", label: "Client Services" },
  { id: "sales-partnerships", label: "Sales & Partnerships" },
  { id: "customer-success", label: "Customer Success" },
  { id: "game-development", label: "Game Development" },
  { id: "game-design", label: "Game Design" },
  { id: "art-creative", label: "Art & Creative" },
  { id: "qa-playtesting", label: "QA & Playtesting" },
  { id: "publishing-community", label: "Publishing & Community" },
  { id: "growth-marketing", label: "Growth & Marketing" },
  { id: "revenue-analytics", label: "Revenue & Analytics" },
  { id: "hr-people-ops", label: "HR & People Operations" },
  { id: "finance-legal", label: "Finance & Legal" },
  { id: "it-security", label: "IT & Security" },
  { id: "brand-communications", label: "Brand & Communications" },
  { id: "operations", label: "Operations" },
];

// To open a job: set `open: true` and `seats` to the number of people we are hiring (>= 1).
// To close it: set `open: false` and `seats: 0`.
// That single edit shows or hides the job on /careers, in the application form dropdown,
// quick-select badges and sidebar, and in the /api/submit-application allowlist.
// A department appears on /careers only while at least one of its roles is open.
export const CAREER_ROLES: readonly CareerRole[] = [
  // executive-office (3)
  { title: "Founder / CEO", department: "executive-office", open: false, seats: 0 },
  { title: "Chief of Staff", department: "executive-office", open: false, seats: 0 },
  { title: "Executive Assistant", department: "executive-office", open: false, seats: 0 },

  // engineering (13)
  { title: "Software Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Senior Software Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Lead Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Backend Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Frontend Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Full-Stack Engineer", department: "engineering", open: true, seats: 5 },
  { title: "DevOps Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Cloud Infrastructure Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Security Engineer", department: "engineering", open: false, seats: 0 },
  { title: "QA Engineer", department: "engineering", open: false, seats: 0 },
  { title: "Solutions Architect", department: "engineering", open: false, seats: 0 },
  { title: "Technical Lead", department: "engineering", open: false, seats: 0 },
  { title: "Engineering Manager", department: "engineering", open: false, seats: 0 },

  // product (7)
  { title: "Product Manager", department: "product", open: false, seats: 0 },
  { title: "Senior Product Manager", department: "product", open: false, seats: 0 },
  { title: "UX Designer", department: "product", open: false, seats: 0 },
  { title: "UI Designer", department: "product", open: false, seats: 0 },
  { title: "Product Designer", department: "product", open: false, seats: 0 },
  { title: "UX Researcher", department: "product", open: false, seats: 0 },
  { title: "Design Lead", department: "product", open: false, seats: 0 },

  // client-services (5)
  { title: "Account Manager", department: "client-services", open: false, seats: 0 },
  { title: "Project Manager", department: "client-services", open: false, seats: 0 },
  { title: "Technical Project Manager", department: "client-services", open: false, seats: 0 },
  { title: "Technical Support Engineer", department: "client-services", open: false, seats: 0 },
  { title: "Client Onboarding Specialist", department: "client-services", open: false, seats: 0 },

  // sales-partnerships (4)
  {
    title: "Business Development Manager",
    department: "sales-partnerships",
    open: false,
    seats: 0,
  },
  {
    title: "Business Development Representative",
    department: "sales-partnerships",
    open: true,
    seats: 2,
  },
  { title: "Sales Executive", department: "sales-partnerships", open: false, seats: 0 },
  { title: "Pre-Sales Engineer", department: "sales-partnerships", open: false, seats: 0 },

  // customer-success (3)
  { title: "Customer Success Manager", department: "customer-success", open: false, seats: 0 },
  { title: "Customer Support Specialist", department: "customer-success", open: false, seats: 0 },
  { title: "User Researcher", department: "customer-success", open: false, seats: 0 },

  // game-development (5)
  { title: "Gameplay Programmer", department: "game-development", open: false, seats: 0 },
  { title: "Engine Programmer", department: "game-development", open: false, seats: 0 },
  { title: "AI Programmer", department: "game-development", open: false, seats: 0 },
  { title: "Tools Programmer", department: "game-development", open: false, seats: 0 },
  { title: "Graphics Programmer", department: "game-development", open: false, seats: 0 },

  // game-design (4)
  { title: "Game Designer", department: "game-design", open: false, seats: 0 },
  { title: "Level Designer", department: "game-design", open: false, seats: 0 },
  { title: "Narrative Designer", department: "game-design", open: false, seats: 0 },
  { title: "Systems Designer", department: "game-design", open: false, seats: 0 },

  // art-creative (7)
  { title: "Concept Artist", department: "art-creative", open: false, seats: 0 },
  { title: "3D Artist", department: "art-creative", open: false, seats: 0 },
  { title: "Animator", department: "art-creative", open: false, seats: 0 },
  { title: "Technical Artist", department: "art-creative", open: false, seats: 0 },
  { title: "VFX Artist", department: "art-creative", open: false, seats: 0 },
  { title: "Audio Designer", department: "art-creative", open: false, seats: 0 },
  { title: "Composer", department: "art-creative", open: false, seats: 0 },

  // qa-playtesting (1)
  { title: "QA Tester", department: "qa-playtesting", open: false, seats: 0 },

  // publishing-community (2)
  { title: "Community Manager", department: "publishing-community", open: false, seats: 0 },
  { title: "Publishing Manager", department: "publishing-community", open: false, seats: 0 },

  // growth-marketing (6)
  { title: "Growth Marketer", department: "growth-marketing", open: false, seats: 0 },
  { title: "Digital Marketing Manager", department: "growth-marketing", open: false, seats: 0 },
  { title: "Content Strategist", department: "growth-marketing", open: false, seats: 0 },
  { title: "SEO Specialist", department: "growth-marketing", open: false, seats: 0 },
  { title: "Paid Acquisition Specialist", department: "growth-marketing", open: false, seats: 0 },
  { title: "Content Lead", department: "growth-marketing", open: true, seats: 2 },

  // revenue-analytics (2)
  { title: "Data Analyst", department: "revenue-analytics", open: false, seats: 0 },
  { title: "Revenue Analyst", department: "revenue-analytics", open: false, seats: 0 },

  // hr-people-ops (3)
  { title: "HR Manager", department: "hr-people-ops", open: false, seats: 0 },
  { title: "HR Specialist", department: "hr-people-ops", open: false, seats: 0 },
  { title: "Recruiter", department: "hr-people-ops", open: false, seats: 0 },

  // finance-legal (4)
  { title: "Finance Manager", department: "finance-legal", open: false, seats: 0 },
  { title: "Accountant", department: "finance-legal", open: false, seats: 0 },
  { title: "Financial Analyst", department: "finance-legal", open: false, seats: 0 },
  { title: "Legal Counsel", department: "finance-legal", open: false, seats: 0 },

  // it-security (1)
  { title: "IT Administrator", department: "it-security", open: false, seats: 0 },

  // brand-communications (1)
  { title: "Brand Manager", department: "brand-communications", open: false, seats: 0 },

  // operations (1)
  { title: "Operations Manager", department: "operations", open: false, seats: 0 },
];

export function getOpenRoles(roles: readonly CareerRole[] = CAREER_ROLES): CareerRole[] {
  return roles.filter((r) => r.open);
}

export function getOpenRolesByDepartment(
  roles: readonly CareerRole[] = CAREER_ROLES,
  departments: readonly Department[] = CAREER_DEPARTMENTS
): { department: Department; roles: CareerRole[] }[] {
  const result: { department: Department; roles: CareerRole[] }[] = [];

  for (const dept of departments) {
    const deptRoles = roles.filter((r) => r.department === dept.id && r.open);
    if (deptRoles.length > 0) {
      result.push({
        department: dept,
        roles: deptRoles,
      });
    }
  }

  return result;
}

export function getApplicableRoleTitles(roles: readonly CareerRole[] = CAREER_ROLES): string[] {
  return [...getOpenRoles(roles).map((r) => r.title), GENERAL_APPLICATION_ROLE];
}

export function isApplicableRole(
  title: string,
  roles: readonly CareerRole[] = CAREER_ROLES
): boolean {
  return getApplicableRoleTitles(roles).includes(title);
}

export function getTotalOpenSeats(roles: readonly CareerRole[] = CAREER_ROLES): number {
  return getOpenRoles(roles).reduce((sum, r) => sum + r.seats, 0);
}

export function formatSeats(seats: number): string {
  return seats === 1 ? "1 seat open" : `${seats} seats open`;
}
