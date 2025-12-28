const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2025-01-05",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Attend weekly team meeting",
        date: "2025-01-02",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client follow-up",
        description: "Follow up with inactive client",
        date: "2024-12-28",
        category: "Client",
      },
    ],
  },

  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Bug fixing",
        description: "Fix login page bugs",
        date: "2025-01-06",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code review",
        description: "Review teammate’s pull request",
        date: "2025-01-03",
        category: "Review",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Documentation",
        description: "Update API documentation",
        date: "2025-01-07",
        category: "Documentation",
      },
    ],
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design mockups",
        description: "Create UI mockups for dashboard",
        date: "2025-01-04",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client feedback",
        description: "Incorporate client feedback",
        date: "2025-01-01",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Research",
        description: "Research new design trends",
        date: "2025-01-08",
        category: "Research",
      },
    ],
  },

  {
    id: 4,
    firstName: "Suresh",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database backup",
        description: "Perform weekly database backup",
        date: "2025-01-06",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Server update",
        description: "Update production server",
        date: "2025-01-02",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Security audit",
        description: "Run basic security audit",
        date: "2025-01-09",
        category: "Security",
      },
    ],
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content writing",
        description: "Write blog post for website",
        date: "2025-01-05",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO optimization",
        description: "Optimize old blog posts",
        date: "2025-01-03",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email campaign",
        description: "Launch email campaign",
        date: "2024-12-30",
        category: "Marketing",
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return {employees, admin};
}