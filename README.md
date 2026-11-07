# 🏠 House Reset — To-Do App

A lightweight task management application built with **React, TypeScript, and Google Sheets**. House Reset helps users organize household responsibilities, track completed tasks, and manage daily activities through a simple web interface.

The application uses Google Sheets as a lightweight database, Google Apps Script as its backend API, and GitHub Pages for frontend hosting.

## 🚀 Features

- **Create Tasks** — Add new household tasks.
- **View Tasks** — Display tasks stored in Google Sheets.
- **Complete Tasks** — Mark tasks as completed or incomplete.
- **Delete Tasks** — Remove tasks from the list.
- **Persistent Storage** — Store task information using Google Sheets.
- **Responsive Interface** — Access the application through a web browser.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| TypeScript | Type-safe application logic |
| Vite | Development server and build tooling |
| Google Sheets | Task data storage |
| Google Apps Script | Backend API |
| GitHub | Version control |
| GitHub Pages | Application hosting |

## 🏗️ Application Architecture

The application follows a lightweight client-server architecture.

```text
          User / Browser
                |
                v
       React + TypeScript
          (GitHub Pages)
                |
                | HTTP Requests
                v
        Google Apps Script
           (Web API)
                |
                | Read / Write
                v
           Google Sheets
          (Task Database)
```

**How it works:**

1. The user interacts with the React frontend.
2. The frontend sends requests to the deployed Google Apps Script web application.
3. Google Apps Script processes requests using `doGet()` and `doPost()`.
4. Google Sheets stores the task information.
5. The frontend retrieves updated task data and refreshes the interface.

## 📁 Project Structure

A typical Vite + React + TypeScript project structure:

```text
house-reset/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*The structure above is illustrative and may differ from the repository.*

## ⚙️ Getting Started

### Prerequisites

Ensure the following are installed:

- Node.js
- npm
- Git

You will also need a Google account to configure Google Sheets and Apps Script.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/house-reset.git
cd house-reset
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically:

```text
http://localhost:5173
```

## 📊 Google Sheets Backend Setup

### Step 1: Create a Spreadsheet

Create a Google Sheets spreadsheet to store the application's tasks.

A basic task schema could include:

| ID | Task | Completed |
|---|---|---|
| 1 | Clean kitchen | FALSE |
| 2 | Vacuum living room | TRUE |
| 3 | Organize garage | FALSE |

The exact column structure must match the Apps Script implementation.

### Step 2: Configure Google Apps Script

From your spreadsheet:

1. Select **Extensions → Apps Script**.
2. Create the backend functions.
3. Implement `doGet(e)` to retrieve tasks.
4. Implement `doPost(e)` to process task changes.
5. Save the project.

### Step 3: Deploy the Web Application

1. Select **Deploy → New deployment**.
2. Choose **Web app**.
3. Configure execution permissions and access.
4. Deploy the application.
5. Copy the generated web app URL.

**Security note:** Do not expose private spreadsheet data or deploy a publicly writable endpoint without appropriate safeguards.

### Step 4: Connect the Frontend

Configure the React application to communicate with the deployed Apps Script endpoint.

The exact configuration depends on how API requests are implemented in the project.

## 🌐 Deploying to GitHub Pages

### Step 1: Configure Vite

For a project hosted at:

```text
https://YOUR_USERNAME.github.io/house-reset/
```

Configure the repository base path in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/house-reset/',
});
```

### Step 2: Build the Application

```bash
npm run build
```

Vite generates a production-ready `dist` directory.

### Step 3: Publish to GitHub Pages

Deploy the contents of `dist` using a GitHub Actions workflow or another supported GitHub Pages deployment method.

In the repository:

1. Open **Settings → Pages**.
2. Configure the appropriate deployment source.
3. Publish the application.
4. Verify the deployed site.

## 🧪 Testing

The following functionality should be verified:

- [ ] Application loads successfully.
- [ ] Existing tasks appear.
- [ ] New tasks can be created.
- [ ] Tasks can be marked complete.
- [ ] Completed tasks can be reopened.
- [ ] Tasks can be deleted.
- [ ] Changes persist after refreshing the browser.
- [ ] The application works on GitHub Pages.

## 🔮 Future Improvements

Potential enhancements include:

- Task categories and priority levels
- Due dates and reminders
- Search and filtering
- Task completion statistics
- Improved loading and error handling
- Automated testing
- User authentication
- Migration to a dedicated database and ASP.NET Core API

## 📚 What I Learned

This project demonstrates practical experience with:

- Building interactive interfaces using React and TypeScript
- Managing frontend application state
- Integrating a frontend with an external API
- Using Google Apps Script as a lightweight backend
- Performing data operations with Google Sheets
- Managing source code using Git and GitHub
- Building and deploying a web application using Vite and GitHub Pages

## 👨‍💻 Project Status

**Status:** Initial implementation complete; future enhancements planned.

## 📄 License

No license has been specified. All rights are reserved unless a license is added to the repository.
