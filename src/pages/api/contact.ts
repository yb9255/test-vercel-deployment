import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type ContactNextApiRequest = Omit<NextApiRequest, 'body'> & {
  body: {
    email: string;
    name: string;
    message: string;
  };
};

type Data = {
  message: string;
  data?: {
    email: string;
    name: string;
    message: string;
  };
};

async function handler(req: ContactNextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { body } = req;
    const { email, name, message } = body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(process.env.mongodbUrl);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to db' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      const insertedMessage = {
        ...newMessage,
        id: result.insertedId,
      };

      res.status(201).json({
        message: 'Successfully stored message!',
        data: insertedMessage,
      });
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
    }

    client.close();
  }
}

export default handler;
