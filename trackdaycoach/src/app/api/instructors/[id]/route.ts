import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const instructor = await prisma.instructor.findUnique({
      where: {
        id: id
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            experience: true,
            bio: true,
            profile: true
          }
        },
        reviews: {
          include: {
            reviewer: {
              select: {
                name: true,
                avatar: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        },
        bookings: {
          include: {
            session: true,
            driver: {
              select: {
                name: true
              }
            }
          },
          where: {
            status: 'COMPLETED'
          },
          take: 5,
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!instructor) {
      return NextResponse.json(
        { error: 'Instructor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(instructor);
  } catch (error) {
    console.error('Error fetching instructor:', error);
    return NextResponse.json(
      { error: 'Failed to fetch instructor' },
      { status: 500 }
    );
  }
} 