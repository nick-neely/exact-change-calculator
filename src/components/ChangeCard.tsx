import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import ChangeTable from "./ChangeTable";
import { ChangeForm } from "./ChangeForm";

const ChangeCard: React.FC = () => {
  // State to store the change
  const [change, setChange] = useState({});

  return (
    <div>
      <Card className="w-[350px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg">
        <CardHeader className="p-4">
          <CardTitle className="mb-1 font-bold text-white">
            Change Calculator
          </CardTitle>
          <CardDescription className="text-white opacity-80">
            Get the least amount of change back
          </CardDescription>
        </CardHeader>
        <CardContent className="rounded-b-lg bg-white p-4">
          <ChangeForm setChange={setChange} />
        </CardContent>
      </Card>
      {Object.keys(change).length > 0 && (
        <div className="mt-4">
          <ChangeTable change={change} />
        </div>
      )}
    </div>
  );
};

export default ChangeCard;
