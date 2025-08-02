import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'tsvteach';
const COLLECTION_NAME = 'subscribers';

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

if (!client) {
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Fetch all subscribers, sorted by most recent first
    const subscribers = await collection
      .find({})
      .sort({ subscribedAt: -1 })
      .toArray();

    return NextResponse.json(
      { 
        subscribers: subscribers.map(sub => ({
          _id: sub._id.toString(),
          email: sub.email,
          subscribedAt: sub.subscribedAt,
          source: sub.source
        }))
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
