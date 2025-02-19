import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { InvoiceTable } from "@/components/Tables/invoice-table";
import { AlertsTable } from "@/components/Tables/alerts-table/index"; // Replaced TopChannels with AlertsTable
import { AlertsTableSkeleton } from "@/components/Tables/alerts-table/skeleton";
import { TopProducts } from "@/components/Tables/top-products";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tables",
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="space-y-10">
        <Suspense fallback={<AlertsTableSkeleton />}>
          <AlertsTable />
        </Suspense>
        
        {/* <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense>

        <InvoiceTable /> */}
      </div>
    </>
  );
};

export default TablesPage;
