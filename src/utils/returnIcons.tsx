import IconWork from "../../images/icon-work.svg";
import IconExercise from "../../images/icon-exercise.svg";
import IconPlay from "../../images/icon-play.svg";
import IconSelfCare from "../../images/icon-self-care.svg";
import IconSocial from "../../images/icon-social.svg";
import IconStudy from "../../images/icon-study.svg";

const icons = [
  <IconWork key="1" tag="work" />,
  <IconExercise key="2" tag="exercise" />,
  <IconPlay key="3" tag="play" />,
  <IconSelfCare key="4" tag="selfcare" />,
  <IconSocial key="5" tag="social" />,
  <IconStudy key="6" tag="study" />,
];

export const returnIcon = (iconName: string) => {

  const icon = icons.find((item) =>
    item.props.tag.includes(iconName.split(" ").join("").toLowerCase())
  );

  if (icon) {
    return icon;
  } else {
    return <IconWork />;
  }
};
