const Wcard = (props) => {
    return (
      <>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
          {props.wCardtitle}
        </h2>
        <p class="leading-relaxed text-base">{props.wCarddescription}</p>
      </>
    );
  };
  
  export default Wcard;
  