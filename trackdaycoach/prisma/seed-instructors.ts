import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // First, create some sample users
  const users = await prisma.user.createMany({
    data: [
      {
        email: 'mike.ross@trackdaycoach.com',
        name: 'Mike Ross',
        experience: 'EXPERT',
        bio: 'Former professional racing driver with 15+ years of experience in GT3 and touring car championships.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      {
        email: 'sarah.chen@trackdaycoach.com',
        name: 'Sarah Chen',
        experience: 'EXPERT',
        bio: 'Certified racing instructor specializing in defensive driving and advanced cornering techniques.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        email: 'david.thompson@trackdaycoach.com',
        name: 'David Thompson',
        experience: 'ADVANCED',
        bio: 'Motorsport engineer turned instructor, expert in vehicle dynamics and performance optimization.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        email: 'emma.wilson@trackdaycoach.com',
        name: 'Emma Wilson',
        experience: 'ADVANCED',
        bio: 'Former karting champion and certified instructor focusing on fundamentals and confidence building.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      {
        email: 'james.rodriguez@trackdaycoach.com',
        name: 'James Rodriguez',
        experience: 'EXPERT',
        bio: 'Professional drift instructor and stunt driver with expertise in car control and advanced techniques.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      }
    ],
    skipDuplicates: true,
  });

  // Get the created users
  const createdUsers = await prisma.user.findMany({
    where: {
      email: {
        in: [
          'mike.ross@trackdaycoach.com',
          'sarah.chen@trackdaycoach.com',
          'david.thompson@trackdaycoach.com',
          'emma.wilson@trackdaycoach.com',
          'james.rodriguez@trackdaycoach.com'
        ]
      }
    }
  });

  // Create instructor profiles
  const instructors = await prisma.instructor.createMany({
    data: [
      {
        userId: createdUsers[0].id,
        isVerified: true,
        specialties: ['GT3 Racing', 'Advanced Cornering', 'Race Strategy'],
        certifications: ['FIA Racing License', 'Advanced Driving Instructor', 'Performance Driving Coach'],
        yearsExperience: 15,
        hourlyRate: 150.00,
        bio: 'Mike is a former professional GT3 driver with multiple championship wins. He specializes in advanced racing techniques and has coached numerous drivers to podium finishes.',
        availability: {
          weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          weekends: ['Saturday', 'Sunday'],
          hours: '9:00 AM - 6:00 PM'
        },
        rating: 4.9,
        totalReviews: 47
      },
      {
        userId: createdUsers[1].id,
        isVerified: true,
        specialties: ['Defensive Driving', 'Advanced Cornering', 'Safety Training'],
        certifications: ['Defensive Driving Instructor', 'Advanced Safety Coach', 'Emergency Response Training'],
        yearsExperience: 12,
        hourlyRate: 120.00,
        bio: 'Sarah is a certified defensive driving instructor with expertise in advanced cornering techniques and emergency response training. She focuses on building confidence and safety awareness.',
        availability: {
          weekdays: ['Tuesday', 'Wednesday', 'Thursday'],
          weekends: ['Saturday'],
          hours: '10:00 AM - 5:00 PM'
        },
        rating: 4.8,
        totalReviews: 34
      },
      {
        userId: createdUsers[2].id,
        isVerified: true,
        specialties: ['Vehicle Dynamics', 'Performance Optimization', 'Data Analysis'],
        certifications: ['Motorsport Engineer', 'Performance Analyst', 'Advanced Instructor'],
        yearsExperience: 10,
        hourlyRate: 140.00,
        bio: 'David combines his engineering background with practical racing experience to help drivers optimize their performance through data analysis and vehicle dynamics understanding.',
        availability: {
          weekdays: ['Monday', 'Wednesday', 'Friday'],
          weekends: ['Saturday', 'Sunday'],
          hours: '8:00 AM - 7:00 PM'
        },
        rating: 4.7,
        totalReviews: 28
      },
      {
        userId: createdUsers[3].id,
        isVerified: true,
        specialties: ['Fundamentals', 'Confidence Building', 'Beginner Training'],
        certifications: ['Karting Champion', 'Beginner Instructor', 'Youth Coach'],
        yearsExperience: 8,
        hourlyRate: 100.00,
        bio: 'Emma specializes in teaching fundamentals and building confidence in new drivers. Her karting background provides excellent foundation for track driving skills.',
        availability: {
          weekdays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
          weekends: ['Saturday'],
          hours: '9:00 AM - 4:00 PM'
        },
        rating: 4.9,
        totalReviews: 52
      },
      {
        userId: createdUsers[4].id,
        isVerified: true,
        specialties: ['Drift Training', 'Car Control', 'Advanced Techniques'],
        certifications: ['Professional Drift Instructor', 'Stunt Driver', 'Advanced Car Control Coach'],
        yearsExperience: 13,
        hourlyRate: 160.00,
        bio: 'James is a professional drift instructor and stunt driver who excels in teaching advanced car control techniques and building driver confidence in extreme situations.',
        availability: {
          weekdays: ['Wednesday', 'Thursday', 'Friday'],
          weekends: ['Saturday', 'Sunday'],
          hours: '10:00 AM - 8:00 PM'
        },
        rating: 4.8,
        totalReviews: 41
      }
    ],
    skipDuplicates: true,
  });

  console.log('✅ Instructors seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 