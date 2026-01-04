import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://your-portfolio-domain.com/sitemap.xml", // Update with actual domain when deployed
    };
}
