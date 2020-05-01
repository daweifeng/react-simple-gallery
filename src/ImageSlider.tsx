import React, { useState, FC } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

import "./style.scss";

type ImageSliderDataType = {
  title: string, src: string
}

export type ImageSliderProps = {
  data: ImageSliderDataType[]
}

export const ImageSlider: FC<ImageSliderProps> = (props) => {
  const { data } = props;
  const len = data.length
  const [currentIndex, setCurrentIndex] = useState(0)
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display */}
      <div className={`ImageSlider__main`}>
        <div className={`left_arrow`} onClick={() => { setCount(count - 1); setCurrentIndex((((count - 1) % len) + len) % len) }}>
          <LeftOutlined />
        </div>
        <div className={`image`}>
          <img src={data[currentIndex].src} />
        </div>
        <div className={`right_arrow`} onClick={() => { setCount(count + 1); setCurrentIndex((((count + 1) % len) + len) % len) }}>
          <RightOutlined />
        </div>
      </div>

      <div className={`ImageSlider__title`}>{data[currentIndex].title}</div>

      {/* Thumnails */}
      <Thumbnails data={data} currentIndex={currentIndex} onClick={(index: number) => setCurrentIndex(index)} />
    </div>
  )
}

const Thumbnails: FC<{
  data: ImageSliderDataType[],
  currentIndex: number,
  onClick: Function
}> = (props) => {
  const { data, currentIndex } = props;
  return (
    <div className={`ImageSlider__thumbnails`}>
      {
        data.map((item, index) => (
          <div className={`${`item`} ${currentIndex === index ? "active" : ""}`} key={`thumb_${index}`} onClick={() => props.onClick(index)}>
            <img src={item.src} />
          </div>
        ))
      }
    </div>
  )
}