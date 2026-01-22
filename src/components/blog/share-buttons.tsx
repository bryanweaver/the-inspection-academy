'use client';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareText = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // Could add a toast notification here
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="flex gap-3 flex-wrap">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-[#1877F2] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
      >
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-[#1DA1F2] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
      >
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-[#0A66C2] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
      >
        LinkedIn
      </a>
      <button
        onClick={handleCopyLink}
        className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors"
      >
        Copy Link
      </button>
    </div>
  );
}
