import React from "react";
//import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
export default function GeneralSettings() {
  return (
    <div className="grid gap-6 w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Дэлгүүрийн нэр</CardTitle>
          <CardDescription>
          Зах зээл дээрх дэлгүүрээ тодорхойлоход ашигладаг.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Store Name" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Хадгалах</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Plugins лавлах</CardTitle>
          <CardDescription>
          Таны залгаасууд байгаа төслийн доторх лавлах
          зүйл.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input placeholder="Project Name" defaultValue="/content/plugins" />
            <div className="flex items-center space-x-2">
              <Checkbox id="include" defaultChecked />
              <label
                htmlFor="include"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Администраторуудад лавлахыг өөрчлөхийг зөвшөөрнө үү.
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Хадгалах</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
