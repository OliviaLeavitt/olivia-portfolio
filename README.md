# Olivia Portfolio

My personal software engineering portfolio, built with React, TypeScript, and Vite.
It introduces my work and links to selected projects with their implementation
status and course/fork attribution.

## Local development

Requires Node.js 24 LTS and npm.

~~~sh
npm ci
npm run dev
~~~

Open the Local URL printed by Vite, usually http://localhost:5173/.

## Production build

~~~sh
npm run build
npm run preview
~~~

The build checks TypeScript and writes the static website to `dist/`.
The preview command serves that build locally.

## Independent project repositories

- [AI Audio Transcriber](https://github.com/OliviaLeavitt/ai-audio-transcriber)

- [Livletics](https://github.com/OliviaLeavitt/livletics)
- [Multiplayer Chess](https://github.com/OliviaLeavitt/multiplayer-chess)
- [MealMate Recipes](https://github.com/OliviaLeavitt/mealmate-recipes)
- [Community Resource Finder](https://github.com/OliviaLeavitt/community-resource-finder)
- [JWT Pizza Web](https://github.com/OliviaLeavitt/jwt-pizza-web) and [API](https://github.com/OliviaLeavitt/jwt-pizza-api)
- [Refresh Token Rotation Demo](https://github.com/OliviaLeavitt/refresh-token-rotation-demo)

The portfolio and Livletics have separate repositories and build processes.
`amplify.yml` configures Node 24, installation with `npm ci`, and a static
production build with `npm run build`. See [deployment settings](DEPLOYMENT.md)
for the domain plan and verification steps. No backend is required for this portfolio.
