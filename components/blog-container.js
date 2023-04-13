import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const BlogContainer = ({ imageIds, propLeft }) => {
  const blogStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <div
      style={{
        position: "absolute",
        top: "207px",
        left: "488px",
        width: "426px",
        height: "438px",
        textAlign: "left",
        fontSize: "24px",
        color: "#fff",
        fontFamily: "'DM Sans'",
        ...blogStyle,
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
        src={imageIds}
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
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 43px)",
            width: "100%",
            top: "21px",
            right: "0px",
            bottom: "22px",
            left: "0px",
            borderRadius: "43px",
            backgroundColor: "#fff",
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
  );
};

export default BlogContainer;
