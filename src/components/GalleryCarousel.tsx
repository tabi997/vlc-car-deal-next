import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface GalleryCarouselProps {
  images: string[];
  alt: string;
}

const GalleryCarousel = ({ images, alt }: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted group">
          <img
            src={images[currentIndex]}
            alt={`${alt} - Imagine ${currentIndex + 1}`}
            className="object-cover w-full h-full"
          />
          
          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Zoom button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsZoomOpen(true)}
          >
            <Maximize2 className="h-5 w-5" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video overflow-hidden rounded-md border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary ring-2 ring-primary ring-offset-2"
                    : "border-transparent hover:border-muted-foreground/50"
                }`}
              >
                <img
                  src={image}
                  alt={`${alt} - Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Zoom dialog */}
      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-screen-xl h-[90vh] p-0">
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <img
              src={images[currentIndex]}
              alt={`${alt} - Zoom ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsZoomOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryCarousel;
