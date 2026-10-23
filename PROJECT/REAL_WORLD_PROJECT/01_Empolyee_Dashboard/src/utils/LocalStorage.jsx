const employees = [
  {
    id: 1,
    name: "Ali Ahmed",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page with email and password fields.",
        taskDate: "2026-10-16",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Responsiveness",
        taskDescription: "Fix the mobile navigation menu and improve the tablet layout.",
        taskDate: "2026-10-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Project Structure",
        taskDescription: "Set up folders and reusable components for the project.",
        taskDate: "2026-10-14",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    name: "Usman Khan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop API Endpoints",
        taskDescription: "Create REST API endpoints for employee records.",
        taskDate: "2026-10-16",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Set Up Node.js",
        taskDescription: "Initialize the Node.js project and configure Express.",
        taskDate: "2026-10-13",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Validate User Input",
        taskDescription: "Add validation for email, password, and required fields.",
        taskDate: "2026-10-18",
        category: "Security"
      }
    ]
  },
  {
    id: 3,
    name: "Hamza Malik",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Product Page",
        taskDescription: "Build a product listing page with reusable product cards.",
        taskDate: "2026-10-16",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Product Images",
        taskDescription: "Optimize product images for faster page loading.",
        taskDate: "2026-10-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Product Layout",
        taskDescription: "Correct product card alignment on smaller screens.",
        taskDate: "2026-10-12",
        category: "Bug Fix"
      }
    ]
  },
  {
    id: 4,
    name: "Ahmed Raza",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the main application components.",
        taskDate: "2026-10-17",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Existing Code",
        taskDescription: "Review the codebase and identify potential improvements.",
        taskDate: "2026-10-14",
        category: "Code Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Verify dashboard functionality across different browsers.",
        taskDate: "2026-10-18",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    name: "Bilal Hussain",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Profile Page",
        taskDescription: "Create an employee profile page with editable information.",
        taskDate: "2026-10-16",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer Component",
        taskDescription: "Build a reusable footer component for the application.",
        taskDate: "2026-10-13",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Notifications",
        taskDescription: "Display notifications when new tasks are assigned.",
        taskDate: "2026-10-18",
        category: "Development"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Mehar Haris",
    email: "admin1@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("Admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const emp = JSON.parse(localStorage.getItem("employees"));
  const Admin = JSON.parse(localStorage.getItem("Admin"));

  return { emp, Admin};
};