import PropTypes from "prop-types";
import React from "react";

/**
 * An SVG of the Arc UNSW logo.
 *
 * @param {{ size: number, color: string }} props
 */
export default function ArcLogoIcon(props) {
  const iconSize = (props.size ?? 26) - 8;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 2560 2560"
      style={{ borderRadius: "2px", margin: 4 }}
    >
      <g fill="none">
        <g>
          <path d="M0 1280 c0 -1273 0 -1280 20 -1280 20 0 20 7 20 1280 0 1273 0 1280 -20 1280 -20 0 -20 -7 -20 -1280z">
          </path>
          <path d="M200 2232 c0 -26 -3 -97 -6 -157 -6 -97 -5 -113 10 -128 16 -16 43 -17 299 -13 155 2 287 4 292 4 6 0 174 -1 373 -2 l364 -1 20 25 c16 20 19 35 16 82 -4 55 -3 58 19 58 22 0 23 -3 23 -85 l0 -85 160 0 160 0 0 40 c0 22 -9 54 -20 72 -14 24 -18 42 -13 74 4 33 1 50 -16 77 -11 19 -21 46 -21 61 l0 26 -109 0 -110 0 -4 -52 -3 -53 -2 53 -2 53 -42 -3 -43 -3 -6 -50 -6 -50 -1 52 -2 52 -355 1 c-348 0 -355 -1 -355 -20 0 -26 -36 -27 -43 0 -5 18 -15 19 -291 20 l-286 0 0 -48z m1037 -184 c-2 -13 -4 -3 -4 22 0 25 2 35 4 23 2 -13 2 -33 0 -45z m-614 45 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m157 -2 c0 -4 -11 -6 -25 -3 -14 2 -25 6 -25 8 0 2 11 4 25 4 14 0 25 -4 25 -9z m347 -28 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z">
          </path>
          <path d="M1940 2190 c0 -69 3 -90 14 -90 8 0 16 -15 19 -37 3 -21 15 -59 27 -85 20 -47 22 -48 65 -48 38 0 46 4 59 28 8 15 15 21 16 15 0 -10 28 -13 104 -13 57 0 111 3 120 6 14 5 16 29 16 160 l0 153 -220 1 -220 0 0 -90z">
          </path>
          <path d="M278 1890 c-65 -35 -83 -71 -86 -180 -3 -86 -1 -98 20 -129 42 -62 70 -76 164 -80 104 -4 124 1 169 40 28 25 35 38 35 68 0 32 -5 39 -45 64 -51 30 -96 35 -115 12 -18 -21 -38 -19 -45 6 -5 14 -1 27 9 37 14 14 17 14 34 -1 26 -23 69 -21 120 5 39 21 42 26 42 64 0 45 -31 84 -83 103 -48 19 -177 13 -219 -9z">
          </path>
          <path d="M665 1897 c-3 -7 -4 -98 -3 -202 l3 -190 88 -3 87 -3 0 126 0 125 80 0 81 0 -3 78 -3 77 -163 3 c-126 2 -164 0 -167 -11z">
          </path>
          <path d="M1151 1892 c-69 -34 -76 -55 -79 -233 l-3 -160 88 3 88 3 5 115 c4 93 8 115 20 115 12 0 16 -21 18 -117 l3 -118 90 0 91 0 -4 159 c-3 143 -5 163 -24 188 -34 47 -79 63 -174 63 -61 0 -95 -5 -119 -18z">
          </path>
          <path d="M1567 1903 c-4 -3 -7 -96 -7 -205 l0 -199 154 3 c139 3 157 5 183 24 26 20 28 26 29 97 0 42 3 80 7 83 4 4 7 37 7 74 0 58 -3 70 -24 90 -14 12 -44 26 -68 31 -52 10 -272 12 -281 2z">
          </path>
          <path d="M2090 1901 c-14 -5 -40 -16 -58 -25 -26 -14 -32 -22 -32 -50 0 -18 9 -45 21 -59 16 -21 18 -31 10 -46 -6 -11 -11 -48 -11 -83 0 -71 14 -99 60 -123 41 -21 196 -20 250 1 38 15 40 18 40 58 0 22 -7 50 -15 60 -13 18 -13 22 8 44 18 19 22 35 22 86 0 111 -45 147 -187 145 -46 0 -94 -4 -108 -8z">
          </path>
          <path d="M396 1398 c-21 -30 -20 -101 4 -278 26 -195 65 -499 96 -746 7 -55 32 -76 97 -82 73 -6 88 10 182 193 74 142 124 237 130 243 3 4 43 -19 93 -52 40 -28 42 -31 42 -81 0 -70 25 -95 99 -95 42 0 57 5 78 26 l25 25 55 -25 c67 -32 334 -122 388 -131 22 -4 63 -13 90 -20 70 -19 193 -26 240 -15 54 12 75 41 75 102 0 76 -23 93 -135 101 -107 8 -160 35 -212 111 -59 86 -36 179 60 243 67 45 104 50 183 24 35 -11 86 -21 113 -21 42 0 53 4 70 26 25 32 28 109 6 140 -20 30 -101 62 -189 75 -150 22 -283 -17 -376 -111 -79 -78 -102 -135 -108 -262 -2 -60 -8 -108 -13 -108 -5 0 -46 17 -91 39 -46 21 -91 41 -100 45 -23 7 -23 26 8 176 13 69 27 164 31 212 6 83 5 87 -20 112 -18 18 -37 26 -62 26 -44 0 -105 -24 -106 -42 0 -7 -6 -1 -12 13 -23 51 -36 59 -97 59 -74 0 -84 -9 -150 -135 -29 -55 -54 -102 -56 -104 -8 -9 -224 225 -224 243 0 9 -51 80 -63 88 -7 4 -40 8 -74 8 -53 0 -64 -3 -77 -22z m720 -318 c-7 -36 -17 -87 -21 -114 -12 -85 -15 -88 -57 -51 l-27 23 48 89 c26 48 50 97 54 107 15 38 16 9 3 -54z m-422 -183 l29 -27 -28 -55 c-16 -30 -31 -53 -33 -51 -2 2 -7 35 -13 72 -5 38 -11 80 -15 93 -5 22 -4 23 13 10 9 -8 31 -26 47 -42z">
          </path>
        </g>
      </g>
      <g fill={props.color ?? "#ffffff"}>
        <g>
          <path d="M10 1280 l0 -1280 1275 0 1275 0 0 1280 0 1280 -1275 0 -1275 0 0 -1280z m240 910 c0 -33 -4 -60 -10 -60 -6 0 -10 27 -10 60 0 33 4 60 10 60 6 0 10 -27 10 -60z m70 23 l1 -38 32 38 c18 20 35 37 40 37 4 0 7 -27 7 -60 0 -33 -4 -60 -10 -60 -5 0 -10 14 -10 30 0 38 -10 38 -35 0 -32 -47 -45 -39 -45 30 0 33 4 60 10 60 6 0 10 -17 10 -37z m216 12 c42 -42 12 -95 -53 -95 l-33 0 0 60 0 60 30 0 c20 0 40 -9 56 -25z m144 10 c0 -10 -10 -15 -30 -15 -16 0 -30 -4 -30 -10 0 -5 11 -10 24 -10 14 0 28 -4 31 -10 4 -6 -7 -10 -24 -10 -21 0 -31 -5 -31 -15 0 -10 10 -15 30 -15 17 0 30 -4 30 -10 0 -5 -20 -10 -45 -10 l-45 0 0 60 0 60 45 0 c33 0 45 -4 45 -15z m67 -4 c3 -12 15 -21 32 -23 20 -2 27 -9 29 -32 4 -34 -10 -46 -55 -46 l-33 0 0 60 c0 59 16 83 27 41z m191 7 c-3 -7 -19 -14 -36 -16 -41 -4 -42 -22 -2 -22 36 0 40 -17 5 -22 -37 -4 -35 -22 3 -26 48 -5 39 -22 -13 -22 l-45 0 0 60 0 60 46 0 c32 0 44 -4 42 -12z m62 -25 l1 -38 30 38 c17 20 35 37 40 37 5 0 9 -27 9 -60 0 -33 -4 -60 -10 -60 -5 0 -10 14 -10 30 0 17 -4 30 -8 30 -5 0 -18 -13 -30 -30 -13 -16 -27 -30 -32 -30 -6 0 -10 27 -10 60 0 33 4 60 10 60 6 0 10 -17 10 -37z m208 21 c49 -34 16 -104 -50 -104 l-38 0 0 53 c0 30 3 57 7 60 12 12 58 7 81 -9z m150 4 c-3 -7 -17 -14 -31 -16 -34 -4 -35 -22 -2 -22 14 0 25 -4 25 -10 0 -5 -11 -10 -25 -10 -16 0 -25 -6 -25 -15 0 -10 10 -15 30 -15 17 0 30 -4 30 -10 0 -5 -20 -10 -45 -10 l-45 0 0 60 0 60 46 0 c32 0 44 -4 42 -12z m62 -25 l1 -38 32 38 c18 20 35 37 40 37 4 0 7 -27 7 -60 0 -33 -4 -60 -10 -60 -5 0 -10 15 -10 33 l-1 32 -29 -32 c-16 -18 -34 -33 -40 -33 -6 0 -10 26 -10 60 0 33 4 60 10 60 6 0 10 -17 10 -37z m180 -13 c0 -43 3 -50 20 -50 11 0 20 -4 20 -10 0 -5 -22 -10 -50 -10 -27 0 -50 5 -50 10 0 6 7 10 15 10 11 0 15 11 15 43 0 24 3 47 7 50 16 17 23 3 23 -43z m155 35 c0 -5 -12 -11 -27 -13 -26 -3 -28 -7 -28 -48 0 -32 -4 -44 -15 -44 -12 0 -15 13 -15 61 l0 60 43 -3 c23 -2 42 -7 42 -13z m75 -11 c0 -15 9 -42 21 -60 17 -28 18 -34 5 -34 -8 0 -21 10 -27 22 l-12 22 -15 -22 c-8 -12 -21 -22 -29 -22 -12 0 -11 7 6 36 12 19 21 46 21 60 0 15 6 24 15 24 10 0 15 -10 15 -26z m160 6 c0 -11 6 -20 13 -20 7 0 18 9 25 20 7 11 19 20 28 20 14 0 14 -3 4 -15 -10 -12 -10 -21 0 -45 17 -41 0 -60 -51 -60 l-39 0 0 60 c0 33 4 60 10 60 6 0 10 -9 10 -20z m204 -2 c21 -30 21 -98 1 -98 -11 0 -15 12 -15 44 0 27 -5 46 -12 49 -27 9 -38 -6 -38 -49 0 -32 -4 -44 -15 -44 -21 0 -20 78 2 102 22 25 59 23 77 -4z m76 -15 l1 -38 32 38 c18 20 35 37 40 37 4 0 7 -27 7 -60 0 -33 -4 -60 -10 -60 -5 0 -10 14 -10 30 0 38 -10 38 -35 0 -32 -47 -45 -39 -45 30 0 33 4 60 10 60 6 0 10 -17 10 -37z m-1956 -126 c26 -19 16 -50 -22 -66 -40 -18 -42 -35 -2 -26 23 5 30 3 30 -9 0 -35 -84 -31 -95 5 -8 24 7 45 40 53 39 10 30 28 -10 20 -38 -7 -48 7 -17 25 24 14 55 13 76 -2z m147 3 c15 -9 19 -22 19 -70 0 -47 -3 -60 -15 -60 -11 0 -15 12 -15 44 0 79 -46 84 -52 6 -2 -32 -7 -45 -18 -45 -11 0 -16 13 -18 47 -5 71 42 108 99 78z m96 -8 c2 -10 19 -22 36 -28 28 -8 32 -13 32 -44 0 -32 -3 -36 -36 -44 -59 -14 -69 -5 -69 62 0 32 3 62 7 65 12 12 25 7 30 -11z m143 -1 c0 -13 9 -20 29 -24 64 -13 61 -81 -4 -93 -57 -10 -65 -2 -65 64 0 32 3 62 7 65 13 14 33 7 33 -12z m218 3 c47 -33 16 -124 -43 -124 -31 0 -75 41 -75 70 0 28 43 70 72 70 13 0 34 -7 46 -16z m99 -4 c3 -11 8 -20 12 -20 3 0 12 9 19 20 7 11 19 20 27 20 17 0 20 -25 5 -35 -6 -4 -4 -15 5 -29 28 -42 -7 -76 -76 -76 l-29 0 0 70 c0 57 3 70 16 70 9 0 18 -9 21 -20z m183 -29 c0 -41 3 -50 21 -54 41 -11 14 -32 -41 -32 -55 0 -82 21 -41 32 17 4 21 13 21 47 0 45 5 56 27 56 9 0 13 -15 13 -49z m178 32 c2 -9 -8 -13 -32 -13 -25 0 -36 -4 -36 -15 0 -10 10 -15 30 -15 17 0 30 -4 30 -10 0 -5 -13 -10 -30 -10 -40 0 -38 -18 3 -22 20 -2 32 -8 32 -18 0 -11 -12 -15 -50 -15 l-50 0 -3 68 -3 68 52 -3 c31 -2 54 -8 57 -15z m144 -13 c39 -49 7 -102 -63 -104 l-44 -1 -3 54 c-4 77 0 85 51 78 26 -4 48 -14 59 -27z m229 9 c5 -8 6 -21 3 -29 -4 -8 -6 -27 -5 -42 2 -32 -22 -48 -73 -48 l-36 0 0 71 0 72 51 -5 c28 -3 55 -12 60 -19z m109 -6 c0 -16 9 -43 20 -61 11 -18 20 -37 20 -42 0 -18 -27 -10 -43 13 l-16 22 -16 -22 c-16 -23 -45 -31 -45 -13 0 5 9 24 20 42 11 18 20 42 20 54 0 24 8 34 27 34 8 0 13 -11 13 -27z m176 12 c4 -8 17 -15 30 -15 14 0 27 7 30 15 5 13 44 23 44 11 0 -21 -62 -136 -74 -136 -14 0 -50 67 -62 117 -5 17 -2 23 10 23 9 0 19 -7 22 -15z m164 -8 c0 -13 9 -32 20 -42 27 -24 21 -37 -18 -41 l-32 -4 0 55 c0 42 3 55 15 55 9 0 15 -9 15 -23z m140 13 c18 -11 5 -25 -23 -25 -15 0 -22 -6 -22 -20 0 -14 7 -20 24 -20 34 0 38 -23 6 -31 -18 -4 -32 -1 -45 11 -49 45 4 120 60 85z m-1873 -221 c32 -12 83 -57 83 -73 0 -6 -19 -21 -41 -33 l-41 -23 -26 20 c-13 11 -35 20 -48 20 -26 0 -64 -43 -64 -72 0 -22 18 -60 34 -70 21 -14 63 -8 81 11 17 20 18 20 59 -6 22 -14 43 -27 45 -29 8 -7 -43 -55 -73 -71 -20 -10 -49 -14 -92 -11 -71 4 -104 23 -142 79 -32 46 -28 148 7 197 44 62 143 90 218 61z m501 -41 l3 -48 -80 0 -81 0 0 -125 0 -126 -57 3 -58 3 -3 160 c-1 87 0 165 3 172 3 11 35 13 137 11 l133 -3 3 -47z m391 34 c66 -33 76 -58 80 -203 l3 -129 -61 0 -61 0 0 113 c0 75 -4 117 -12 125 -16 16 -63 15 -76 -1 -6 -7 -13 -62 -14 -123 l-3 -109 -58 -3 -59 -3 4 130 c3 112 6 133 24 158 30 41 80 63 144 63 33 0 69 -7 89 -18z m459 9 c59 -12 92 -44 92 -92 0 -29 -7 -43 -29 -61 l-28 -24 24 -22 c34 -30 29 -87 -10 -116 -25 -18 -45 -21 -153 -24 l-124 -4 0 170 c0 93 3 172 7 175 9 10 169 8 221 -2z m467 -5 c42 -18 67 -55 67 -102 0 -45 -32 -81 -86 -95 -90 -25 -106 -31 -101 -40 9 -14 67 -11 97 5 27 14 29 13 53 -18 14 -18 25 -38 25 -43 0 -19 -79 -43 -141 -43 -97 0 -149 39 -149 113 0 48 31 81 91 97 75 19 89 25 89 35 1 17 -51 17 -97 0 -42 -16 -45 -16 -64 1 -41 37 -42 52 -7 70 70 36 163 45 223 20z m-1768 -484 c12 -8 63 -79 63 -88 0 -19 257 -293 265 -282 1 2 30 57 64 123 35 66 72 128 83 138 41 35 95 15 112 -40 6 -20 -21 -79 -121 -262 l-25 -45 39 -32 c21 -18 42 -33 46 -34 5 0 15 -7 23 -15 19 -18 44 -20 44 -2 0 6 7 48 15 92 8 44 21 121 30 170 22 123 22 125 62 141 31 13 38 13 59 -1 34 -22 38 -54 21 -153 -59 -333 -59 -333 -46 -348 6 -8 17 -14 23 -14 6 0 48 -18 94 -40 45 -22 88 -40 96 -40 7 0 30 -7 49 -15 20 -8 38 -15 41 -15 2 0 -3 26 -11 58 -67 253 161 493 430 451 84 -13 169 -56 181 -92 8 -21 6 -33 -11 -55 -27 -36 -43 -38 -124 -12 -93 30 -169 25 -236 -16 -114 -71 -143 -203 -68 -312 50 -74 104 -101 210 -109 75 -5 93 -10 112 -29 13 -13 23 -32 23 -44 0 -29 -44 -70 -77 -71 -72 -2 -132 3 -178 15 -27 8 -68 17 -90 21 -86 14 -383 121 -477 171 -25 14 -28 13 -28 -1 0 -24 -46 -65 -73 -65 -13 0 -34 11 -47 25 -19 20 -22 32 -18 73 5 47 4 49 -31 70 -66 41 -76 47 -109 71 -19 13 -37 19 -42 15 -10 -12 -50 -86 -145 -269 -85 -166 -113 -200 -154 -190 -38 9 -59 35 -65 80 -20 163 -51 398 -71 550 -50 376 -51 380 -32 409 13 19 26 26 50 26 17 0 37 -4 44 -8z">
          </path>
          <path d="M470 2184 c0 -31 3 -35 21 -32 48 7 51 68 4 68 -22 0 -25 -4 -25 -36z">
          </path>
          <path d="M750 2170 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z">
          </path>
          <path d="M1150 2185 c0 -24 5 -35 14 -35 21 0 48 30 42 47 -3 8 -6 17 -6 19 0 2 -11 4 -25 4 -22 0 -25 -4 -25 -35z">
          </path>
          <path d="M1995 2180 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z">
          </path>
          <path d="M560 2016 c0 -8 4 -17 9 -20 11 -7 33 18 24 27 -12 12 -33 7 -33 -7z">
          </path>
          <path d="M700 2016 c0 -8 4 -17 8 -20 13 -8 35 11 28 23 -10 16 -36 14 -36 -3z">
          </path>
          <path d="M858 2059 c-24 -13 -23 -46 1 -59 15 -7 23 -6 35 6 9 8 16 19 16 24 0 7 -28 41 -33 40 -1 0 -10 -5 -19 -11z">
          </path>
          <path d="M1020 2016 c0 -10 9 -16 21 -16 24 0 21 23 -4 28 -10 2 -17 -3 -17 -12z">
          </path>
          <path d="M1450 2030 c0 -27 3 -31 23 -28 16 2 22 10 22 28 0 18 -6 26 -22 28 -20 3 -23 -1 -23 -28z">
          </path>
          <path d="M1675 2060 c-8 -12 20 -24 35 -15 6 3 8 11 5 16 -8 12 -32 12 -40 -1z">
          </path>
          <path d="M1677 2014 c-9 -10 2 -24 19 -24 8 0 14 7 14 15 0 15 -21 21 -33 9z">
          </path>
          <path d="M2056 2025 c4 -8 7 -15 9 -15 2 0 5 7 9 15 3 9 0 15 -9 15 -9 0 -12 -6 -9 -15z">
          </path>
          <path d="M1707 1783 c-4 -3 -7 -15 -7 -25 0 -15 8 -18 45 -18 48 0 72 23 44 41 -16 10 -73 12 -82 2z">
          </path>
          <path d="M1707 1663 c-4 -3 -7 -15 -7 -25 0 -14 8 -18 40 -18 43 0 66 24 39 41 -17 10 -63 12 -72 2z">
          </path>
          <path d="M590 1039 c0 -15 18 -163 25 -209 2 -14 9 -61 15 -104 5 -44 12 -82 15 -84 2 -2 20 27 39 64 19 38 48 93 63 122 l28 52 -45 42 c-25 22 -66 61 -92 86 -29 28 -48 40 -48 31z">
          </path>
        </g>
      </g>
    </svg>
  );
}

ArcLogoIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};