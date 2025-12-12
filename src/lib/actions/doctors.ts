"use server";

import { prisma } from "../prisma";
import {Gender} from "@prisma/client"

export async function getDoctors() {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        _count: {
          select: { appointment: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return doctors.map((doctor: typeof doctors[number]) => ({
      ...doctor,
      appointmentCount: doctor._count.appointment,
    }));
  } catch (error) {
    console.log("Error Fetching Doctors:", error);
    throw new Error("Failed to fetch doctors");
  }
}


interface CreateDoctorInput {
  name: string;
  email: string;
  phone: string;
  speciality: string;
  gender: Gender;
  isActive: boolean;
}

export async function createDoctor(input: CreateDoctorInput) {
  try {
    if (!input.name || !input.email) throw new Error("Name and email are required");

    const doctor = await prisma.doctor.create({
      data: {
        ...input,
        imageUrl: generateAvatar(input.name, input.gender),
      },
    });

    revalidatePath("/admin");

    return doctor;
  } catch (error: any) {
    console.error("Error creating doctor:", error);

    // handle unique constraint violation (email already exists)
    if (error?.code === "P2002") {
      throw new Error("A doctor with this email already exists");
    }

    throw new Error("Failed to create doctor");
  }
}

interface UpdateDoctorInput extends Partial<CreateDoctorInput> {
  id: string;
}

