import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, LinkedIn } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };

  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Compartir en Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Compartir en Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
      >
        <LinkedIn className="h-4 w-4" />
        <span className="sr-only">Compartir en LinkedIn</span>
      </Button>
    </div>
  );
};

export default ShareButtons;
