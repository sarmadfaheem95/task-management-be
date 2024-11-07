# Task Management API

A RESTful API for managing tasks, built with [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/) using PostgreSQL for the database. This API allows users to perform CRUD operations on tasks.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)

---

## Features
- Create, read, update, and delete tasks.
- Validation of inputs and error handling.
- Structured, modular architecture with NestJS.
- PostgreSQL database managed with Prisma.
- Basic Swagger documentation for API endpoints.

## Project Structure

```plaintext
root/
├── src/
│   ├── tasks/               # Feature module for tasks
│   ├── app.module.ts        # Main application module
│   └── main.ts              # Entry point of the application
├── prisma/              # Prisma service and schema
├── .env                     # Environment variables
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── nest-cli.json            # Nest CLI configuration
└── package.json
