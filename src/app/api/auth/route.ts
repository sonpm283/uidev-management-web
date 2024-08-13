export async function POST(request: Request) {
  const res = await request.json()

  console.log('res', res)

  const accessToken = res.payload?.data.token
  if (!accessToken) {
    return Response.json({ message: 'Token does not exist' }, { status: 400 })
  }

  return Response.json(res.payload, {
    status: 200,
    headers: {
      // For NextJS server
      // "Set-Cookie": `sessionToken=${accessToken}; Path=/; HttpOnly`,
    }
  })
}
