import Link from "next/link";

const InfoRight = ({ data }) => {
  return (
    <div
      style={{
        marginTop: 130,
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${data.bk})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          display: "flex",
          alignItems: "end",
          justifyContent: "flex-end",
          marginLeft: "20%",
        }}
      >
        <div
          style={{
            textAlign: "right",
          }}
        >
          <h1 className="info_r_h">{data.h}</h1>
          <p className="info_r_p">{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoRight;
