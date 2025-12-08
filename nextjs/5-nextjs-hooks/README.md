# NEXTJS-Hooks

1. Caching & Fetch API [https://nextjs.org/docs/15/app/api-reference/functions/fetch]

- useful for data fetching in Next.js applications, especially when dealing with server-side rendering (SSR) and static site generation (SSG).

2. notFound [https://nextjs.org/docs/app/api-reference/functions/not-found]

- used to handle scenarios where a requested resource is not found, allowing developers to return a 404 page or redirect users appropriately.

3. useParams [https://nextjs.org/docs/app/api-reference/functions/use-params]

- a hook that allows you to access the dynamic parameters of a route in Next.js applications, making it easier to work with dynamic routes and extract parameters from the URL. example: `/posts/[id]` where `id` is a dynamic parameter.

4. usePathname [https://nextjs.org/docs/app/api-reference/functions/use-pathname]

- a hook that provides the current pathname of the application, allowing developers to access and manipulate the URL path easily. example: if the current URL is `/posts/123`, `usePathname` would return `/posts/123`.

5. useSearchParams [https://nextjs.org/docs/app/api-reference/functions/use-search-params]

- dynamic filtering
- deep linking
- pagination & sorting
- multi_value_params: tags=js&tags=react

6. useRouter [https://nextjs.org/docs/app/api-reference/functions/use-router]

- a hook that provides access to the Next.js router object, allowing developers to programmatically navigate between pages, access query parameters, and manage the browser history.

- before: home -> login ->prodcutPage <-current

7. useRedirect [https://nextjs.org/docs/app/api-reference/functions/use-redirect]

- a hook that allows you to perform client-side redirects in Next.js applications, enabling developers to navigate users to different pages or routes based on certain conditions or events.
