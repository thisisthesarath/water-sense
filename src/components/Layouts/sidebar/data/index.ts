import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "To be Reviewed",
        url: "/tables",
        icon: Icons.Table,
        items: [
          // {
          //   title: "Tables",
          //   url: "/tables",
          // },
        ],
      },
      {
        title: "All Alerts",
        url: "/allalerts",
        icon: Icons.Table,
        items: [
          // {
          //   title: "Tables",
          //   url: "/tables",
          // },
        ],
      },
      {
        title: "All Reports",
        url: "/allreports",
        icon: Icons.Table,
        items: [
          // {
          //   title: "Tables",
          //   url: "/tables",
          // },
        ],
      },
      {
        title: "Company Wise",
        url: "/companies",
        icon: Icons.Table,
        items: [
          // {
          //   title: "Tables",
          //   url: "/tables",
          // },
        ],
      },
      {
        title: "Notification Settings",
        url: "/notification",
        icon: Icons.Table,
        items: [
          // {
          //   title: "Tables",
          //   url: "/tables",
          // },
        ],
      },
    ],
  },
];
