/**
 * Shared Data Models and API Contracts for Notes App
 */

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface AuthSession {
  token: string;
  user: User;
}

export interface Note {
  id: string;
  userId: string;
  title: string;
  content: string;
  category: string;
  isArchived: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteInput {
  title: string;
  content: string;
  category?: string;
}

export interface UpdateNoteInput {
  title?: string;
  content?: string;
  category?: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export const NOTE_CATEGORIES = ['General', 'Work', 'Personal', 'Ideas', 'Tasks'] as const;
export type NoteCategory = (typeof NOTE_CATEGORIES)[number];
