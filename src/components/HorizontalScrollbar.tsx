import { useContext } from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Box, Typography } from "@mui/material";
import {
  West as LeftArrowIcon,
  East as RightArrowIcon,
} from "@mui/icons-material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import { ExerciseDetail } from "../types/exerciseTypes";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <LeftArrowIcon sx={{ fontSize: 40 }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <RightArrowIcon sx={{ fontSize: 40 }} />
    </Typography>
  );
};

interface HorizontalScrollbarProps {
  data: ExerciseDetail[] | string[];
  setBodyPart?: React.Dispatch<React.SetStateAction<string>>;
  bodyPart?: string;
}

// Type guard function to check if the item is an ExerciseDetail
const isExerciseDetail = (
  item: ExerciseDetail | string
): item is ExerciseDetail => {
  return typeof item !== "string" && "id" in item;
};

const HorizontalScrollbar = ({
  data,
  setBodyPart,
  bodyPart,
}: HorizontalScrollbarProps) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={isExerciseDetail(item) ? item.id : item}
        itemID={isExerciseDetail(item) ? item.id : item}
        title={isExerciseDetail(item) ? item.id : item}
        m="0 20px"
      >
        {isExerciseDetail(item) ? (
          <ExerciseCard exercise={item} />
        ) : (
          <BodyPart
            item={item}
            setBodyPart={
              setBodyPart as React.Dispatch<React.SetStateAction<string>>
            }
            bodyPart={bodyPart as string}
          />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
