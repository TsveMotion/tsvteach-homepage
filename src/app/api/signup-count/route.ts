import { NextResponse } from 'next/server';
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

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    
    // Get actual subscriber count from database
    const currentCount = await collection.countDocuments({});
    const target = 50;
    const remaining = Math.max(0, target - currentCount);
    
    return NextResponse.json({
      current: currentCount,
      target: target,
      remaining: remaining,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching signup count:', error);
    // Fallback to prevent app breaking
    return NextResponse.json({
      current: 0,
      target: 50,
      remaining: 50,
      lastUpdated: new Date().toISOString()
    });
  }
}
