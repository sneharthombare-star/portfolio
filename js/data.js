/*
  ─────────────────────────────────────────────────────────────
  EDIT YOUR CONTENT HERE
  ─────────────────────────────────────────────────────────────
  • SITE  – your name, title, email, LinkedIn, bio and skills.
  • PROJECTS – one entry per project. Order = order on the site
    (the first 4 rotate in the hero).
      image:      put a photo in /images and set e.g. "images/it-office.jpg".
                  Leave "" to show the drawn placeholder illustration.
      gallery:    optional extra photos for the project page, e.g. ["images/a.jpg", "images/b.jpg"].
      art:        placeholder drawing used when there is no image.
      facts:      [label, value] pairs shown in the project page's fact list.
      highlights: bullet points under "What I did".
*/

window.SITE = {
  name: "Sneha Thombare",
  title: "Construction Project Manager",
  email: "sneha.r.thombare@gmail.com",
  linkedin: "https://www.linkedin.com/in/sneha-thombare",
  intro:
    "10+ years of architecture and project coordination on commercial, IT office and multi-unit residential buildings, from feasibility and permits through to construction.",
  bio: [
    "I'm a construction project coordinator based in Pickering, Ontario, with more than ten years of architecture and project coordination experience on commercial, IT office and multi-unit residential buildings.",
    "I've led permitting and authority approvals from submission through construction on buildings up to 12 storeys and 31,000 m², resolving code and fire-review comments to keep projects on schedule.",
    "I hold a Master of Science in Project Management (Construction Management) from Northeastern University, Toronto, and a Bachelor of Architecture from the University of Mumbai.",
  ],
  skills: [
    "Permits & authority approvals",
    "Scheduling: MS Project, Primavera",
    "Drawing QA/QC",
    "Consultant coordination",
    "Risk & quality planning",
    "Ontario Building Code · CCDC 2 · OHSA",
    "AutoCAD · Revit · SketchUp · Navisworks",
  ],
  stats: [
    ["Experience", "10+ years"],
    ["Buildings up to", "12 storeys"],
    ["Largest scheme", "31,000 m²"],
  ],
};

