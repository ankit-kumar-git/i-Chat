import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    //Here we will be writing some inline css  as we are doing server side rendering of the component.Can use styled components also. But inline does it faster.

    // center tag puts everything in center
    <center style={{ display: "grid", placeItems: "center", heigth: "100vh" }}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CBC2B" size={60} />
      </div>
    </center>
  );
}

export default Loading;
