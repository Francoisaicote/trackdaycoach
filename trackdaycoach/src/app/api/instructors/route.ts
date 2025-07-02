import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get('specialty');
    const location = searchParams.get('location');
    const minRating = searchParams.get('minRating');

    const whereClause: Record<string, unknown> = { 
      isActive: true,
      isVerified: true 
    };

    if (specialty) {
      whereClause.specialties = {
        has: specialty
      };
    }

    if (location) {
      whereClause.user = {
        profile: {
          location: location
        }
      };
    }

    if (minRating) {
      whereClause.rating = {
        gte: parseFloat(minRating)
      };
    }

    const instructors = await prisma.instructor.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            experience: true,
            profile: true
          }
        },
        reviews: {
          include: {
            reviewer: {
              select: {
                name: true
              }
            }
          },
          take: 3,
          orderBy: {
            createdAt: 'desc'
          }
        }
      },
      orderBy: {
        rating: 'desc'
      }
    });

    return NextResponse.json(instructors);
  } catch (error) {
    console.error('Error fetching instructors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch instructors' },
      { status: 500 }
    );
  }
} 