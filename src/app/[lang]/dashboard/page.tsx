import { metaFor } from "@/i18n/server";
import { DashboardApp } from "@/components/dashboard/dashboard-app";

export const generateMetadata = metaFor("dashboard");

export default function DashboardPage() {
  return <DashboardApp />;
}
