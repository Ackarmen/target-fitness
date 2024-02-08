import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography className="right-arrow" onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography className="left-arrow" onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
}

function HorizontalScrollbar({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
}

HorizontalScrollbar.propTypes = {
  data: PropTypes.array.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
  isBodyParts: PropTypes.bool.isRequired,
};

export default HorizontalScrollbar;
