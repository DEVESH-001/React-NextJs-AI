import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md ${
        isDark ? "bg-gray-900" : "bg-white"
      } p-4`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`cursor-pointer px-4 p-2 rounded-lg font-medium mr-4 mt-2 bg-blue-600 text-white`}
            >
              <span className={`mr-2`}>{section.icon}</span> {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center text-white mb-12 ">
          <h1 className="text-2xl font-bold">Advanced Props in React</h1>
          <p>
            A comprehensive guide to using advanced props in React components.
          </p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
