import { deletePost, getPostById, updatePost } from '@/lib/data';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, res: Response) => {
  try {
    const id = req.url.split('feed/')[1];
    const post = getPostById(id);
    if (!post) {
      return NextResponse.json({ message: 'Error' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Ok', post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const { title, desc } = await req.json();
    const id = req.url.split('feed/')[1];
    updatePost(id, title, desc);
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const id = req.url.split('feed/')[1];
    deletePost(id);
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
