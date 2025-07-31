import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title = "Dhruvil Dhanani - AI-Powered Full Stack Mobile App Developer | 4+ Years Experience",
  description = "Dhruvil Dhanani - Expert AI-powered full stack mobile app developer with 4+ years experience. Specializing in AI integration, mobile development, and cutting-edge solutions for businesses.",
  keywords = "AI developer, full stack developer, mobile app developer, artificial intelligence, machine learning, React Native, Flutter, AI integration, mobile development, Dhruvil Dhanani",
  ogTitle = "Dhruvil Dhanani - AI-Powered Full Stack Mobile App Developer",
  ogDescription = "Expert AI-powered mobile app developer with 4+ years experience in creating cutting-edge solutions",
  canonicalUrl = "https://dhruvildhanani.dev"
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dhruvil Dhanani" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      
      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}
