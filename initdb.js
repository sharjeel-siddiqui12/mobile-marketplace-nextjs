import sql from "better-sqlite3";
import fs from 'fs';

// Try to remove existing database file if it exists to ensure clean start
try {
  if (fs.existsSync("mobiles.db")) {
    fs.unlinkSync("mobiles.db");
    console.log("Removed existing database file");
  }
} catch (error) {
  console.log("Database file is in use. Creating new connection...");
}

const db = sql("mobiles.db", { verbose: console.log });

const dummyMobiles = [
  {
    title: "iPhone 14 Pro",
    slug: "iphone-14-pro",    
    image: "/images/mobile-1.png",
    summary:
      "Apple's flagship smartphone with advanced camera system, A16 Bionic chip, and Dynamic Island interface.",
    specifications: `
      # iPhone 14 Pro Specifications

      ## Display
      - 6.1-inch Super Retina XDR display
      - ProMotion technology with adaptive refresh rate up to 120Hz
      - Dynamic Island
      - Always-On display

      ## Camera System
      - 48MP main camera with quad-pixel sensor
      - 12MP ultra wide
      - 12MP telephoto with 3x optical zoom
      - 12MP TrueDepth front camera

      ## Performance
      - A16 Bionic chip
      - 6-core CPU
      - 5-core GPU
      - 16-core Neural Engine

      ## Battery Life
      - Up to 23 hours video playback
      - Fast charging capable
      - MagSafe wireless charging
    `,
    creator: "Alex Chen",
    creator_email: "alexchen@example.com",
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    slug: "samsung-galaxy-s23-ultra",
    image: "/images/mobile-2.png",
    summary:
      "Premium Android smartphone featuring a 200MP camera, S Pen support, and powerful Snapdragon 8 Gen 2 processor.",
    specifications: `
      # Galaxy S23 Ultra Specifications

      ## Display
      - 6.8-inch Dynamic AMOLED 2X
      - 120Hz refresh rate (1-120Hz adaptive)
      - 1440 x 3088 resolution
      - HDR10+ certified

      ## Camera System
      - 200MP wide main camera
      - 12MP ultra-wide
      - 10MP telephoto (3x optical zoom)
      - 10MP periscope telephoto (10x optical zoom)
      - 12MP front-facing camera

      ## Performance
      - Snapdragon 8 Gen 2 for Galaxy
      - 12GB RAM
      - Up to 1TB storage
      - Vapor chamber cooling

      ## S Pen
      - Built-in S Pen with 2.8ms latency
      - Bluetooth enabled for remote control
      - Air actions for gesture control
    `,
    creator: "Sarah Johnson",
    creator_email: "sarahjohnson@example.com",
  },
  {
    title: "Google Pixel 7 Pro",
    slug: "google-pixel-7-pro",
    image: "/images/mobile-3.png",
    summary:
      "Google's premium smartphone with exceptional computational photography, clean Android experience, and Tensor G2 chip.",
    specifications: `
      # Pixel 7 Pro Specifications

      ## Display
      - 6.7-inch LTPO OLED
      - 120Hz refresh rate
      - QHD+ resolution
      - Always-on display

      ## Camera System
      - 50MP main camera
      - 12MP ultra-wide
      - 48MP telephoto with 5x optical zoom
      - 10.8MP front camera

      ## Performance
      - Google Tensor G2 chip
      - Titan M2 security coprocessor
      - 12GB RAM
      - Up to 512GB storage

      ## Software Features
      - Clean Android experience
      - 5 years of security updates
      - Magic Eraser
      - Photo Unblur
      - Voice typing with Assistant
    `,
    creator: "Marcus Lee",
    creator_email: "marcuslee@example.com",
  },
  {
    title: "Nothing Phone (2)",
    slug: "nothing-phone-2",
    image: "/images/mobile-4.png",
    summary:
      "Distinctive smartphone with unique Glyph Interface lighting system, transparent design, and clean software experience.",
    specifications: `
      # Nothing Phone (2) Specifications

      ## Display
      - 6.7-inch flexible OLED
      - 120Hz adaptive refresh rate
      - 1080 x 2412 resolution
      - 10-bit color depth

      ## Glyph Interface
      - 11 LED light strips on rear
      - Customizable notification patterns
      - Music visualization
      - Timer and call indicators

      ## Camera System
      - 50MP main camera with Sony IMX890
      - 50MP ultra-wide
      - 32MP front camera

      ## Performance
      - Snapdragon 8+ Gen 1
      - 12GB LPDDR5 RAM
      - Up to 256GB UFS 3.1 storage
      - Nothing OS 2.0 (based on Android 13)
    `,
    creator: "Emma Wilson",
    creator_email: "emmawilson@example.com",
  },
  {
    title: "OnePlus 11",
    slug: "oneplus-11",
    image: "/images/mobile-5.png",
    summary:
      "Flagship killer with Hasselblad camera system, lightning-fast charging, and smooth OxygenOS experience.",
    specifications: `
      # OnePlus 11 Specifications

      ## Display
      - 6.7-inch LTPO3 Fluid AMOLED
      - 120Hz adaptive refresh rate
      - 1440 x 3216 resolution
      - Dolby Vision support

      ## Camera System
      - Hasselblad Camera for Mobile
      - 50MP main camera with Sony IMX890
      - 48MP ultra-wide
      - 32MP portrait tele
      - 16MP front camera

      ## Performance
      - Snapdragon 8 Gen 2
      - Up to 16GB LPDDR5X RAM
      - Up to 512GB UFS 4.0 storage
      - OxygenOS 13 based on Android 13

      ## Battery & Charging
      - 5000mAh battery
      - 100W SUPERVOOC fast charging
      - 0-100% in 25 minutes
    `,
    creator: "Ryan Park",
    creator_email: "ryanpark@example.com",
  }  
];

// Drop the existing table if it exists
try {
  db.prepare(`DROP TABLE IF EXISTS mobiles`).run();
  console.log("Dropped existing mobiles table");
} catch (error) {
  console.log("No existing table to drop");
}

// Create the mobiles table
try {
  db.prepare(`
    CREATE TABLE mobiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      summary TEXT NOT NULL,
      specifications TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL
    )
  `).run();
  console.log("Created mobiles table successfully");
} catch (error) {
  console.error("Error creating table:", error.message);
}

// Insert the sample data
function initData() {
  try {
    const stmt = db.prepare(`
      INSERT INTO mobiles (slug, title, image, summary, specifications, creator, creator_email)
      VALUES (@slug, @title, @image, @summary, @specifications, @creator, @creator_email)
    `);

    const insertMany = db.transaction((mobiles) => {
      for (const mobile of mobiles) {
        stmt.run(mobile);
      }
    });

    insertMany(dummyMobiles);
    console.log(`Successfully inserted ${dummyMobiles.length} mobile records`);
  } catch (error) {
    console.error("Error inserting data:", error.message);
  }
}

initData();

// Close the database connection
db.close();
console.log("Database initialized with sample mobile data!");