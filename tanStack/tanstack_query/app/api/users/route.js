let users = [
  { id: 1, name: "Suresh", email: "suresh@example.com" },
  { id: 2, name: "Ramesh", email: "ramesh@example.com" },
  { id: 3, name: "Kalu", email: "kalu@example.com" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
  return Response.json(users);
}

export async function POST(){
  
}