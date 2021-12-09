let educationData = [];
let jobData = [];
let internData = [];
let programData = [];
let editingData = [];
let languagesData = [];
let profileData = [];

let AddEducationElement = (array, row) => {
    array.forEach(em => {
        let html =
            `<div class="col-md-6 col-12">
                <h5 key="${em.name}"></h5>
                <p key="${em.interval}"></p>
            </div>
            <div class="col-md-6 col-12">
                <h5 key="${em.title}"></h5>
                <p key="${em.description}"></p>
            </div>
            ${em.hr?`<div class="col-12"><hr/></div>`:``}`
        document.getElementById(row).insertAdjacentHTML('beforeend', html);
    });
}
let InitEducationData = () => {
    educationData.push({
        name: 'education-1-name',
        interval: 'education-1-interval',
        title: 'education-1-title',
        description: 'education-1-description',
        hr: false
    });
    AddEducationElement(educationData, 'education-row');
}
let AddJobElement = (array, row) => {
    array.forEach(em => {
        let html =
            `<div class="col-md-6 col-12">
                <h5 key="${em.name}"></h5>
                ${!em.interval2?`<p key="${em.interval}"></p>`:`<p><div key="${em.interval}"></div><div key="${em.interval2}"></div></p>`}
            </div>
            <div class="col-md-6 col-12">
                <h5 key="${em.title}"></h5>
                ${em.otherwork?`<div class="row"><div class="col-md-6 col-12">`:`<p>`}
                <a href="${em.officalsite}" target="_blank" key="${em.officialsiteTxt}"></a>
                ${em.otherwork?`</div><div class="col-md-6 col-12"><a href="${em.otherwork}" target="_blank" key="${em.otherworkTxt}"></a></div></div>`:`</p>`}
            </div> 
            ${em.hr?`<div class="col-12"><hr/></div>`:``}`;
        document.getElementById(row).insertAdjacentHTML('beforeend', html);
    });
}
let InitJobData = () => {
    jobData.push({
        name: 'job-3-organisation',
        interval: 'job-3-interval',
        interval2: 'job-3-interval-2',
        title: 'job-3-title',
        officalsite: 'https://www.noonspace.com/',
        officialsiteTxt: 'official-website',
        hr: true
    });
    jobData.push({
        name: 'job-2-organisation',
        interval: 'job-2-interval',
        title: 'job-2-title',
        officalsite: 'https://youngtour.com.tw/',
        officialsiteTxt: 'official-website',
        hr: true
    });
    jobData.push({
        name: 'job-1-organisation',
        interval: 'job-1-interval',
        title: 'job-1-title',
        officalsite: 'https://www.skzgroup.com.hk/',
        officialsiteTxt: 'official-website',
        otherwork: 'https://www.jobspost.com.hk/',
        otherworkTxt: 'other-work',
        hr: false
    });
    AddJobElement(jobData, 'job-row');
}
let AddInternElement = (array, row) => {
    array.forEach(em => {
        let html =
            `<div class="col-md-6 col-12">
                <h5 key="${em.name}"></h5>
                <p key="${em.interval}"></p>
            </div>
            <div class="col-md-6 col-12">
                <h5 key="${em.title}"></h5>
                <p>
                    <a href="${em.officalsite}" target="_blank" key="${em.demo}"></a>
                </p>
            </div>
            ${em.hr?`<div class="col-12"><hr/></div>`:``}`;
        document.getElementById(row).insertAdjacentHTML('beforeend', html);
    });
}
let InitInternData = () => {
    internData.push({
        name: 'intern-name',
        interval: 'intern-interval',
        title: 'intern-title',
        officalsite: 'https://www.drright.me/',
        demo: 'demo',
        hr: false
    });
    AddInternElement(internData, 'intern-row');
}
let AddSkillElement = (array, row) => {
    array.forEach(em => {
        let html =
            `<div class="col-md-6 skill-box">
                <div class="skill-name"><p>${em.name}</p></div>
                <div class="skill-star">
                    <span class="${em.checked[0]}">★</span>
                    <span class="${em.checked[1]}">★</span>
                    <span class="${em.checked[2]}">★</span>
                    <span class="${em.checked[3]}">★</span>
                    <span class="${em.checked[4]}">★</span>
                </div>
            </div>`;
        document.getElementById(row).insertAdjacentHTML('beforeend', html);
    });
}
let InitProgramData = () => {
    programData.push({
        name: 'HTML',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'CSS',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'Boostrap',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'Python',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'PHP',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'MySQL',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'React',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'C/C++',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'Laravel',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    programData.push({
        name: 'Firebase',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    programData.push({
        name: 'Angular',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    programData.push({
        name: 'SCSS',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    programData.push({
        name: 'Java',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    AddSkillElement(programData, 'program-row');
}
let InitEditingData = () => {
    editingData.push({
        name: 'Microsoft Word',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    editingData.push({
        name: 'Microsoft Excel',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    editingData.push({
        name: 'Microsoft PowerPoint',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    AddSkillElement(editingData, 'editing-row');
}
let AddLanguageElement = (array, row) => {
    array.forEach(em => {
        let html =
            `<div class="col-md-6 skill-box">
                <div class="skill-name">
                    <p key="${em.name}"></p>
                </div>
                <div class="skill-star">
                    <span class="${em.checked[0]}">★</span>
                    <span class="${em.checked[1]}">★</span>
                    <span class="${em.checked[2]}">★</span>
                    <span class="${em.checked[3]}">★</span>
                    <span class="${em.checked[4]}">★</span>
                </div>
            </div>`;
        document.getElementById(row).insertAdjacentHTML('beforeend', html);
    });
}
let InitLanguagesData = () => {
    languagesData.push({
        name: 'cantonese',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    languagesData.push({
        name: 'mandarin',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    languagesData.push({
        name: 'english',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    languagesData.push({
        name: 'spanish',
        checked: ['checked', 'checked', '', '', ' ']
    });
    AddLanguageElement(languagesData, 'languages-row');
}
let InitProfileData = () => {
    profileData.push({
        name: 'personal-website',
        description: 'personal-description',
        tech_row: ['HTML', 'SCSS', 'JS'],
        link: [
            { type: 'github', href: 'https://github.com/edward100826/Personal-Website' },
            { type: 'demo', href: 'http://www.edwardfan.nhz.hk/' }
        ],
        img: './img/bg.webp'
    });
    profileData.push({
        name: 'jobspost',
        description: 'jobspost-description',
        tech_row: ['HTML', 'SCSS', 'JS', 'PHP', 'MySQL', 'CentOS'],
        link: [{ type: 'demo', href: 'https://www.jobspost.com.hk/' }],
        img: './img/profile/jobspost.webp'
    });
    profileData.push({
        name: 'skzgroup',
        description: 'skzgroup-description',
        tech_row: ['HTML', 'SCSS', 'JS', 'PHP', 'Google API'],
        link: [{ type: 'demo', href: 'https://www.skzgroup.com.hk/' }],
        img: './img/profile/skzgroup.webp'
    });
    profileData.push({
        name: 'fyp',
        description: 'fyp-description',
        tech_row: ['PHP', 'MySQL'],
        link: [{ type: 'github', href: 'https://github.com/edward100826/FinalYearProject' }],
        img: ''
    });
    profileData.push({
        name: 'android-final',
        description: 'android-final-description',
        tech_row: ['Android', 'Firebase'],
        link: [{ type: 'github', href: 'https://github.com/ngSgn/ntutAndroidFinal' }],
        img: './img/profile/NTUT_emptyClassroom.webp'
    });
    profileData.push({
        name: 'colorpella',
        description: 'colorpella-description',
        tech_row: ['Android', 'JAVA'],
        link: [
          { type: 'github', href: 'https://github.com/ngSgn/ColorPlayer' },
          {
            type: 'about',
            href:
              'https://github.com/ngSgn/ColorPlayer/blob/master/%E8%AA%AA%E6%98%8E.pdf'
          }
        ],
        img: './img/profile/colorpella.webp'
    });
    profileData.push({
        name: 'ntuthksa',
        description: 'ntuthksa-description',
        tech_row: ['HTML', 'CSS', 'Firebase'],
        link: [{ type: 'github', href: 'https://github.com/ngSgn/FinalWebProject' }],
        img: './img/profile/ntut_hksa.webp'
    });
    profileData.push({
        name: 'drright',
        description: 'drright-description',
        tech_row: ['React.js', 'CSS', 'Redux'],
        link: [{ type: 'demo', href: 'https://www.drright.me/' }],
        img: './img/profile/drright.webp'
    });
    profileData.push({
        name: 'mittp2017',
        description: 'mittp2017-description',
        tech_row: ['React', 'QGIS'],
        link: [{ type: 'github', href: 'https://github.com/edward100826/MIT_Taipei17' }],
        img: ''
    });
    profileData.push({
        name: 'pns',
        description: 'pns-description',
        tech_row: ['PHP', 'HTML', 'CSS'],
        link: [
          { type: 'github', href: 'https://github.com/edward100826/Project-Nazca-Server-Website' },
          { type: 'demo', href: 'http://projectnazca.nhz.hk' }
        ],
        img: './img/profile/pns.webp'
    });
  

    profileData.forEach(em => {
        let backData = '';
        let techData = '';
        em.link.forEach(ele => {
            backData += `<a href="${ele.href}" target="_blank">
                <p key="${ele.type}"></p>
            </a>`;
        });
        em.tech_row.forEach(ele => {
            techData += `<div class="tech-box">${ele}</div>`;
        });
        let html =
            `<div class="col-xl-4 col-md-6 profile-card">
                <div class="card-box">
                    <div class="card-h">
                        <div class="card-flip">
                            <div class="flip">
                                <div class="back" style="background-image: url(${em.img});">
                                    <div class="back-box"><div>${backData}</div></div>
                                </div>
                                <div class="card-bg" style="background-image: url(${em.img});"></div>
                                <div class="front">
                                    <div class="profile-des-box">
                                        <h5 key="${em.name}"></h5>
                                        <hr />
                                        <p key="${em.description}"></p>
                                    </div>
                                    <div class="tech-row">
                                        <hr />
                                        ${techData}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        document.getElementById('profile-row').insertAdjacentHTML('beforeend', html);
    });
}