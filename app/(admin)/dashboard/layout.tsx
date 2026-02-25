import DashboardHeader from "@/app/components/Dashboardheader";
import DashboardSidebar from "@/app/components/Dashboardsidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sidebar — fixed, handles its own collapsed state internally */}
      <DashboardSidebar />

      {/* Content offset — uses plain CSS class from globals.css */}
      {/* On mobile: no margin (sidebar is a drawer overlay) */}
      {/* On desktop: 256px margin matching sidebar width */}
      <div className="dashboard-content">
        <DashboardHeader />
        <main className="flex-1 p-0">
          {children}
        </main>
      </div>
    </div>
  );
}