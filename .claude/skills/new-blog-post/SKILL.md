---
name: new-blog-post
description: Create a new blog post for The Inspection Academy. Use when the user asks to write, add, or create a blog post, article, or blog entry.
---

# Creating a New Blog Post

## File Structure

Each blog post is a separate TypeScript file in `src/data/blog-posts/`. The slug becomes the filename.

```
src/data/blog-posts/
  index.ts                              # Interface, array, helpers (DO NOT overwrite)
  questions-from-a-potential-student.ts  # One file per post
  comparing-home-inspector-schools.ts
  ...
```

## Step-by-Step Process

### 1. Create the post file

Create `src/data/blog-posts/<slug>.ts` following this template:

```ts
import type { BlogPost } from './index';

export const myPostName: BlogPost = {
  slug: 'my-post-slug',
  title: 'Post Title',
  excerpt: 'One or two sentence summary for listing cards and meta descriptions.',
  content: `
## First Section Heading

Paragraph text here. Use **bold** and *italic* inline.

### Subsection

- Bullet point one
- Bullet point two

![Descriptive alt text](/images/blog/<slug>/image-name.jpg)

More paragraph text.
    `,
  category: 'Choosing a School',  // or 'Industry Insights', 'Education', 'Learning Science', 'Exam Prep'
  date: '2026-02-10',             // ISO date string, YYYY-MM-DD
  author: 'The Inspection Academy',
  readTime: '5 min read',
  image: 'https://theinspectionacademy.com/images/blog/<slug>/hero-image.jpg',  // Optional, for OG/social
  tags: ['tag1', 'tag2'],
};
```

### 2. Register the post in index.ts

Edit `src/data/blog-posts/index.ts`:
- Add an import for the new post's export
- Add it to the `blogPosts` array (newest posts go first)

### 3. Add images

Create a directory named after the slug under `public/images/blog/`:

```
public/images/blog/<slug>/
  hero-image.jpg
  other-image.jpg
```

- All images for a post live in its own slug subdirectory
- Never put images loose in `public/images/blog/` — always use a subdirectory
- Reference images in content markdown as `/images/blog/<slug>/filename.jpg`
- If the post has an OG/social image, set the `image` field to the full URL: `https://theinspectionacademy.com/images/blog/<slug>/filename.jpg`

### 4. Verify

Run `npm run build` and confirm:
- The new route appears under `/blog/[slug]`
- All static pages generate successfully
- No TypeScript errors

## Markdown Renderer Limitations

The blog uses a custom renderer in `src/app/(main)/blog/[slug]/page.tsx`, NOT a full markdown library. Only these elements are supported:

| Syntax | Renders as |
|--------|-----------|
| `## Heading` | `<h2>` |
| `### Heading` | `<h3>` |
| `- item` | Unordered list (`<ul>`) |
| `**bold**` | `<strong>` |
| `*italic*` | `<em>` |
| `![alt](src)` | `<figure>` with `next/image` |
| Plain text lines | `<p>` paragraphs |

**Not supported:** `# H1`, `#### H4+`, ordered lists (`1.`), links (`[text](url)`), inline code, code blocks, blockquotes, tables, horizontal rules.

If you need unsupported syntax, you must extend `renderContent()` in the page component first.

## Conventions

- **Author** is always `The Inspection Academy`
- **Export name** uses camelCase matching the slug (e.g., slug `my-great-post` → export `myGreatPost`)
- **Content** starts with `## ` heading (never `# `) since the page component renders the title as `<h1>`
- **Newest posts first** in the `blogPosts` array in `index.ts`
- **No changes needed** in consumer files (`blog/page.tsx`, `sitemap.ts`, `feed.xml/route.ts`, `blog/[slug]/page.tsx`) — they all import from `@/data/blog-posts` which resolves to `index.ts`

## Existing Categories

Use an existing category when possible to enable "Related Articles" matching:
- `Choosing a School`
- `Industry Insights`
- `Education`
- `Learning Science`
- `Exam Prep`
