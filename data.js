/**
 * =========================================================================
 * ATELIER XUANLUNTANG - LOCAL ADMINISTRATIVE ACCESS DATA CONTROL MATRIX
 * =========================================================================
 * Simply fill in the gaps below to update your entire website text/images.
 */

const ATELIER_DATA = {
    // 01 / ABOUT CONFIGURATION
    about: {
        intro: "Xuanlun (Fiona) Tang is a fashion designer exploring clothing, structure, contemporary craftsmanship, and quiet luxury. Graduated from the prestigious Beijing Institute of Fashion Technology (BIFT), my practice sits between historical atelier craftsmanship and contemporary digital production structures.",
        skills: "Expertise spans across comprehensive collection design, elaborate beading & surface embroidery development, 3D pattern development via CLO 3D, textile print design, detailed production tech packs, and AI-assisted lookbook curation."
    },

    // 02 / COLLECTIONS MODULAR ENGINE (Add infinite seasonal sets)
    collections: [
        {
            id: "elekta-2020",
            title: "Design for ELEKTA 2020A/W &amp; 2020S/S",
            blurb: "28-page design portfolio for ELEKTA, 2020 autumn/winter and spring/summer.",
            lookbook: ["assets/elekta/elekta-01.jpg", "assets/elekta/elekta-02.jpg", "assets/elekta/elekta-03.jpg", "assets/elekta/elekta-04.jpg", "assets/elekta/elekta-05.jpg", "assets/elekta/elekta-06.jpg", "assets/elekta/elekta-07.jpg", "assets/elekta/elekta-08.jpg", "assets/elekta/elekta-09.jpg", "assets/elekta/elekta-10.jpg", "assets/elekta/elekta-11.jpg", "assets/elekta/elekta-12.jpg", "assets/elekta/elekta-13.jpg", "assets/elekta/elekta-14.jpg", "assets/elekta/elekta-15.jpg", "assets/elekta/elekta-16.jpg", "assets/elekta/elekta-17.jpg", "assets/elekta/elekta-18.jpg", "assets/elekta/elekta-19.jpg", "assets/elekta/elekta-20.jpg", "assets/elekta/elekta-21.jpg", "assets/elekta/elekta-22.jpg", "assets/elekta/elekta-23.jpg", "assets/elekta/elekta-24.jpg", "assets/elekta/elekta-25.jpg", "assets/elekta/elekta-26.jpg", "assets/elekta/elekta-27.jpg", "assets/elekta/elekta-28.jpg"],
            garments: []
        },
        {
            id: "season-2026",
            title: "Collection 2026 / Quiet Metamorphosis",
            blurb: "An exploration of heavy tailoring silhouettes paired with delicate organic drapes. Developed with custom premium wool overlays.",
            lookbook: ["assets/look1_front.jpg", "assets/look2_full.jpg", "assets/look3_back.jpg"],
            garments: ["assets/detail1_collar.jpg", "assets/detail1_seam.jpg"]
        },
        {
            id: "season-2025",
            title: "Collection 2025 / Structural Poetry",
            blurb: "Graduation collection focusing on sculptural zero-waste pattern cutouts and architectural silhouettes.",
            lookbook: ["assets/grad_look1.jpg", "assets/grad_look2.jpg"],
            garments: ["assets/grad_det1.jpg"]
        }
    ],

    // 03 / BEADING & EMBROIDERY MODULAR ENGINE (Supports Photos and Videos seamlessly)
    beading: [
        {
            title: "Module 01 / Three-Dimensional Glass Beading Study",
            media: [
                { type: "photo", url: "assets/beading_detail1.jpg", label: "Bugle bead density study" },
                { type: "video", url: "assets/beading_motion1.mp4", label: "Light refraction sample capture" }
            ]
        },
        {
            title: "Module 02 / Couture Metallic Cord Tambour Embroidery",
            media: [
                { type: "photo", url: "assets/beading_detail2.jpg", label: "Goldwork sampler layout" }
            ]
        }
    ],

    // 04 / AI EXPLORATION MODULAR DATA ENGINE
    aiExploration: [
        {
            title: "Design for NIKE 27AO",
            models: ["assets/ai-exploration/Design for NIKE 27AO/Cover.png"],
            lookbook: ["assets/ai-exploration/Design for NIKE 27AO/1zAbg.jpg", "assets/ai-exploration/Design for NIKE 27AO/3KkN6.jpg", "assets/ai-exploration/Design for NIKE 27AO/5jQDP.jpg", "assets/ai-exploration/Design for NIKE 27AO/CletB.jpg", "assets/ai-exploration/Design for NIKE 27AO/DEr6o.jpg", "assets/ai-exploration/Design for NIKE 27AO/HNbFo.jpg", "assets/ai-exploration/Design for NIKE 27AO/RHBDn.jpg", "assets/ai-exploration/Design for NIKE 27AO/c1sCl.jpg", "assets/ai-exploration/Design for NIKE 27AO/d3hoz.jpg", "assets/ai-exploration/Design for NIKE 27AO/dAyDY.jpg", "assets/ai-exploration/Design for NIKE 27AO/nNlT7 (1).jpg", "assets/ai-exploration/Design for NIKE 27AO/nToGU.jpg", "assets/ai-exploration/Design for NIKE 27AO/pDwJP.jpg", "assets/ai-exploration/Design for NIKE 27AO/sLcNH.jpg", "assets/ai-exploration/Design for NIKE 27AO/uaBlX.jpg", "assets/ai-exploration/Design for NIKE 27AO/yhjdO.jpg"]
        },
        {
            title: "Design for Solid",
            models: ["assets/ai-exploration/Men's Wear/Cover.png"],
            lookbook: ["assets/ai-exploration/Men's Wear/Denim JKT-02.png", "assets/ai-exploration/Men's Wear/Denim JKT-03.png", "assets/ai-exploration/Men's Wear/Denim JKT-04.png", "assets/ai-exploration/Men's Wear/Denim JKT-06.png", "assets/ai-exploration/Men's Wear/Pinstripe denim-01.jpg", "assets/ai-exploration/Men's Wear/Pinstripe denim-02.jpg", "assets/ai-exploration/Men's Wear/Pinstripe denim-03.jpg", "assets/ai-exploration/Men's Wear/handstooth-Blazer-01.png", "assets/ai-exploration/Men's Wear/handstooth-Blazer-02.png", "assets/ai-exploration/Men's Wear/handstooth-Blazer-03.jpg", "assets/ai-exploration/Men's Wear/handstooth-Blazer-04.jpg", "assets/ai-exploration/Men's Wear/handstooth-Blazer-05.jpg", "assets/ai-exploration/Men's Wear/image (18).jpg", "assets/ai-exploration/Men's Wear/image (19).jpg", "assets/ai-exploration/Men's Wear/image (2).jpg", "assets/ai-exploration/Men's Wear/image (3).jpg", "assets/ai-exploration/Men's Wear/image (5).jpg", "assets/ai-exploration/Men's Wear/image (8).jpg", "assets/ai-exploration/Men's Wear/image - 2026-03-27T163052.007.jpg", "assets/ai-exploration/Men's Wear/image - 2026-03-27T163501.918.jpg"]
        },
        {
            title: "Knit Texture",
            models: ["assets/ai-exploration/Knit Texture/Cover.png"],
            lookbook: ["assets/ai-exploration/Knit-Texture-01.jpg", "assets/ai-exploration/Knit-Texture-01Knit-Texture-05.jpg", "assets/ai-exploration/Knit-Texture-02.jpg", "assets/ai-exploration/Knit-Texture-06.jpg"]
        }
    ],

    // 05 / CLO DESIGN PHOTO STORAGE ARRAY
    cloDesign: [
        { url: "assets/clo_render1.jpg", label: "3D Denim Jacket Draping Assembly" },
        { url: "assets/clo_render2.jpg", label: "Simulation stress maps for silk bias cut skirt" }
    ],

    // 06 / PRINT DESIGN STORAGE ARRAY
    printDesign: [
        { url: "assets/print_pattern1.jpg", label: "Digital Engineered Reactive Textile Print" },
        { url: "assets/print_pattern2.jpg", label: "Abstract Botanical Motif Repeat Scale" }
    ],

    // 07 / TECH PACK DOWNLOAD ENGINE (Connects to attachment buttons seamlessly)
    techPacks: [
        { name: "Tech Pack / Tailored Wool Blazer V1", fileUrl: "techpacks/Blazer_TechPack_XuanlunTang.pdf" },
        { name: "Tech Pack / Silk Asymmetrical Dress", fileUrl: "techpacks/Dress_TechPack_XuanlunTang.pdf" }
    ],

    // 08 / SKETCHES DISPLAY MATRIX
    sketches: [
        { url: "assets/sketch1.jpg", label: "Initial Concept Silhouette Hand Iterations" },
        { url: "assets/sketch2.jpg", label: "Digital Brush Renderings for Outerwear Lineup" }
    ],

    // 09 / COLLABORATION DETAILS CONFIGURATION
    collaboration: {
        instructions: "<h3>Open to Professional Brand Engagements</h3><p>Available for cross-disciplinary design contracts, capsule collection developments, specialized beading/embroidery sampling direction, and CLO 3D asset scaling.</p>",
        email: "Email: contact@atelier-xuanluntang.com",
        instagram: "Instagram: @atelier.xuanluntang",
        location: "Based in: New York / Shanghai (Remote Global Support)"
    }
};

