 Next.js Fundamentals Assignment


 Features

- App Router
- Nested Layouts
- Tailwind CSS
- CSR, SSR, SSG, ISR
- Dark/Light Mode (with localStorage)
- Blog Search (Client-side)

Project Structure

app/
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
├── blog/
│   ├── layout.tsx
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
components/
├── Header.tsx
├── Footer.tsx
├── BlogSidebar.tsx
├── ClientClock.tsx
├── ThemeToggle.tsx
├── SearchBar.tsx
lib/
├── fetchPost.ts
├── fetchPosts.ts
├── fetchUser.ts
public/
styles/
├── globals.css
next.config.mjs
tailwind.config.ts
postcss.config.mjs
package.json
README.md

 Rendering Strategies

| Page | Strategy |
|------|----------|
| Home | CSR (Live Clock) |
| About | SSR (User API) |
| Blog List | SSG |
| Blog Post | ISR (revalidate 60s) |

 Setup

```bash
git clone https://github.com/your-username/nextjs-fundamentals-assignment.git
cd nextjs-fundamentals-assignment
npm install
npm run dev
