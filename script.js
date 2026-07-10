// --- PRORESUME STUDIO CANVA-LIKE SCRIPT ---

// Sample Profiles Database
const sampleProfiles = {
    it: {
        name: "Vikram Malhotra",
        title: "Full Stack Software Engineer",
        email: "vikram.dev@tech.io",
        contact: "+91 87654 32109",
        address: "Bangalore, India",
        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
        objective: "Passionate Full Stack Engineer with 4+ years of experience building scalable web applications. Proficient in React, Node.js, and Cloud architectures. Committed to writing clean, maintainable, and well-tested code.",
        linkedin: "linkedin.com/in/vikramdev",
        github: "github.com/vikramdev",
        twitter: "twitter.com/vikram_codes",
        skills: ["JavaScript", "TypeScript", "React & Redux", "Node.js", "Express.js", "MongoDB", "AWS & Docker", "Git & CI/CD"],
        experience: [
            "Software Engineer III at CloudScale Solutions (2022 - Present)\n- Designed and implemented microservices using Node.js and TypeScript, handling 10k+ requests per second.\n- Optimized React front-end performance, improving Web Vitals scores by 25%.",
            "Full Stack Developer at AppFactory (2020 - 2022)\n- Built e-commerce dashboard using React, Redux, and Express.\n- Integrated Stripe payments and third-party logistics APIs."
        ],
        education: [
            "B.E. in Computer Science, BITS Pilani (2016 - 2020)"
        ],
        projects: [
            "DevPortfolio CMS\n- An open-source CMS for developer portfolios with markdown blog support and automated deployment features."
        ]
    },
    creative: {
        name: "Ananya Sen",
        title: "Senior UI/UX Designer",
        email: "ananya.design@creative.co",
        contact: "+91 76543 21098",
        address: "New Delhi, India",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        objective: "Creative UI/UX Designer with a passion for designing delightful and intuitive user experiences. 5+ years of experience working across mobile and web interfaces, specializing in user research, wireframing, and interactive design systems.",
        linkedin: "linkedin.com/in/ananyadesign",
        github: "dribbble.com/ananyadesign",
        twitter: "behance.net/ananyasen",
        skills: ["User Research", "Wireframing", "Figma Design", "Adobe XD", "Prototyping", "Design Systems", "HTML & CSS", "Webflow Development"],
        experience: [
            "Lead UI/UX Designer at DesignStudio (2021 - Present)\n- Redesigned core mobile app, leading to a 40% increase in user retention.\n- Created and maintained a unified Design System used by 3 separate product lines.",
            "UI Designer at WebCraft Agency (2019 - 2021)\n- Designed high-converting landing pages for B2B SaaS clients.\n- Conducted 30+ user research interviews to guide product design iterations."
        ],
        education: [
            "Bachelor of Design (B.Des), National Institute of Design (NID) (2015 - 2019)"
        ],
        projects: [
            "EcoCart Mobile App Design\n- End-to-end design for a sustainable grocery delivery application, focused on zero-waste packaging indicators."
        ]
    },
    corporate: {
        name: "Aarav Sharma",
        title: "Senior Project Manager",
        email: "aarav.sharma@corp.com",
        contact: "+91 98765 43210",
        address: "Mumbai, India",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        objective: "Result-driven Project Manager with 8+ years of experience leading cross-functional teams to deliver SaaS products. Specialized in Agile methodologies, budget optimization, and stakeholder management.",
        linkedin: "linkedin.com/in/aaravpm",
        github: "aaravsharma.com",
        twitter: "twitter.com/aarav_management",
        skills: ["Agile & Scrum", "Budgeting", "Risk Analysis", "Jira & Confluence", "Stakeholder Relations", "SQL Queries", "Team Leadership"],
        experience: [
            "Lead Project Manager at TechCorp Solutions (2021 - Present)\n- Managed $2M+ portfolio of enterprise software projects.\n- Reduced project delivery cycle times by 15% using Kanban boards.\n- Led team of 15 engineers, designers, and QA specialists.",
            "Associate Project Manager at FinTech Systems (2018 - 2021)\n- Delivered 4 financial applications ahead of schedule.\n- Automated project reporting, saving 5 hours of administrative work weekly."
        ],
        education: [
            "MBA in Operations Management, IIM (2016 - 2018)",
            "B.Tech in Computer Science, Delhi Technological University (2012 - 2016)"
        ],
        projects: [
            "Enterprise Cloud Migration\n- Headed the migration of legacy database infrastructure to AWS, achieving a 99.9% uptime rate."
        ]
    },
    marketing: {
        name: "Rohan Das",
        title: "Growth Marketing Lead",
        email: "rohan.das@growth.agency",
        contact: "+91 99887 76655",
        address: "Pune, India",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        objective: "Data-driven Marketer with 6+ years of experience crafting and executing multi-channel digital acquisition strategies. Proven track record in SEO, PPC, and content marketing to drive brand growth and organic traffic.",
        linkedin: "linkedin.com/in/rohangrowth",
        github: "rohandas.com",
        twitter: "twitter.com/rohangrowth",
        skills: ["SEO Optimization", "Google Ads", "Meta Ads Manager", "Email Campaigns", "Hubspot CRM", "Google Analytics", "A/B Testing", "Copywriting"],
        experience: [
            "Growth Marketing Manager at SaaSify (2022 - Present)\n- Scaled organic monthly traffic from 50k to 250k visitors in 18 months via structured content SEO.\n- Managed a monthly ad spend of $30k with a 3.5x average ROAS.",
            "Digital Marketing Specialist at BrandSpark (2019 - 2022)\n- Led social media campaigns generating over 5M impressions and 20k leads.\n- Set up automated email marketing flows, boosting conversion by 18%."
        ],
        education: [
            "BBA in Marketing, Symbiosis International University (2016 - 2019)"
        ],
        projects: [
            "SaaS Growth Playbook\n- Authored a comprehensive growth marketing playbook downloaded by over 10,000 startup founders."
        ]
    }
};

