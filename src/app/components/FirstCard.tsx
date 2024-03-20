import { Card } from "@/components/ui/ui/card";
import { Button } from "@/components/ui/ui/button";

function FirstCard() {
  return (
    <main className=" ">
    <div className="flex flex-col items-center">
      <Card className="w-full p-4 mb-4"> {/* Decrease the width of the card */}
          <div className="flex justify-between items-start">
            <p className="text-lg font-bold ml-5">Manage Contract</p>
            <div className="flex items-center space-x-4 mr-4"> {/* Add mr-4 to shift both buttons from the right */}
              {/* Add your buttons here */}
              <Button className="w-40 text-cyan-50 text-xs" variant={"blockPen"}>Creat Tempelate</Button> {/* Adjust width */}
              <Button className="w-40  text-cyan-50 text-xs" variant={"blockPen"}>Create New Contract</Button> {/* Adjust width */}
            </div>
          </div>
        </Card>
      </div>
      
      {/* Second Card */}
      
      
    </main>
  )
}

export default FirstCard;
