# jabezdailey.com

Personal portfolio for Jabez Dailey, built with React and CSS Modules.

Live at [jabezdailey.com](https://jabezdailey.com).

## Local development

Install the root and frontend dependencies:

```bash
npm ci
npm ci --prefix frontend
```

Start the React development server at http://localhost:3000:

```bash
npm run dev
```

The site has no API, authentication, or database dependency. No environment file is required.

## Checks and production preview

From the repository root:

```bash
npm test
npm run build
npm start
```

`npm start` serves `frontend/build/` on port 3001, or the port set by `PORT`.
Unknown paths return 404; there is no server-side API or client-side routing.

Frontend commands can also be run directly from `frontend/`:

```bash
npm start
npm run build
npm test -- --watchAll=false
```

## Structure

- `frontend/src/pages/Homepage/` — responsive page layout and section switching
- `frontend/src/components/` — identity, navigation, experience, projects, and skills
- `frontend/public/` — public assets, including the resume
- `Procfile` — Heroku web process running `npm start`

Experience, Projects, and Skills are rendered from hardcoded data in their respective components.
The Debt Tracker portfolio entry links to a separate repository; this site does not host that application.

## Deployment

Heroku builds the frontend through `heroku-postbuild` and starts the static server through `Procfile`.
The generated `frontend/build/` directory is ignored by Git and rebuilt during deployment.
The same build can be hosted by any static hosting service.

The retired admin tools require no replacement service. Existing database add-ons and old
admin/auth config variables are no longer used by this application. Back up any records
that need to be retained before removing a database add-on; this code change does not delete stored data.
