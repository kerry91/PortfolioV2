import "./TechCard.scss";

const TechCard = (props) => {
  return (
    <>
      <div class="card-panel w-auto h-auto">
        <div class="card-image w-3/4 h-3/4">
          <img src={props.image} alt={props.desc} />
        </div>
      </div>
    </>
  );
};
export default TechCard;
