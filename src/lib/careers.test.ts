import { describe, it, expect } from "vitest";
import {
  CAREER_DEPARTMENTS,
  CAREER_ROLES,
  GENERAL_APPLICATION_ROLE,
  getOpenRoles,
  getOpenRolesByDepartment,
  getApplicableRoleTitles,
  isApplicableRole,
  getTotalOpenSeats,
  formatSeats,
  type CareerRole,
} from "./careers";

describe("careers library", () => {
  it("has exactly 72 roles with unique, non-empty titles and valid departments", () => {
    expect(CAREER_ROLES.length).toBe(72);

    const titles = new Set<string>();
    const deptIds = new Set(CAREER_DEPARTMENTS.map((d) => d.id));

    for (const role of CAREER_ROLES) {
      expect(role.title.trim()).toBeTruthy();
      expect(titles.has(role.title)).toBe(false);
      titles.add(role.title);

      expect(deptIds.has(role.department)).toBe(true);
    }

    // Every department has at least one role in CAREER_ROLES
    for (const dept of CAREER_DEPARTMENTS) {
      const count = CAREER_ROLES.filter((r) => r.department === dept.id).length;
      expect(count).toBeGreaterThan(0);
    }
  });

  it("has the exact default open roles and seats", () => {
    const openRoles = getOpenRoles();
    expect(openRoles).toHaveLength(3);

    const bdr = openRoles.find((r) => r.title === "Business Development Representative");
    expect(bdr).toBeDefined();
    expect(bdr?.seats).toBe(2);

    const fs = openRoles.find((r) => r.title === "Full-Stack Engineer");
    expect(fs).toBeDefined();
    expect(fs?.seats).toBe(5);

    const content = openRoles.find((r) => r.title === "Content Lead");
    expect(content).toBeDefined();
    expect(content?.seats).toBe(2);
  });

  it("asserts every open role has integer seats >= 1, and closed roles have seats === 0", () => {
    for (const role of CAREER_ROLES) {
      if (role.open) {
        expect(Number.isInteger(role.seats)).toBe(true);
        expect(role.seats).toBeGreaterThanOrEqual(1);
      } else {
        expect(role.seats).toBe(0);
      }
    }
  });

  it("returns exactly Engineering, Sales & Partnerships, Growth & Marketing in CAREER_DEPARTMENTS order by default", () => {
    const depts = getOpenRolesByDepartment();
    expect(depts.map((d) => d.department.label)).toEqual([
      "Engineering",
      "Sales & Partnerships",
      "Growth & Marketing",
    ]);
  });

  it("handles custom role array with closed role properly", () => {
    const customRoles: CareerRole[] = [
      { title: "Custom Closed", department: "engineering", open: false, seats: 0 },
      { title: "Custom Open", department: "product", open: true, seats: 3 },
    ];

    expect(getOpenRoles(customRoles).map((r) => r.title)).toEqual(["Custom Open"]);
    expect(getOpenRolesByDepartment(customRoles).map((d) => d.department.id)).toEqual(["product"]);
    expect(getApplicableRoleTitles(customRoles)).toEqual(["Custom Open", GENERAL_APPLICATION_ROLE]);
    expect(isApplicableRole("Custom Closed", customRoles)).toBe(false);
    expect(isApplicableRole("Custom Open", customRoles)).toBe(true);
  });

  it("omits departments whose roles are all closed", () => {
    const customRoles: CareerRole[] = [
      { title: "Engineer 1", department: "engineering", open: false, seats: 0 },
    ];
    expect(getOpenRolesByDepartment(customRoles)).toEqual([]);
  });

  it("always includes GENERAL_APPLICATION_ROLE in getApplicableRoleTitles even when all roles are closed", () => {
    const customRoles: CareerRole[] = [
      { title: "Role A", department: "engineering", open: false, seats: 0 },
    ];
    expect(getApplicableRoleTitles(customRoles)).toEqual([GENERAL_APPLICATION_ROLE]);
    expect(isApplicableRole(GENERAL_APPLICATION_ROLE, customRoles)).toBe(true);
  });

  it("calculates total open seats and formats seats correctly", () => {
    expect(getTotalOpenSeats()).toBe(9);
    expect(formatSeats(1)).toBe("1 seat open");
    expect(formatSeats(5)).toBe("5 seats open");
  });

  it("does not include legacy titles BDR / Growth Manager or Brand & Content Lead", () => {
    const titles = CAREER_ROLES.map((r) => r.title);
    expect(titles).not.toContain("BDR / Growth Manager");
    expect(titles).not.toContain("Brand & Content Lead");
  });
});
