import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  // await prisma.course.create({
  //   data: {
  //     title: "Learning MySQL",
  //     lessons: {
  //       create: { title: "Using Planetscale" },
  //     },
  //   },
  // });
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
    },
  });
  res.send(courses);
};
