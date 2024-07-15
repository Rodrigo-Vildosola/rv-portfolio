"use client";

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';

declare global {
  interface Window {
    ImageProcessingModule: any;
  }
}

const ImageProcessor = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [processedImageSrc, setProcessedImageSrc] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const wasmModule = useRef<any>(null);
  const applySepia = useRef<any>(null);

  useEffect(() => {
    const loadWasm = async () => {
      if (typeof window.ImageProcessingModule === 'function' && wasmModule.current === null) {
        console.log("loading WASM!");
        window.ImageProcessingModule().then((Module: any) => {
          console.log("got WASM!", Module);
          wasmModule.current = Module;
          applySepia.current = Module.cwrap('apply_sepia', null, ['number', 'number', 'number']);
        });
      }
    };

    loadWasm();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    if (!imageRef.current || !wasmModule.current || !applySepia.current) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;

    const image = imageRef.current;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    context.drawImage(image, 0, 0);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const dataPtr = wasmModule.current._malloc(data.length * data.BYTES_PER_ELEMENT);
    wasmModule.current.HEAPU8.set(data, dataPtr);

    applySepia.current(dataPtr, canvas.width, canvas.height);

    const resultData = wasmModule.current.HEAPU8.subarray(dataPtr, dataPtr + data.length);
    imageData.data.set(resultData);
    context.putImageData(imageData, 0, 0);

    wasmModule.current._free(dataPtr);

    const newImageSrc = canvas.toDataURL();
    setProcessedImageSrc(newImageSrc);
  };

  return (
    <div>
      {/* <Script src="/image_processing.js" strategy="beforeInteractive" /> */}
      <input type="file" onChange={handleFileChange} />
      {imageSrc && (
        <div>
          <Image src={imageSrc} alt="Original Image" ref={imageRef} width={500} height={500} onLoad={processImage} />
        </div>
      )}
      {processedImageSrc && (
        <div>
          <Image src={processedImageSrc} alt="Processed Image" width={500} height={500} />
        </div>
      )}
    </div>
  );
};

export default ImageProcessor;
