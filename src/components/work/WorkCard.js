const WorkCard = (props) => {
  return (
    <>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
        {props.WorkCardtitle}
      </h2>
      <p class="leading-relaxed text-base">{props.WorkCarddescription}</p>
    </>
  );
};

export default WorkCard;
