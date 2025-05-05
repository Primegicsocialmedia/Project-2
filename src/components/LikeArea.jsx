import React, { useState } from "react";

const LikeArea = () => {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLikeHandler() {
    setLikeCount(function (prev) {
      return prev + 1;
    });
  }

  function decreaseLikeHandler() {
    setLikeCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  }

  return (
    <>
      <button
        onClick={increaseLikeHandler}
        className="text-2xl  m-2 p-2 border-1"
      >
        Increase likes
      </button>
      <button
        onClick={decreaseLikeHandler}
        className="text-2xl  m-2 p-2 border-1"
      >
        Decrease likes{" "}
      </button>
      <h2 className="text-2xl font-bold m-2 p-2">
        This page has been likes {likeCount} times
      </h2>
    </>
  );
};

export default LikeArea;
