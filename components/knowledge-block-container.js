import BlogContainer from "./blog-container";

const KnowledgeBlockContainer = () => {
  return (
    <div
      style={{
        position: "absolute",
        height: "13.99%",
        width: "56.41%",
        top: "58.73%",
        right: "29.7%",
        bottom: "27.28%",
        left: "13.89%",
        textAlign: "left",
        fontSize: "24px",
        color: "#fff",
        fontFamily: "'DM Sans'",
      }}
    >
      <b
        style={{
          position: "absolute",
          top: "63px",
          left: "478px",
          fontSize: "64px",
          lineHeight: "85px",
          color: "#356dff",
        }}
      >
        <span style={{ letterSpacing: "-0.04em" }}>
          <span>{`Knowledge `}</span>
          <span style={{ color: "#fff" }}>Blo</span>
        </span>
        <span style={{ color: "#fff" }}>ck</span>
      </b>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          padding: "0",
          backgroundColor: "transparent",
          position: "absolute",
          top: "723px",
          left: "607px",
          width: "173px",
          height: "68px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            borderRadius: "43px 43px 12px 43px",
            border: "2px dashed #fff",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "44px",
            fontSize: "18px",
            fontWeight: "500",
            fontFamily: "'DM Sans'",
            color: "#fff",
            textAlign: "left",
          }}
        >
          View more
        </div>
      </button>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          padding: "0",
          backgroundColor: "rgba(255, 145, 0, 0.2)",
          position: "absolute",
          height: "calc(100% - 741px)",
          width: "calc(100% - 1292px)",
          top: "0px",
          right: "645px",
          bottom: "741px",
          left: "647px",
          borderRadius: "43px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "207px",
          left: "0px",
          width: "426px",
          height: "438px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            borderRadius: "30px",
            backgroundColor: "#1a1c46",
            boxShadow: "0px 15px 17.5px rgba(0, 0, 0, 0.06)",
          }}
        />
        <img
          style={{
            position: "absolute",
            height: "calc(100% - 206px)",
            width: "calc(100% - 46px)",
            top: "23px",
            right: "23px",
            bottom: "183px",
            left: "23px",
            borderRadius: "30px",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
            opacity: "0.9",
          }}
          alt=""
          src="/1-5ov6570o4nmy5lak4prxna2x@2x.png"
        />
        <b
          style={{
            position: "absolute",
            top: "278.42px",
            left: "37px",
            letterSpacing: "-0.01em",
            lineHeight: "35px",
          }}
        >
          <p style={{ margin: "0" }}>{`How A Website Growths `}</p>
          <p style={{ margin: "0" }}>your Business</p>
        </b>
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 345px)",
            width: "calc(100% - 300px)",
            top: "25px",
            right: "253px",
            bottom: "320px",
            left: "47px",
            fontSize: "18px",
            color: "#356dff",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: "0",
              backgroundColor: "#fff",
              position: "absolute",
              height: "calc(100% - 43px)",
              width: "100%",
              top: "21px",
              right: "0px",
              bottom: "22px",
              left: "0px",
              borderRadius: "43px",
              backdropFilter: "blur(10px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "25px",
              lineHeight: "93px",
              fontWeight: "500",
            }}
          >
            Business
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "364.83px",
            left: "37px",
            fontSize: "16px",
            letterSpacing: "-0.01em",
            lineHeight: "35px",
            fontWeight: "500",
            opacity: "0.5",
          }}
        >
          7 min read · September 12
        </div>
        <img
          style={{
            position: "absolute",
            height: "calc(100% - 372px)",
            width: "calc(100% - 360px)",
            top: "343px",
            right: "31px",
            bottom: "29px",
            left: "329px",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/group-16.svg"
        />
      </div>
      <BlogContainer
        imageIds="/1-rb6vxkh9ppjitmyb0mj6yw@2x.png"
        propLeft="488px"
      />
      <BlogContainer
        imageIds="/1-oufqdcafywfkvuzpaqlqha@2x.png"
        propLeft="975px"
      />
    </div>
  );
};

export default KnowledgeBlockContainer;