// --- NAVIGATION TABS ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(el => {
        el.classList.add('d-none');
        el.classList.remove('active');
    });
    
    const activePane = document.getElementById(tabId);
    if (activePane) {
        activePane.classList.remove('d-none');
        activePane.classList.add('active');
    }
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });
}

// --- ZOOM CONTROLLER (CANVA STYLE) ---
function adjustZoom(value) {
    const sheet = document.getElementById("cv-template");
    sheet.style.transform = `scale(${value / 100})`;
    document.getElementById("zoomVal").innerText = `${value}%`;
    
    // Adjust margin when scaling to prevent container clipping
    if (value < 100) {
        sheet.style.marginBottom = `-${(100 - value) * 3}px`;
    } else {
        sheet.style.marginBottom = `2.5rem`;
    }
}

// --- TWO-WAY SYNC BINDING (SIDEBAR -> PREVIEW) ---
function attachInputListeners() {
    const bindings = [
        { id: "nameField", target: "nameT2", default: "Your Name" },
        { id: "clField", target: "nameT3", default: "Professional Title" },
        { id: "contactField", target: "contactT", default: "+91 1234567890" },
        { id: "emailField", target: "emailT", default: "email@example.com" },
        { id: "addressField", target: "addressT", default: "City, Country" },
        { id: "objectiveField", target: "objectiveT", default: "Your professional summary will appear here...", isParagraph: true }
    ];

    bindings.forEach(binding => {
        const field = document.getElementById(binding.id);
        if (field) {
            field.addEventListener("input", (e) => {
                const target = document.getElementById(binding.target);
                if (target) {
                    let val = e.target.value;
                    if (binding.isParagraph) {
                        val = val.replace(/\n/g, '<br>');
                    }
                    target.innerHTML = val || binding.default;
                    saveToLocal();
                }
            });
        }
    });

    // Links update in real time
    ["linkField", "fbField", "instaField"].forEach(id => {
        const field = document.getElementById(id);
        if (field) {
            field.addEventListener("input", () => {
                const linkedin = document.getElementById("linkField").value;
                const github = document.getElementById("fbField").value;
                const twitter = document.getElementById("instaField").value;
                
                const linkT = document.getElementById("linkT");
                const fbT = document.getElementById("fbT");
                const instaT = document.getElementById("instaT");
                
                linkT.innerText = linkedin || "linkedin.com/in/user";
                linkT.href = linkedin ? (linkedin.startsWith('http') ? linkedin : `https://${linkedin}`) : '#';
                
                fbT.innerText = github || "github.com/user";
                fbT.href = github ? (github.startsWith('http') ? github : `https://${github}`) : '#';
                
                instaT.innerText = twitter || "twitter.com/user";
                instaT.href = twitter ? (twitter.startsWith('http') ? twitter : `https://${twitter}`) : '#';
                
                saveToLocal();
            });
        }
    });

    // Dynamic Lists (skills, exp, edu, projects)
    document.addEventListener("input", (e) => {
        if (e.target.classList.contains("weField")) {
            syncExperience();
        } else if (e.target.classList.contains("skField")) {
            syncSkills();
        } else if (e.target.classList.contains("aqField")) {
            syncEducation();
        } else if (e.target.classList.contains("prField")) {
            syncProjects();
        }
        saveToLocal();
    });

    // Profile photo upload preview
    document.getElementById("imgField").addEventListener("change", function () {
        let file = this.files[0];
        const preview = document.getElementById("cv-template");
        if (file) {
            let reader = new FileReader();
            reader.onloadend = function () {
                document.getElementById("imgTam").src = reader.result;
                preview.classList.remove("no-photo");
                saveToLocal();
            };
            reader.readAsDataURL(file);
        } else {
            preview.classList.add("no-photo");
            saveToLocal();
        }
    });
}

// --- TWO-WAY SYNC BINDING (CANVAS SHEET -> SIDEBAR INPUTS) ---
function setupCanvasInlineListeners() {
    document.addEventListener('input', (e) => {
        const target = e.target;
        if (!target.hasAttribute('contenteditable')) return;

        // Custom Sections Title / Content
        const customTitleId = target.dataset.customTitleId;
        const customContentId = target.dataset.customContentId;
        
        if (customTitleId) {
            document.querySelectorAll('.custom-section-item').forEach(item => {
                if (item.dataset.id === customTitleId) {
                    item.querySelector('.section-title').value = target.innerText;
                }
            });
            saveToLocal();
            return;
        }
        
        if (customContentId) {
            document.querySelectorAll('.custom-section-item').forEach(item => {
                if (item.dataset.id === customContentId) {
                    item.querySelector('.section-content').value = target.innerHTML.replace(/<br\s*\/?>/gi, '\n');
                }
            });
            saveToLocal();
            return;
        }

        // List groups (Skills, Experience, Education, Projects)
        const group = target.dataset.fieldGroup;
        const index = parseInt(target.dataset.index);
        
        if (group && !isNaN(index)) {
            const inputClass = `${group}Field`;
            const inputs = document.getElementsByClassName(inputClass);
            if (inputs[index]) {
                if (group === 'sk') {
                    inputs[index].value = target.innerText.replace(/\n/g, '');
                } else {
                    inputs[index].value = target.innerHTML.replace(/<br\s*\/?>/gi, '\n');
                }
                saveToLocal();
            }
            return;
        }

        // Regular header/objective text elements
        const fieldId = target.dataset.field;
        if (fieldId) {
            const inputEl = document.getElementById(fieldId);
            if (inputEl) {
                if (fieldId === "objectiveField") {
                    inputEl.value = target.innerHTML.replace(/<br\s*\/?>/gi, '\n');
                } else {
                    inputEl.value = target.innerText;
                }
                saveToLocal();
            }
        }
    });
}

