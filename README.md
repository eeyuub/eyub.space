# Ayoub Baraoui Portfolio
Ayoub Baraoui Portfolio is an Astro template built with Astro 5.7, React 19, and Tailwind CSS 4.

> Note: This project is forked from https://github.com/iann-mathaiya/nikola-tesla

![Ayoub Baraoui Astro Portfolio](/public/eyub.space-fullscreen-min.png "Ayoub Baraoui Portfolio")

## Getting Started
Clone Repository
```sh
git clone https://github.com/eeyuub/eyub.space.git
```

Checkout p-01 branch
```sh
cd eyub.space
git checkout p-01
```

Install Dependencies
```sh
pnpm install
```

Development
```sh
pnpm run dev
```

Build
```sh
pnpm run build
```

Preview
```sh
pnpm run preview
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.ico
│   └── favicon.svg
│   └── resume.json
│   └── eyub.space-fullscreen-min.png
├── src/
│   ├── actions/
│   │   └── # Astro server actions
│   ├── assets/
│   │   └── # Images that are transformed, optimized and bundled by Astro 
│   ├── components/
│   │   └── # Astro and React components
│   ├── content/
│   │   └── articles/
│   │       └── # Markdown content collection for blog
│   ├── layouts/
│   │   └── RootLayout.astro
│   │   └── InfoLayout.astro
│   ├── lib/
│   │   └── utils.ts
│   └── pages/
│   │   └── blog/
│   │   │   └── index.astro
│   │   │   └── [...slug].astro
│   │   └── about.astro
│   │   └── contact.astro
│   │   └── index.astro
│   │   └── projects.astro
│   └── styles/
│   │   └── global.css
└── .gitignore
└── astro.config.mjs
└── package.json
└── tsconfig.json
```

## Deployment
The site is configured for deployment on Vercel, but with slight modifications it can be deployed to any hosting service.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## ⛔️ Changes
The template also uses [React Paper Shaders](https://github.com/paper-design/shaders). 
The Paper Team will be publishing [breaking changes](https://github.com/paper-design/shaders?tab=readme-ov-file#getting-started) to the Shaders library under 0.0.x versioning so check back to get updates when they release Paper Shaders v1.