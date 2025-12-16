window.CONFIG = {
    siteTitle: "Samsara Moksha – Tarot intuitif",
    siteName: "Samsara Moksha",
    tagline: "Tarot intuitif",
    contactEmail: "lafabriqueabijou@gmail.com",
    visioLink: "https://www.samsaramoksha.org"
};

document.addEventListener('DOMContentLoaded', function() {
    if (window.CONFIG.siteTitle) document.title = window.CONFIG.siteTitle;
    var h1 = document.querySelector('h1');
    if (h1 && window.CONFIG.siteName) h1.textContent = window.CONFIG.siteName;
    var h2 = document.querySelector('h2');
    if (h2 && window.CONFIG.tagline) h2.textContent = window.CONFIG.tagline;
    var contact = document.getElementById('contact-link');
    if (contact && window.CONFIG.contactEmail) contact.href = 'mailto:' + window.CONFIG.contactEmail;
    var visio = document.getElementById('visio-link');
    if (visio && window.CONFIG.visioLink) visio.href = window.CONFIG.visioLink;
});
