"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(2),
  message: z.string().min(10),
})

export default function ContactPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", service: "Customer Support", message: "" },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values)
    toast({ title: "Thanks!", description: "We’ll reach out soon." })
    form.reset()
  }

  return (
    <div className="container px-4 md:px-6 py-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
          <p className="text-muted-foreground mt-2">Let’s align your goals to an execution plan.</p>
          <div className="mt-6 rounded-lg overflow-hidden border">
            <img src="/company-location-map.png" alt="Office map" className="w-full h-64 object-cover" />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Email: hello@offshorepirates.co · Phone: +1 (555) 123-4567
          </div>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...form.register("name")} />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...form.register("email")} />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label>Service of Interest</Label>
            <Select defaultValue="Customer Support" onValueChange={(v) => form.setValue("service", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Customer Support",
                  "Back Office",
                  "Accounting",
                  "Sales",
                  "Content Moderation",
                  "Data Ops",
                  "AR/AP",
                  "QA",
                  "Tech Support",
                ].map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.service && (
              <p className="text-sm text-destructive">{form.formState.errors.service.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={6} {...form.register("message")} />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
