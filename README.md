
# NextShare

A messaging application built with Next.js that demonstrates various caching strategies.

## Overview

NextShare is a simple messaging application that allows users to create and view messages. The project showcases Next.js caching mechanisms including:

- Server-side rendering
- Data fetching with caching
- Revalidation strategies
- React Server Components

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Database**: SQLite (via better-sqlite3)
- **Simple Backend**: Basic Express server for optional API endpoints

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/AliAshraf04/nextshare.git
   cd nextshare
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and database operations

## Features

- Create new messages
- View all messages
- Demonstrates Next.js caching strategies:
  - React cache
  - unstable_cache
  - revalidatePath
  - revalidateTag
  - Server Actions
