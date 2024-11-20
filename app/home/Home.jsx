"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { CircularProgress } from "@nextui-org/progress";
import googleLogo from "@/public/flat-color-icons_google.svg";
import facebookLogo from "@/public/logos_facebook.svg";
import linkedinLogo from "@/public/devicon_linkedin.svg";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://social-login.druckland.de/api/v1/user/signin",
        {
          email,
          password,
        }
      );

      toast.success(`Success: ${response.data.message || "Login successful!"}`);
    } catch (error) {
      console.log(error);
      toast.error(
        `Error: ${error.response?.data?.message || "Something went wrong!"}`
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-200 h-full">
      <div className="flex gap-20 justify-center mx-auto py-16">
        <div className="bg-white rounded-lg w-[650px] h-[600px] flex justify-center items-center">
          <h1 className="text-2xl text-black">
            Image or Video <br />
            of our services
          </h1>
        </div>
        <div className="w-[380px] h-[500px] bg-white rounded-lg p-10">
          <div className="flex flex-col justify-center items-center  text-black">
            <h1 className="my-3 text-3xl">Drukland.de</h1>
            <h1 className="">Sign In to your account</h1>
            <h1 className="text-gray-400 text-sm mb-3">
              Don’t you have an account?{" "}
              <Link className="text-black" href={"/"}>
                Register
              </Link>
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 text-black">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              variant="underlined"
              label="Email Address"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              variant="underlined"
              label="Password"
            />
            <Checkbox className="" defaultSelected color="default">
              <h1 className="text-gray-400 text-sm">
                I agree to all{" "}
                <Link className="text-black" href={"/"}>
                  Terms & Conditions
                </Link>
              </h1>
            </Checkbox>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-bold rounded-md"
            >
              {" "}
              {loading ? (
                <CircularProgress color="danger" aria-label="Loading..." />
              ) : (
                "Login"
              )}
            </Button>
          </form>
          <div className="grid grid-cols-3 place-content-center text-black text-xs">
            <h1 className="border-b-1 border-black mr-4"></h1>
            <h1 className="translate-y-2">or sign in with</h1>
            <h1 className="border-b-1 border-black"></h1>
          </div>
          <div className="flex items-center justify-center gap-2 my-3 mt-5 -translate-x-2">
            <Image
              alt=""
              src={linkedinLogo}
              width={30}
              height={30}
              quality={100}
            />
            <Image
              alt=""
              src={googleLogo}
              width={30}
              height={30}
              quality={100}
            />
            <Image
              alt=""
              src={facebookLogo}
              width={30}
              height={30}
              quality={100}
            />
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
