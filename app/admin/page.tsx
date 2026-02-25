"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface WaitlistEntry {
  id: number
  first_name: string
  last_name: string
  email: string
  ip_address: string
  referrer: string
  created_at: string
}

interface ContactEntry {
  id: number
  name: string
  email: string
  message: string
  ip_address: string
  referrer: string
  created_at: string
}

export default function AdminPage() {
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([])
  const [contactData, setContactData] = useState<ContactEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dataSource, setDataSource] = useState<"supabase" | "memory" | "unknown">("unknown")

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch waitlist data
        const waitlistResponse = await fetch("/api/waitlist")
        const waitlistResult = await waitlistResponse.json()

        if (waitlistResult.success) {
          setWaitlistData(waitlistResult.data)
          setDataSource(waitlistResult.source || "unknown")
        }

        // Fetch contact data
        const contactResponse = await fetch("/api/contact")
        const contactResult = await contactResponse.json()

        if (contactResult.success) {
          setContactData(contactResult.data)
        }
      } catch (err) {
        setError("Failed to load data")
        console.error("Error fetching admin data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-40">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-3xl font-bold text-[#1D3557]">Admin Dashboard</h1>
          <Badge variant={dataSource === "supabase" ? "default" : "secondary"}>
            {dataSource === "supabase" ? "🗄️ Database" : "💾 Demo Mode"}
          </Badge>
        </div>
        <p className="text-gray-600">
          Manage waitlist subscribers and contact submissions
          {dataSource === "memory" && " (Currently running in demo mode - data will reset on restart)"}
        </p>
      </div>

      <Tabs defaultValue="waitlist" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="waitlist">Waitlist ({waitlistData.length})</TabsTrigger>
          <TabsTrigger value="contact">Contact ({contactData.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="waitlist">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Waitlist Subscribers</CardTitle>
              <CardDescription>
                View all subscribers who have requested beta access. Total: {waitlistData.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-4 rounded-md bg-red-50 p-4 text-red-800">
                  <p>{error}</p>
                </div>
              )}

              {waitlistData.length === 0 ? (
                <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-gray-500">No subscribers yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email Address</TableHead>
                        <TableHead>Date Joined</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>Referrer</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {waitlistData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">
                            {item.first_name && item.last_name
                              ? `${item.first_name} ${item.last_name}`
                              : item.first_name || item.last_name || "—"}
                          </TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>
                            {new Date(item.created_at).toLocaleDateString()} at{" "}
                            {new Date(item.created_at).toLocaleTimeString()}
                          </TableCell>
                          <TableCell>{item.ip_address}</TableCell>
                          <TableCell className="max-w-xs truncate">{item.referrer}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Submissions</CardTitle>
              <CardDescription>View all contact form submissions. Total: {contactData.length}</CardDescription>
            </CardHeader>
            <CardContent>
              {contactData.length === 0 ? (
                <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-gray-500">No contact submissions yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>IP Address</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{item.message}</TableCell>
                          <TableCell>
                            {new Date(item.created_at).toLocaleDateString()} at{" "}
                            {new Date(item.created_at).toLocaleTimeString()}
                          </TableCell>
                          <TableCell>{item.ip_address}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
