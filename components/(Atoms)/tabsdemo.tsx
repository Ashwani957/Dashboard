import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function TabDemo() {
  return (
    <Tabs defaultValue="track" className="w-[300px] ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="track" className="text-rose-900 data-[state=active]:bg-rose-100">Track Request</TabsTrigger>
        <TabsTrigger value="complaint" className="text-rose-900 data-[state=active]:bg-rose-100">Raise Complaint</TabsTrigger>
      </TabsList>
      <TabsContent value="track">
        <Card className="border-rose-900">
          <CardHeader>
            <CardTitle className="text-rose-900">Track Request</CardTitle>
            <CardDescription className="text-rose-700">
              Enter your request details to track its status.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="requestId" className="text-rose-900">Request ID</Label>
              <Input id="requestId" placeholder="Enter your request ID" className="border-rose-300 focus:border-rose-500" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-rose-900">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="border-rose-300 focus:border-rose-500" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-rose-900 hover:bg-rose-800">Track Status</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="complaint">
        <Card className="border-rose-900">
          <CardHeader>
            <CardTitle className="text-rose-900">Raise Complaint</CardTitle>
            <CardDescription className="text-rose-700">
              Submit your complaint details here. We'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="subject" className="text-rose-900">Subject</Label>
              <Input id="subject" placeholder="Brief subject of your complaint" className="border-rose-300 focus:border-rose-500" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="description" className="text-rose-900">Description</Label>
              <Textarea id="description" placeholder="Describe your complaint in detail" className="border-rose-300 focus:border-rose-500" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-rose-900 hover:bg-rose-800">Submit Complaint</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}