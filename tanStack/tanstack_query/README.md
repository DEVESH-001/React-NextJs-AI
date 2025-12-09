# TanStack_Query

1. handles data fetching
2. provides caching(no-refresh everytime)
3. manages loading, error, success states
4. supports optimistic updates
5. offers retry logic

- to setup 

1. wrap the app with QueryClientProvider
2. create a QueryClient instance
3. use useQuery and useMutation hooks for data operations
4. configure caching and refetching options as needed

- query ---> fetching
- mutation ---> put, patch, post, delete

