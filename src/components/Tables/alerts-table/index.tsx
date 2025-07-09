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
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export function AlertsTable({ className }: { className?: string }) {
  const [data, setData] = useState<any[]>([]);
  const [selectedAlert, setSelectedAlert] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://server-water-sense.railway.internal/tlava/all");
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

  const handleEditClick = (alert: any) => {
    setSelectedAlert(alert);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    setData((prevData) => prevData.filter((item) => item._id !== selectedAlert._id));
    setIsOpen(false);
    setName("");
    setReason("");
  };

  return (
    <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">Alerts</h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="!text-left">S.No</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Area/Location</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((alert, index) => (
              <TableRow key={alert._id} className="text-center text-base font-medium text-dark dark:text-white">
                <TableCell className="!text-left">{index + 1}</TableCell>
                <TableCell>{alert.company_name}</TableCell>
                <TableCell>{alert.area}</TableCell>
                <TableCell>{alert.timestamp}</TableCell>
                <TableCell className="flex justify-center">
                  <Pencil
                    className="cursor-pointer text-blue-500 hover:text-blue-700"
                    onClick={() => handleEditClick(alert)}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent title="Edit Alert">
          {selectedAlert ? (
            <div>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p><strong>Company:</strong> {selectedAlert.company_name}</p>
                <p><strong>Area/Location:</strong> {selectedAlert.area}</p>
                <p><strong>Time:</strong> {selectedAlert.timestamp}</p>
                <p><strong>pH:</strong> {selectedAlert.ph}</p>
                <p><strong>Turbidity:</strong> {selectedAlert.turbidity}</p>
                <p><strong>TDS:</strong> {selectedAlert.tds}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} className="mb-3" />

                <label className="block text-sm font-medium text-gray-700">Reason for Fault</label>
                <Input value={reason} onChange={(e) => setReason(e.target.value)} className="mb-3" />

                <DialogFooter>
                  <Button variant="destructive" onClick={handleSubmit}>Submit</Button>
                  <DialogClose className="bg-gray-500 text-white px-3 py-2 rounded">Close</DialogClose>
                </DialogFooter>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No alert selected.</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
