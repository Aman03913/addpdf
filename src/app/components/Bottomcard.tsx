"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/ui/card";
import { Input } from "@/components/ui/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/ui/select";
import { Label } from "@/components/ui/ui/label";
import { Separator } from "@/components/ui/ui/separator";
import { Button } from "@/components/ui/ui/button";



export default function Bottomcard() {
  return (
    <main className="flex items-center justify-center  ">
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
                    <SelectItem value="light text-sm">Light</SelectItem>
                    <SelectItem value="dark text-sm">Dark</SelectItem>
                    <SelectItem value="system text-sm">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light text-sm">Light</SelectItem>
                    <SelectItem value="dark text-sm">Dark</SelectItem>
                    <SelectItem value="system text-sm">System</SelectItem>
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
                <div className="px-8 py-1 text-sm">Contract Name</div>
                <div className="px-8 py-1 text-sm">Sent By</div>
                <div className="px-8 py-1 text-sm">Signing Status</div>
                <div className="px-8 py-1 text-sm">Status</div>
                <div className="px-8 py-1 text-sm">Action</div>
              </div>
            </div>
          </div>
          <br></br>
          <CardHeader> 
            <CardDescription className="text-center text-sm">No Document</CardDescription>
          </CardHeader>
          <CardContent  className="text-center text-sm">
            <p>Upload your first contract.</p>
          </CardContent>
          <CardFooter className="flex justify-between text-sm">
  <Button variant={"outline"}>Previous</Button>
  <Button variant={"outline"}>Next</Button>
</CardFooter>
    
        </Card>
      </div>
    </main>
  )
}
