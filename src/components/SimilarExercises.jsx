import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

function SimilarExercises({
  targetMuscleExercises,
  equipmentExercises,
  onClick,
}) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }} onClick={onClick}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.array.isRequired,
  equipmentExercises: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SimilarExercises;
