// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id         String   @id @default(uuid())
  name       String
  email      String   @unique
  password   String
  created_at DateTime @default(now())
  plants     Plant[]

  @@map("users")
}

model Plant {
  id         String          @id @default(uuid())
  name       String
  species    String?
  photo      String?
  created_at DateTime        @default(now())
  updated_at DateTime        @default(now())
  user       User            @relation(fields: [userId], references: [id])
  userId     String
  activities ActivityCycle[]

  @@map("plants")
}

model Activity {
  id     String          @id @default(uuid())
  name   String
  plants ActivityCycle[]

  @@map("activities")
}

model ActivityCycle {

  plant      Plant    @relation(fields: [plantId], references: [id])
  plantId    String
  activity   Activity @relation(fields: [activityId], references: [id])
  activityId String

  created_at DateTime @default(now())
  updated_at DateTime @default(now())

  period    Period
  period_qd Int

  @@id([plantId, activityId])
  @@map("activities_cycle")
}

enum Period {
  dia
  semana
  mes
}
