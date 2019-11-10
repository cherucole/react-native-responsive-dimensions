/**
 * MIT License
 *
 * Copyright (c) 2017-present DaniAkash
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const responsiveHeight = h => {
  const { height } = Dimensions.get("window");
  return height * (h / 100);
};

export const responsiveWidth = w => {
  const { width } = Dimensions.get("window");
  return width * (w / 100);
};

export const responsiveFontSize = f => {
  const { width } = Dimensions.get("window");
  const tempHeight = (16 / 9) * width;
  return Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(width, 2)) * (f / 100);
};

//This function takes in desired percentage and  height percentage(respective to the device height) and returns device dimensions
//Useful when used with react native easy grid
export const responsiveCustomHeight = (p, h) => {
  const { height } = Dimensions.get("window");

  const customheight = height * (h / 100);
  //returns the custom width in physical device measurement units
  return (customheight * p) / 100;
};

//This function takes in desired percentage and  width percentage(respective to the device width) and returns device dimensions
//Useful when used with react native easy grid
export const responsiveCustomWidth = (p, w) => {
  const { width } = Dimensions.get("window");
  //get size of width
  const customwidth = width * (w / 100);
  //returns the custom width in physical device measurement units
  return (customwidth * p) / 100;
};

//This function takes in actual device height dimensions and returns it in percentage
export const responsiveHeightPercentage = h => {
  const { height } = Dimensions.get("window");

  const customheightpercentage = (height / h) * 100;
  //returns the custom height in percentage
  return customheightpercentage;
};

//This function takes in actual device width dimensions and returns it in percentage
export const responsiveWidthPercentage = w => {
  const { width } = Dimensions.get("window");

  const customwidthpercentage = (width / w) * 100;
  //returns the custom width in percentage
  return customwidthpercentage;
};

//A cross dimension function that returns  a value based on the calculations of the dimensions and the percentage
export const responsiveCrossDimension = (p, d) => {
  return d * (p / 100);
};

//a function accepting height and wright in percentage and rturns calculated percentage of the area in device units
export const responsiveAreaPercentage = (w, h) => {
  const calculatedwidth = responsiveWidth(w);
  const calculatedheight = responsiveHeight(h);
  return calculatedheight * calculatedwidth;
};

export const useResponsiveHeight = h => {
  const [calculatedHeight, setCalculatedHeight] = useState(responsiveHeight(h));

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedHeight(responsiveHeight(h));
    }

    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  });

  return calculatedHeight;
};

export const useResponsiveWidth = w => {
  const [calculatedWidth, setCalculatedWidth] = useState(responsiveWidth(w));

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedWidth(responsiveWidth(w));
    }

    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  });

  return calculatedWidth;
};

export const useResponsiveFontSize = f => {
  const [calculatedFontSize, setCalculatedFontSize] = useState(
    responsiveFontSize(f)
  );

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedFontSize(responsiveFontSize(f));
    }

    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  });

  return calculatedFontSize;
};
