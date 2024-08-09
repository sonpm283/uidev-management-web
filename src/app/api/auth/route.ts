export async function POST(request: Request) {
  const res = await request.json();

  const sessionToken = res.payload?.data.token;
  if (!sessionToken) {
    return Response.json({ message: "Token does not exist" });
  }

  return Response.json(
    { res },
    {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=${sessionToken}`,
      },
    }
  );
}
