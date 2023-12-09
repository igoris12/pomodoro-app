import React from "react";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";

function Header({openNavigation}) {
  return (
    <header className="header">
      <a className="logo" href="/timer">
        <svg
          width="84"
          height="30"
          viewBox="0 0 512 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150.925 149.546C140.851 162.198 125.895 168.608 106.477 168.608C85.2905 168.608 69.0994 162.114 58.366 149.322C56.051 146.559 54.0306 143.515 52.2628 140.219H35.791C38.6252 147.148 42.3432 153.431 46.9312 158.902C60.4426 175.003 81.0393 183.531 106.477 183.531C130.328 183.531 149.747 174.989 162.598 158.845C166.948 153.375 170.484 147.12 173.177 140.233H156.832C155.134 143.585 153.184 146.713 150.925 149.546Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M103.039 14.9098C126.133 14.9098 144.766 33.9151 155.275 58.587H171.269C168.07 49.975 164.002 41.8118 159.147 34.4621C144.485 12.2448 124.562 0 103.039 0C82.8353 0 63.7819 12.2308 49.4007 34.4201C44.5883 41.8399 40.5755 50.0031 37.3906 58.587H53.5257C63.9363 34.0834 81.9795 14.9098 103.039 14.9098Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M54.3962 122.518C59.9382 116.487 62.7162 108.983 62.7162 100.006C62.7162 91.0296 59.9382 83.5817 54.3962 77.6627C48.8541 71.7437 42.5264 68.7842 35.441 68.7842C28.3416 68.7842 22.1962 71.393 16.9909 76.5967V69.8081H0V152.646H16.9769V122.63C21.5087 128.592 27.4857 131.565 34.9219 131.565C42.358 131.579 48.8401 128.563 54.3962 122.518ZM41.2075 112.391C38.2611 115.519 34.8236 117.09 30.9091 117.09C26.9806 117.09 23.6414 115.519 20.8914 112.391C18.1414 109.264 16.7664 105.224 16.7664 100.287C16.7664 95.3496 18.1414 91.24 20.8914 87.9579C23.6414 84.6758 27.0227 83.0347 31.0214 83.0347C35.0201 83.0347 38.4575 84.6898 41.3198 88.014C44.182 91.3382 45.6271 95.4478 45.6271 100.343C45.6131 105.252 44.1399 109.264 41.2075 112.391Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M220.84 68.7705C216.841 68.7705 212.857 69.7944 208.9 71.8282C204.943 73.862 201.787 76.7373 199.443 80.4262C197.858 77.1862 195.501 74.423 192.372 72.1648C189.243 69.9066 185.75 68.7705 181.905 68.7705C175.872 68.7705 170.513 71.4074 165.826 76.6953V69.7944H148.85V130.668H165.826V97.8466C165.826 93.0918 167.089 89.4871 169.615 87.0325C172.14 84.5779 175.045 83.3577 178.328 83.3577C181.611 83.3577 183.982 84.4938 185.455 86.752C186.928 89.0102 187.658 92.5588 187.658 97.3838V130.654H204.747V97.8326C204.747 93.0778 205.996 89.473 208.479 87.0185C210.963 84.5639 213.909 83.3436 217.304 83.3436C224.165 83.3436 227.603 88.0284 227.603 97.3697V130.64H244.692V93.6668C244.692 85.6018 242.503 79.4304 238.126 75.1664C233.776 70.9025 228.01 68.7705 220.84 68.7705Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M286.516 68.7705C277.27 68.7705 269.596 71.8142 263.478 77.8735C257.361 83.9468 254.316 91.3946 254.316 100.217C254.316 109.039 257.375 116.473 263.478 122.505C269.596 128.536 277.27 131.551 286.516 131.551C295.762 131.551 303.437 128.536 309.554 122.505C315.672 116.473 318.73 109.039 318.73 100.217C318.73 91.3946 315.672 83.9468 309.554 77.8735C303.437 71.8142 295.762 68.7705 286.516 68.7705ZM297.376 112.392C294.542 115.52 290.922 117.09 286.502 117.09C282.083 117.09 278.463 115.52 275.629 112.392C272.795 109.264 271.377 105.21 271.377 100.231C271.377 95.2518 272.795 91.1842 275.629 88.0143C278.463 84.8444 282.083 83.2595 286.502 83.2595C290.922 83.2595 294.542 84.8444 297.376 88.0143C300.21 91.1842 301.627 95.2518 301.627 100.231C301.627 105.21 300.21 109.264 297.376 112.392Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M104.079 64.8438C93.682 64.8438 85.0393 68.2661 78.1503 75.0968C71.2754 81.9276 67.8379 90.3152 67.8379 100.246C67.8379 110.176 71.2754 118.536 78.1503 125.324C85.0252 132.113 93.668 135.507 104.079 135.507C114.475 135.507 123.118 132.113 130.007 125.324C136.882 118.536 140.319 110.176 140.319 100.246C140.319 90.3152 136.882 81.9276 130.007 75.0968C123.132 68.2521 114.489 64.8438 104.079 64.8438ZM117.772 115.562C114.209 119.503 109.649 121.481 104.093 121.481C98.5366 121.481 93.9767 119.518 90.4129 115.562C86.8492 111.621 85.0673 106.515 85.0673 100.246C85.0673 93.976 86.8492 88.8424 90.4129 84.859C93.9767 80.8756 98.5366 78.8699 104.093 78.8699C109.649 78.8699 114.209 80.8616 117.772 84.859C121.336 88.8424 123.118 93.976 123.118 100.246C123.118 106.515 121.336 111.621 117.772 115.562Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M371.317 76.5826C366.631 71.379 360.598 68.7701 353.204 68.7701C345.81 68.7701 339.356 71.6595 333.842 77.4242C328.328 83.1889 325.578 90.6088 325.578 99.6556C325.578 108.702 328.412 116.291 334.067 122.406C339.721 128.521 346.161 131.565 353.373 131.565C360.584 131.565 366.561 128.591 371.317 122.63V130.667H388.294V46.707H371.317V76.5826ZM367.417 112.391C364.667 115.519 361.328 117.09 357.399 117.09C353.471 117.09 350.047 115.519 347.101 112.391C344.154 109.263 342.681 105.252 342.681 100.343C342.681 95.4337 344.112 91.3241 346.989 88.0139C349.851 84.6897 353.288 83.0347 357.287 83.0347C361.286 83.0347 364.667 84.6757 367.417 87.9578C370.167 91.2399 371.542 95.3496 371.542 100.287C371.556 105.224 370.167 109.263 367.417 112.391Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M433.065 68.7705C423.819 68.7705 416.144 71.8142 410.027 77.8735C403.91 83.9468 400.865 91.3946 400.865 100.217C400.865 109.039 403.924 116.473 410.027 122.505C416.144 128.536 423.819 131.551 433.065 131.551C442.311 131.551 449.986 128.536 456.103 122.505C462.22 116.473 465.279 109.039 465.279 100.217C465.279 91.3946 462.22 83.9468 456.103 77.8735C449.986 71.8142 442.311 68.7705 433.065 68.7705ZM443.939 112.392C441.105 115.52 437.485 117.09 433.065 117.09C428.646 117.09 425.026 115.52 422.192 112.392C419.357 109.264 417.94 105.21 417.94 100.231C417.94 95.2518 419.357 91.1842 422.192 88.0143C425.026 84.8444 428.646 83.2595 433.065 83.2595C437.485 83.2595 441.105 84.8444 443.939 88.0143C446.773 91.1842 448.19 95.2518 448.19 100.231C448.176 105.21 446.759 109.264 443.939 112.392Z"
            fill="#2D27DC"
          ></path>
          <path
            d="M501.87 71.4916C498.587 73.2308 495.851 75.3347 493.662 77.8314V69.7944H476.686V130.668H493.662V104.299C493.662 98.4217 494.911 93.6809 497.395 90.1042C499.892 86.5276 503.652 84.7322 508.717 84.7322H512L511.888 68.7705C508.493 68.8547 505.153 69.7523 501.87 71.4916Z"
            fill="#2D27DC"
          ></path>
        </svg>
      </a>
      <button className="hamburger active" onClick={openNavigation}>
        <RxHamburgerMenu />
      </button>
    </header>
  );
}

export default Header;
