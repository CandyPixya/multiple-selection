export const menus = [
  {
    label: "Home", 
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              }              
            ]
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "My Account",
                to: "my-account"
              },
              {
                label: "Your account",
                to: "your-account"
              }
            ]
          },
        ],
      },
    ],
  },
]

export default menus