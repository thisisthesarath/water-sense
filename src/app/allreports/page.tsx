"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { AlertsTable } from "@/components/Tables/all-reports/index"; // New component for all alerts
import { AlertsTableSkeleton } from "@/components/Tables/all-reports/skeleton";
import { Suspense } from "react";

const AllAlertsPage = () => {
  return (
    <>
      <Breadcrumb pageName="All Reports" />

      <div className="space-y-10">
        <Suspense fallback={<AlertsTableSkeleton />}>
          <AlertsTable />
        </Suspense>
      </div>
    </>
  );
};

export default AllAlertsPage;
