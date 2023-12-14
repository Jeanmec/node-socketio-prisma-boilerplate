import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser"; // Import the IUser interface

const prisma = new PrismaClient();

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    const newUser: IUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

export const getAllUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const users: IUser[] = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving users" });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId: number = parseInt(req.params.id);

  try {
    const user: IUser | null = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving user" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId: number = parseInt(req.params.id);
  const { username, email, password } = req.body;

  try {
    const updatedUser: IUser | null = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
        email,
        password,
      },
    });
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId: number = parseInt(req.params.id);

  try {
    const deletedUser: IUser | null = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};
