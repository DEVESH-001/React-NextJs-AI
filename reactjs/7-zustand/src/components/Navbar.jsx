import { useAppStore } from "../store/appStore";

function Navbar() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const logout = useAppStore((state) => state.logout);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <nav>
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <>
          <span>Hi, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>Guest</>
      )}
    </nav>
  );
}

export default Navbar;
