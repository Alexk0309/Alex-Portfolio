import videoBg from "../../assets/videoBg.mp4";

const VideoBG = () => {
  return (
    <div className="video-background">
      <video className="profile-video" width={1700} autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBG;
