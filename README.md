# 🧑‍💼 EMS – Employee Management System (React)

EMS is a robust frontend Employee Management System built with **React** and the **Context API**. The application features a role-based architecture where an **Admin** can oversee the workforce by creating and assigning tasks, while **Employees** can manage their personal task lifecycles in real-time.

To ensure a lightweight, backend-free setup, all data is persisted using **Browser Local Storage**.

---

## 🔑 Roles & Permissions

### 👨‍💼 Admin
* **Dashboard Access:** High-level overview of the entire organization.
* **Task Management:** Create and assign new tasks to specific employees.
* **Tracking:** Monitor real-time task statistics across the team:
  * 🆕 New Tasks
  * ⚡ Active Tasks
  * ✅ Completed Tasks
  * ❌ Failed Tasks

### 👩‍💻 Employee
* **Personal Dashboard:** View a personalized list of assigned work.
* **Task Interaction:** Accept incoming tasks and update their status.
* **Lifecycle Control:** Mark tasks as **Completed** or **Failed** to update the global system state.

---

## ✨ Features
* **Role-Based UI:** Conditional rendering of dashboards based on user credentials.
* **Global State Management:** Powered by **React Context API** for seamless data flow.
* **Persistent Storage:** Data persists across browser refreshes via the **Local Storage API**.
* **Task Lifecycle:** Functional transitions through *New → Active → Completed/Failed* states.
* **Modern Interface:** Clean, dark-themed UI built with **Tailwind CSS**.
* **Vite Powered:** Optimized for a fast development experience.

---

## 🧰 Tech Stack
* **Frontend:** React.js
* **Build Tool:** Vite
* **State Management:** Context API
* **Styling:** Tailwind CSS
* **Storage:** Local Storage

---

## 📂 Folder Structure
```text
ems/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── other/
│   │   │   ├── AllTask.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   ├── Header.jsx
│   │   │   └── TaskListNumbers.jsx
│   │   └── TaskList/
│   │       ├── AcceptTask.jsx
│   │       ├── CompleteTask.jsx
│   │       ├── FailedTask.jsx
│   │       ├── NewTask.jsx
│   │       └── TaskList.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── utils/
│   │   └── localStorage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
---

## 🚀 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/arpit-shriv/Employee-Management-System.git]
    ```

2.  **Navigate to project directory**:
    ```bash
    cd Employee-Management-System
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```

---

## 🔐 Demo Credentials

 (Based on initial data from localStorage.jsx)

**Admin**

* Email: admin@example.com

* Password: 123

**Employee**

* Email: employee1@example.com

* Password: 123

---

## 🧪 Application Logic

* **Authentication:** Managed via **AuthProvider.jsx**. User roles are identified during login and saved to **localStorage**.

* **Data Initialization:** The **localStorage.jsx** utility checks for existing data; if none is found, it populates the store with default employee and admin data.

* **State Sync:** When an employee updates a task, the changes are updated in the Context state and synced back to **localStorage** to ensure the Admin view reflects the changes instantly.
    
---

## 🔮 Future Enhancements

* **[] Backend Integration:** Migration to Node.js and MongoDB.

* **[] Secure Auth:** Implementation of JWT-based authentication.

* **[] Analytics:** Dashboard charts for performance tracking.

* **[] Deadlines:** Task due dates and reminder notifications.

* **[] Responsive Design:** Full optimization for mobile devices.
    
---

## 👤 Author
**Arpit Shrivastava**

* GitHub: [@arpit-shriv](https://github.com/arpit-shriv)
* LinkedIn: [Arpit Shrivastava](https://www.linkedin.com/in/arpit-shriv/)

---

*⭐ If you found this project helpful, consider giving it a star!*
