import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const { width, height } = page.getSize();
  let y = height - 40;
  const margin = 40;
  const contentWidth = width - 2 * margin;

  // Header - Name
  page.drawText('KALAINESAN NATARAJAN', {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: rgb(0.08, 0.08, 0.1),
  });
  y -= 18;

  // Subtitle
  page.drawText('Computer Science Undergraduate | Backend Systems | AI Agents | Machine Learning', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0.25, 0.35, 0.5),
  });
  y -= 14;

  // Contact line
  const contactText = 'kalainesannatarajan@gmail.com  |  +91 7530075404  |  github.com/kalainesan-n  |  linkedin.com/in/kalainesan-natarajan-748151389';
  page.drawText(contactText, {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.35),
  });
  y -= 10;

  // Divider
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1,
    color: rgb(0.8, 0.85, 0.9),
  });
  y -= 16;

  // Helper for section headings
  function drawSection(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 11,
      font: fontBold,
      color: rgb(0.1, 0.15, 0.25),
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.75,
      color: rgb(0.3, 0.45, 0.7),
    });
    y -= 12;
  }

  // 1. Education
  drawSection('Education');
  page.drawText('SRM Institute of Science and Technology, Kattankulathur, India', {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('Expected Graduation: 2029', {
    x: width - margin - 130,
    y,
    size: 9,
    font: fontOblique,
    color: rgb(0.3, 0.3, 0.3),
  });
  y -= 12;
  page.drawText('B.Tech in Computer Science and Engineering', {
    x: margin,
    y,
    size: 9,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25),
  });
  y -= 14;

  page.drawText("GEMS Our Own High School, Al Warqa'a, Dubai", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('2013 - 2023', {
    x: width - margin - 60,
    y,
    size: 9,
    font: fontOblique,
    color: rgb(0.3, 0.3, 0.3),
  });
  y -= 12;
  page.drawText('Primary and Secondary School Education', {
    x: margin,
    y,
    size: 9,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25),
  });
  y -= 16;

  // 2. Technical Skills
  drawSection('Technical Skills');
  const skills = [
    { cat: 'Programming:', items: 'Python, JavaScript, TypeScript, Java, SQL' },
    { cat: 'Backend Engineering:', items: 'Node.js, Express.js, REST APIs, Socket.io, PostgreSQL, MongoDB' },
    { cat: 'Frontend Development:', items: 'React, Next.js, TypeScript, Tailwind CSS' },
    { cat: 'AI & Machine Learning:', items: 'LLM Agents, Multi-Agent Systems, Prompt Engineering, Scikit-learn, Pandas, NumPy' },
    { cat: 'Tools & Infrastructure:', items: 'Git, GitHub, Docker, Supabase, MongoDB Atlas, Vercel, Render' },
  ];

  for (const s of skills) {
    page.drawText(s.cat, {
      x: margin,
      y,
      size: 8.5,
      font: fontBold,
      color: rgb(0.15, 0.2, 0.3),
    });
    page.drawText(s.items, {
      x: margin + 120,
      y,
      size: 8.5,
      font: fontRegular,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= 12;
  }
  y -= 6;

  // 3. Featured Projects
  drawSection('Featured Projects');

  const projects = [
    {
      title: 'BullWarden / TriAgent Advisory System',
      category: 'Multi-Agent AI | Financial Technology (OSSome Hacks 3.0)',
      bullets: [
        'Built autonomous multi-agent AI trading architecture with Analyst, Risk, and Trader agents using OpenClaw.',
        'Enforced ArmorClaw / ArmorIQ runtime security policies with prompt injection defense & Alpaca paper trading API.',
        'Executed LLM-based financial news sentiment analysis with structured audit logging and strict risk classification.',
      ],
    },
    {
      title: 'Offline Sync Conflict Resolution Engine',
      category: 'Backend Engineering | Distributed Systems (GDG on Campus SRM)',
      bullets: [
        'Engineered backend synchronization engine handling concurrent offline edits with optimistic concurrency control.',
        'Implemented PostgreSQL SELECT FOR UPDATE, field-level conflict detection/merging, and idempotency guarantees.',
        'Documented endpoints with Swagger/OpenAPI and validated integrity with comprehensive Jest/Supertest suite.',
      ],
    },
    {
      title: 'QR-Based Geo-Tagged Attendance System',
      category: 'Full-Stack Development | Web Application (NSCC Technical Club)',
      bullets: [
        'Developed full-stack verification system pairing dynamic QR codes with GPS geofencing via Haversine formula.',
        'Created real-time organizer dashboards using Socket.io, JWT auth, MongoDB Atlas, and CSV export capabilities.',
      ],
    },
    {
      title: 'CampusBorrow - Peer-to-Peer Campus Equipment Sharing',
      category: 'Full-Stack Development | Next.js 16 & Supabase',
      bullets: [
        'Architected student lending platform with Next.js 16, React 19, TypeScript, and Supabase Row Level Security.',
        'Enforced atomic PostgreSQL RPC row-locking for race-condition prevention during simultaneous item claims.',
      ],
    },
    {
      title: 'Air Quality Forecasting Pipeline',
      category: 'Machine Learning | Data Science (AI/ML Club Recruitment)',
      bullets: [
        'Formulated 1-hour ahead CO concentration predictor using Linear Regression and engineered temporal lag features.',
        'Evaluated across 5-fold TimeSeriesSplit yielding R2: 0.7377, RMSE: 0.6939, MAE: 0.4652 (10.7% MAE improvement).',
      ],
    },
  ];

  for (const p of projects) {
    page.drawText(p.title, {
      x: margin,
      y,
      size: 9.5,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    page.drawText(`[ ${p.category} ]`, {
      x: margin + fontBold.widthOfTextAtSize(p.title, 9.5) + 8,
      y,
      size: 8,
      font: fontOblique,
      color: rgb(0.35, 0.4, 0.5),
    });
    y -= 11;

    for (const b of p.bullets) {
      page.drawText('•', {
        x: margin + 8,
        y,
        size: 8,
        font: fontBold,
        color: rgb(0.3, 0.35, 0.45),
      });
      page.drawText(b, {
        x: margin + 18,
        y,
        size: 8,
        font: fontRegular,
        color: rgb(0.2, 0.2, 0.2),
      });
      y -= 10;
    }
    y -= 4;
  }
  y -= 2;

  // 4. Experience & Activities
  drawSection('Technical Activities & Club Recruitment');
  const activities = [
    'OSSome Hacks 3.0: Built TriAgent financial advisory system with multi-agent runtime safety policies.',
    'GDG on Campus SRM: Designed offline synchronization engine with PostgreSQL transactions & idempotency.',
    'NSCC Technical Club: Implemented GPS-geofenced QR attendance management system.',
    'AI/ML Club Recruitment: Engineered temporal regression pipeline for ambient air pollution forecasting.',
  ];

  for (const act of activities) {
    page.drawText('•', {
      x: margin + 8,
      y,
      size: 8,
      font: fontBold,
      color: rgb(0.3, 0.35, 0.45),
    });
    page.drawText(act, {
      x: margin + 18,
      y,
      size: 8,
      font: fontRegular,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= 10;
  }

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const filePath = path.join(publicDir, 'resume.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Resume PDF successfully generated at ${filePath} (${pdfBytes.length} bytes)`);
}

generateResume().catch(console.error);
