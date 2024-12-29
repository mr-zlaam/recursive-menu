import { Button } from "@/components/ui/button";
import {} from "react";

function ConsultationButtonComponent() {
  return (
    <>
      <Button
        size={"lg"}
        variant={"rounded"}
        className=" rounded-full h-[30xp] w-[200px] text-lg px-4 py-4">
        <span className="bg-primary text-background">⚙</span> Free Consultaion
      </Button>
    </>
  );
}

export default ConsultationButtonComponent;
