import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> =>
  new Promise((resolve, reject) => {
    const form = formidable({ multiples: false });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { fields, files } = await parseForm(req);

    const declineReason = fields.declineReason as string | undefined;
    const file = files.file as File | undefined;

    let paymentStatus;

    if (declineReason) {
      paymentStatus = 'declined';
    } else if (file) {
      paymentStatus = 'approved';
    }

    return res.status(200).json({
      receiptLink: 'https://dummy.receipts.com/receipt123.pdf',
      paymentStatus,
    });
  } catch (err) {
    console.error('Merged Submission Error:', err);
    return res
      .status(500)
      .json({ message: 'Upload failed', error: (err as Error).message });
  }
}
