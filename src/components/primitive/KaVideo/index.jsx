/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";

const audioPathRegex = /\.(mp4)$/i;

export function KaVideo({ src, hideOnError, defaultImage, className, loadingSize = "md", ...props }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState < boolean > true;

  const [audioUrl, setAudioUrl] = useState < string > "";

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    if (!audioPathRegex.test(src) || isEmpty(src)) {
      if (isMounted) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
    }

    const url = src;
    const audio = new Audio();

    audio.onerror = () => {
      if (isMounted) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    audio.onloadedmetadata = () => {
      if (isMounted) {
        setAudioUrl(url);
        setIsLoading(false);
      }
    };
    audio.src = url;

    return () => {
      isMounted = false;
    };
  }, [src]);

  useEffect(() => {
    if (audioUrl) setIsLoading(false);
  }, [audioUrl]);

  if (isLoading)
    return (
      <div className="w-100 h-100 rounded-2 bg-success bg-opacity-25 d-flex align-items-center justify-content-center">
        <div className="animate-pulse w-100 h-100" />
      </div>
    );

  if (isError && hideOnError) return null;

  return (
    <video width="100%" height="100%" className={classNames("ks-audio", className)} src={isError ? defaultImage : audioUrl} {...props} />
  );
}

KaVideo.defaultProps = {
  defaultImage: "",
  className: "",
};
