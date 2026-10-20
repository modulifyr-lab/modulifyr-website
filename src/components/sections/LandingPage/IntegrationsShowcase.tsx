"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

type Integration = {
  name: string;
  /** Put logo files in /public/integrations/. Falls back to initials if missing. */
  logo: string;
};

const INTEGRATION_ROWS: { direction: "left" | "right"; duration: number; apps: Integration[] }[] = [
  {
    direction: "left",
    duration: 40,
    apps: [
      {
        name: "Zoho",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABBVBMVEVHcEz////////////////////////////////////9/fz/////////////////+vj97Ovi7u7N6tqy3sWT0K3////////////////73Nz5zs72vb3zpaXxjY7rdHTabzwbnlQFmUgBlUA4q2rr9PH////////2tbbvgYLpSErnNDHkJCblGx7kEhaOVDFxwZO/OCpuiGdOtoDqWVz////znJz3+/vv9vj1mSxAn4v6shv6tyXzrBH99eZKir0GiWkvd7fT4fD7wk/6sAr+79ANZrIhbbS50Ob/+e781YX95beCq9SkwN793J2dvd2Tt9n7z3gbarN2oc3CqmBId5rjri6OnJccIfVeAAAASXRSTlMAAQcRJUJrk8Dn/bFJCUjR+f////+mMnzJ///////////////9QLj////////////////////R7v///////v/////////////wZtWe1AAAAbhJREFUeAFlzsViFUEUhOG/uue6ovFscFvxArw6vsfdHaI3k/E5dNy+7ZEqsUNoD+akCYEIBkk3VRQJBWB11tNf2xlGZ5R2tAfMrY03Bu+MCF3Un6mxtpg0McAGvaWhL/GcL/Kz3jvAsChnW3Y+9y53A0sbXmYECCQRrK0owTfz0ZBATpJFnca/s6nAnVOe+cZo5ABrL6du1XXlx/53U6hY2ayj2nkDW/t0HQZsS8ZmViPUvZHWuKLPIcXEYD1NHNsGnKAbcvaTYMJh3wDNKQzNMOtxmBH4pTCs641h/98LDjltQGtJanavOiQlHNLVl0XpUWS3GkqsHYaHNS+B5KzXImhy2ACwRhg+jgiMwzyBD8OySoAWh1UERhjmAtYP1X1xJu5DP7MIo6Uk0Z0/BKsLzbbvZqdiektPXWTNqD0BW5uvyuzUaas3OROHWTzMnKdePx8T1EWVD1IFBWHWv9euPL3G4GyYUpblLI2tQbPZXGnfb7HiybOmOxd3SmDyJ4J+HG/26rf95jciqOxtiOkAyUWVWSH5759tqQQBOmfx7YGHKs9+nrHnpbU3OxN2hjAwq4Xtwdj2H1ML0e6EHvclAAAAAElFTkSuQmCC",
      },
      {
        name: "Skype",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABBVBMVEVHcEz////////////////////////////////////9/fz/////////////////+vj97Ovi7u7N6tqy3sWT0K3////////////////73Nz5zs72vb3zpaXxjY7rdHTabzwbnlQFmUgBlUA4q2rr9PH////////2tbbvgYLpSErnNDHkJCblGx7kEhaOVDFxwZO/OCpuiGdOtoDqWVz////znJz3+/vv9vj1mSxAn4v6shv6tyXzrBH99eZKir0GiWkvd7fT4fD7wk/6sAr+79ANZrIhbbS50Ob/+e781YX95beCq9SkwN793J2dvd2Tt9n7z3gbarN2oc3CqmBId5rjri6OnJccIfVeAAAASXRSTlMAAQcRJUJrk8Dn/bFJCUjR+f////+mMnzJ///////////////9QLj////////////////////R7v///////v/////////////wZtWe1AAAAbhJREFUeAFlzsViFUEUhOG/uue6ovFscFvxArw6vsfdHaI3k/E5dNy+7ZEqsUNoD+akCYEIBkk3VRQJBWB11tNf2xlGZ5R2tAfMrY03Bu+MCF3Un6mxtpg0McAGvaWhL/GcL/Kz3jvAsChnW3Y+9y53A0sbXmYECCQRrK0owTfz0ZBATpJFnca/s6nAnVOe+cZo5ABrL6du1XXlx/53U6hY2ayj2nkDW/t0HQZsS8ZmViPUvZHWuKLPIcXEYD1NHNsGnKAbcvaTYMJh3wDNKQzNMOtxmBH4pTCs641h/98LDjltQGtJanavOiQlHNLVl0XpUWS3GkqsHYaHNS+B5KzXImhy2ACwRhg+jgiMwzyBD8OySoAWh1UERhjmAtYP1X1xJu5DP7MIo6Uk0Z0/BKsLzbbvZqdiektPXWTNqD0BW5uvyuzUaas3OROHWTzMnKdePx8T1EWVD1IFBWHWv9euPL3G4GyYUpblLI2tQbPZXGnfb7HiybOmOxd3SmDyJ4J+HG/26rf95jciqOxtiOkAyUWVWSH5759tqQQBOmfx7YGHKs9+nrHnpbU3OxN2hjAwq4Xtwdj2H1ML0e6EHvclAAAAAElFTkSuQmCC",
      },
      {
        name: "Java",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAh1BMVEXe5uzAztqxwtHc4OT09PT19fXw8PCqu8rn5+f8/Pzs0Lf6+vrnrXrleiugscLk5OT39/fs7OzkcR7lx6zh4eHhr4LhZRLhpW+Vp7fd3d3gYA6Knq3W1tbbbhzXoW1cepV6jZ6EmKdIZoJWc4vQ0NB8kJ6otb3Ly8twhZV1jqW5vcK9yM9ofY52NCXaAAAAr0lEQVR4AU3KhUIDMQwA0BwrWWftZWQSLrDq/P+/jxPsVaIAzcs/TV/PzOsI+2dmDcztYoTLVf/bed9YDXC9MX3oG863PVpv6c20rXfg2BiDuz0ftmgMOzgKItKe9nsiRDn2DSKyG3m3Vpj6RqfWq+rHp8opiHYQ1XNKub8dp1Ai1MIi554rJYVLhXAR0Zz6DU1BLwGCsmqZMGuAq7K7nSbe6hXqnf/4e4VHfP4TH1/dVRTdLcfq+gAAAABJRU5ErkJggg==",
      },
      {
        name: "Jira",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwlhP8hdPQmhP8mhP8mhP8mhP8mhP8mhP8lhP8lgv4mhP8mhP8lhP8NYtwBVM4Ya+YlhP8lgv4HXNYKYNsGWtUCV9Inf/0LYdwTbOYQaOMXcewcdvIUbegRauYZc+4defQif/ofevUmhP9Q21KyAAAAJHRSTlMARAXSZPzC/+L0cxyYrFvKI4BWDuL8oQr/ef9o0v9I////5DYM4+ROAAAAtklEQVR4AbzRtREEQQwAwWUdMzPkn+Mfs9yX2zWL5B9DKW6Mc9yElAJVBaAYtqMGoBsIGjpMqfmNFkyjI7vaAHg6IZayCbHUcT1fLiiDp4VRnBj6mvL0GWZxnHNY55lGWZYl9obaIyyKIotK/StlVV1P2uwpZxcs27aduPQ2vH5OWnXdrDk50vTy4n03c07M1S6fYyqAvp+0IcyCxzMJCTDz4BEy6o9dR3+dYNooDX6DcpRpl4wBY+ENj5AjYfIAAAAASUVORK5CYII=",
      },
      {
        name: "Figma",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAABUUlEQVR4AWOgHxgF0mxsm9XVXxgZQZGu0YsMBFrnpybDy0ayoUCD/pubI5Ch+f8y8/9FEARiA40mzcQWWVmYcZiGIsxtsZYlwdDlKirEGAoMBBIMrZGWJsbQclMp0kLglr4+yCwzfTiCGlpoAERA9rUEPXISwDQFyae25RD0zLrmfJzCxRCei8XhF5pKJ9qKkmOii0ZTQ8B/OOoO/A8SnXyRYed/ENr2nyG6kTQT1cW9gKa0+yNQr9d/htYNDHuAxkEQ2GgdWxIMDTaci26oK9CUX0Cz4AhkQd4sGhtKf+8jIgpoUK8rDHlBIwpk7h5YRJEBhIptHddNgSC3nQshgiDXuSUzkAfkVsWrXi5VPJsLQUA2A4VAMN4UaIrK6UI4ooKhEu3e1DdUONMazVDFnekMlAOgKXBzgQxggFDBUBYxXmAgAI0GxhhfkC7DwIJRAAA6ZTBaejThFQAAAABJRU5ErkJggg==",
      },
    ],
  },
  {
    direction: "right",
    duration: 46,
    apps: [
      {
        name: "AWS",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUWHSYAAAD///8SGiMAAAwAABMIEx4ADxu2t7kACxkOFyEAABC8vb74+PjOz9AABBWQkZTp6upaXWHe3t/Fxsd6fH+goaMAAAelp6hxdHdgY2dSVlpFSU49QEYcIissMTgkKjGGiIppa28umD+RAAAA+klEQVQ4je2Qy3KFIBBE6eGtguCDy42i0f//yFhJFnIrm6yTXk1VH6abYexfv5IEBGs1U49r1gp4vPg5ug7m2b550eZ5ic7rCujzWlwwHoYWUKGZzVsFcJTdmIUQTVoJZN7BK9/G6J0B7W7wqcPqaWzuhD0cMBlM0wTnTw0gBnsD1EBHphEzHYiEzR+BFnXPEPMU1FPztNtztvbouqGtOkgrLFeM95yp638WWPdbBC9ZiuYeeXpP5y1DL84UCKuu5rzRLWQYxlI9uS7kzLFsD9jyzCNlMaK+lGhSpG/FpPFWLfgqiu0MKYVTQV5dX/1PRvdS9pr/YP15fQBtEQ1gHLH1RwAAAABJRU5ErkJggg==",
      },
      {
        name: "3CX",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEU3Nzc4NDI4Mi0xMTErKysuLi45MCkvUGMjbpQmZ4k1PUI0NDQdHR1gYGCmpqavr6+GhoYgICBwcHB9fX08PDwAmdkwS1vY2Nj////Nzc1oaGgWFhYUh705Kx4yRVAYgLEdDwDg4ODs7OyPj4+5ubkNDQ1XV1cLd6eCfXkaEQg5LSMJks4XEw9RUVEpYH0sVm07JQ0jHBabm5ssKCVGRkaL8pitAAAA4klEQVR4AeWQhRHDMAwAZXYYlajMzLD/bA34ukTebLFgQDDOoUVIqUCo/i56mTbW8xkEYRQnaZYXEADIPC2hgVtsqJiqqR4RjamegExpJKEFp7M5LparNYTZJMk2tN3taTWBFt+aGeDhSEEbRprTljZEKuhj8vMUL3Jbh+1DY3WtiW4uH6b1/YCHv3B+3dI66A3ZY1Hp5xRT5/bxelNC67AXGlzMfLws131Cn5xGu2ZNOuPzAhvuXKy6Ur60ziCLKY72rVQ/rDfnrglhGn+bz+wd72+Bax/7t0/J7k/K1u1A+AFKERMEdNLXwwAAAABJRU5ErkJggg==",
      },
      {
        name: "Microsoft Teams",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEU3Nzc4NDI4Mi0xMTErKysuLi45MCkvUGMjbpQmZ4k1PUI0NDQdHR1gYGCmpqavr6+GhoYgICBwcHB9fX08PDwAmdkwS1vY2Nj////Nzc1oaGgWFhYUh705Kx4yRVAYgLEdDwDg4ODs7OyPj4+5ubkNDQ1XV1cLd6eCfXkaEQg5LSMJks4XEw9RUVEpYH0sVm07JQ0jHBabm5ssKCVGRkaL8pitAAAA4klEQVR4AeWQhRHDMAwAZXYYlajMzLD/bA34ukTebLFgQDDOoUVIqUCo/i56mTbW8xkEYRQnaZYXEADIPC2hgVtsqJiqqR4RjamegExpJKEFp7M5LparNYTZJMk2tN3taTWBFt+aGeDhSEEbRprTljZEKuhj8vMUL3Jbh+1DY3WtiW4uH6b1/YCHv3B+3dI66A3ZY1Hp5xRT5/bxelNC67AXGlzMfLws131Cn5xGu2ZNOuPzAhvuXKy6Ur60ziCLKY72rVQ/rDfnrglhGn+bz+wd72+Bax/7t0/J7k/K1u1A+AFKERMEdNLXwwAAAABJRU5ErkJggg==",
      },
      {
        name: "Zoom",
        logo: "data:image/png;base64,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",
      },
      {
        name: "Slack",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAllBMVEVHcEwAs/8AuP8As/8AtP8As/9Ct1lBuVlBtlhDvVs+tVcAtP9BtlgAt/8As/9BtlhBt1gAtP8AtP8AtP8AtP9BuFhBt1hKr1RBtVjlBmrkBmrlBmrkBmr9wAP8wAP9wQPjBmrjBmrkBmriBmrpBm39wAP8wAP8wgPnBmzlBmv+xQP/xAPrBm79wQPnCGz9wgP8wAP8wAPjyg3qAAAAMnRSTlMAOf//1SM25///FlRg8Zul0uWNuGm4mA0hSJspij2Zo+v/5/+81v8g9NPf//+sEcNe/KQbvOoAAAEdSURBVHgBhdEFtoMwFEXRW/fi7l6X+U/uvwChWT+VvYTIwfEyGk+mMzrOF8vVGrLNhFCxXSzJHJLdhNlDWTIqJFob6J8D41cwm/4IMDI3G3MkBRI52GhTzpgJwdxSF3P+/hwVPJir7LgGxmIgPOS2Pa6AyeeA4V+QM2EvGasPVGCkCfv7GT0b2193geqAiv1Ab/+mbdsuHRTbVuiI3zyfBO0xpAOieJBEbD/NiAcvz7KiDBBV9UvVAIesC47sUISIa9EJyPog7YOkFp2BSx/k7THE9X8QZMS/DUFzFwMQLz+GNwwBFRV3asAJwSc8iB6k+RTwh7w3nwL+msmP4FlB0n1Rv/8OJ0i8rMiKY4DoxK7QQHa7ZCVIczqfMfgDq+4xZhgw/9kAAAAASUVORK5CYII=",
      },
    ],
  },
  {
    direction: "left",
    duration: 52,
    apps: [
      {
        name: "GitHub",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAllBMVEVHcEwAs/8AuP8As/8AtP8As/9Ct1lBuVlBtlhDvVs+tVcAtP9BtlgAt/8As/9BtlhBt1gAtP8AtP8AtP8AtP9BuFhBt1hKr1RBtVjlBmrkBmrlBmrkBmr9wAP8wAP9wQPjBmrjBmrkBmriBmrpBm39wAP8wAP8wgPnBmzlBmv+xQP/xAPrBm79wQPnCGz9wgP8wAP8wAPjyg3qAAAAMnRSTlMAOf//1SM25///FlRg8Zul0uWNuGm4mA0hSJspij2Zo+v/5/+81v8g9NPf//+sEcNe/KQbvOoAAAEdSURBVHgBhdEFtoMwFEXRW/fi7l6X+U/uvwChWT+VvYTIwfEyGk+mMzrOF8vVGrLNhFCxXSzJHJLdhNlDWTIqJFob6J8D41cwm/4IMDI3G3MkBRI52GhTzpgJwdxSF3P+/hwVPJir7LgGxmIgPOS2Pa6AyeeA4V+QM2EvGasPVGCkCfv7GT0b2193geqAiv1Ab/+mbdsuHRTbVuiI3zyfBO0xpAOieJBEbD/NiAcvz7KiDBBV9UvVAIesC47sUISIa9EJyPog7YOkFp2BSx/k7THE9X8QZMS/DUFzFwMQLz+GNwwBFRV3asAJwSc8iB6k+RTwh7w3nwL+msmP4FlB0n1Rv/8OJ0i8rMiKY4DoxK7QQHa7ZCVIczqfMfgDq+4xZhgw/9kAAAAASUVORK5CYII=",
      },
      {
        name: "Zoho",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABBVBMVEVHcEz////////////////////////////////////9/fz/////////////////+vj97Ovi7u7N6tqy3sWT0K3////////////////73Nz5zs72vb3zpaXxjY7rdHTabzwbnlQFmUgBlUA4q2rr9PH////////2tbbvgYLpSErnNDHkJCblGx7kEhaOVDFxwZO/OCpuiGdOtoDqWVz////znJz3+/vv9vj1mSxAn4v6shv6tyXzrBH99eZKir0GiWkvd7fT4fD7wk/6sAr+79ANZrIhbbS50Ob/+e781YX95beCq9SkwN793J2dvd2Tt9n7z3gbarN2oc3CqmBId5rjri6OnJccIfVeAAAASXRSTlMAAQcRJUJrk8Dn/bFJCUjR+f////+mMnzJ///////////////9QLj////////////////////R7v///////v/////////////wZtWe1AAAAbhJREFUeAFlzsViFUEUhOG/uue6ovFscFvxArw6vsfdHaI3k/E5dNy+7ZEqsUNoD+akCYEIBkk3VRQJBWB11tNf2xlGZ5R2tAfMrY03Bu+MCF3Un6mxtpg0McAGvaWhL/GcL/Kz3jvAsChnW3Y+9y53A0sbXmYECCQRrK0owTfz0ZBATpJFnca/s6nAnVOe+cZo5ABrL6du1XXlx/53U6hY2ayj2nkDW/t0HQZsS8ZmViPUvZHWuKLPIcXEYD1NHNsGnKAbcvaTYMJh3wDNKQzNMOtxmBH4pTCs641h/98LDjltQGtJanavOiQlHNLVl0XpUWS3GkqsHYaHNS+B5KzXImhy2ACwRhg+jgiMwzyBD8OySoAWh1UERhjmAtYP1X1xJu5DP7MIo6Uk0Z0/BKsLzbbvZqdiektPXWTNqD0BW5uvyuzUaas3OROHWTzMnKdePx8T1EWVD1IFBWHWv9euPL3G4GyYUpblLI2tQbPZXGnfb7HiybOmOxd3SmDyJ4J+HG/26rf95jciqOxtiOkAyUWVWSH5759tqQQBOmfx7YGHKs9+nrHnpbU3OxN2hjAwq4Xtwdj2H1ML0e6EHvclAAAAAElFTkSuQmCC",
      },
      {
        name: "Skype",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABBVBMVEVHcEz////////////////////////////////////9/fz/////////////////+vj97Ovi7u7N6tqy3sWT0K3////////////////73Nz5zs72vb3zpaXxjY7rdHTabzwbnlQFmUgBlUA4q2rr9PH////////2tbbvgYLpSErnNDHkJCblGx7kEhaOVDFxwZO/OCpuiGdOtoDqWVz////znJz3+/vv9vj1mSxAn4v6shv6tyXzrBH99eZKir0GiWkvd7fT4fD7wk/6sAr+79ANZrIhbbS50Ob/+e781YX95beCq9SkwN793J2dvd2Tt9n7z3gbarN2oc3CqmBId5rjri6OnJccIfVeAAAASXRSTlMAAQcRJUJrk8Dn/bFJCUjR+f////+mMnzJ///////////////9QLj////////////////////R7v///////v/////////////wZtWe1AAAAbhJREFUeAFlzsViFUEUhOG/uue6ovFscFvxArw6vsfdHaI3k/E5dNy+7ZEqsUNoD+akCYEIBkk3VRQJBWB11tNf2xlGZ5R2tAfMrY03Bu+MCF3Un6mxtpg0McAGvaWhL/GcL/Kz3jvAsChnW3Y+9y53A0sbXmYECCQRrK0owTfz0ZBATpJFnca/s6nAnVOe+cZo5ABrL6du1XXlx/53U6hY2ayj2nkDW/t0HQZsS8ZmViPUvZHWuKLPIcXEYD1NHNsGnKAbcvaTYMJh3wDNKQzNMOtxmBH4pTCs641h/98LDjltQGtJanavOiQlHNLVl0XpUWS3GkqsHYaHNS+B5KzXImhy2ACwRhg+jgiMwzyBD8OySoAWh1UERhjmAtYP1X1xJu5DP7MIo6Uk0Z0/BKsLzbbvZqdiektPXWTNqD0BW5uvyuzUaas3OROHWTzMnKdePx8T1EWVD1IFBWHWv9euPL3G4GyYUpblLI2tQbPZXGnfb7HiybOmOxd3SmDyJ4J+HG/26rf95jciqOxtiOkAyUWVWSH5759tqQQBOmfx7YGHKs9+nrHnpbU3OxN2hjAwq4Xtwdj2H1ML0e6EHvclAAAAAElFTkSuQmCC",
      },
      {
        name: "Java",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAh1BMVEXe5uzAztqxwtHc4OT09PT19fXw8PCqu8rn5+f8/Pzs0Lf6+vrnrXrleiugscLk5OT39/fs7OzkcR7lx6zh4eHhr4LhZRLhpW+Vp7fd3d3gYA6Knq3W1tbbbhzXoW1cepV6jZ6EmKdIZoJWc4vQ0NB8kJ6otb3Ly8twhZV1jqW5vcK9yM9ofY52NCXaAAAAr0lEQVR4AU3KhUIDMQwA0BwrWWftZWQSLrDq/P+/jxPsVaIAzcs/TV/PzOsI+2dmDcztYoTLVf/bed9YDXC9MX3oG863PVpv6c20rXfg2BiDuz0ftmgMOzgKItKe9nsiRDn2DSKyG3m3Vpj6RqfWq+rHp8opiHYQ1XNKub8dp1Ai1MIi554rJYVLhXAR0Zz6DU1BLwGCsmqZMGuAq7K7nSbe6hXqnf/4e4VHfP4TH1/dVRTdLcfq+gAAAABJRU5ErkJggg==",
      },
      {
        name: "AWS",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUWHSYAAAD///8SGiMAAAwAABMIEx4ADxu2t7kACxkOFyEAABC8vb74+PjOz9AABBWQkZTp6upaXWHe3t/Fxsd6fH+goaMAAAelp6hxdHdgY2dSVlpFSU49QEYcIissMTgkKjGGiIppa28umD+RAAAA+klEQVQ4je2Qy3KFIBBE6eGtguCDy42i0f//yFhJFnIrm6yTXk1VH6abYexfv5IEBGs1U49r1gp4vPg5ug7m2b550eZ5ic7rCujzWlwwHoYWUKGZzVsFcJTdmIUQTVoJZN7BK9/G6J0B7W7wqcPqaWzuhD0cMBlM0wTnTw0gBnsD1EBHphEzHYiEzR+BFnXPEPMU1FPztNtztvbouqGtOkgrLFeM95yp638WWPdbBC9ZiuYeeXpP5y1DL84UCKuu5rzRLWQYxlI9uS7kzLFsD9jyzCNlMaK+lGhSpG/FpPFWLfgqiu0MKYVTQV5dX/1PRvdS9pr/YP15fQBtEQ1gHLH1RwAAAABJRU5ErkJggg==",
      },
    ],
  },
];

