import { Button } from "@/components/ui/ui/button";
import { Card } from "@/components/ui/ui/card";

function Draf() {
  return (
    <main className="flex justify-center items-center ">
      <Card className="w-full p-4 mb-4 flex flex-col items-center justify-center">
        <p className="text-center mb-4 text-sm">Drag & Drop PDF file or Browse to get Started</p>
        <p className="text-center mb-4 text-xs">Upload a Doc or PDF. Max file size is 5 MB</p>
        <Button className="text-xs text-white" variant={"blockPen"}>Upload Now</Button>
      </Card>
    </main>
  );
}

export default Draf;
