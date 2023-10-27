"use client";

import { Box, Button, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useCallback, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  "https://images.unsplash.com/photo-1696935518912-ee46a5c161d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODQwNTkyMA&ixlib=rb-4.0.3&q=80&w=300",
  "https://images.unsplash.com/photo-1696526552981-893b9caf991d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODQwNzA2Mg&ixlib=rb-4.0.3&q=80&w=300",
  "https://images.unsplash.com/photo-1695238070101-a94a1cd25975?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODQwNzEyOA&ixlib=rb-4.0.3&q=80&w=300",
];

export default function CarouselPage() {
  const [current, setCurrent] = useState(0);
  const handleBack = useCallback(
    () =>
      setCurrent((current) => {
        if (current === 0) return images.length - 1;
        else return current - 1;
      }),
    []
  );
  const handleNext = useCallback(
    () =>
      setCurrent((current) => {
        if (current === images.length - 1) return 0;
        else return current + 1;
      }),
    []
  );
  return (
    <Box sx={{ maxWidth: 300, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        index={current}
        onChangeIndex={setCurrent}
        enableMouseEvents
      >
        {images.map((url) => (
          <Image src={url} alt={url} width={300} height={300} />
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        position="static"
        steps={images.length}
        activeStep={current}
        backButton={
          <Button size="small" onClick={handleBack}>
            <KeyboardArrowLeft /> Back
          </Button>
        }
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next <KeyboardArrowRight />
          </Button>
        }
      />
    </Box>
  );
}
