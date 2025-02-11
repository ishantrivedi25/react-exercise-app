import { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import { ExerciseDetail } from "../types/exerciseTypes";

const ExerciseList = () => {
  const [exercises, setExercises] = useState<ExerciseDetail[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <Box>
      {/* <HeroBanner /> */}
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default ExerciseList;
