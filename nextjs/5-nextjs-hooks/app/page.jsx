const Home = async () => {
  const response = await fetch("http://localhost:3000/api/timer", {
    cache: "force-cache",
    next: {
      revalidate: 10,
      tags: ["timer"],
    },
  });
  const data = await response.json();

  return (
    <section>
      <h2>NextJS Response (default)</h2>
      <p>Time: {data.readable}</p>
      <p>Request ID: {data.requestId}</p>
    </section>
  );
};

export default Home;
