# 🚀 Full Stack Job Portal

A modern, full-stack job portal built with React, Vite, Supabase, Clerk, and Tailwind CSS. It allows candidates to apply for jobs and recruiters to post and manage job listings in a secure, responsive, and user-friendly environment.

![Banner](./public/banner.jpeg)

---

## 🔧 Tech Stack

**Frontend:**

- [React 19](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) with `tailwind-variants` & `tailwindcss-animate`
- [ShadCN/UI](https://ui.shadcn.dev/) components
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://github.com/colinhacks/zod) validation
- [Clerk](https://clerk.dev/) for authentication and role-based access
- [Embla Carousel](https://www.embla-carousel.com/) for smooth slideshows
- [React Spinners](https://www.davidhu.io/react-spinners/) for loaders
- [Lucide Icons](https://lucide.dev/icons/) for beautiful UI icons

**Backend & Auth:**

- [Supabase](https://supabase.io/): used as backend and database (PostgreSQL)
- [Row-Level Security (RLS)](https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security) with Supabase for secure access
- Clerk + Supabase JWT integration

**Others:**

- ESLint for linting
- PostCSS & autoprefixer
- Country-State-City selector
- Markdown editor via `@uiw/react-md-editor`

---

## 🔐 Features

### 👤 Candidate:

- Browse and apply to jobs
- Save & view favorite jobs
- Track application status (`interviewing`, `rejected`,`hired` etc.)
- Auto-filled user data from Clerk

### 🧑‍💼 Recruiter:

- Post new jobs with detailed descriptions
- View all posted jobs
- Review candidate applications
- Update job status (e.g., open/closed)

---

## 📦 Installation

```bash
git clone https://github.com/sajal-pakira/FullStack-Job-Portal.git
cd FullStack-Job-Portal
npm install
```

## 🧪 Environment Variables

Create a .env file in the root directory :-

```bash
VITE_SUPABASE_URL=https://<your-supabase-project>.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

```

## 🗃️ Folder Structure

Create a .env file in the root directory :-

```bash
├── public/
│   ├── logo.png
│   └── companies/
├── src/
│   ├── api/                   # Supabase queries
│   ├── components/    # UI components (JobCard, Header, ProtectedRoute etc.)
│   ├── hooks/              # Custom hooks (useFetch, useDebounce etc.)
│   ├── layouts/            # App layout
│   ├── pages/              # Route pages
│   ├── styles/              # Tailwind and custom CSS
│   └── utils/                # Helper utilities


```

**🔒 Authentication**

- Clerk handles sign-up, login, user profile, and role management.
- Roles are determined via user.unsafeMetadata.role (either "candidate" or "recruiter").

**🛠️ Supabase**

- Supabase used for :-
  - Storing jobs and applications
  - Row-Level Security (RLS) for scoped access
  - Resume storage using Supabase Storage
