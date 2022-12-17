import "./TechCard.scss"

const TechCard = (props) => {
    return (
      <>
            <div class="card-panel">
              <div class="card-image">
                <img src={props.image} alt={props.desc}/>
              </div>
            </div>
      </>
    );
  };
export default TechCard 