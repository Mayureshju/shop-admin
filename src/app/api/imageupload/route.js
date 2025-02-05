import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
});

export async function POST(req) {
    try {
      const body = await req.json();
      const { fileName, fileType } = body;
  
      if (!fileName || !fileType) {
        return NextResponse.json({ error: 'Missing fileName or fileType' }, { status: 400 });
      }
  
      const s3Params = {
        Bucket: 'florista-india',
        Key: fileName,
        ContentType: fileType,
      };
  
      const command = new PutObjectCommand(s3Params);
      const signedUrl = await getSignedUrl(s3Client, command);
      const fileUrl = `https://florista-india.s3.ap-south-1.amazonaws.com/${fileName}`;
  
      return NextResponse.json({ signedUrl, fileUrl }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }