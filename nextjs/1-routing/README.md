
# All types of routes/routing in nextjs with good example

## All Types of Routes/Routing in Next.js

- We'll cover all routing types in Next.js 15 (App Router), which is the modern approach.

1. Basic Routes (File-based Routing)
Routes are created by adding files inside the app directory. Each folder represents a URL segment.

app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── blog/
│   └── page.tsx          → /blog
└── contact/
    └── page.tsx          → /contact
Example: app/about/page.tsx

tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our about page</p>
    </div>
  );
}
---

### 2. Dynamic Routes

**Concept:** Use square brackets `[param]` for dynamic segments that can match any value in the URL.

**Implementation in this project:**
```
app/
└── products/
    └── [id]/
        ├── page.jsx                    → /products/:id (e.g., /products/123)
        └── reviews/
            └── [reviewid]/
                └── page.jsx            → /products/:id/reviews/:reviewid
```

**Example:** `app/products/[id]/page.jsx`
```jsx
import React from "react";

async function Page({ params }) {
  const { id } = await params;
  return <div>Product ID: {id}</div>;
}

export default Page;
```

**Nested Dynamic Route:** `app/products/[id]/reviews/[reviewid]/page.jsx`
```jsx
import React from "react";

async function ProductReviewPage({ params }) {
  const { id, reviewid } = await params;
  
  return (
    <div>
      <h2>Product ID: {id}</h2>
      <p>Review ID: {reviewid}</p>
    </div>
  );
}

export default ProductReviewPage;
```

**Key Points:**
- `[id]` in the folder name creates a dynamic segment
- Access params using `await params` in Next.js 15
- You can have multiple dynamic segments in a route
- Example URLs: `/products/laptop`, `/products/123/reviews/456`
```

## 3. **Catch-all Routes**

Use `[...param]` to catch all subsequent segments.
```
app/
└── docs/
    └── [...slug]/
        └── page.tsx      → /docs/a, /docs/a/b, /docs/a/b/c
Example: app/docs/[...slug]/page.tsx

tsx
export default function DocsPage({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path segments: {params.slug.join(' / ')}</p>
      {/* /docs/getting-started/installation → ["getting-started", "installation"] */}
    </div>
  );
}
```

## 4. **Optional Catch-all Routes**

Use `[[...param]]` to make catch-all optional (includes the base route).
```
app/
└── shop/
    └── [[...slug]]/
        └── page.tsx      → /shop, /shop/clothes, /shop/clothes/shirts
Example: app/shop/[[...slug]]/page.tsx

tsx
export default function ShopPage({ params }: { params: { slug?: string[] } }) {
  return (
    <div>
      <h1>Shop</h1>
      {params.slug ? (
        <p>Category: {params.slug.join(' > ')}</p>
      ) : (
        <p>All products</p>
      )}
    </div>
  );
}
```

## 5. **Route Groups**

Use `(folder)` to organize routes without affecting the URL structure.
```
app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx      → /about
│   └── blog/
│       └── page.tsx      → /blog
└── (shop)/
    ├── products/
    │   └── page.tsx      → /products
    └── cart/
        └── page.tsx      → /cart
```

Each group can have its own layout without affecting URLs.

## 6. **Parallel Routes**

Use `@folder` for rendering multiple pages in the same layout simultaneously.
```
app/
└── dashboard/
    ├── @analytics/
    │   └── page.tsx
    ├── @notifications/
    │   └── page.tsx
    └── layout.tsx
Example: app/dashboard/layout.tsx

tsx
export default function DashboardLayout({
  children,
  analytics,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="grid grid-cols-2 gap-4">
        <div>{analytics}</div>
        <div>{notifications}</div>
      </div>
    </div>
  );
}
```

## 7. **Intercepting Routes**

Use `(..)` conventions to intercept routes and show modals or overlays.
```
app/
├── photo/
│   └── [id]/
│       └── page.tsx      → /photo/123
└── feed/
    ├── (..)photo/
    │   └── [id]/
    │       └── page.tsx  → Intercepts /photo/123 when navigating from /feed
    └── page.tsx          → /feed
```

**Conventions:**
- `(.)` - match same level
- `(..)` - match one level up
- `(..)(..)` - match two levels up
- `(...)` - match from root

## 8. **Private Folders**

Use `_folder` to exclude folders from routing.
```
app/
├── _components/          → Not a route
│   └── Header.tsx
└── about/
    └── page.tsx          → /about
9. API Routes
Create API endpoints using route.ts files.

Example: app/api/users/route.ts

tsx
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return NextResponse.json({ 
    message: 'User created', 
    user: body 
  }, { status: 201 });
}
10. Dynamic API Routes
Example: app/api/users/[id]/route.ts

tsx
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = { id: params.id, name: 'John Doe' };
  
  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({ 
    message: `User ${params.id} deleted` 
  });
}
11. Navigation Methods
Client-side Navigation
tsx
'use client';

import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      {/* Link component (preferred) */}
      <Link href="/about">About</Link>
      <Link href="/blog/my-post">Blog Post</Link>
      
      {/* Programmatic navigation */}
      <button onClick={() => router.push('/dashboard')}>
        Go to Dashboard
      </button>
      
      <button onClick={() => router.back()}>
        Go Back
      </button>
      
      {/* Current route info */}
      <p>Current path: {pathname}</p>
      <p>Search param: {searchParams.get('query')}</p>
    </div>
  );
}
12. Middleware (Route Protection)
Example: middleware.ts (root level)

tsx
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  
  // Protect /dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
```

## Complete Project Structure Example
```
my-nextjs-app/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    → /
│   │   ├── about/
│   │   │   └── page.tsx                → /about
│   │   └── blog/
│   │       ├── page.tsx                → /blog
│   │       └── [slug]/
│   │           └── page.tsx            → /blog/:slug
│   ├── (shop)/
│   │   ├── layout.tsx
│   │   ├── products/
│   │   │   ├── page.tsx                → /products
│   │   │   └── [id]/
│   │   │       └── page.tsx            → /products/:id
│   │   └── cart/
│   │       └── page.tsx                → /cart
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    → /dashboard
│   │   ├── @analytics/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx                → /dashboard/settings
│   ├── api/
│   │   ├── users/
│   │   │   ├── route.ts                → /api/users
│   │   │   └── [id]/
│   │   │       └── route.ts            → /api/users/:id
│   │   └── auth/
│   │       └── route.ts                → /api/auth
│   ├── _components/
│   │   └── Header.tsx
│   └── layout.tsx
└── middleware.ts