// --- SYNC DYNAMIC LISTS TO PREVIEW DOM ---
function syncSkills() {
    const inputs = document.getElementsByClassName("skField");
    let html = "";
    for (let i = 0; i < inputs.length; i++) {
        const val = inputs[i].value.trim();
        if (val) {
            html += `<li class="badge bg-secondary mb-1 me-1" contenteditable="true" data-field-group="sk" data-index="${i}">${val}</li>`;
        }
    }
    document.getElementById("skT").innerHTML = html || `<li class="text-white-50 small">Add skills in sidebar...</li>`;
}

function syncExperience() {
    const inputs = document.getElementsByClassName("weField");
    let html = "";
    for (let i = 0; i < inputs.length; i++) {
        const val = inputs[i].value.trim();
        if (val) {
            html += `<li class="mb-3" contenteditable="true" data-field-group="we" data-index="${i}">${val.replace(/\n/g, '<br>')}</li>`;
        }
    }
    document.getElementById("weT").innerHTML = html || `<li>Add experience in sidebar...</li>`;
}

// Fixed minor bug where syncEducation/syncProjects weren't properly mapping their lists on start
function syncEducation() {
    const inputs = document.getElementsByClassName("aqField");
    let html = "";
    for (let i = 0; i < inputs.length; i++) {
        const val = inputs[i].value.trim();
        if (val) {
            html += `<li class="mb-2" contenteditable="true" data-field-group="aq" data-index="${i}">${val.replace(/\n/g, '<br>')}</li>`;
        }
    }
    document.getElementById("aqT").innerHTML = html || `<li>Add education in sidebar...</li>`;
}

function syncProjects() {
    const inputs = document.getElementsByClassName("prField");
    let html = "";
    for (let i = 0; i < inputs.length; i++) {
        const val = inputs[i].value.trim();
        if (val) {
            html += `<li class="mb-2" contenteditable="true" data-field-group="pr" data-index="${i}">${val.replace(/\n/g, '<br>')}</li>`;
        }
    }
    document.getElementById("prT").innerHTML = html || `<li>Add projects in sidebar...</li>`;
}

function syncAll() {
    document.getElementById("nameT2").innerHTML = document.getElementById("nameField").value || "Your Name";
    document.getElementById("nameT3").innerHTML = document.getElementById("clField").value || "Professional Title";
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value || "+91 1234567890";
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value || "email@example.com";
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value || "City, Country";
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value.replace(/\n/g, '<br>') || "Your professional summary will appear here...";
    
    const linkedin = document.getElementById("linkField").value;
    const github = document.getElementById("fbField").value;
    const twitter = document.getElementById("instaField").value;
    
    const linkT = document.getElementById("linkT");
    const fbT = document.getElementById("fbT");
    const instaT = document.getElementById("instaT");
    
    linkT.innerText = linkedin || "linkedin.com/in/user";
    linkT.href = linkedin ? (linkedin.startsWith('http') ? linkedin : `https://${linkedin}`) : '#';
    
    fbT.innerText = github || "github.com/user";
    fbT.href = github ? (github.startsWith('http') ? github : `https://${github}`) : '#';
    
    instaT.innerText = twitter || "twitter.com/user";
    instaT.href = twitter ? (twitter.startsWith('http') ? twitter : `https://${twitter}`) : '#';
    
    syncSkills();
    syncExperience();
    syncEducation();
    syncProjects();
}

// --- ADD DYNAMIC SIDEBAR INPUT BLOCKS ---
function addNewSKfield() {
    const div = document.createElement("div");
    div.className = "input-group mb-2";
    div.innerHTML = `
        <input type="text" class="form-control form-control-sm skField" placeholder="e.g. JavaScript">
        <button class="btn btn-outline-danger btn-sm" type="button" onclick="this.closest('.input-group').remove(); syncSkills()"><i class="fas fa-trash"></i></button>
    `;
    document.getElementById("sk").appendChild(div);
    div.querySelector('input').focus();
    syncSkills();
}

function addNewWEfield() {
    const div = document.createElement("div");
    div.className = "experience-block border-bottom pb-2 mb-2 position-relative";
    div.innerHTML = `
        <textarea class="form-control form-control-sm weField" rows="3" placeholder="Enter job description..."></textarea>
        <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.experience-block').remove(); syncExperience()"><i class="fas fa-trash-alt"></i></button>
    `;
    document.getElementById("we").appendChild(div);
    div.querySelector('textarea').focus();
    syncExperience();
}

function addNewAQfield() {
    const div = document.createElement("div");
    div.className = "education-block border-bottom pb-2 mb-2 position-relative";
    div.innerHTML = `
        <textarea class="form-control form-control-sm aqField" rows="2" placeholder="Enter degree/school..."></textarea>
        <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.education-block').remove(); syncEducation()"><i class="fas fa-trash-alt"></i></button>
    `;
    document.getElementById("aq").appendChild(div);
    div.querySelector('textarea').focus();
    syncEducation();
}

