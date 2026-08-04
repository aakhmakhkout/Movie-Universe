# 🎬 Movie Universe V2

A modern movie and series discovery platform built with **Next.js App Router** and **TMDB API**.

> 🚧 This project is currently under development. The section below documents the progress made throughout the project.

---

# 🛠 Tech Stack

- Next.js 16
- React 19
- Tailwind CSS
- TMDB API
- Lucide React

---

# 📌 Updates

---

## ✅ Update 1 - Project Setup

### Completed

- Initialized the Next.js project.
- Configured the project folder structure.
- Connected the TMDB API.
- Added environment variables for API security.
- Created reusable API helper functions.
- Created image helper functions for posters and backdrops.
- Configured `next/image` with remote image patterns.
- Solved TMDB DNS and image loading issues.
- Successfully fetched movie and series data from TMDB.

### API Endpoints Added

- Trending Movies
- Popular Movies
- Top Rated Movies
- Upcoming Movies
- Genre Based Movies
- Trending Series
- Popular Series
- Genre List

### Learned

- Using server-side data fetching in Next.js.
- Keeping API keys secure with server environment variables.
- Difference between `<img>` and Next.js `<Image>`.

---

## ✅ Update 2 - Homepage UI

### Completed

- Designed the homepage layout. (data = tmdb)
- Created the left sidebar navigation.
- Added the top search bar.
- Added the user profile section.
- Built the dynamic hero banner.
- Added dynamic movie details.
- Added genre badges.
- Added IMDb rating section.
- Added "Watch Trailer" button.
- Added previous and next navigation buttons.
- Added hero pagination indicators.
- Added Continue Watching section. (data = hardcoded)
- Added Popular Movies section. (data = hardcoded)
- Added Popular Series section. (data = hardcoded)

### UI Improvements

- Improved spacing and layout hierarchy.
- Added borders around major sections.
- Enhanced hero banner appearance.
- Applied responsive layout improvements.

### Learned

- Dynamic background rendering.
- Passing server data into client components.
- Managing UI state using React.

---

## ✅ Update 3

### Completed

- Added dynamic rendering for all homepage content sections.
- Created a centralized `categories` data file to manage homepage sections.
- Organized categories with labels, paths, and fetched data.
- Implemented parallel data fetching using `Promise.all()` for improved performance.
- Added TMDB data for:
  - Trending Movies
  - Top Rated Movies
  - Upcoming Movies
  - Trending Series
  - Top Rated Series
  - Airing Series
  - Popular Anime
  - Top Rated Anime
- Returned all fetched data as a single object for easier access.
- Connected fetched data with the `categories` configuration.
- Rendered movie and series cards dynamically using `map()`.
- Limited each section to the first 9 items using `slice()`.
- Generated poster image URLs using the reusable `getPoster()` helper function.
- Displayed posters using the optimized Next.js `<Image />` component.
- Added dynamic routing paths for each category card.
- Applied hover effects and responsive card styling.

### Performance Improvements

- Replaced sequential API requests with parallel fetching using `Promise.all()`.
- Reduced overall loading time when fetching multiple independent datasets.
- Centralized homepage data management for better scalability and maintainability.

### Learned

- Practical implementation of `Promise.all()` in a real-world project.
- Returning multiple API responses as a single object instead of relying on array indexes.
- Structuring reusable configuration files for dynamic UI rendering.
- Managing multiple data sources through a centralized data layer.
- Using helper functions to generate reusable image URLs across the project.

---

## ✅ Update 4

### Completed

- ...

### UI Improvements

- ...

### Learned

- ...

---

# 📷 Preview

> Screenshots will be added as development progresses.

---

# 🚀 Run Locally

```bash
git clone <repository-url>
```
