"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import bgPelindo from "/public/pelindo.png";
import { FormValues } from "@/types";
import { signIn } from "next-auth/react";

export default function Home() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await signIn("credentials", {
      username: data.username,
      password: data.password,
      role: data.role,
      callbackUrl:"/"
    });
    // Anda bisa menambahkan logika autentikasi di sini
    // router.push("/dashboard"); // Ganti '/dashboard' dengan path tujuan setelah login berhasil
  };

  return (
    <div className="md:grid grid-cols-2 flex flex-col-reverse">
      <div className="grid grid-rows-3 max-h-screen">
        <div className="relative row-span-2">
          <Image alt="logo" src={bgPelindo} objectFit="cover" />
        </div>
        <h1 className="text-center text-2xl font-semibold text-gray-600">
          Arsip Galeri Departemen Tanggung Jawab Sosial & Lingkungan
        </h1>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="username"
                {...register("username", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <select
                {...register("role", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Login
            </button>
          </form>
          <div className="text-center">
            <p>
              Belum punya akun?{" "}
              <a href="/auth/signup" className="text-blue-600 hover:underline">
                daftar DISINI
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
