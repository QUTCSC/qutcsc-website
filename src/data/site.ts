const socialLinks = [
    {
        title: "Discord",
        path: "https://discord.gg/454Db9UXRC",
        icon: "tabler:brand-discord"
    },
    {
        title: "Facebook",
        path: "https://www.facebook.com/qutwhitehats/",
        icon: "tabler:brand-facebook"
    },
    {
        title: "Instagram",
        path: "https://www.instagram.com/qut_cybersec/",
        icon: "tabler:brand-instagram"
    },
    {
        title: "LinkedIn",
        path: "https://www.linkedin.com/company/35506781/",
        icon: "tabler:brand-linkedin"
    }
]

const siteInfo = {
    owner: "QUT Cyber Security Club",
    siteName: "QUTCSC",
    siteDescription: "The Cyber Security Club of the Queensland University of Technology",
    contact: {
        email: "hello@thecybersecurityclub.com"
    }
}

const nav = [
    {
        type: "link",
        title: "Home",
        path: "/",
        icon: "tabler:home"
    },
    {
        type: "link",
        title: "About",
        path: "/about",
        icon: "tabler:info-square-rounded"
    },
    {
        type: "link",
        title: "Shop",
        path: "https://qutcybersecurityclub.square.site/",
        icon: "tabler:shopping-cart"
    },
    {
        type: "dropdown",
        title: "Social",
        icon: "tabler:social",
        path: "",
        content: socialLinks
    },
]

export default { nav, siteInfo, socialLinks }