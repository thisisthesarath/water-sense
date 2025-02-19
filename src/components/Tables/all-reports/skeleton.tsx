import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function AlertsTable() {
  return (
    <div className="rounded-[10px] bg-white px-8 pb-4 pt-8 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-6 text-body-2xlg font-bold text-dark dark:text-white">
        Alerts
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="!text-left">S.No</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Area/Location</TableHead>
            <TableHead>Result</TableHead>
            <TableHead>Review Status</TableHead>
            <TableHead>Alerted Time</TableHead>
            <TableHead>Reported Time & Date</TableHead>
            <TableHead className="!text-right">More</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-6 w-6" /></TableCell>
              <TableCell><Skeleton className="h-6 w-24" /></TableCell>
              <TableCell><Skeleton className="h-6 w-32" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell className="!text-right">
                <Skeleton className="h-6 w-6" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function AlertsTableSkeleton() {
  return (
    <div className="rounded-[10px] bg-white px-8 pb-4 pt-8 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-6 text-body-2xlg font-bold text-dark dark:text-white">
        Alerts
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="!text-left">S.No</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Area/Location</TableHead>
            <TableHead>Result</TableHead>
            <TableHead>Review Status</TableHead>
            <TableHead>Alerted Time</TableHead>
            <TableHead>Reported Time & Date</TableHead>
            <TableHead className="!text-right">More</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-6 w-6" /></TableCell>
              <TableCell><Skeleton className="h-6 w-24" /></TableCell>
              <TableCell><Skeleton className="h-6 w-32" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell><Skeleton className="h-6 w-20" /></TableCell>
              <TableCell className="!text-right">
                <Skeleton className="h-6 w-6" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
