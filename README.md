# Shared Types Repository (`shared-types`)

This repository contains shared TypeScript interfaces, types, and constants used across the `notes-frontend`, `notes-api`, and `auth-service` repositories.

## Contents

- **User & Auth Types**: `User`, `AuthSession`, `RegisterRequest`, `LoginRequest`
- **Note Types**: `Note`, `CreateNoteInput`, `UpdateNoteInput`
- **API Wrappers**: `ApiResponse<T>`

## Usage in Monorepo or Multi-Repo

In a local setup or published npm package, install or link this package:

```bash
npm install
npm run build
```
