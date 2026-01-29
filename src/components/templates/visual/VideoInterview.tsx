"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoInterviewProps {
  title?: string;
  videoUrl?: string;
  posterImage?: string;
}

export default function VideoInterview({
  title = "社員の声",
  videoUrl = "/videos/interview.mp4",
  posterImage = "/images/templates/visual/interview-poster.jpg",
}: VideoInterviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Video */}
          <video
            ref={videoRef}
            poster={posterImage}
            muted={isMuted}
            playsInline
            className="w-full"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          {/* Custom Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
            <button
              onClick={togglePlay}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-transform hover:scale-110"
              aria-label={isPlaying ? "一時停止" : "再生"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              aria-label={isMuted ? "音声オン" : "音声オフ"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Play Button Overlay (when paused) */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
              aria-label="再生"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg"
              >
                <Play className="h-8 w-8 ml-1" />
              </motion.div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