function addNewPRfield() {
    const div = document.createElement("div");
    div.className = "project-block border-bottom pb-2 mb-2 position-relative";
    div.innerHTML = `
        <textarea class="form-control form-control-sm prField" rows="2" placeholder="Enter project description..."></textarea>
        <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.project-block').remove(); syncProjects()"><i class="fas fa-trash-alt"></i></button>
    `;
    document.getElementById("pr").appendChild(div);
    div.querySelector('textarea').focus();
    syncProjects();
}

// --- CUSTOM SECTION CREATOR ---
function addCustomSection() {
    const id = `custom-${Date.now()}`;
    createCustomSection(id, "Custom Section", "");
}

function createCustomSection(id, title, content) {
    const customSectionsDiv = document.getElementById('custom-sections');
    const newFormSection = document.createElement('div');
    newFormSection.className = 'custom-section-item border-bottom pb-3 mb-3 position-relative';
    newFormSection.dataset.id = id;
    newFormSection.innerHTML = `
        <div class="mb-2">
            <label class="form-label small fw-bold">Section Title</label>
            <input type="text" class="form-control form-control-sm section-title" value="${title}" oninput="updateCustomTitle('${id}', this.value)">
        </div>
        <div class="mb-2">
            <label class="form-label small fw-bold">Content</label>
            <textarea class="form-control form-control-sm section-content" rows="3" oninput="updateCustomContent('${id}', this.value)" placeholder="e.g. Certified Scrum Master (CSM) - Project Management Institute (2023)">${content || ''}</textarea>
        </div>
        <button class="btn btn-link text-danger btn-sm p-0" onclick="removeCustomSection('${id}', this)"><i class="fas fa-trash-alt me-1"></i>Delete Section</button>
    `;
    customSectionsDiv.appendChild(newFormSection);

    // Create container on resume template
    const rightDropzone = document.getElementById('right-dropzone');
    const newPreviewSection = document.createElement('div');
    newPreviewSection.id = `sec-${id}`;
    newPreviewSection.className = 'cv-section';
    newPreviewSection.setAttribute('draggable', 'true');
    newPreviewSection.dataset.section = id;
    newPreviewSection.innerHTML = `
        <div class="section-hover-controls">
            <span class="drag-handle" title="Drag to Reorder"><i class="fas fa-grip-vertical"></i></span>
            <button class="section-action-btn" onclick="moveSection('${id}', 'up')" title="Move Up"><i class="fas fa-chevron-up"></i></button>
            <button class="section-action-btn" onclick="moveSection('${id}', 'down')" title="Move Down"><i class="fas fa-chevron-down"></i></button>
            <button class="section-action-btn text-danger" onclick="hideSection('${id}')" title="Hide Section"><i class="fas fa-eye-slash"></i></button>
        </div>
        <h5 class="fw-bold text-primary mb-3 text-uppercase" contenteditable="true" data-custom-title-id="${id}">${title}</h5>
        <div class="section-content small" contenteditable="true" data-custom-content-id="${id}">
            ${content || 'Click to edit custom content...'}
        </div>
    `;
    rightDropzone.appendChild(newPreviewSection);

    setupDragAndDrop();
    saveToLocal();
}

function updateCustomTitle(id, value) {
    const el = document.querySelector(`[data-custom-title-id="${id}"]`);
    if (el) el.innerText = value;
    saveToLocal();
}

