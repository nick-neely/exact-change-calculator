import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

interface ChangeTableProps {
  change: Record<string, number>;
}

const ChangeTable: React.FC<ChangeTableProps> = ({ change }) => {
  return (
    <Table className="w-full divide-y divide-gray-200">
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
            Denomination
          </TableHead>
          <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
            Quantity
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="divide-y divide-gray-200 bg-white">
        {Object.entries(change).map(([denomination, quantity]) => (
          <TableRow key={denomination}>
            <TableCell className="whitespace-nowrap px-6 py-4">
              {denomination}
            </TableCell>
            <TableCell className="whitespace-nowrap px-6 py-4">
              {quantity}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ChangeTable;
