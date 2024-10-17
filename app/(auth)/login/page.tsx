"use client"

import Link from "next/link";
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  const onLoginSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email'),
      password = formData.get('password')
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    setLoading(false)
    if (result?.error) {
      toast.error(result.error)
      // @ts-ignore
      e.target.reset()
    } else {
      redirect('/dashboard')
    }
  }


  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onLoginSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="/reset-password" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </>
  )
}