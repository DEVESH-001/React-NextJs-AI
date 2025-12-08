import Hero from "@/components/Hero";
import dbConnect from "@/lib/db";
import Note from "@/models/note";


async function GetNotes() {
  await dbConnect();
  const notes = await Note.find({}).sort({ createdAt: -1 }).lean();
  return notes.map((note) => ({ ...note, _id: note._id.toString() })); // Convert ObjectId to string
}

export default async function Home() {
  const notes = await GetNotes(); 
  console.log(notes);
  
  return (
    <section>
      <Hero initialNotes={notes}/>
    </section>
  );
}
