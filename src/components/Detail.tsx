import { Typography, Stack } from "@mui/material";
import { ExerciseDetail } from "../types/exerciseTypes";

interface DetailProps {
  exerciseDetail: ExerciseDetail;
}

const Detail = ({ exerciseDetail }: DetailProps) => {
  const {
    bodyPart,
    gifUrl,
    name,
    target,
    equipment,
    instructions,
    secondaryMuscles,
  } = exerciseDetail;

  const extraDetail = [
    {
      label: "Body Part: ",
      name: bodyPart,
    },
    {
      label: "Target muscles: ",
      name: target,
    },
    {
      label: "Secondary muscles: ",
      name: secondaryMuscles.join(", "),
    },
    {
      label: "Equipment: ",
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px" }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          Instructions
        </Typography>
        <Stack gap="8px">
          {instructions.map((item: string, index: number) => (
            <Typography
              key={index}
              sx={{ fontSize: { lg: "24px", xs: "18px" } }}
              color="#4F4C4C"
            >
              {index + 1}) {item}
            </Typography>
          ))}
        </Stack>
        {/* </Typography> */}
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          Extra Details
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="12px" alignItems="center">
            <Typography
              textTransform="capitalize"
              sx={{
                fontSize: { lg: "30px", xs: "20px" },
                fontWeight: 800,
                color: "var(--secondary-color)",
              }}
            >
              {item.label}
            </Typography>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
