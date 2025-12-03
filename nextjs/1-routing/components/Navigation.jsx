import Link from "next/link";

function Navigation() {
  return (
    <div className="bg-blue-800 shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="flex shrink-0">
            <Link href={"/"} className="text-xl font-bold text-gray-900">
              NextJS
            </Link>
          </div>
          {/* nav-links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline font-bold">
              <Link href={"/"} className="text-xl font-bold text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
                NextJS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
