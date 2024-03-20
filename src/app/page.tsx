import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <Card className="w-full p-4 mb-4">
          <div className="grid grid-cols-10 gap-10">
            <div className="flex flex-row justify-between col-span-8">
              <div className="flex space-x-4">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="col-span-2 justify-self-end">
              <Input type="text" id="email" placeholder="Search Here" className="ml-2 px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>

            <div className="flex flex-row justify-between col-span-8">
              <div className="col-span-2">
                <input type="checkbox" />
              </div>
  
              <div className="flex grid-cols-5 justify-between space-aroundflex space-x-5 sm:space-x-8 md:space-x-9 lg:space-x-12 xl:space-x-15">
                <div className="px-8 py-1">Contract Name</div>
                <div className="px-8 py-1">Sent By</div>
                <div className="px-8 py-1">Signing Status</div>
                <div className="px-8 py-1">Status</div>
                <div className="px-8 py-1">Action</div>
              </div>
            </div>
          </div>
          <br></br>
        
      
          <CardHeader> 
            <CardDescription className="text-center">No Document</CardDescription>
          </CardHeader>
          <CardContent  className="text-center">
            <p>Upload your first contract.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
  <Button variant={"outline"}>Previous</Button>
  <Button variant={"outline"}>Next</Button>
</CardFooter>
        </Card>
      </div>
    </main>
  );
}
