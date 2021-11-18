import IconWork from "../../images/icon-work.svg";
import IconExercise from "../../images/icon-exercise.svg";
import IconPlay from "../../images/icon-play.svg";
import IconSelfCare from "../../images/icon-self-care.svg";
import IconSocial from "../../images/icon-social.svg";
import IconStudy from "../../images/icon-study.svg";

const icons = [
  <IconWork key="1" />,
  <IconExercise key="2" />,
  <IconPlay key="3" />,
  <IconSelfCare key="4" />,
  <IconSocial key="5" />,
  <IconStudy key="6" />,
];

export const returnIcon = (iconName: string) => {
  console.log(iconName);
  console.log(icons);

  const icon = icons.find((item) =>
    item.type.name.includes(iconName.split(" ").join(""))
  );

  if (icon) {
    return icon;
  } else {
    return <IconWork />;
  }
};
