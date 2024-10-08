const logotext = "Symphony Of Stars";
const meta = {
    title: "Symphony Of Stars",
};

const introdata = {
    title: "Symphony Of Stars",
    animated: {
        first: "Welcome to the vast space experience",
        second: "Sit tight...",
        third: "Now you may start scrolling and Have your soul be calmed by the beauty of nature.",
    },
    description: "A Vibrant Experience Of Space",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];



const dataportfolio = [
    {
        id: "2",
        img: "https://stsci-opo.org/STScI-01H44AY5ZTCV1NPB227B2P650J.png",
        description: "Rho Ophiuchi",
        
    },
    {
        id: "1", // Add this property to each nebula object
        img: "https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png",
        description: "Carina Nebula",
        

    },
    {
        id: "5",
        img: "https://stsci-opo.org/STScI-01GA76RM0C11W977JRHGJ5J26X.png",
        description: "Tarantula Nebula",
        

    },
    {
        id: "3",
        img: "https://stsci-opo.org/STScI-01GFNN3PWJMY4RQXKZ585BC4QH.png",
        description: "Pillars of Creation",

    },
];


   
    const nebulaData = [
        {
            id: "1", // Add this property to each nebula object
            name: "Carina Nebula (NGC 3372)",
            img: "https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png",
            type: "Emission Nebula (H II region)",
            location: "Constellation Carina, approximately 8,500 light-years away from Earth",
            coordinates: "Right Ascension: 10h 45m | Declination: -59° 52′",
            size: "Approximately 230 light-years across",
            discovery: "Discovered in 1751 by French astronomer Nicolas Louis de Lacaille",
            formation: "A massive star-forming region consisting of clouds of ionized gas (mainly hydrogen) illuminated by intense radiation from young, massive stars.",
            keyFeatures: [
                "Eta Carinae: One of the most massive stars known.",
                "Homunculus Nebula: Surrounds Eta Carinae, formed by a massive stellar eruption.",
                "Trumpler 14 and 16: Young star clusters within the nebula."
            ],
            starFormation: "Active star formation is ongoing, containing several young stars and proto-stars.",
            notableFeatures: "The Mystic Mountain: A famous structure resembling a towering pillar of gas and dust.",
            observations: "Visible light is blocked by dust in some regions, infrared observations reveal stars hidden behind dust clouds.",
            scientificImportance: "Provides insights into the life cycle of massive stars and their effects on their surroundings.",
            currentStatus: "An active region of star formation, constantly shaped by stellar winds and radiation.",
            telescopicObservations: "Observed by Hubble and JWST.",
            soundtrack: "public/assets/carina.wav",
        },
        {
            id: "2",
            name: "Ophiuchi Nebula (Rho Ophiuchi Cloud Complex)",
            img: "https://stsci-opo.org/STScI-01H44AY5ZTCV1NPB227B2P650J.png",
            location: "Located about 400–460 light-years away in the constellation Ophiuchus.",
            discovery: "Observed by various astronomers and studied with modern telescopes like Spitzer and Hubble.",
            structure: "A dark nebula filled with gas and dust, along with active star-forming regions.",
            size: "Spans around 14 light-years across.",
            formation: "A cold, dense molecular cloud where gravity pulls gas and dust together, triggering the formation of new stars.",
            stillInFormation: "Yes, the Ophiuchi Nebula is still an active star-forming region.",
            composition: "Mostly hydrogen gas and dust, with traces of other elements.",
            significance: "One of the closest star-forming regions to Earth, providing insights into early stellar evolution.",
            images: "Captured by various observatories like Hubble and Spitzer.",
            impactOnSpaceResearch: "Helps understand how stars and planets form from cold, dense clouds.",
            soundtrack: "public/assets/rhoapochi.wav",
        },
        {
            id: "3",
            name: "Pillars of Creation",
            img: "https://stsci-opo.org/STScI-01GFNN3PWJMY4RQXKZ585BC4QH.png",
            location: "Eagle Nebula (M16), approximately 6,500 to 7,000 light-years away in the constellation Serpens.",
            discovery: "First discovered by NASA's Hubble Space Telescope in 1995.",
            structure: "Large clouds of cold molecular hydrogen gas and dust, sculpted into towering shapes by intense radiation.",
            size: "The tallest of the pillars is about 4 light-years long.",
            formation: "Formed through the process of star formation; new stars are forming as material contracts under gravity.",
            stillInFormation: "Yes, but a supernova shockwave may have already destroyed the pillars.",
            composition: "Primarily composed of hydrogen gas, with traces of heavier elements.",
            significance: "An iconic example of star formation regions, providing insight into star birth.",
            images: "Captured by Hubble with several iconic images released.",
            impactOnSpaceResearch: "Helps understand the mechanisms of star birth and the lifecycle of stars.",
            soundtrack: "public/assets/pillarsofcre.wav",

        },
        {
            id: "5",
            name: "Tarantula Nebula (also known as 30 Doradus)",
            img: "https://stsci-opo.org/STScI-01GA76RM0C11W977JRHGJ5J26X.png",
            location: "Located in the Large Magellanic Cloud, about 160,000 light-years from Earth",
            discovery: "First recorded by Nicolas-Louis de Lacaille in 1751-1753",
            size: "Approximately 1,000 light-years across",

            formation: "One of the most active star-forming regions in the local group of galaxies. Massive star formation is continually occurring, along with the formation of proto-stars.",
            significance: "An iconic example of star formation regions, providing insight into star birth.",
            images: "Observed by a variety of telescopes, including the Hubble Space Telescope, the James Webb Space Telescope (JWST), and various ground-based observatories.",
            soundtrack: "public/assets/tarantula.wav",
        }
    ];
    

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    introdata,
    socialprofils,
    logotext,
    nebulaData,
};