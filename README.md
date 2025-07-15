# Mobile Showcase Web Application

A full-stack, modern web app built with **Next.js 15** and **React 19** for browsing, sharing, and viewing detailed information about mobile phones. The project features a responsive UI, image upload, SQLite database integration, and community engagement.

---

## Features

- **Mobile Catalog**: Browse a grid of mobile phones with images, summaries, and creator info.
- **Mobile Details**: View detailed specifications and information for each mobile, including creator contact.
- **Share Mobile**: Submit new mobiles with title, summary, specifications, and image upload via a user-friendly form.
- **Image Upload & Preview**: Upload images for mobiles and preview them before submission.
- **Community Page**: Discover perks, join the community, and connect with other users.
- **Contact Page**: Contact form with embedded Google Map for feedback and inquiries.
- **Error & Loading States**: Custom error and loading screens for improved user experience.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **SQLite Database**: Stores all mobile data securely and efficiently.
- **Custom Styling**: Uses CSS modules for scoped, maintainable styles.
- **Animations**: Framer Motion for smooth UI transitions.
- **Security**: XSS protection for user input.
- **Active Navigation**: Highlighted navigation links for better UX.

---

## Tech Stack

- **Frontend**: Next.js 15, React 19
- **Database**: SQLite (via better-sqlite3)
- **Styling**: CSS Modules
- **Utilities**: slugify, xss, framer-motion
- **Image Handling**: next/image, custom image picker component

---

## Project Structure

```
src/
  app/
    mobiles/           # Mobile grid, share form, detail pages
    community/         # Community perks and info
    contact/           # Contact form and map
    [mobileSlug]/      # Dynamic mobile detail pages
    error.js           # Custom error page
    not-found.js       # Custom 404 page
    layout.js          # Root layout and header
    page.jsx           # Home page
  components/
    header/            # Navbar and logo
    images/            # Image slideshow for homepage
    mobile/            # Mobile grid, item, image picker
    nav-link.jsx       # Active link highlighting
  lib/
    mobiles.js         # Database queries and image saving
    actions.js         # Server actions for sharing mobiles
initdb.js              # Script to initialize database with sample data
```

---

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Initialize the database**:
   ```bash
   node initdb.js
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- **Browse Mobiles**: Go to `/mobiles` to view all mobiles.
- **View Details**: Click "View Details" on any mobile to see full specs and creator info.
- **Share Mobile**: Go to `/mobiles/share` to add a new mobile with image and details.
- **Community**: Visit `/community` to see perks and join the community.
- **Contact**: Use `/contact` for feedback or inquiries.

---

## Customization

- **Add new mobiles**: Use the "Share your mobile" form.
- **Update styles**: Edit CSS modules in `src/components/`.
- **Change database**: Modify or extend the schema in `initdb.js`.
- **Add new pages**: Create new folders/files in `src/app/`.

---

## Deployment

You can deploy this app on [Vercel](https://vercel.com/) or any platform supporting Next.js and Node.js.

---

## License

This project is licensed under the MIT License.

---

## Credits

- Built with [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- Icons and images from [Flaticon](https://flaticon.com) and [Unsplash](https://unsplash.com)
