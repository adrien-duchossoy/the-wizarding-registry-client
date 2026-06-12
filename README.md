<p align="center">
  <img src="public/wizarding-registry-logo.png" alt="The Wizarding Registry" width="300" />
</p>

<h1 align="center">The Wizarding Registry — Client</h1>

<p align="center">
  A React application for managing the official registry of wizards and their societies.
  <br />
  Built as a full-stack project at Ironhack.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white" alt="React Router 7" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Related Repository](#related-repository)

---

## About the Project

The Wizarding Registry is the official record-keeping application of the Wizarding World. Citizens can browse registered wizards, vote for their society affiliation, and follow the latest news through the **Daily Prophet** feed — which updates in real time as new wizards and societies are added.

This repository contains the **frontend client**. It communicates with a separate REST API (see [Related Repository](#related-repository)).

---

## Features

- **Animated intro** — immersive loader screen on first visit
- **Daily Prophet feed** — homepage styled as a wizarding newspaper, displaying the latest registry events
- **Wizard list** — browse all registered wizards with filters by house, blood status, and society
- **Wizard detail** — full profile with a vote breakdown per society
- **Voting system** — cast one vote per wizard to influence their society assignment (persisted in `localStorage`)
- **Create & edit wizards** — add new wizards to the registry or update existing records
- **Society management** — create new societies and view their member details
- **Error page** — custom 404 handling

---

## Tech Stack

| Layer       | Technology                              |
|-------------|-----------------------------------------|
| Framework   | [React 19](https://react.dev)           |
| Build tool  | [Vite 8](https://vitejs.dev)            |
| Routing     | [React Router DOM 7](https://reactrouter.com) |
| HTTP client | [Axios](https://axios-http.com)         |
| Linting     | ESLint                                  |
| Deployment  | [Vercel](https://vercel.com)            |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- The backend API running locally (see [Related Repository](#related-repository))

### Installation

```bash
git clone https://github.com/adrien-duchossoy/the-wizarding-registry-project-front.git
cd the-wizarding-registry-project-front
npm install
```

### Environment Variables

Create a `.env` file at the root of the project:

```env
VITE_SERVER_URL=http://localhost:5005
```

> Update the URL if your backend runs on a different port.

### Running the App

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview
```

The app will be available at `http://localhost:5173`.

---

## Project Structure

```
src/
├── api/            # Axios API calls (events)
├── assets/         # Static images and videos
├── components/     # Reusable UI components
│   ├── ConfirmModal.jsx
│   ├── Filters.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── WizardCard.jsx
│   ├── WizardDetailCard.jsx
│   └── WizardForm.jsx
├── pages/          # Route-level page components
│   ├── Homepage.jsx          # Daily Prophet feed
│   ├── WizardListPage.jsx    # Filterable wizard list
│   ├── WizardDetailPage.jsx  # Wizard profile & votes
│   ├── NewWizardPage.jsx
│   ├── EditWizardPage.jsx
│   ├── NewSocietyPage.jsx
│   ├── SocietyDetailsPage.jsx
│   └── ErrorPage.jsx
├── styles/         # Component-scoped CSS files
└── utils/          # Helper functions
```

---

## Routes

| Path                        | Component              | Description                        |
|-----------------------------|------------------------|------------------------------------|
| `/`                         | `LoaderPreviewPage`    | Animated intro / splash screen     |
| `/home`                     | `Homepage`             | Daily Prophet news feed            |
| `/wizards`                  | `WizardListPage`       | Full wizard list with filters      |
| `/wizards/:wizardId`        | `WizardDetailPage`     | Wizard profile & society votes     |
| `/wizards/create`           | `NewWizardPage`        | Form to register a new wizard      |
| `/wizards/:wizardId/edit`   | `EditWizardPage`       | Form to edit an existing wizard    |
| `/societies/create`         | `NewSocietyPage`       | Form to create a new society       |
| `/societies/:societyId`     | `SocietyDetailsPage`   | Society details and members        |
| `*`                         | `ErrorPage`            | 404 fallback                       |

---

## Related Repository

This client requires the backend API to be running:

> **[the-wizarding-registry-project — Server](https://github.com/adrien-duchossoy/the-wizarding-registry-project-back)**

The API exposes the following resources:

- `GET / POST /wizards` — wizard registry
- `GET / PATCH /wizards/:id` — single wizard
- `GET / POST /societies` — society registry
- `GET /societies/:id` — single society
- `GET / POST /events` — Daily Prophet event feed
