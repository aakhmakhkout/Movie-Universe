# 🎬 Movie Universe (Next.js Practice Project)

A mini Next.js project built to practice the core concepts of the App Router. The main goal of this project was **learning Next.js**, not building a production-ready movie website.

---

## Topics Covered

### Routing

Created multiple routes like

- Home
- Popular Movies
- Popular Series
- Anime

Each route is handled using the **App Router**.

---

### Dynamic Routing

Used

```
[showall]
```

to create a single page for all categories.

Examples

```
/popularmovies

/popularseries

/anime
```

Instead of creating separate pages for every category, I rendered data based on the current URL.

---

### Nested Dynamic Routing

Used

```
[showall]/[details]
```

to create a common movie details page.

Example

```
/popularmovies/interstellar

/anime/death-note

/popularseries/dark
```

Movie data is rendered according to the current URL.

---

### Catch All Routes

Used

```
[...moredetails]
```

to handle deeper nested URLs.

Examples

```
/popularmovies/interstellar/cast

/popularmovies/interstellar/gallery

/popularmovies/interstellar/reviews
```

A single page handles all additional nested routes.

---

### Layouts

Used `layout.jsx` to create shared layouts.

Implemented

- Navbar
- Sidebar

without repeating the same code on every page.

---

### Route Groups

Used Route Groups to apply different layouts.

- Home & Category pages → Navbar + Sidebar
- Movie Details → Clean layout without Navbar and Sidebar

This helped keep the UI organized while maintaining clean URLs.

---

### Metadata API

Implemented

- Dynamic Title
- Title Template
- Description

Metadata changes automatically based on the current route.

---

### Custom 404 Page

Added a custom

```
not-found.jsx
```

If a user enters an invalid movie or category URL, the custom 404 page is displayed.

---

### Static Site Generation (SSG)

Used

```jsx
generateStaticParams();
```

to pre-render known dynamic routes during build time.

---

### Incremental Static Regeneration (ISR)

Used

```jsx
export const revalidate = ...
```

to regenerate static pages after a specific interval.

---

### Dynamic Rendering

Learned and implemented

```jsx
export const dynamic = "force-dynamic";
```

Also experimented with

- `force-static`
- `error`
- `searchParams`
- `cookies()`

to understand how Next.js switches between Static and Dynamic rendering.

---

### Client & Server Components

Used both

- Server Components (default)
- Client Components (`"use client"`)

Only interactive parts like buttons and stateful components were made Client Components.

---

### Image Optimization

Used

```jsx
next / image;
```

for rendering movie posters.

---

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- JavaScript

---

## Purpose

This project was created to understand how Next.js App Router works by implementing its core features in a single project instead of learning them individually.
