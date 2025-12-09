import ContactList from "@/components/Contact-List";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href={"/"}>
            <Button
              className={"mb-4 bg-transparent"}
              variant={"outline"}
              size={"sm"}
            >
              Back To Form{" "}
            </Button>
          </Link>
        </div>
        <ContactList/>
      </div>
    </div>
  );
};

export default Contact;
