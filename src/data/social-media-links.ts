import { Facebook, Github, Instagram, Linkedin, LucideIcon } from "lucide-react"

interface SocialMediaLinks {
    link: string,
    Icon: LucideIcon
}

export const socialMediaLinks: SocialMediaLinks[] = [
    {
        link: 'https://www.linkedin.com/in/amneek-singh/',
        Icon: Linkedin
    },
    {
        link: 'https://www.instagram.com/_.amyyyy__._/',
        Icon: Instagram
    },
    {
        link: 'https://github.com/amneeksingh',
        Icon: Github
    }
]