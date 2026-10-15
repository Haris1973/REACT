const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page with email and password fields.",
        taskDate: "2026-10-14",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Responsiveness",
        taskDescription: "Fix the mobile navigation menu and improve the tablet layout.",
        taskDate: "2026-10-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Project Structure",
        taskDescription: "Set up the folders and reusable components for the project.",
        taskDate: "2026-10-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit UI Design",
        taskDescription: "Submit the initial dashboard design for review before the deadline.",
        taskDate: "2026-10-11",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard Cards",
        taskDescription: "Create reusable cards to display employee statistics.",
        taskDate: "2026-10-16",
        category: "Frontend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop API Endpoints",
        taskDescription: "Create REST API endpoints for employee records.",
        taskDate: "2026-10-14",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Set Up Node.js",
        taskDescription: "Initialize the Node.js project and configure Express.",
        taskDate: "2026-10-09",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Validate User Input",
        taskDescription: "Add validation for email, password, and required fields.",
        taskDate: "2026-10-15",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Complete API Documentation",
        taskDescription: "Document all API endpoints and their expected responses.",
        taskDate: "2026-10-12",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Login API",
        taskDescription: "Test login requests and handle invalid credentials.",
        taskDate: "2026-10-17",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Product Page",
        taskDescription: "Build a product listing page with reusable product cards.",
        taskDate: "2026-10-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Product Images",
        taskDescription: "Optimize product images for faster page loading.",
        taskDate: "2026-10-10",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add a search feature to filter products by name.",
        taskDate: "2026-10-16",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Category Filters",
        taskDescription: "Allow users to filter products by category.",
        taskDate: "2026-10-18",
        category: "Frontend"
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
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the main application components.",
        taskDate: "2026-10-15",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Existing Code",
        taskDescription: "Review the codebase and identify potential improvements.",
        taskDate: "2026-10-09",
        category: "Code Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Verify dashboard functionality across different browsers.",
        taskDate: "2026-10-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare Test Report",
        taskDescription: "Submit a report covering failed tests and unresolved bugs.",
        taskDate: "2026-10-12",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Check Form Validation",
        taskDescription: "Test required fields and error messages on all forms.",
        taskDate: "2026-10-18",
        category: "Quality Assurance"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Profile Page",
        taskDescription: "Create an employee profile page with editable information.",
        taskDate: "2026-10-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer Component",
        taskDescription: "Build a reusable footer component for the application.",
        taskDate: "2026-10-08",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Notifications",
        taskDescription: "Display notifications when new tasks are assigned.",
        taskDate: "2026-10-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Profile Styling",
        taskDescription: "Improve profile page spacing and responsive styling.",
        taskDate: "2026-10-12",
        category: "UI/UX"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Integrate Dashboard",
        taskDescription: "Connect the employee profile with the main dashboard.",
        taskDate: "2026-10-18",
        category: "Integration"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin1@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('Admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    // const data = localStorage.getItem('employees')
    const emp = JSON.parse(localStorage.getItem('employees'))
    const AdminData = JSON.parse(localStorage.getItem('Admin'))

    return {emp , AdminData}
}
