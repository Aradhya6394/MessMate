import TopNavbar from "../components/layout/TopNavbar";
import NavigationTabs from "../components/layout/NavigationTabs";

function MainLayout({ children }) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(circle at 0% 0%, #F6E8D5 0%, transparent 30%),
          radial-gradient(circle at 100% 0%, #EAF4EA 0%, transparent 30%),
          linear-gradient(180deg,#F8F7F4,#F3F1EB)
        `,
      }}
    >
      <TopNavbar />

      <NavigationTabs />

      <main className="max-w-7xl mx-auto px-8 py-8">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;