function LogoBadge({ name, logo }: Integration) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/5 bg-white">
      {failed ? (
        <span className="text-xs font-bold text-slate-600">{initials}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-7 w-7 object-contain"
        />
      )}
    </span>
  );
}

function IntegrationPill({ app }: { app: Integration }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-sm bg-white px-6 py-3 shadow-md">
      <LogoBadge {...app} />
      <span className="text-base font-medium whitespace-nowrap text-slate-800">{app.name}</span>
    </div>
  );
}

function MarqueeRow({
  apps,
  direction,
  duration,
}: {
  apps: Integration[];
  direction: "left" | "right";
  duration: number;
}) {
  return (
    <div className="marquee-row group/row flex overflow-hidden">
      <div
        className={`marquee-track flex shrink-0 gap-6 pr-6 ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {apps.map((app, i) => (
          <IntegrationPill key={`a-${app.name}-${i}`} app={app} />
        ))}
        {/* Repeat so the loop is seamless; hidden from assistive tech */}
        {apps.map((app, i) => (
          <div key={`b-${app.name}-${i}`} aria-hidden="true" className="contents">
            <IntegrationPill app={app} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsShowcase() {
  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: copy */}
          <div className="lg:col-span-6">
            <span className="font-sans text-[20px] leading-[110%] font-normal text-[#FFC24B]">
              CONNECT &amp; STREAMLINE YOUR TOOLS EFFORTLESSLY
            </span>
            <h2 className="text-on-background mt-6 text-4xl leading-[1.15] font-bold">
              Effortless Integration
              <br />
              with Your Favourite Apps
            </h2>
            <p className="text-on-surface-variant mt-5 max-w-xl text-base leading-[1.4]">
              Seamlessly connect your preferred tools and platforms. Modulifyr integrates
              effortlessly with leading applications, creating an integrated ecosystem that
              maximizes productivity and simplifies daily tasks. Work smarter, not harder, with
              scalable solutions designed to evolve alongside your business.
            </p>
            <div className="mt-10">
              <Link href="/services/automation-layer" className="group inline-block">
                <Button variant="outline" className="px-5">
                  Explore Integration Solutions
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: scrolling logo rows */}
          <div
            className="integration-rows flex flex-col gap-6 lg:col-span-6"
            role="group"
            aria-label="Supported integrations: Zoho, Skype, Java, Jira, Figma, AWS, 3CX, Microsoft Teams, Zoom, Slack, GitHub"
          >
            {INTEGRATION_ROWS.map((row, i) => (
              <MarqueeRow key={i} {...row} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .integration-rows {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 10%,
            #000 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 10%,
            #000 90%,
            transparent 100%
          );
        }
        .marquee-track {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee-left {
          animation-name: marquee-left;
        }
        .marquee-right {
          animation-name: marquee-right;
        }
        .integration-rows:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
