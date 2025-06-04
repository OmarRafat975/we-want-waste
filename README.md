# We Want Waste Task

## Overview

This is a redesigned version of the original page provided. The design aims to look completely different from the original page while maintaining all the original functionality. It focuses on:

- Clean, maintainable React code

- Responsiveness (works on both mobile and desktop)

- Improved UI/UX

## Features

✅ Maintains all the functionalities of the original page

✅ Fully responsive layout

✅ Clean, maintainable React code

✅ Mobile and desktop support

## Getting Started

### Prerequisites

- Node.js (>= 14.x)

- npm

### Installation

1- Clone the repository:

    git clone https://github.com/OmarRafat975/we-want-waste.git
    cd we-want-waste

2- Install dependencies:

    npm install

### Usage

1- Start the development server:

    npm run dev

2- Open your browser at <http://localhost:3000>.

### Production Build

    npm run build

## API Integration

- This app uses the following API endpoint to populate the skip options:
  <https://app.wewantwaste.co.uk/api/skipps/by-location?postcode=NR32&area=Lowestoft>

## Folder Structure

        src/
          ├── components/
          │   └── ui/
                └── Button.tsx
                └── Loader.tsx
              └── ProgressSteps.tsx
              └── SkipCard.tsx
          ├── types/
          │   └── ButtonType.ts
              └── skipCardType.ts
              └── skipType.ts
          ├── App.tsx
          └── main.tsx
