async function updateProfileInfo(profileData) {
    const profile = document.getElementById('profile');
    if (!profile) {
        console.error('Elemento de perfil não encontrado!');
        return;
    }

    const photo = profile.querySelector('.photo');
    if (photo) {
        photo.src = profileData.photo;
        photo.alt = profileData.name;
    }

    const name = profile.querySelector('.name');
    if (name) {
        name.innerText = profileData.name;
    }

    const job = profile.querySelector('.job');
    if (job) {
        job.innerText = profileData.job;
    }

    const location = profile.querySelector('.location');
    if (location) {
        location.innerText = profileData.location;
    }

    const phone = profile.querySelector('.phone');
    if (phone) {
        phone.innerText = profileData.phone;
        phone.href = `tel:${profileData.phone}`;
    }

    const email = profile.querySelector('.email');
    if (email) {
        email.innerText = profileData.email;
        email.href = `mailto:${profileData.email}`;
    }
}


function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}


(async () => {
 try {
    const profileData = await fetchProfileData()
    console.log(profileData)

    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
 } catch (error) {
        console.error('Erro ao carregar dados do perfil:', error);
    }
})()
