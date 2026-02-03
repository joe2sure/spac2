"use client"
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/remixicon.css";
import "~/assets/css/fontawesome.css";
import "~/assets/css/main.css";
import "~/assets/css/app.css";
import "~/assets/css/app.min.css";
import "~/assets/css/animate.css";
import "~/assets/css/react-adjustment.css";
import "~/assets/css/aos.css";
import "~/assets/css/magnific-popup.css";
import React, { useEffect, useState } from "react";
import { Metadata } from "~/components/Section/Common/Metadata/Metadata";
import { usePathname } from "next/navigation";
import Loading from "~/components/Section/Common/Loading/Loading";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading on route change
    setIsLoading(true);
    setShowContent(false);
    
    // Minimum loading time to show the animation
    const minLoadingTime = 3800; // 3.8 seconds for the full animation
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <html lang="en">
      <head>
        <title>{Metadata.title}</title>
        <meta name="description" content={Metadata.description} />
        {/* Other Metadata properties */}
        {Metadata.icons && (
          <React.Fragment>
            {Metadata.icons.icon.map((icon, index) => (
              <link key={index} rel="icon" href={icon} />
            ))}
            {Metadata.icons.apple && Metadata.icons.apple.map((appleIcon, index) => (
              <link key={index} rel="apple-touch-icon" href={appleIcon} />
            ))}
            {Metadata.icons.shortcut && Metadata.icons.shortcut.map((shortcutIcon, index) => (
              <link key={index} rel="shortcut icon" href={shortcutIcon} />
            ))}
          </React.Fragment>
        )}
      </head>
      <body>
        <Loading isLoading={isLoading} onComplete={handleLoadingComplete} />
        {showContent && (
          <div style={{ 
            opacity: showContent ? 1 : 0, 
            transition: 'opacity 0.5s ease-in-out' 
          }}>
            {children}
          </div>
        )}
      </body>
    </html>
  );
}