window.PROJECTS = [
  {
    slug: "six-storey-it-office-building",
    title: "Six-Storey IT Office Building",
    category: "Commercial",
    phase: "Permits to Construction",
    location: "Thane, India",
    dates: "2018 – 2022",
    image: "images/web/it-office/photo.jpg",
    gallery: [
      { src: "images/web/it-office/render-front.jpg", caption: "Design render, front view" },
      { src: "images/web/it-office/render-rear.jpg", caption: "Design render, rear view" },
    ],
    art: { type: "tower", floors: 6, tone: "clay" },
    summary:
      "A 22 m high-rise office building of about 2,850 m² (30,700 sq ft), with a basement, ground floor and five office floors. I took it from building, drainage and fire approvals all the way through to completed construction.",
    facts: [
      ["Size", "~2,850 m² (30,700 sq ft)"],
      ["Height", "22 m · basement + G + 5"],
      ["Status", "Completed"],
    ],
    highlights: [
      "Led building, drainage and fire approvals with the industrial development authority and fire department, securing the initial permit (2019) and revised approval (2020).",
      "Resolved fire-department review comments within one day by relocating the fire pump room for direct grade access and moving services out of the basement.",
      "Optimized the design to use nearly all permitted density (FSI 1.48 of 1.50), including approval of additional FSI.",
      "Coordinated construction drawing sets through multiple revisions (stair, washroom, façade, site and compound-wall details) from permit to completion.",
    ],
    scope: ["Building & fire approvals", "Fire-review resolution", "FSI optimization", "Construction drawing coordination"],
  },
  {
    slug: "corporate-it-campus",
    title: "Corporate IT Campus",
    category: "Commercial",
    phase: "Pre-Construction Approvals",
    location: "Navi Mumbai, India",
    dates: "2019 – 2021",
    image: "images/web/it-campus/aerial.jpg",
    gallery: [],
    art: { type: "campus", tone: "sand" },
    summary:
      "A 12-storey, multi-tower IT campus (~60 m) with 8,000+ seats, three above-grade and two below-grade parking levels. It achieved LEED Platinum certification on completion.",
    facts: [
      ["Height", "12 storeys · ~60 m"],
      ["Capacity", "8,000+ seats"],
      ["Authority", "MIDC"],
      ["Certification", "LEED Platinum"],
    ],
    highlights: [
      "Oversaw the permitting and site plan approval process with the client and the authority having jurisdiction (MIDC), securing revised approval before construction began.",
      "Performed QA/QC review of permit drawings for building code, fire code and zoning compliance, covering life safety and egress (exit stairs, firefighter elevators), ramp gradients, FSI, amenity and open-space requirements.",
    ],
    scope: ["Site plan approval", "Permit drawing QA/QC", "Code & zoning compliance", "Life-safety review"],
  },
  {
    slug: "residential-complex",
    title: "Residential Complex",
    category: "Residential",
    phase: "Project Coordination",
    location: "",
    dates: "",
    image: "images/web/residential-complex/birds-eye.jpg",
    gallery: [
      { src: "images/web/residential-complex/aerial-top.jpg", caption: "Aerial view" },
    ],
    art: { type: "complex", tone: "stone" },
    summary:
      "A residential complex where I handled project coordination. (Add a 2–3 sentence summary: location, size, and what was built.)",
    facts: [],
    highlights: ["Add 2–3 bullet points on what you led or delivered."],
    scope: ["Project coordination"],
  },
  {
    slug: "six-storey-hotel",
    title: "Six-Storey Hotel",
    category: "Commercial",
    phase: "Hospitality",
    location: "Thane, India",
    dates: "",
    image: "images/web/hotel/render-front.jpg",
    gallery: [
      { src: "images/web/hotel/photo-night.jpg", caption: "Completed building at night" },
      { src: "images/web/hotel/photo-facade.jpg", caption: "Completed façade" },
      { src: "images/web/hotel/photo-steps.jpg", caption: "Entrance steps" },
      { src: "images/web/hotel/photo-gate.jpg", caption: "Entrance gate" },
      { src: "images/web/hotel/render-corner.jpg", caption: "Design render, corner view" },
      { src: "images/web/hotel/render-rear.jpg", caption: "Design render, rear view" },
      { src: "images/web/hotel/render-aerial.jpg", caption: "Design render, aerial view" },
    ],
    art: { type: "hotel", floors: 6, tone: "stone" },
    summary: "A six-storey hotel in Thane with a ground-floor restaurant, shown here from design renders through to the completed building. (Add 1–2 sentences on the project and the phase you worked on.)",
    facts: [],
    highlights: ["Add 2–3 bullet points on what you led or delivered."],
    scope: ["Hospitality"],
  },
  {
    slug: "residential-township",
    title: "Residential Township",
    category: "Residential",
    phase: "Design & Feasibility",
    location: "",
    dates: "",
    image: "images/web/township/slide-02.jpg",
    gallery: [
      { src: "images/web/township/slide-23.jpg", caption: "Landscape master layout and amenities" },
      { src: "images/web/township/slide-04.jpg", caption: "Villa plans, 15 × 7 m plots" },
      { src: "images/web/township/slide-07.jpg", caption: "Villa plans, 11.1 × 18 m plots" },
      { src: "images/web/township/slide-14.jpg", caption: "Villa area table" },
      { src: "images/web/township/slide-17.jpg", caption: "Residential block plans" },
      { src: "images/web/township/slide-21.jpg", caption: "Clubhouse plans (11,000 sq ft)" },
      { src: "images/web/township/slide-19.jpg", caption: "Site office plan (3,900 sq ft)" },
      { src: "images/web/township/slide-24.jpg", caption: "Landscape space 1: sloping lawn" },
      { src: "images/web/township/slide-25.jpg", caption: "Landscape space 2: seating areas" },
      { src: "images/web/township/slide-26.jpg", caption: "Landscape space 3: kids’ play area" },
      { src: "images/web/township/slide-29.jpg", caption: "Landscape space 5" },
      { src: "images/web/township/slide-30.jpg", caption: "Landscape space 6: sports courts" },
      { src: "images/web/township/slide-31.jpg", caption: "Streetscape" },
    ],
    art: { type: "plan", tone: "sand" },
    summary: "A villa township with east- and west-facing villa plots in three sizes, a residential block, an 11,000 sq ft clubhouse and a landscaped amenity network: sports courts, a kids’ play area, jogging track and amphitheatre. (Add the location and your role.)",
    facts: [
      ["Villa plots", "7 × 15 m · 9 × 15 m · 11.1 × 18 m"],
      ["Clubhouse", "11,000 sq ft"],
      ["Site office", "3,900 sq ft"],
    ],
    highlights: ["Add 2–3 bullet points on what you led or delivered."],
    scope: ["Site & plot layout", "Villa plan options", "Area tables", "Clubhouse & amenities", "Landscape design"],
  },
  {
    slug: "multi-wing-residential-development",
    title: "Mid-Rise Residential Development",
    category: "Residential",
    phase: "Feasibility to Authority Proposal",
    location: "Panvel, Maharashtra, India",
    dates: "Aug 2021 – Feb 2022",
    image: "images/web/mid-rise/view-1.jpg",
    gallery: [
      { src: "images/web/mid-rise/view-2.jpg", caption: "Exterior view with podium parking" },
      { src: "images/web/mid-rise/view-3.jpg", caption: "Bird’s-eye view of both buildings and the central podium garden" },
      { src: "images/web/mid-rise/recreation.jpg", caption: "Podium recreation area" },
      { src: "images/web/mid-rise/view-4.jpg", caption: "Exterior view of the first building" },
      { src: "images/web/mid-rise/view-5.jpg", caption: "Exterior view of the second building" },
      { src: "images/web/mid-rise/unit-2bhk.jpg", caption: "2 BHK unit, 3D plan" },
      { src: "images/web/mid-rise/unit-3bhk.jpg", caption: "3 BHK unit, 3D plan" },
      { src: "images/web/mid-rise/area-statement.jpg?v=2", caption: "Area statement and FSI calculation" },
    ],
    art: { type: "wings", tone: "clay" },
    summary:
      "A 182-unit residential development for an owners' housing society, similar to a condominium corporation, taken from feasibility study to authority proposal on a 2.4-acre site.",
    facts: [
      ["Project type", "Mid-rise multi-unit residential: two buildings, four wings"],
      ["My role", "Architect – Design & Coordination (feasibility, design, presentations)"],
      ["Units", "182 apartments: 114 two-bedroom and 68 three-bedroom"],
      ["Site area", "9,732 m² (2.4 acres)"],
      ["Built-up area", "14,591 m² of 14,598 m² permitted (FSI 1.499 of 1.50)"],
      ["Construction area", "About 31,000 m² (334,000 sq ft)"],
      ["Building heights", "Building 1: stilt + podium + 10 upper floors. Building 2: stilt + podium + 9 upper floors"],
      ["Stage reached", "Proposal stage, with a revised drawing set ready for the authority's headquarters review"],
    ],
    overview: [
      "A housing society planned a new residential complex on a 2.4-acre site in Panvel. The site sits between an industrial-area plot, a railway line and a service road. The brief was to fit as many homes as the permitted density allowed, while keeping the layout livable and acceptable to the planning authority.",
      "I worked on the project from the first feasibility study to the authority proposal. The final scheme has 182 apartments in two buildings of four wings, with parking at ground level under a landscaped podium.",
    ],
    highlights: [
      "Feasibility: prepared area studies for four plot-area scenarios and tested three density options against the permitted FSI.",
      "Design: developed the site layout, podium plan, typical and refuge floor plans, unit plans and schematic section.",
      "Unit mix: balanced two-bedroom and three-bedroom units to use 99.9% of the permitted built-up area.",
      "Presentations: prepared the presentation set and 3D views, and presented the design options in meetings with the society and the planning authority.",
      "Coordination: revised the drawings after each review and prepared the updated set for the authority's headquarters review.",
    ],
    challenge:
      "The society wanted the largest possible number of homes, but the plot area was still being confirmed and the permitted density set a hard limit. The site also had fixed edges on three sides: an industrial plot, a railway line and a planned 12 m service road. Every layout had to work for residents, parking, fire access and open space at the same time.",
    approach: [
      ["Test the numbers first", "I ran area studies for four possible plot areas so the society could see what each one allowed before committing to a design."],
      ["Compare density options", "I developed three layout and density options and compared their unit counts, built-up area and open space."],
      ["Optimize the unit mix", "I adjusted the split of two-bedroom and three-bedroom units until the scheme reached FSI 1.499 against 1.50 permitted."],
      ["Present and revise", "I presented the options in review meetings, then revised the elevations, unit plans and 3D views based on the feedback."],
      ["Prepare the proposal", "I prepared the revised drawing set for the authority's headquarters review."],
    ],
    designHighlights: [
      ["Parking below, people above", "All parking sits at ground level under a podium, served by 6 m driveways with separate entry and exit points and security cabins."],
      ["Podium amenities", "The podium holds recreation rooms, fitness centres, a society office and a fire control room, with skylights bringing daylight to the parking below."],
      ["Green edge", "A landscaped recreational ground runs along the railway side, buffering homes from the tracks."],
      ["Fire safety", "The three-bedroom building includes a refuge floor, and each wing has fire and stretcher-sized lifts beside the staircase."],
      ["Better homes in the same footprint", "The revised three-bedroom layout raised usable area from 1,190 sq ft to 1,339 sq ft (124 m²), about 12% more, by adding enclosed and dry balconies and storage."],
    ],
    outcome: [
      "182 homes planned within the permitted density, using 99.9% of the allowed built-up area.",
      "Design options presented at the planning authority's review meeting.",
      "Revised drawing set prepared for the headquarters review, moving the scheme to proposal stage by February 2022.",
    ],
    deliverables: [
      "Feasibility and area statements for four plot-area scenarios",
      "Site layout and podium floor plan",
      "Typical, refuge and terrace floor plans for both buildings",
      "Unit plans with area calculations",
      "Schematic section",
      "Presentation set with exterior renders, 3D unit plans and elevations",
    ],
    scope: [
      "Feasibility analysis",
      "Area and density calculations",
      "Space planning",
      "Design coordination",
      "Client and authority presentations",
      "Drawing revisions and document control",
    ],
  },
  {
    slug: "recruitment-process-optimization",
    title: "Recruitment Process Optimization",
    category: "Academic",
    phase: "Graduate Capstone",
    location: "Toronto, ON",
    dates: "2025",
    image: "",
    gallery: [],
    art: { type: "flow", tone: "sand" },
    summary:
      "A process-improvement project for an international NGO's People & Culture team, completed with an 8-member team as my Northeastern University capstone. The redesigned, digital-first process cut the projected hiring cycle by about 25%.",
    facts: [
      ["Client", "International NGO · People & Culture"],
      ["Team", "8 members, rotating roles"],
      ["Outcome", "Hiring cycle 7–10 → 5.5–7.5 weeks"],
    ],
    highlights: [
      "Served as Project Manager for the planning phase, leading the team through the Project Charter, Scope Statement, Requirements Document and WBS, and coordinating the sponsor working session used for process mapping.",
      "Mapped the current workflow with block and swim-lane diagrams, identifying manual handoffs that added 2–7 days at several steps; built an 11-week MS Project schedule, RACI matrix, risk register and quality plan with KPIs.",
      "Designed a digital-first recruitment model with piloted micro-automations (Power Automate, Excel–Outlook, MS Forms), cutting the projected hiring cycle by about 25%.",
    ],
    scope: ["Process mapping", "MS Project schedule", "RACI & risk register", "Power Automate"],
  },
];
