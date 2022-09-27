// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidated: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('Revalidating detail page ....')

  const {
    query: { id },
  } = req
  let revalidated = false

  try {
    await res.revalidate('/note/${id}')
    console.log(revalidated)
    revalidated = true
    return res.json({ revalidated });
  } catch (err) {
    console.log(err)
    return res.status(500).send({revalidated});
  }
}
