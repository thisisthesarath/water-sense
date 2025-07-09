"use client";

import { useState, useEffect } from "react";
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
  const [data, setData] = useState<any[]>([]);
  const [selectedAlert, setSelectedAlert] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("server-water-sense.railway.internal/tlava/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Fetched Data:", result);

        if (Array.isArray(result)) {
          setData(result);
        } else if (result && Array.isArray(result.data)) {
          setData(result.data);
        } else {
          console.error("Unexpected data format", result);
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  const handleMoreClick = (alert: any) => {
    setSelectedAlert(alert);
    setReview(alert.review || "");
    setIsOpen(true);
  };

  const handleReviewSubmit = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item._id === selectedAlert._id
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
            <TableHead>Result</TableHead>
            <TableHead>More</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((alert, index) => (
              <TableRow key={alert._id} className="text-center text-base font-medium text-dark dark:text-white">
                <TableCell className="!text-left">{index + 1}</TableCell>
                <TableCell>{alert.company_name}</TableCell>
                <TableCell>{alert.area}</TableCell>
                <TableCell>{alert.status || "Pending"}</TableCell>
                <TableCell>{alert.reviewedBy || "-"}</TableCell>
                <TableCell>{alert.timestamp}</TableCell>
                <TableCell className={alert.result === "Polluted" ? "text-red-500" : "text-green-500"}>{alert.result}</TableCell>
                <TableCell>
                  <Button onClick={() => handleMoreClick(alert)}>More</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center">No data available</TableCell>
            </TableRow>
          )}
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
              <p><strong>Company:</strong> {selectedAlert.company_name}</p>
              <p><strong>Area/Location:</strong> {selectedAlert.area}</p>
              <p><strong>Alerted Time:</strong> {selectedAlert.timestamp}</p>
              <p><strong>pH:</strong> {selectedAlert.ph}</p>
              <p><strong>Turbidity:</strong> {selectedAlert.turbidity}</p>
              <p><strong>TDS:</strong> {selectedAlert.tds}</p>
              <label className="block text-sm font-medium text-gray-700 mt-3">Review</label>
              <Input value={review} onChange={(e) => setReview(e.target.value)} className="mb-3" />
            </div>
          )}
          <DialogFooter>
            <Button variant="destructive" onClick={handleReviewSubmit}>Submit Review</Button>
            <DialogClose className="bg-gray-500 text-white px-3 py-2 rounded">Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
