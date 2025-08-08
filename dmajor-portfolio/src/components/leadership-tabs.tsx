"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export function LeadershipTabs() {
  return (
    <Tabs defaultValue="leadership" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="leadership">Leadership</TabsTrigger>
        <TabsTrigger value="activities">Extracurricular</TabsTrigger>
      </TabsList>
      <TabsContent value="leadership">
        <Card className="mt-4">
          <CardContent className="p-6 text-slate-700">
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Former General Secretary</span>, NAMSN (FUNAAB Chapter)
              </li>
              <li>
                <span className="font-medium">First HNG Lead Ambassador</span> at FUNAAB
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="activities">
        <Card className="mt-4">
          <CardContent className="p-6 text-slate-700">
            <ul className="space-y-2">
              <li>Organized and taught beginner web dev sessions for ~40 students.</li>
              <li>Active contributor to campus tech communities and mentorship circles.</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