/**
 * =========================================================================
 * CORE AUTOMATED INJECTION RENDERING ENGINE (DO NOT ALTER CODE BELOW)
 * =========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // Inject About
    document.getElementById("about-intro").textContent = ATELIER_DATA.about.intro;
    document.getElementById("about-skills").textContent = ATELIER_DATA.about.skills;

    // Inject Collections
    const collectionsContainer = document.getElementById("collections-container");
    ATELIER_DATA.collections.forEach(col => {
        let block = document.createElement("div");
        block.className = "modular-block";
        block.innerHTML = `
            <div class="modular-header-title">${col.title}</div>
            <div class="modular-blurb">${col.blurb}</div>
            <div class="media-row-title">— Lookbook Curation</div>
            <div class="media-horizontal-strip">${col.lookbook.map(img => `<img src="${img}" alt="Lookbook Page">`).join('')}</div>
            <div class="media-row-title">— Garment & Textile Details</div>
            <div class="media-horizontal-strip">${col.garments.map(img => `<img src="${img}" alt="Detail View">`).join('')}</div>
        `;
        collectionsContainer.appendChild(block);
    });

    // Inject Beading
    const beadingContainer = document.getElementById("beading-container");
    ATELIER_DATA.beading.forEach(mod => {
        let block = document.createElement("div");
        block.className = "modular-block";
        let mediaItems = mod.media.map(m => {
            if(m.type === "video") {
                return `<div style="display:inline-block;"><video src="${m.url}" controls muted loop></video><div class="grid-item-label">${m.label}</div></div>`;
            }
            return `<div style="display:inline-block;"><img src="${m.url}" alt="Embroidery Piece"><div class="grid-item-label">${m.label}</div></div>`;
        }).join('');
        block.innerHTML = `
            <div class="modular-header-title">${mod.title}</div>
            <div class="media-horizontal-strip" style="margin-top:20px;">${mediaItems}</div>
        `;
        beadingContainer.appendChild(block);
    });

    // Inject AI Exploration
    const aiContainer = document.getElementById("ai-container");
    ATELIER_DATA.aiExploration.forEach(ai => {
        let block = document.createElement("div");
        block.className = "modular-block";
        block.innerHTML = `
            <div class="modular-header-title">${ai.title}</div>
            <div class="media-row-title">— Avatar & Model Generative Frameworks</div>
            <div class="media-horizontal-strip">${ai.models.map(img => `<img src="${img}" alt="AI Model Setup">`).join('')}</div>
            <div class="media-row-title">— Lookbook Scenarios</div>
            <div class="media-horizontal-strip">${ai.lookbook.map(img => `<img src="${img}" alt="AI Lookbook Scene">`).join('')}</div>
        `;
        aiContainer.appendChild(block);
    });

    // Universal Grid Injection Helper
    const injectGrid = (containerId, dataArray) => {
        const el = document.getElementById(containerId);
        dataArray.forEach(item => {
            el.innerHTML += `
                <div class="grid-item-card">
                    <img src="${item.url}" alt="Portfolio Element">
                    <div class="grid-item-label">${item.label}</div>
                </div>
            `;
        });
    };

    injectGrid("clo-container", ATELIER_DATA.cloDesign);
    injectGrid("print-container", ATELIER_DATA.printDesign);
    injectGrid("sketches-container", ATELIER_DATA.sketches);

    // Inject Tech Packs
    const tpContainer = document.getElementById("techpack-container");
    ATELIER_DATA.techPacks.forEach(tp => {
        tpContainer.innerHTML += `
            <div class="techpack-card">
                <div class="techpack-name">${tp.name}</div>
                <a href="${tp.fileUrl}" class="btn btn-secondary" download>Download Attachment ↓</a>
            </div>
        `;
    });

    // Inject Collab Content
    document.getElementById("collab-instructions").innerHTML = ATELIER_DATA.collaboration.instructions;
    document.getElementById("contact-email").textContent = ATELIER_DATA.collaboration.email;
    document.getElementById("contact-instagram").textContent = ATELIER_DATA.collaboration.instagram;
    document.getElementById("contact-location").textContent = ATELIER_DATA.collaboration.location;
});
