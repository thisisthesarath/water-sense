"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AlertsTable({ className }: { className?: string }) {
  const [data, setData] = useState([
    {
      id: 1,
      company: "ABC Industries",
      location: "Chennai",
      status: "Reviewed",
      reviewedBy: "Sarath",
      alertedTime: "2025-02-10 14:30",
      reportedTime: "2025-02-10 15:00",
      pH: 7.2,
      turbidity: 5.6,
      ds: 150,
      review: "Review solved",
    },
    {
      id: 2,
      company: "ABC Industries",
      location: "Chennai",
      status: "Reviewed",
      reviewedBy: "Sarath",
      alertedTime: "2025-02-10 14:30",
      reportedTime: "2025-02-10 15:00",
      pH: 7.2,
      turbidity: 5.6,
      ds: 150,
      review: "Review solved",
    },
  ]);

  const [selectedAlert, setSelectedAlert] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState("");

  const handleMoreClick = (alert: any) => {
    setSelectedAlert(alert);
    setReview(alert.review);
    setIsOpen(true);
  };

  const handleReviewSubmit = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedAlert.id
          ? { ...item, status: "Reviewed", reviewedBy: "Admin", review }
          : item
      )
    );
    setIsOpen(false);
  };

  return (
    <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">All Alerts</h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="!text-left">S.No</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Area/Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reviewed By</TableHead>
            <TableHead>Alerted Time</TableHead>
            <TableHead>Reported Time & Date</TableHead>
            <TableHead>More</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((alert, index) => (
            <TableRow key={alert.id} className="text-center text-base font-medium text-dark dark:text-white">
              <TableCell className="!text-left">{index + 1}</TableCell>
              <TableCell>{alert.company}</TableCell>
              <TableCell>{alert.location}</TableCell>
              <TableCell>{alert.status}</TableCell>
              <TableCell>{alert.reviewedBy || "-"}</TableCell>
              <TableCell>{alert.alertedTime}</TableCell>
              <TableCell>{alert.reportedTime}</TableCell>
              <TableCell>
                <Button onClick={() => handleMoreClick(alert)}>More</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog Box */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Alert Details</DialogTitle>
          </DialogHeader>
          {selectedAlert && (
            <div>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p><strong>Company:</strong> {selectedAlert.company}</p>
                <p><strong>Area/Location:</strong> {selectedAlert.location}</p>
                <p><strong>Time:</strong> {selectedAlert.alertedTime}</p>
                <p><strong>Reviewed By:</strong> {selectedAlert.reviewedBy}</p>
                <p><strong>pH:</strong> {selectedAlert.pH}</p>
                <p><strong>Turbidity:</strong> {selectedAlert.turbidity}</p>
                <p><strong>TDS:</strong> {selectedAlert.ds}</p>
              </div>
              <label className="block text-sm font-medium text-gray-700">Review</label>
              <Input value={review} onChange={(e) => setReview(e.target.value)} className="mb-3" />
              <DialogFooter>
                <Button variant="destructive" onClick={handleReviewSubmit}>Submit</Button>
                <DialogClose className="bg-gray-500 text-white px-3 py-2 rounded">Close</DialogClose>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
