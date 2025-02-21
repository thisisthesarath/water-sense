"use client";

import { Suspense } from "react";
import { AlertCard } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const companies = [
  { id: 1, company: "ABC Industries", location: "Chennai" },
];

const CompaniesPage = () => {
  return (
    <>
      <Breadcrumb pageName="All Companies" />

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Suspense fallback={<p className="text-gray-500 dark:text-gray-400">Loading...</p>}>
            {companies.map((company) => (
              <AlertCard key={company.id} id={company.id} company={company.company} location={company.location} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default CompaniesPage;
