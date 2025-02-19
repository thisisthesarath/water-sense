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
import { Pencil } from "lucide-react";

export function AlertsTable({ className }: { className?: string }) {
  const [data, setData] = useState([
    { id: 1, company: "ABC Industries", location: "Chennai", time: "2025-02-10 14:30", pH: 7.2, turbidity: 5.6, orp: 300, tss: 25, ds: 150 },
    { id: 2, company: "XYZ Chemicals", location: "Coimbatore", time: "2025-02-10 13:15", pH: 6.8, turbidity: 6.2, orp: 320, tss: 30, ds: 160 },
    { id: 3, company: "GreenTech Ltd.", location: "Madurai", time: "2025-02-10 12:45", pH: 7.5, turbidity: 4.8, orp: 290, tss: 20, ds: 140 },
  ]);

  const [selectedAlert, setSelectedAlert] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  const handleEditClick = (alert: any) => {
    setSelectedAlert(alert);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    setData((prevData) => prevData.filter((item) => item.id !== selectedAlert.id));
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
          {data.map((alert, index) => (
            <TableRow key={alert.id} className="text-center text-base font-medium text-dark dark:text-white">
              <TableCell className="!text-left">{index + 1}</TableCell>
              <TableCell>{alert.company}</TableCell>
              <TableCell>{alert.location}</TableCell>
              <TableCell>{alert.time}</TableCell>
              <TableCell className="flex justify-center">
                <Pencil
                  className="cursor-pointer text-blue-500 hover:text-blue-700"
                  onClick={() => handleEditClick(alert)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog Box */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent title="Edit Alert">
          {selectedAlert ? (
            <div>
              {/* Display alert details */}
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p><strong>Company:</strong> {selectedAlert.company}</p>
                <p><strong>Area/Location:</strong> {selectedAlert.location}</p>
                <p><strong>Time:</strong> {selectedAlert.time}</p>
                <p><strong>pH:</strong> {selectedAlert.pH}</p>
                <p><strong>Turbidity:</strong> {selectedAlert.turbidity}</p>
                <p><strong>ORP:</strong> {selectedAlert.orp}</p>
                <p><strong>TSS:</strong> {selectedAlert.tss}</p>
                <p><strong>DS:</strong> {selectedAlert.ds}</p>
              </div>

              {/* Input Form */}
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
