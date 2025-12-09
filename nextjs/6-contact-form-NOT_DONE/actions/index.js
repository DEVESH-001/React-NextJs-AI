"use server";

import Contact from "@/models/contact";

const { default: dbConnect } = require("@/lib/db");

export async function CreateContact(formData) {
  try {
    await dbConnect();
    //grab all name,email ..
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });
    return {
      success: true,
      message: "Message sent successfully",
      contactId: contact._id.toString(),
    };
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

export async function getContacts() {
  try {
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    return contacts.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    }));
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
}
