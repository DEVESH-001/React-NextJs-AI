"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CreateContact } from "@/actions";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(formData) {
    setIsSubmitting(true);
    setMessage("");

    const result = await CreateContact(formData);
    if (result.success) {
      setMessage("Message sent successfully!");
      const form = document.getElementById("contact-form");
      form.reset();
    } else {
      setMessage(result.error || "something went wrong");
    }
    setIsSubmitting(false);
  }

  return (
    <Card className={"w-full max-w-2xl mx-auto"}>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        {message && (
          <div
            className={`mb-6 p-4 rounded ${
              message.includes("success")
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
        <form id="contact-form" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label>Subject</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <Input
                id="message"
                name="message"
                type="text"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button onClick={onSubmit}>
              {isSubmitting ? "Sending" : "Send message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