function updateCustomContent(id, value) {
    const el = document.querySelector(`[data-custom-content-id="${id}"]`);
    if (el) {
        if (value.trim().startsWith('-') || value.trim().startsWith('•')) {
            const items = value.split('\n').map(line => line.replace(/^[•-]\s*/, '')).filter(i => i.trim());
            el.innerHTML = `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
        } else {
            el.innerHTML = value.replace(/\n/g, '<br>');
        }
    }
    saveToLocal();
}

function removeCustomSection(id, btn) {
    if (confirm("Are you sure you want to delete this custom section?")) {
        const previewSec = document.getElementById(`sec-${id}`);
        if (previewSec) previewSec.remove();
        btn.closest('.custom-section-item').remove();
        saveToLocal();
    }
}

// --- PROFILE SAMPLE POPULATION CONTROLLER ---
function loadProfile(category) {
    const profile = sampleProfiles[category];
    if (!profile) return;
    
    document.getElementById("nameField").value = profile.name;
    document.getElementById("clField").value = profile.title;
    document.getElementById("emailField").value = profile.email;
    document.getElementById("contactField").value = profile.contact;
    document.getElementById("addressField").value = profile.address;
    document.getElementById("objectiveField").value = profile.objective;
    document.getElementById("linkField").value = profile.linkedin;
    document.getElementById("fbField").value = profile.github;
    document.getElementById("instaField").value = profile.twitter;
    
    if (profile.photo) {
        document.getElementById("imgTam").src = profile.photo;
        document.getElementById("cv-template").classList.remove("no-photo");
        const showPhotoCB = document.getElementById("showPhoto");
        if (showPhotoCB) showPhotoCB.checked = true;
    }
    
    // Load skills
    const skContainer = document.getElementById("sk");
    skContainer.innerHTML = "";
    profile.skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "input-group mb-2";
        div.innerHTML = `
            <input type="text" class="form-control form-control-sm skField" value="${skill}">
            <button class="btn btn-outline-danger btn-sm" type="button" onclick="this.closest('.input-group').remove(); syncSkills()"><i class="fas fa-trash"></i></button>
        `;
        skContainer.appendChild(div);
    });
    
    // Load experience
    const weContainer = document.getElementById("we");
    weContainer.innerHTML = "";
    profile.experience.forEach(exp => {
        const div = document.createElement("div");
        div.className = "experience-block border-bottom pb-2 mb-2 position-relative";
        div.innerHTML = `
            <textarea class="form-control form-control-sm weField" rows="3">${exp}</textarea>
            <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.experience-block').remove(); syncExperience()"><i class="fas fa-trash-alt"></i></button>
        `;
        weContainer.appendChild(div);
    });
    
    // Load education
    const aqContainer = document.getElementById("aq");
    aqContainer.innerHTML = "";
    profile.education.forEach(edu => {
        const div = document.createElement("div");
        div.className = "education-block border-bottom pb-2 mb-2 position-relative";
        div.innerHTML = `
            <textarea class="form-control form-control-sm aqField" rows="2">${edu}</textarea>
            <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.education-block').remove(); syncEducation()"><i class="fas fa-trash-alt"></i></button>
        `;
        aqContainer.appendChild(div);
    });
    
    // Load projects
    const prContainer = document.getElementById("pr");
    prContainer.innerHTML = "";
    profile.projects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "project-block border-bottom pb-2 mb-2 position-relative";
        div.innerHTML = `
            <textarea class="form-control form-control-sm prField" rows="2">${proj}</textarea>
            <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.project-block').remove(); syncProjects()"><i class="fas fa-trash-alt"></i></button>
        `;
        prContainer.appendChild(div);
    });

    syncAll();
    saveToLocal();
    showToast(`Loaded ${profile.title} profile successfully!`);
}

// --- DESIGN OPTION CONTROLLERS ---
function selectTemplate(variant) {
    const preview = document.getElementById("cv-template");
    preview.classList.remove("template-modern", "template-classic", "template-minimal", "template-sidebar", "template-grid");
    
    if (variant === "variant1") {
        preview.classList.add("template-modern");
        showToast("Applied Modern Sidebar layout");
    } else if (variant === "variant2") {
        preview.classList.add("template-classic");
        showToast("Applied Classic Centered layout");
    } else if (variant === "variant3") {
        preview.classList.add("template-minimal");
        showToast("Applied Minimalist Clean layout");
    } else if (variant === "variant4") {
        preview.classList.add("template-sidebar");
        showToast("Applied Sleek Split layout");
    } else if (variant === "variant5") {
        preview.classList.add("template-grid");
        showToast("Applied Technical Grid layout");
    }
    
    saveToLocal();
}

function changeFontPairing() {
    const font = document.getElementById("fontSelector").value;
    const preview = document.getElementById("cv-template");
    preview.classList.remove("font-modern", "font-executive", "font-creative", "font-technical");
    preview.classList.add(`font-${font}`);
    saveToLocal();
}

function changeBackground() {
    const bg = document.getElementById("bgSelector").value;
    const preview = document.getElementById("cv-template");
    preview.classList.remove("bg-plain", "bg-dots", "bg-grid", "bg-gradient", "bg-texture");
    preview.classList.add(`bg-${bg}`);
    saveToLocal();
}

function applyPalette(primary, text) {
    const root = document.documentElement;
    root.style.setProperty('--resume-primary', primary);
    root.style.setProperty('--resume-accent', primary);
    root.style.setProperty('--resume-text', text);
    
    document.getElementById('primaryColorPicker').value = primary;
    document.getElementById('textColorPicker').value = text;
    
    saveToLocal();
    showToast("Palette presets applied!");
}

function adjustLayoutSpacing(type, value) {
    const preview = document.getElementById("cv-template");
    if (type === 'section') {
        preview.style.setProperty('--section-spacing', `${value}px`);
        document.getElementById('sectionSpaceVal').innerText = `${value}px`;
    } else if (type === 'font') {
        preview.style.setProperty('--font-scale', value);
        document.getElementById('fontSizeVal').innerText = value;
    } else if (type === 'radius') {
        preview.style.setProperty('--photo-radius', `${value}%`);
        document.getElementById('radiusVal').innerText = `${value}%`;
    }
    saveToLocal();
}

function toggleField(field) {
    const checkbox = document.getElementById(`show${field.charAt(0).toUpperCase() + field.slice(1)}`);
    const isChecked = checkbox ? checkbox.checked : false;
    const preview = document.getElementById('cv-template');
    
    if (field === 'photo') {
        if (isChecked) {
            preview.classList.remove('no-photo');
        } else {
            preview.classList.add('no-photo');
        }
    } else if (field === 'address') {
        const addressT = document.getElementById('addressT');
        if (addressT) {
            addressT.closest('p').style.display = isChecked ? 'block' : 'none';
        }
    } else if (field === 'social') {
        const linkSec = document.getElementById('sec-links');
        if (linkSec) {
            linkSec.style.display = isChecked ? 'block' : 'none';
        }
    }
    saveToLocal();
}

// Section visibility toggles
function toggleFieldSec(sectionId) {
    const checkbox = document.getElementById(`show${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`);
    const isChecked = checkbox ? checkbox.checked : false;
    const sec = document.getElementById(`sec-${sectionId}`);
    if (sec) {
        sec.style.display = isChecked ? 'block' : 'none';
    }
    saveToLocal();
}

// Floating Toolbar Hide actions
function hideSection(sectionId) {
    const sec = document.getElementById(`sec-${sectionId}`);
    if (sec) {
        sec.style.display = 'none';
        showToast(`Hidden ${sectionId} section. Re-enable in Design tab.`);
        
        // Find corresponding toggle in Customizer
        const checkboxId = `show${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) {
            checkbox.checked = false;
        } else {
            // Check for photo/address/social mapping
            if (sectionId === 'contact') {
                document.getElementById('showAddress').checked = false;
            } else if (sectionId === 'links') {
                document.getElementById('showSocial').checked = false;
            }
        }
        saveToLocal();
    }
}

// --- DYNAMIC SECTION REORDERING (BUTTON METHOD) ---
function moveSection(id, direction) {
    const section = document.getElementById(`sec-${id}`);
    if (!section) return;
    
    const parent = section.parentElement;
    if (direction === 'up') {
        const prev = section.previousElementSibling;
        if (prev && prev.classList.contains('cv-section')) {
            parent.insertBefore(section, prev);
        }
    } else if (direction === 'down') {
        const next = section.nextElementSibling;
        if (next && next.classList.contains('cv-section')) {
            parent.insertBefore(section, next.nextElementSibling);
        }
    }
    saveLayoutOrder();
}

// --- HTML5 DRAG AND DROP REORDERING ---
let draggedElement = null;

function setupDragAndDrop() {
    const sections = document.querySelectorAll('.cv-section');
    const dropzones = document.querySelectorAll('.cv-dropzone');

    sections.forEach(section => {
        section.setAttribute('draggable', 'true');
        
        section.removeEventListener('dragstart', handleDragStart);
        section.addEventListener('dragstart', handleDragStart);
        
        section.removeEventListener('dragend', handleDragEnd);
        section.addEventListener('dragend', handleDragEnd);
    });

    dropzones.forEach(zone => {
        zone.removeEventListener('dragover', handleDragOver);
        zone.addEventListener('dragover', handleDragOver);

        zone.removeEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragenter', handleDragEnter);

        zone.removeEventListener('dragleave', handleDragLeave);
        zone.addEventListener('dragleave', handleDragLeave);

        zone.removeEventListener('drop', handleDrop);
        zone.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', this.id);
    setTimeout(() => {
        this.style.opacity = '0.3';
    }, 0);
}

function handleDragEnd() {
    this.classList.remove('dragging');
    this.style.opacity = '1';
    draggedElement = null;
    saveLayoutOrder();
}

function handleDragOver(e) {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    if (!dragging) return;
    
    const afterElement = getDragAfterElement(this, e.clientY);
    if (afterElement == null) {
        this.appendChild(dragging);
    } else {
        this.insertBefore(dragging, afterElement);
    }
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
}

function handleDragLeave() {
    this.classList.remove('drag-over');
}

function handleDrop() {
    this.classList.remove('drag-over');
    saveLayoutOrder();
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.cv-section:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// --- SAVE / LOAD LAYOUT ORDERS ---
function saveLayoutOrder() {
    const leftCol = document.getElementById('left-dropzone');
    const rightCol = document.getElementById('right-dropzone');
    
    const leftSections = [...leftCol.querySelectorAll('.cv-section')].map(sec => sec.id);
    const rightSections = [...rightCol.querySelectorAll('.cv-section')].map(sec => sec.id);
    
    localStorage.setItem('cv-layout-left', JSON.stringify(leftSections));
    localStorage.setItem('cv-layout-right', JSON.stringify(rightSections));
    
    saveToLocal();
}

function loadLayoutOrder() {
    const leftCol = document.getElementById('left-dropzone');
    const rightCol = document.getElementById('right-dropzone');
    
    const leftOrder = JSON.parse(localStorage.getItem('cv-layout-left'));
    const rightOrder = JSON.parse(localStorage.getItem('cv-layout-right'));
    
    if (leftOrder && leftOrder.length > 0) {
        leftOrder.forEach(id => {
            const sec = document.getElementById(id);
            if (sec) leftCol.appendChild(sec);
        });
    }
    if (rightOrder && rightOrder.length > 0) {
        rightOrder.forEach(id => {
            const sec = document.getElementById(id);
            if (sec) rightCol.appendChild(sec);
        });
    }
}

function resetLayout() {
    const leftCol = document.getElementById('left-dropzone');
    const rightCol = document.getElementById('right-dropzone');
    
    const defaultLeft = ['sec-contact', 'sec-skills', 'sec-links'];
    const defaultRight = ['sec-objective', 'sec-experience', 'sec-education', 'sec-projects'];
    
    defaultLeft.forEach(id => {
        const sec = document.getElementById(id);
        if (sec) {
            leftCol.appendChild(sec);
            sec.style.display = 'block';
        }
    });
    
    defaultRight.forEach(id => {
        const sec = document.getElementById(id);
        if (sec) {
            rightCol.appendChild(sec);
            sec.style.display = 'block';
        }
    });
    
    // Reset visibility switches in Sidebar
    document.querySelectorAll('#design-tab input[type="checkbox"]').forEach(cb => cb.checked = true);
    
    localStorage.removeItem('cv-layout-left');
    localStorage.removeItem('cv-layout-right');
    saveToLocal();
    showToast("Resume sections reset to default positions!");
}

// --- STATE PERSISTENCE (LOCAL STORAGE) ---
function saveToLocal() {
    const customSections = [];
    document.querySelectorAll('.custom-section-item').forEach(item => {
        const id = item.dataset.id;
        const title = item.querySelector('.section-title').value;
        const content = item.querySelector('.section-content').value;
        customSections.push({ id, title, content });
    });

    const data = {
        personal: {
            name: document.getElementById("nameField").value,
            title: document.getElementById("clField").value,
            email: document.getElementById("emailField").value,
            contact: document.getElementById("contactField").value,
            address: document.getElementById("addressField").value,
            objective: document.getElementById("objectiveField").value,
            linkedin: document.getElementById("linkField").value,
            github: document.getElementById("fbField").value,
            twitter: document.getElementById("instaField").value,
            photo: document.getElementById("imgTam").src
        },
        skills: Array.from(document.getElementsByClassName("skField")).map(el => el.value),
        experience: Array.from(document.getElementsByClassName("weField")).map(el => el.value),
        education: Array.from(document.getElementsByClassName("aqField")).map(el => el.value),
        projects: Array.from(document.getElementsByClassName("prField")).map(el => el.value),
        customSections: customSections,
        design: {
            font: document.getElementById("fontSelector").value,
            bg: document.getElementById("bgSelector").value,
            primaryColor: document.getElementById("primaryColorPicker").value,
            textColor: document.getElementById("textColorPicker").value,
            sectionSpacing: document.getElementById("sectionSpaceRange").value,
            fontSize: document.getElementById("fontSizeRange").value,
            photoRadius: document.getElementById("radiusRange").value,
            showPhoto: document.getElementById("showPhoto").checked,
            showAddress: document.getElementById("showAddress").checked,
            showSocial: document.getElementById("showSocial").checked,
            showObjective: document.getElementById("showObjective").checked,
            showExperience: document.getElementById("showExperience").checked,
            showEducation: document.getElementById("showEducation").checked,
            showProjects: document.getElementById("showProjects").checked,
            zoom: document.getElementById("zoomRange").value
        }
    };
    localStorage.setItem("proResumeData", JSON.stringify(data));
}

function loadFromLocal() {
    try {
        const saved = localStorage.getItem("proResumeData");
        if (!saved) {
            loadProfile('it'); // Preload tech profile by default
            return;
        }
        
        const data = JSON.parse(saved);
        if (!data || !data.personal) {
            loadProfile('it');
            return;
        }
        
        document.getElementById("nameField").value = data.personal.name || "";
        document.getElementById("clField").value = data.personal.title || "";
        document.getElementById("emailField").value = data.personal.email || "";
        document.getElementById("contactField").value = data.personal.contact || "";
        document.getElementById("addressField").value = data.personal.address || "";
        document.getElementById("objectiveField").value = data.personal.objective || "";
        document.getElementById("linkField").value = data.personal.linkedin || "";
        document.getElementById("fbField").value = data.personal.github || "";
        document.getElementById("instaField").value = data.personal.twitter || "";
        
        if (data.personal.photo && data.personal.photo.startsWith('data:image')) {
            document.getElementById("imgTam").src = data.personal.photo;
        }

        // Skills
        const skContainer = document.getElementById("sk");
        skContainer.innerHTML = "";
        if (data.skills && data.skills.length > 0) {
            data.skills.forEach(skill => {
                const div = document.createElement("div");
                div.className = "input-group mb-2";
                div.innerHTML = `
                    <input type="text" class="form-control form-control-sm skField" value="${skill}">
                    <button class="btn btn-outline-danger btn-sm" type="button" onclick="this.closest('.input-group').remove(); syncSkills()"><i class="fas fa-trash"></i></button>
                `;
                skContainer.appendChild(div);
            });
        }

        // Experience
        const weContainer = document.getElementById("we");
        weContainer.innerHTML = "";
        if (data.experience && data.experience.length > 0) {
            data.experience.forEach(exp => {
                const div = document.createElement("div");
                div.className = "experience-block border-bottom pb-2 mb-2 position-relative";
                div.innerHTML = `
                    <textarea class="form-control form-control-sm weField" rows="3">${exp}</textarea>
                    <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.experience-block').remove(); syncExperience()"><i class="fas fa-trash-alt"></i></button>
                `;
                weContainer.appendChild(div);
            });
        }

        // Education
        const aqContainer = document.getElementById("aq");
        aqContainer.innerHTML = "";
        if (data.education && data.education.length > 0) {
            data.education.forEach(edu => {
                const div = document.createElement("div");
                div.className = "education-block border-bottom pb-2 mb-2 position-relative";
                div.innerHTML = `
                    <textarea class="form-control form-control-sm aqField" rows="2">${edu}</textarea>
                    <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.education-block').remove(); syncEducation()"><i class="fas fa-trash-alt"></i></button>
                `;
                aqContainer.appendChild(div);
            });
        }

        // Projects
        const prContainer = document.getElementById("pr");
        prContainer.innerHTML = "";
        if (data.projects && data.projects.length > 0) {
            data.projects.forEach(proj => {
                const div = document.createElement("div");
                div.className = "project-block border-bottom pb-2 mb-2 position-relative";
                div.innerHTML = `
                    <textarea class="form-control form-control-sm prField" rows="2">${proj}</textarea>
                    <button class="btn btn-link text-danger btn-sm position-absolute top-0 end-0 p-1" onclick="this.closest('.project-block').remove(); syncProjects()"><i class="fas fa-trash-alt"></i></button>
                `;
                prContainer.appendChild(div);
            });
        }

        // Custom
        const customDiv = document.getElementById('custom-sections');
        if (customDiv) customDiv.innerHTML = '';
        document.querySelectorAll("[id^='sec-custom-']").forEach(el => el.remove());
        if (data.customSections) {
            data.customSections.forEach(sec => {
                createCustomSection(sec.id, sec.title, sec.content);
            });
        }

        // Design
        if (data.design) {
            document.getElementById("fontSelector").value = data.design.font || "modern";
            document.getElementById("bgSelector").value = data.design.bg || "plain";
            document.getElementById("primaryColorPicker").value = data.design.primaryColor || "#2563eb";
            document.getElementById("textColorPicker").value = data.design.textColor || "#1e293b";
            document.getElementById("sectionSpaceRange").value = data.design.sectionSpacing || "12";
            document.getElementById("fontSizeRange").value = data.design.fontSize || "1.0";
            document.getElementById("radiusRange").value = data.design.photoRadius || "50";
            
            document.getElementById("showPhoto").checked = data.design.showPhoto !== false;
            document.getElementById("showAddress").checked = data.design.showAddress !== false;
            document.getElementById("showSocial").checked = data.design.showSocial !== false;
            
            document.getElementById("showObjective").checked = data.design.showObjective !== false;
            document.getElementById("showExperience").checked = data.design.showExperience !== false;
            document.getElementById("showEducation").checked = data.design.showEducation !== false;
            document.getElementById("showProjects").checked = data.design.showProjects !== false;
            
            const savedZoom = data.design.zoom || "100";
            document.getElementById("zoomRange").value = savedZoom;
            adjustZoom(savedZoom);

            changeFontPairing();
            changeBackground();
            
            const root = document.documentElement;
            root.style.setProperty('--resume-primary', data.design.primaryColor);
            root.style.setProperty('--resume-accent', data.design.primaryColor);
            root.style.setProperty('--resume-text', data.design.textColor);
            
            adjustLayoutSpacing('section', data.design.sectionSpacing);
            adjustLayoutSpacing('font', data.design.fontSize);
            adjustLayoutSpacing('radius', data.design.photoRadius);
            
            toggleField('photo');
            toggleField('address');
            toggleField('social');
            
            toggleFieldSec('objective');
            toggleFieldSec('experience');
            toggleFieldSec('education');
            toggleFieldSec('projects');
        }

        loadLayoutOrder();
        syncAll();
    } catch (e) {
        console.error("Error loading resume data from storage, resetting...", e);
        localStorage.removeItem("proResumeData");
        loadProfile('it');
    }
}

// --- ACTIONS & UTILS ---
function showToast(message) {
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.innerText = message;
    const toastEl = document.getElementById('actionToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

function printCV() {
    window.print();
}

// --- COLOR STUDIO LIVE SETUP ---
function setupColorPickers() {
    const root = document.documentElement;
    const primaryPicker = document.getElementById('primaryColorPicker');
    if (primaryPicker) {
        primaryPicker.addEventListener('input', (e) => {
            root.style.setProperty('--resume-primary', e.target.value);
            root.style.setProperty('--resume-accent', e.target.value);
            saveToLocal();
        });
    }

    const textPicker = document.getElementById('textColorPicker');
    if (textPicker) {
        textPicker.addEventListener('input', (e) => {
            root.style.setProperty('--resume-text', e.target.value);
            saveToLocal();
        });
    }
}

// --- CANVAS TEXT SELECTION FLOATING TOOLBAR ---
function setupTextSelectionToolbar() {
    const toolbar = document.createElement('div');
    toolbar.id = 'canvasTextToolbar';
    toolbar.className = 'canvas-text-toolbar';
    toolbar.innerHTML = `
        <button type="button" class="toolbar-btn" data-cmd="bold" title="Bold"><i class="fas fa-bold"></i></button>
        <button type="button" class="toolbar-btn" data-cmd="italic" title="Italic"><i class="fas fa-italic"></i></button>
        <button type="button" class="toolbar-btn" data-cmd="underline" title="Underline"><i class="fas fa-underline"></i></button>
        <button type="button" class="toolbar-btn" data-cmd="insertUnorderedList" title="Bullet List"><i class="fas fa-list-ul"></i></button>
    `;
    document.body.appendChild(toolbar);

    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('keyup', handleTextSelection);

    toolbar.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent losing text selection focus
        const btn = e.target.closest('button');
        if (btn) {
            const cmd = btn.dataset.cmd;
            document.execCommand(cmd, false, null);
            saveToLocal();
        }
    });

    document.addEventListener('mousedown', (e) => {
        if (!toolbar.contains(e.target)) {
            toolbar.style.display = 'none';
        }
    });
}

function handleTextSelection() {
    const selection = window.getSelection();
    const toolbar = document.getElementById('canvasTextToolbar');
    if (!toolbar) return;

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;
        const parentElement = container.nodeType === 1 ? container : container.parentElement;
        
        if (parentElement.closest('#cv-template') && parentElement.closest('[contenteditable="true"]')) {
            const rect = range.getBoundingClientRect();
            toolbar.style.top = (rect.top + window.scrollY - 45) + 'px';
            toolbar.style.left = (rect.left + window.scrollX + (rect.width / 2) - 60) + 'px';
            toolbar.style.display = 'flex';
            return;
        }
    }
    toolbar.style.display = 'none';
}

// --- ON DOM CONTENT LOADED ---
document.addEventListener("DOMContentLoaded", () => {
    attachInputListeners();
    setupCanvasInlineListeners();
    setupColorPickers();
    loadFromLocal();
    setupDragAndDrop();
    setupTextSelectionToolbar();

    // Attach local storage triggers to inputs
    document.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('change', saveToLocal);
        el.addEventListener('input', saveToLocal);
    });
});
