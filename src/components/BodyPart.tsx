import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

interface BodyPartProps {
  item: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  bodyPart: string;
}

const BodyPart = (props: BodyPartProps) => {
  const { item, setBodyPart, bodyPart } = props;

  return (
    <>
      <Stack
        component="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={
          bodyPart === item
            ? {
                borderTop: "4px solid var(--secondary-color)",
                background: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "282px",
                cursor: "pointer",
                gap: "47px",
              }
            : {
                background: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "282px",
                cursor: "pointer",
                gap: "47px",
              }
        }
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <img
          src={Icon}
          alt="dumbbell"
          style={{ width: "100px", height: "118px" }}
        />
        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="#3A1212"
          textTransform="capitalize"
        >
          {" "}
          {item}
        </Typography>
      </Stack>
    </>
  );
};

export default BodyPart;
