<template>
  <div class="container h-screen p-0 m-0 mb-0 bg-white rounded-md">
    <div v-show="!this.showFinal">
      <div v-if="this.showShit">
        <form action="#" @submit.prevent>
          <div
            class="shadow overflow-hidden sm:rounded-md mt-[15] text-[#00345c]"
          >
            <div class="px-4 py-3 bg-white sm:p-6">
              <div class="text-center">
                <h1 class="p-1 mb-2 text-4xl">Rideshare</h1>
              </div>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-12 sm:col-span-6">
                  <label for="first-name" class="block text-sm font-medium"
                    >First name</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    required
                    class="
                      mt-1
                      outline-none
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      focus:outline-[#5ce7c8]
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label for="last-name" class="block text-sm font-medium"
                    >Last name</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autocomplete="family-name"
                    class="
                      mt-1
                      outline-none
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      focus:outline-[#5ce7c8]
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="meet" class="block text-sm font-medium"
                    >Meet time</label
                  >
                  <input
                    type="datetime-local"
                    name="meet"
                    id="meet"
                    class="
                      mt-1
                      outline-none
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      focus:outline-[#5ce7c8]
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="car-reg" class="block text-sm font-medium"
                    >Car Reg</label
                  >
                  <input
                    type="text"
                    v-model="reg"
                    name="car-reg"
                    placeholder="LLNNLLL"
                    id="car-reg"
                    class="
                      mt-1
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      rounded-md
                      outline-none
                      focus:outline-[#5ce7c8]
                    "
                  />
                </div>
              </div>
            </div>
            <div
              class="justify-center px-4 py-4 text-center bg-white  sm:px-6 align-center"
            >
              <button
                type="submit"
                @click="this.submitForm"
                class="
                  inline-flex
                  justify-center
                  py-2
                  mb-1
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-black
                  hover:bg-[#5ce7c8]
                  bg-[#ebc4f5]
                  w-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Get Sharing
              </button>
            </div>
          </div>
        </form>
        <div class="mt-[10rem] mr-0 text-2xl text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="600"
            height="100"
            viewBox="0 0 642 149"
            xml:space="preserve"
            class="mx-auto"
          >
            <defs></defs>
            <g transform="matrix(1 0 0 1 331.85 171.26)">
              <g style="">
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                  id="circle1858-5-9-3"
                >
                  <circle
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    cx="0"
                    cy="0"
                    r="27.529131"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                  id="circle1860-0-8-5"
                >
                  <linearGradient
                    id="SVGID_linearGradient1888-0-1-9_5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(1.41 0 0 1.41 -54.37 -251.26)"
                    x1="74.801247"
                    y1="172.20081"
                    x2="132.7516"
                    y2="122.59023"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: rgb(255, 0, 255); stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: rgb(255, 102, 0); stop-opacity: 1"
                    />
                  </linearGradient>
                  <circle
                    style="
                      stroke: url(#SVGID_linearGradient1888-0-1-9_5);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(255, 255, 255);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    cx="0"
                    cy="0"
                    r="20.607521"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                  id="circle1862-1-0-0"
                >
                  <circle
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    cx="0"
                    cy="0"
                    r="9.5958691"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -228.52 -126.24)"
                  id="rect1864-5-6-8"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(-1.9 1.9 -1.9 -1.9 -227.67 -67.1)"
                  id="rect1866-0-3-7"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -288.61 -66.2)"
                  id="rect1868-2-5-3"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(-1.9 1.9 -1.9 -1.9 -286.47 -125.96)"
                  id="rect1870-1-1-1"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(2.69 0 0 2.69 -257.66 -135.56)"
                  id="rect1874-8-8-0"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(0 2.69 -2.69 0 -220.5 -97.12)"
                  id="rect1876-0-3-5"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(-2.69 0 0 -2.69 -257.66 -57.33)"
                  id="rect1878-5-6-18"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(0 2.69 -2.69 0 -294.62 -97.12)"
                  id="rect1880-2-4-5"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(7.51 0 0 7.51 72.33 -90.27)"
                  style=""
                  id="text440-9-1"
                >
                  <text
                    xml:space="preserve"
                    font-family="ubuntu"
                    font-size="13.5862"
                    font-style="normal"
                    font-weight="normal"
                    style="
                      stroke: none;
                      stroke-width: 0.0203794;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(0, 52, 92);
                      fill-rule: nonzero;
                      opacity: 1;
                      white-space: pre;
                    "
                  >
                    <tspan x="-32.1" y="4.27">RideShare</tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
          <p class="mt-[2rem]">In Partnership With</p>
          <svg
            class="mx-auto mt-[1.6rem]"
            width="400"
            height="100"
            viewBox="0 0 1505 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M133.5 233.951C195.588 233.951 245.921 186.069 245.921 127.002C245.921 67.9358 195.588 20.053 133.5 20.053C71.4116 20.053 21.0789 67.9358 21.0789 127.002C21.0789 186.069 71.4116 233.951 133.5 233.951ZM133.5 254.004C207.23 254.004 267 197.144 267 127.002C267 56.8608 207.23 0 133.5 0C59.77 0 0 56.8608 0 127.002C0 197.144 59.77 254.004 133.5 254.004Z"
              fill="url(#paint0_linear_3_9)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M74.4789 175.129L74.479 24.0636H99.7737L99.7737 175.129H74.4789Z"
              fill="url(#paint1_linear_3_9)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M139.746 205.877L139.746 122.992H165.509V205.877H139.746Z"
              fill="url(#paint2_linear_3_9)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M107.112 205.877L107.112 84.2225H132.875L132.875 205.877H107.112Z"
              fill="url(#paint3_linear_3_9)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M172.379 167.108V122.992H198.142V167.108H172.379Z"
              fill="url(#paint4_linear_3_9)"
            />
            <path
              d="M322.572 187V79.7002H387.611L386.806 95.4473H342.421V123.133H384.608V138.88H342.421V171.18H388.417L387.758 187H322.572ZM405.116 187V106.507H420.57L422.694 116.688C430.897 108.582 440.004 104.529 450.014 104.529C459.389 104.529 466.396 107.239 471.034 112.659C475.722 118.03 478.065 125.843 478.065 136.097V187H458.803V138.44C458.754 131.946 457.704 127.088 455.653 123.865C453.603 120.643 449.916 119.031 444.594 119.031C440.443 119.031 436.635 120.105 433.168 122.254C429.75 124.354 427.26 127.015 425.697 130.237C424.77 134.046 424.306 139.905 424.306 147.815V187H405.116ZM518.349 187L486.269 106.507H506.63C507.411 108.704 509.877 115.54 514.027 127.015C518.227 138.44 521.01 146.229 522.377 150.379C525.16 158.484 527.162 164.612 528.383 168.763C528.383 168.714 528.798 167.127 529.628 164.002C530.458 160.877 531.239 157.947 531.972 155.213C532.753 152.43 533.241 150.745 533.437 150.159C533.485 150.062 535.707 143.323 540.102 129.944C544.545 116.565 547.182 108.753 548.012 106.507H568.227L537.758 187H518.349ZM578.7 187V106.507H597.89V187H578.7ZM578.7 94.7881V78.3818H597.963V94.7881H578.7ZM618.031 187V106.507H634.145L636.635 118.812C641.908 110.364 649.55 106.141 659.56 106.141C661.659 106.141 663.368 106.238 664.687 106.434L664.394 122.474C662.44 122.181 660.414 122.034 658.314 122.034C651.234 122.034 645.937 123.914 642.421 127.674C638.954 131.434 637.221 136.658 637.221 143.348V187H618.031ZM710.756 173.963C717.25 173.963 722.133 171.595 725.404 166.858C728.676 162.122 730.312 155.335 730.312 146.497C730.312 137.562 728.676 130.75 725.404 126.062C722.133 121.375 717.201 119.031 710.609 119.031C704.115 119.031 699.208 121.399 695.888 126.136C692.616 130.823 690.98 137.635 690.98 146.57C690.98 155.359 692.641 162.122 695.961 166.858C699.281 171.595 704.213 173.963 710.756 173.963ZM710.243 188.538C698.329 188.538 688.954 184.681 682.118 176.966C675.282 169.251 671.864 159.095 671.864 146.497C671.864 133.509 675.282 123.279 682.118 115.809C688.954 108.289 698.598 104.529 711.049 104.529C723.061 104.529 732.46 108.362 739.247 116.028C746.083 123.646 749.501 133.802 749.501 146.497C749.501 159.339 746.059 169.568 739.174 177.186C732.289 184.754 722.646 188.538 710.243 188.538ZM765.175 187V106.507H780.629L782.753 116.688C790.956 108.582 800.062 104.529 810.072 104.529C819.447 104.529 826.454 107.239 831.093 112.659C835.78 118.03 838.124 125.843 838.124 136.097V187H818.861V138.44C818.812 131.946 817.763 127.088 815.712 123.865C813.661 120.643 809.975 119.031 804.652 119.031C800.502 119.031 796.693 120.105 793.227 122.254C789.809 124.354 787.318 127.015 785.756 130.237C784.828 134.046 784.364 139.905 784.364 147.815V187H765.175ZM898.549 187V79.7002H918.397V171.18H963.295L962.709 187H898.549ZM1010.32 173.963C1016.81 173.963 1021.69 171.595 1024.96 166.858C1028.24 162.122 1029.87 155.335 1029.87 146.497C1029.87 137.562 1028.24 130.75 1024.96 126.062C1021.69 121.375 1016.76 119.031 1010.17 119.031C1003.68 119.031 998.769 121.399 995.448 126.136C992.177 130.823 990.541 137.635 990.541 146.57C990.541 155.359 992.201 162.122 995.521 166.858C998.842 171.595 1003.77 173.963 1010.32 173.963ZM1009.8 188.538C997.89 188.538 988.515 184.681 981.679 176.966C974.843 169.251 971.425 159.095 971.425 146.497C971.425 133.509 974.843 123.279 981.679 115.809C988.515 108.289 998.158 104.529 1010.61 104.529C1022.62 104.529 1032.02 108.362 1038.81 116.028C1045.64 123.646 1049.06 133.802 1049.06 146.497C1049.06 159.339 1045.62 169.568 1038.73 177.186C1031.85 184.754 1022.21 188.538 1009.8 188.538ZM1080.85 223.035L1079.75 207.508H1089.49C1100.77 207.508 1108.66 205.994 1113.15 202.967C1117.64 199.988 1119.89 194.495 1119.89 186.487C1119.89 183.216 1119.74 179.676 1119.45 175.867C1118.18 177.625 1116.96 179.09 1115.79 180.262C1114.66 181.385 1113.22 182.508 1111.46 183.631C1109.75 184.754 1107.68 185.608 1105.24 186.194C1102.85 186.731 1100.11 187 1097.04 187C1086.39 187 1077.63 183.167 1070.74 175.501C1063.91 167.835 1060.49 157.947 1060.49 145.838C1060.49 139.393 1061.44 133.533 1063.34 128.26C1065.25 122.938 1067.84 118.567 1071.11 115.149C1074.38 111.731 1078.14 109.119 1082.39 107.312C1086.68 105.457 1091.25 104.529 1096.08 104.529C1106.87 104.529 1114.91 108.46 1120.18 116.321L1121.5 106.507H1138.64V181.287C1138.64 185.291 1138.44 188.88 1138.05 192.054C1137.66 195.276 1136.98 198.353 1136 201.282C1135.02 204.261 1133.73 206.849 1132.12 209.046C1130.56 211.243 1128.58 213.245 1126.19 215.052C1123.79 216.858 1120.96 218.323 1117.69 219.446C1114.47 220.618 1110.71 221.497 1106.41 222.083C1102.11 222.718 1097.28 223.035 1091.91 223.035H1080.85ZM1100.11 173.597C1113.34 173.597 1120.03 164.734 1120.18 147.01V144.227C1120.08 136.268 1118.42 130.115 1115.2 125.77C1111.98 121.424 1107.26 119.227 1101.06 119.178C1094.03 119.178 1088.71 121.595 1085.1 126.429C1081.48 131.214 1079.68 137.684 1079.68 145.838C1079.68 153.699 1081.48 160.291 1085.1 165.613C1088.76 170.936 1093.76 173.597 1100.11 173.597ZM1158.05 187V106.507H1177.24V187H1158.05ZM1158.05 94.7881V78.3818H1177.31V94.7881H1158.05ZM1223.01 188.465C1211.15 188.465 1201.65 186.438 1194.52 182.386L1196.5 167.957C1199.72 169.715 1203.82 171.302 1208.8 172.718C1213.78 174.085 1218.32 174.769 1222.43 174.769C1226.67 174.769 1229.97 173.987 1232.31 172.425C1234.71 170.813 1235.93 168.47 1235.98 165.394C1235.98 162.61 1234.85 160.413 1232.61 158.802C1230.41 157.19 1226.19 155.188 1219.94 152.796C1217.79 152.015 1216.4 151.502 1215.76 151.258C1208.34 148.377 1202.99 145.179 1199.72 141.663C1196.45 138.099 1194.81 133.289 1194.81 127.234C1194.81 119.91 1197.45 114.295 1202.72 110.389C1208.05 106.482 1215.44 104.529 1224.92 104.529C1235.17 104.529 1244.18 106.458 1251.94 110.315L1247.18 123.572C1239.52 120.008 1232.22 118.226 1225.28 118.226C1221.42 118.226 1218.4 118.885 1216.2 120.203C1214.05 121.473 1212.98 123.426 1212.98 126.062C1212.98 128.553 1214.03 130.506 1216.13 131.922C1218.23 133.289 1222.33 135.096 1228.43 137.342C1228.63 137.391 1229.26 137.61 1230.34 138.001C1231.41 138.392 1232.24 138.709 1232.83 138.953C1240.2 141.639 1245.62 144.861 1249.09 148.621C1252.55 152.332 1254.29 157.19 1254.29 163.196C1254.24 171.253 1251.5 177.479 1246.08 181.873C1240.66 186.268 1232.97 188.465 1223.01 188.465ZM1301.67 188.099C1296.21 188.099 1291.64 187.464 1287.98 186.194C1284.36 184.876 1281.53 182.825 1279.48 180.042C1277.43 177.259 1275.97 173.987 1275.09 170.228C1274.26 166.419 1273.84 161.731 1273.84 156.165V118.152H1260.66L1261.39 107.752L1275.16 106.507L1281.31 84.6807L1293.03 84.6074V106.507H1313.03V118.152H1293.03V156.531C1293.03 162.635 1293.91 166.98 1295.67 169.568C1297.43 172.156 1300.67 173.45 1305.41 173.45C1308.19 173.45 1311.17 173.206 1314.34 172.718L1314.86 186.487C1314.76 186.487 1314.15 186.609 1313.03 186.854C1311.95 187.049 1310.9 187.22 1309.88 187.366C1308.9 187.562 1307.63 187.732 1306.07 187.879C1304.51 188.025 1303.04 188.099 1301.67 188.099ZM1328.85 187V106.507H1348.04V187H1328.85ZM1328.85 94.7881V78.3818H1348.11V94.7881H1328.85ZM1403.33 188.538C1391.03 188.538 1381.43 184.876 1374.55 177.552C1367.71 170.228 1364.3 159.754 1364.3 146.131C1364.3 132.947 1367.88 122.718 1375.06 115.442C1382.29 108.167 1391.79 104.529 1403.55 104.529C1412.98 104.529 1420.94 106.556 1427.43 110.608L1422.89 124.305C1416.25 120.838 1410.07 119.104 1404.36 119.104C1397.87 119.104 1392.74 121.424 1388.98 126.062C1385.27 130.701 1383.41 137.464 1383.41 146.351C1383.41 155.335 1385.24 162.171 1388.91 166.858C1392.62 171.546 1397.84 173.89 1404.58 173.89C1411.61 173.89 1418.37 171.814 1424.87 167.664L1426.7 182.239C1423.33 184.485 1419.84 186.097 1416.22 187.073C1412.61 188.05 1408.31 188.538 1403.33 188.538ZM1467.64 188.465C1455.78 188.465 1446.28 186.438 1439.15 182.386L1441.13 167.957C1444.35 169.715 1448.45 171.302 1453.43 172.718C1458.41 174.085 1462.95 174.769 1467.05 174.769C1471.3 174.769 1474.6 173.987 1476.94 172.425C1479.33 170.813 1480.56 168.47 1480.6 165.394C1480.6 162.61 1479.48 160.413 1477.24 158.802C1475.04 157.19 1470.81 155.188 1464.56 152.796C1462.42 152.015 1461.02 151.502 1460.39 151.258C1452.97 148.377 1447.62 145.179 1444.35 141.663C1441.08 138.099 1439.44 133.289 1439.44 127.234C1439.44 119.91 1442.08 114.295 1447.35 110.389C1452.67 106.482 1460.07 104.529 1469.54 104.529C1479.8 104.529 1488.81 106.458 1496.57 110.315L1491.81 123.572C1484.14 120.008 1476.84 118.226 1469.91 118.226C1466.05 118.226 1463.03 118.885 1460.83 120.203C1458.68 121.473 1457.61 123.426 1457.61 126.062C1457.61 128.553 1458.66 130.506 1460.76 131.922C1462.86 133.289 1466.96 135.096 1473.06 137.342C1473.26 137.391 1473.89 137.61 1474.96 138.001C1476.04 138.392 1476.87 138.709 1477.46 138.953C1484.83 141.639 1490.25 144.861 1493.71 148.621C1497.18 152.332 1498.92 157.19 1498.92 163.196C1498.87 171.253 1496.13 177.479 1490.71 181.873C1485.29 186.268 1477.6 188.465 1467.64 188.465Z"
              fill="black"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_9"
                x1="232.571"
                y1="50.8009"
                x2="24.5582"
                y2="115.355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF3124" />
                <stop offset="1" stop-color="#FF8126" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3_9"
                x1="232.571"
                y1="50.8009"
                x2="24.5582"
                y2="115.355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF3124" />
                <stop offset="1" stop-color="#FF8126" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_3_9"
                x1="232.571"
                y1="50.8009"
                x2="24.5582"
                y2="115.355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF3124" />
                <stop offset="1" stop-color="#FF8126" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_3_9"
                x1="232.571"
                y1="50.8009"
                x2="24.5582"
                y2="115.355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF3124" />
                <stop offset="1" stop-color="#FF8126" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_3_9"
                x1="232.571"
                y1="50.8009"
                x2="24.5582"
                y2="115.355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF3124" />
                <stop offset="1" stop-color="#FF8126" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Transition name="slide-fade">
        <div>
          <div
            v-if="this.showSpinner"
            class="justify-center mx-auto my-auto spinner align-center"
          >
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <!-- <svg v-if="this.showSpinner" class="justify-center my-auto animate-spin align-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#000000'><path d="M21 10V3l-2.7 2.7C16.6 4 14.3 3 11.8 3c-4.7.1-8.7 4-8.8 8.7-.1 5.1 3.9 9.3 9 9.3 3.3 0 6.2-1.8 7.8-4.5.4-.7-.1-1.5-.9-1.5-.4 0-.7.2-.9.5-1.3 2.1-3.6 3.6-6.3 3.5C8 18.9 5 15.8 5 12.1 4.9 8.2 8.1 5 12 5c1.9 0 3.7.8 4.9 2.1L14 10h7z"></path></g></svg> -->

          <div v-if="store.show2">
            <div
              class="container relative items-center w-full p-4 mt-5 text-center bg-white rounded shadow "
            >
              <div class="">
                <img
                  :src="store.img"
                  alt=""
                  class="w-32 mx-auto rounded-full shadow-lg"
                />
              </div>

              <h1 class="text-2xl text-[#ebc4f5] font-semibold my-3">
                You've matched with
              </h1>
              <h5
                class="text-3xl font-medium leading-tight my-3 text-[#5ce7c8]"
              >
                {{ store.firstName }} {{ store.lastName }}
              </h5>
              <h4 class="text-lg text-[#ebc4f5] font-semibold my-3">
                Who lives at
              </h4>
              <a
                target="_blank"
                :href="link"
                class="text-xl font-bold text-[#5ce7c8] my-3"
                >{{ store.loccode }}</a
              >

              <h4
                v-if="store.gender"
                class="text-lg text-[#ebc4f5] font-semibold my-3"
              >
                Contact him at
              </h4>
              <h4 v-else class="text-lg text-[#ebc4f5] font-semibold my-3">
                Contact her at
              </h4>
              <a
                class="text-xl text-[rgb(92,231,200)] font-bold my-3"
                :href="this.email"
              >
                {{ this.eemail }}</a
              >
              <star-rating
                :rating="3.8"
                :read-only="true"
                :increment="0.01"
                v-model:rating="rating"
              ></star-rating>

              <div class="block mt-5">
                <button
                  @click="this.showFinal = true"
                  type="button"
                  class="
                    py-3
                    w-50
                    text-sm
                    align-center
                    font-medium
                    leading-snug
                    text-white
                    uppercase
                    transition
                    duration-150
                    ease-in-out
                    bg-[rgb(92,231,200)]
                    rounded
                    shadow-md
                    w-50
                    px-7
                    hover:bg-green-500 hover:shadow-lg
                    active:shadow-lg
                  "
                >
                  &#10004;&nbsp;&nbsp; Accept Sharing
                </button>
                <button
                  @click="denySharing"
                  type="button align-center"
                  class="
                    py-3
                    w-50
                    text-sm
                    font-medium
                    leading-snug
                    text-white
                    uppercase
                    transition
                    duration-150
                    ease-in-out
                    bg-[#ebc4f5]
                    rounded
                    shadow-md
                    w-50
                    px-7
                    hover:bg-red-500 hover:shadow-lg
                    active:shadow-lg
                  "
                >
                  &#10799;&nbsp;&nbsp; Deny Sharing
                </button>
              </div>
            </div>
            <div class="mt-[7rem] mr-0 text-2xl text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="600"
                height="100"
                viewBox="0 0 642 149"
                xml:space="preserve"
                class="mx-auto"
              >
                <defs></defs>
                <g transform="matrix(1 0 0 1 331.85 171.26)">
                  <g style="">
                    <g
                      transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                      id="circle1858-5-9-3"
                    >
                      <circle
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        cx="0"
                        cy="0"
                        r="27.529131"
                      />
                    </g>
                    <g
                      transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                      id="circle1860-0-8-5"
                    >
                      <linearGradient
                        id="SVGID_linearGradient1888-0-1-9_5"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(1.41 0 0 1.41 -54.37 -251.26)"
                        x1="74.801247"
                        y1="172.20081"
                        x2="132.7516"
                        y2="122.59023"
                      >
                        <stop
                          offset="0%"
                          style="stop-color: rgb(255, 0, 255); stop-opacity: 1"
                        />
                        <stop
                          offset="100%"
                          style="stop-color: rgb(255, 102, 0); stop-opacity: 1"
                        />
                      </linearGradient>
                      <circle
                        style="
                          stroke: url(#SVGID_linearGradient1888-0-1-9_5);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(255, 255, 255);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        cx="0"
                        cy="0"
                        r="20.607521"
                      />
                    </g>
                    <g
                      transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                      id="circle1862-1-0-0"
                    >
                      <circle
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        cx="0"
                        cy="0"
                        r="9.5958691"
                      />
                    </g>
                    <g
                      transform="matrix(1.9 1.9 -1.9 1.9 -228.52 -126.24)"
                      id="rect1864-5-6-8"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(-1.9 1.9 -1.9 -1.9 -227.67 -67.1)"
                      id="rect1866-0-3-7"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(1.9 1.9 -1.9 1.9 -288.61 -66.2)"
                      id="rect1868-2-5-3"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(-1.9 1.9 -1.9 -1.9 -286.47 -125.96)"
                      id="rect1870-1-1-1"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(2.69 0 0 2.69 -257.66 -135.56)"
                      id="rect1874-8-8-0"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(0 2.69 -2.69 0 -220.5 -97.12)"
                      id="rect1876-0-3-5"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(-2.69 0 0 -2.69 -257.66 -57.33)"
                      id="rect1878-5-6-18"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(0 2.69 -2.69 0 -294.62 -97.12)"
                      id="rect1880-2-4-5"
                    >
                      <rect
                        style="
                          stroke: rgb(255, 99, 140);
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: round;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(235, 196, 245);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        x="-2.9102223"
                        y="-9.640112"
                        rx="0"
                        ry="0"
                        width="5.8204446"
                        height="19.280224"
                      />
                    </g>
                    <g
                      transform="matrix(7.51 0 0 7.51 72.33 -90.27)"
                      style=""
                      id="text440-9-1"
                    >
                      <text
                        xml:space="preserve"
                        font-family="ubuntu"
                        font-size="13.5862"
                        font-style="normal"
                        font-weight="normal"
                        style="
                          stroke: none;
                          stroke-width: 0.0203794;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-dashoffset: 0;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          fill: rgb(0, 52, 92);
                          fill-rule: nonzero;
                          opacity: 1;
                          white-space: pre;
                        "
                      >
                        <tspan x="-32.1" y="4.27">RideShare</tspan>
                      </text>
                    </g>
                  </g>
                </g>
              </svg>
              <p class="mt-[2rem]">In Partnership With</p>
              <svg
                class="mx-auto mt-[0.2rem]"
                width="400"
                height="140"
                viewBox="0 0 1505 255"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M133.5 233.951C195.588 233.951 245.921 186.069 245.921 127.002C245.921 67.9358 195.588 20.053 133.5 20.053C71.4116 20.053 21.0789 67.9358 21.0789 127.002C21.0789 186.069 71.4116 233.951 133.5 233.951ZM133.5 254.004C207.23 254.004 267 197.144 267 127.002C267 56.8608 207.23 0 133.5 0C59.77 0 0 56.8608 0 127.002C0 197.144 59.77 254.004 133.5 254.004Z"
                  fill="url(#paint0_linear_3_9)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M74.4789 175.129L74.479 24.0636H99.7737L99.7737 175.129H74.4789Z"
                  fill="url(#paint1_linear_3_9)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M139.746 205.877L139.746 122.992H165.509V205.877H139.746Z"
                  fill="url(#paint2_linear_3_9)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M107.112 205.877L107.112 84.2225H132.875L132.875 205.877H107.112Z"
                  fill="url(#paint3_linear_3_9)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M172.379 167.108V122.992H198.142V167.108H172.379Z"
                  fill="url(#paint4_linear_3_9)"
                />
                <path
                  d="M322.572 187V79.7002H387.611L386.806 95.4473H342.421V123.133H384.608V138.88H342.421V171.18H388.417L387.758 187H322.572ZM405.116 187V106.507H420.57L422.694 116.688C430.897 108.582 440.004 104.529 450.014 104.529C459.389 104.529 466.396 107.239 471.034 112.659C475.722 118.03 478.065 125.843 478.065 136.097V187H458.803V138.44C458.754 131.946 457.704 127.088 455.653 123.865C453.603 120.643 449.916 119.031 444.594 119.031C440.443 119.031 436.635 120.105 433.168 122.254C429.75 124.354 427.26 127.015 425.697 130.237C424.77 134.046 424.306 139.905 424.306 147.815V187H405.116ZM518.349 187L486.269 106.507H506.63C507.411 108.704 509.877 115.54 514.027 127.015C518.227 138.44 521.01 146.229 522.377 150.379C525.16 158.484 527.162 164.612 528.383 168.763C528.383 168.714 528.798 167.127 529.628 164.002C530.458 160.877 531.239 157.947 531.972 155.213C532.753 152.43 533.241 150.745 533.437 150.159C533.485 150.062 535.707 143.323 540.102 129.944C544.545 116.565 547.182 108.753 548.012 106.507H568.227L537.758 187H518.349ZM578.7 187V106.507H597.89V187H578.7ZM578.7 94.7881V78.3818H597.963V94.7881H578.7ZM618.031 187V106.507H634.145L636.635 118.812C641.908 110.364 649.55 106.141 659.56 106.141C661.659 106.141 663.368 106.238 664.687 106.434L664.394 122.474C662.44 122.181 660.414 122.034 658.314 122.034C651.234 122.034 645.937 123.914 642.421 127.674C638.954 131.434 637.221 136.658 637.221 143.348V187H618.031ZM710.756 173.963C717.25 173.963 722.133 171.595 725.404 166.858C728.676 162.122 730.312 155.335 730.312 146.497C730.312 137.562 728.676 130.75 725.404 126.062C722.133 121.375 717.201 119.031 710.609 119.031C704.115 119.031 699.208 121.399 695.888 126.136C692.616 130.823 690.98 137.635 690.98 146.57C690.98 155.359 692.641 162.122 695.961 166.858C699.281 171.595 704.213 173.963 710.756 173.963ZM710.243 188.538C698.329 188.538 688.954 184.681 682.118 176.966C675.282 169.251 671.864 159.095 671.864 146.497C671.864 133.509 675.282 123.279 682.118 115.809C688.954 108.289 698.598 104.529 711.049 104.529C723.061 104.529 732.46 108.362 739.247 116.028C746.083 123.646 749.501 133.802 749.501 146.497C749.501 159.339 746.059 169.568 739.174 177.186C732.289 184.754 722.646 188.538 710.243 188.538ZM765.175 187V106.507H780.629L782.753 116.688C790.956 108.582 800.062 104.529 810.072 104.529C819.447 104.529 826.454 107.239 831.093 112.659C835.78 118.03 838.124 125.843 838.124 136.097V187H818.861V138.44C818.812 131.946 817.763 127.088 815.712 123.865C813.661 120.643 809.975 119.031 804.652 119.031C800.502 119.031 796.693 120.105 793.227 122.254C789.809 124.354 787.318 127.015 785.756 130.237C784.828 134.046 784.364 139.905 784.364 147.815V187H765.175ZM898.549 187V79.7002H918.397V171.18H963.295L962.709 187H898.549ZM1010.32 173.963C1016.81 173.963 1021.69 171.595 1024.96 166.858C1028.24 162.122 1029.87 155.335 1029.87 146.497C1029.87 137.562 1028.24 130.75 1024.96 126.062C1021.69 121.375 1016.76 119.031 1010.17 119.031C1003.68 119.031 998.769 121.399 995.448 126.136C992.177 130.823 990.541 137.635 990.541 146.57C990.541 155.359 992.201 162.122 995.521 166.858C998.842 171.595 1003.77 173.963 1010.32 173.963ZM1009.8 188.538C997.89 188.538 988.515 184.681 981.679 176.966C974.843 169.251 971.425 159.095 971.425 146.497C971.425 133.509 974.843 123.279 981.679 115.809C988.515 108.289 998.158 104.529 1010.61 104.529C1022.62 104.529 1032.02 108.362 1038.81 116.028C1045.64 123.646 1049.06 133.802 1049.06 146.497C1049.06 159.339 1045.62 169.568 1038.73 177.186C1031.85 184.754 1022.21 188.538 1009.8 188.538ZM1080.85 223.035L1079.75 207.508H1089.49C1100.77 207.508 1108.66 205.994 1113.15 202.967C1117.64 199.988 1119.89 194.495 1119.89 186.487C1119.89 183.216 1119.74 179.676 1119.45 175.867C1118.18 177.625 1116.96 179.09 1115.79 180.262C1114.66 181.385 1113.22 182.508 1111.46 183.631C1109.75 184.754 1107.68 185.608 1105.24 186.194C1102.85 186.731 1100.11 187 1097.04 187C1086.39 187 1077.63 183.167 1070.74 175.501C1063.91 167.835 1060.49 157.947 1060.49 145.838C1060.49 139.393 1061.44 133.533 1063.34 128.26C1065.25 122.938 1067.84 118.567 1071.11 115.149C1074.38 111.731 1078.14 109.119 1082.39 107.312C1086.68 105.457 1091.25 104.529 1096.08 104.529C1106.87 104.529 1114.91 108.46 1120.18 116.321L1121.5 106.507H1138.64V181.287C1138.64 185.291 1138.44 188.88 1138.05 192.054C1137.66 195.276 1136.98 198.353 1136 201.282C1135.02 204.261 1133.73 206.849 1132.12 209.046C1130.56 211.243 1128.58 213.245 1126.19 215.052C1123.79 216.858 1120.96 218.323 1117.69 219.446C1114.47 220.618 1110.71 221.497 1106.41 222.083C1102.11 222.718 1097.28 223.035 1091.91 223.035H1080.85ZM1100.11 173.597C1113.34 173.597 1120.03 164.734 1120.18 147.01V144.227C1120.08 136.268 1118.42 130.115 1115.2 125.77C1111.98 121.424 1107.26 119.227 1101.06 119.178C1094.03 119.178 1088.71 121.595 1085.1 126.429C1081.48 131.214 1079.68 137.684 1079.68 145.838C1079.68 153.699 1081.48 160.291 1085.1 165.613C1088.76 170.936 1093.76 173.597 1100.11 173.597ZM1158.05 187V106.507H1177.24V187H1158.05ZM1158.05 94.7881V78.3818H1177.31V94.7881H1158.05ZM1223.01 188.465C1211.15 188.465 1201.65 186.438 1194.52 182.386L1196.5 167.957C1199.72 169.715 1203.82 171.302 1208.8 172.718C1213.78 174.085 1218.32 174.769 1222.43 174.769C1226.67 174.769 1229.97 173.987 1232.31 172.425C1234.71 170.813 1235.93 168.47 1235.98 165.394C1235.98 162.61 1234.85 160.413 1232.61 158.802C1230.41 157.19 1226.19 155.188 1219.94 152.796C1217.79 152.015 1216.4 151.502 1215.76 151.258C1208.34 148.377 1202.99 145.179 1199.72 141.663C1196.45 138.099 1194.81 133.289 1194.81 127.234C1194.81 119.91 1197.45 114.295 1202.72 110.389C1208.05 106.482 1215.44 104.529 1224.92 104.529C1235.17 104.529 1244.18 106.458 1251.94 110.315L1247.18 123.572C1239.52 120.008 1232.22 118.226 1225.28 118.226C1221.42 118.226 1218.4 118.885 1216.2 120.203C1214.05 121.473 1212.98 123.426 1212.98 126.062C1212.98 128.553 1214.03 130.506 1216.13 131.922C1218.23 133.289 1222.33 135.096 1228.43 137.342C1228.63 137.391 1229.26 137.61 1230.34 138.001C1231.41 138.392 1232.24 138.709 1232.83 138.953C1240.2 141.639 1245.62 144.861 1249.09 148.621C1252.55 152.332 1254.29 157.19 1254.29 163.196C1254.24 171.253 1251.5 177.479 1246.08 181.873C1240.66 186.268 1232.97 188.465 1223.01 188.465ZM1301.67 188.099C1296.21 188.099 1291.64 187.464 1287.98 186.194C1284.36 184.876 1281.53 182.825 1279.48 180.042C1277.43 177.259 1275.97 173.987 1275.09 170.228C1274.26 166.419 1273.84 161.731 1273.84 156.165V118.152H1260.66L1261.39 107.752L1275.16 106.507L1281.31 84.6807L1293.03 84.6074V106.507H1313.03V118.152H1293.03V156.531C1293.03 162.635 1293.91 166.98 1295.67 169.568C1297.43 172.156 1300.67 173.45 1305.41 173.45C1308.19 173.45 1311.17 173.206 1314.34 172.718L1314.86 186.487C1314.76 186.487 1314.15 186.609 1313.03 186.854C1311.95 187.049 1310.9 187.22 1309.88 187.366C1308.9 187.562 1307.63 187.732 1306.07 187.879C1304.51 188.025 1303.04 188.099 1301.67 188.099ZM1328.85 187V106.507H1348.04V187H1328.85ZM1328.85 94.7881V78.3818H1348.11V94.7881H1328.85ZM1403.33 188.538C1391.03 188.538 1381.43 184.876 1374.55 177.552C1367.71 170.228 1364.3 159.754 1364.3 146.131C1364.3 132.947 1367.88 122.718 1375.06 115.442C1382.29 108.167 1391.79 104.529 1403.55 104.529C1412.98 104.529 1420.94 106.556 1427.43 110.608L1422.89 124.305C1416.25 120.838 1410.07 119.104 1404.36 119.104C1397.87 119.104 1392.74 121.424 1388.98 126.062C1385.27 130.701 1383.41 137.464 1383.41 146.351C1383.41 155.335 1385.24 162.171 1388.91 166.858C1392.62 171.546 1397.84 173.89 1404.58 173.89C1411.61 173.89 1418.37 171.814 1424.87 167.664L1426.7 182.239C1423.33 184.485 1419.84 186.097 1416.22 187.073C1412.61 188.05 1408.31 188.538 1403.33 188.538ZM1467.64 188.465C1455.78 188.465 1446.28 186.438 1439.15 182.386L1441.13 167.957C1444.35 169.715 1448.45 171.302 1453.43 172.718C1458.41 174.085 1462.95 174.769 1467.05 174.769C1471.3 174.769 1474.6 173.987 1476.94 172.425C1479.33 170.813 1480.56 168.47 1480.6 165.394C1480.6 162.61 1479.48 160.413 1477.24 158.802C1475.04 157.19 1470.81 155.188 1464.56 152.796C1462.42 152.015 1461.02 151.502 1460.39 151.258C1452.97 148.377 1447.62 145.179 1444.35 141.663C1441.08 138.099 1439.44 133.289 1439.44 127.234C1439.44 119.91 1442.08 114.295 1447.35 110.389C1452.67 106.482 1460.07 104.529 1469.54 104.529C1479.8 104.529 1488.81 106.458 1496.57 110.315L1491.81 123.572C1484.14 120.008 1476.84 118.226 1469.91 118.226C1466.05 118.226 1463.03 118.885 1460.83 120.203C1458.68 121.473 1457.61 123.426 1457.61 126.062C1457.61 128.553 1458.66 130.506 1460.76 131.922C1462.86 133.289 1466.96 135.096 1473.06 137.342C1473.26 137.391 1473.89 137.61 1474.96 138.001C1476.04 138.392 1476.87 138.709 1477.46 138.953C1484.83 141.639 1490.25 144.861 1493.71 148.621C1497.18 152.332 1498.92 157.19 1498.92 163.196C1498.87 171.253 1496.13 177.479 1490.71 181.873C1485.29 186.268 1477.6 188.465 1467.64 188.465Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_9"
                    x1="232.571"
                    y1="50.8009"
                    x2="24.5582"
                    y2="115.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3124" />
                    <stop offset="1" stop-color="#FF8126" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3_9"
                    x1="232.571"
                    y1="50.8009"
                    x2="24.5582"
                    y2="115.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3124" />
                    <stop offset="1" stop-color="#FF8126" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_3_9"
                    x1="232.571"
                    y1="50.8009"
                    x2="24.5582"
                    y2="115.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3124" />
                    <stop offset="1" stop-color="#FF8126" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_3_9"
                    x1="232.571"
                    y1="50.8009"
                    x2="24.5582"
                    y2="115.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3124" />
                    <stop offset="1" stop-color="#FF8126" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_3_9"
                    x1="232.571"
                    y1="50.8009"
                    x2="24.5582"
                    y2="115.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3124" />
                    <stop offset="1" stop-color="#FF8126" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <div v-show="this.showFinal">
      <Star />
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
import useValidate from "@vuelidate/core";
import Star from "./Star.vue";

import {
  required,
  minLength,
  maxLength,
  alphaNum,
} from "@vuelidate/validators";

import Map from "./Map.vue";
// import mapboxgl from "mapbox-gl";
// import { GeolocateControl } from "mapbox-gl-controls";

export default {
  data() {
    return {
      v$: useValidate(),
      store,
      reg: "",
      link: "",
      email: "",
      eemail: "",
      co2: "",
      showSpinner: false,
      showShit: true,
      rating: 3.8,
      showFinal: false,
    };
  },
  validations() {
    return {
      reg: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(7),
        alphaNum,
      },
    };
  },
  components: {
    Map,
    Star,
  },
  methods: {
    denySharing() {
      this.getFakeData();
    },
    submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$.$error.$message);
        alert("Please enter a valid car reg");
      } else {
        store.reg = this.reg;
        let code = store.loccode;
        this.link = `https://www.google.com/maps/search/${code}`;
        this.getFakeData();
      }
    },
    async getFakeData() {
      if (store.distance != 0) {
        const res = await fetch("https://randomuser.me/api");
        const { results } = await res.json();
        store.firstName = results[0].name.first;
        store.lastName = results[0].name.last;
        store.email = results[0].email;
        store.age = results[0].dob.age;
        store.img = results[0].picture.large;
        let gen = results[0].gender;
        let fname = store.firstName.toLowerCase();
        let lname = store.lastName.toLowerCase();
        this.eemail = `${fname}.${lname}@gmail.com`;
        this.email = `mailto: ${this.eemail}`;

        if (gen === "male") {
          store.gender = true;
        } else {
          store.gender = false;
        }

        const lon = store.long;
        const lat = store.lat;

        axios
          .get(
            `https://api.postcodes.io/postcodes?lon=${lon}&lat=${lat}&widesearch=true&limit=1`
          )
          .then(function (response) {
            store.loccode = response.data.result[0].postcode;
            // handle success
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        store.show2 = false;
        this.showSpinner = true;
        this.showShit = false;
        setTimeout(this.showusShitus, 1000);

        this.getDistSaved();
      } else {
        alert("Please your destination on the map.");
      }
    },
    showusShitus() {
      this.showSpinner = false;
      store.show2 = true;
    },
    getDistSaved() {
      let dist = store.distance;

      let sub = dist / (Math.floor(Math.random() * 10) + 1);

      let distSaved = dist - sub;

      store.distSaved = distSaved.toString();

      store.showDistSaved = true;
    },
    getCarDetails() {
      let regg = store.reg;
      var config = {
        method: "get",
        url: `https://dvlasearch.appspot.com/DvlaSearch?apikey=gkDQAhi5totJUHrg&licencePlate=${regg}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          store.co2 = response.data.co2Emissions;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.spinner {
  animation: rotate 0.8s infinite linear;
  position: relative;
  display: block;
  width: 500px;
  height: 500px;
}
.spinner i {
  animation: rotate 3s infinite linear;
  transform-origin: 50% 100% 0;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  border: solid 12px transparent;
  border-bottom: none;
}
.spinner i:nth-child(1) {
  animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
  width: 44px;
  height: 22px;
  margin-top: -22px;
  margin-left: -22px;
  border-color: #2172b8;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
}
.spinner i:nth-child(2) {
  animation-timing-function: cubic-bezier(0.09, 0.4, 0.14, 0.03);
  width: 58px;
  height: 29px;
  margin-top: -29px;
  margin-left: -29px;
  border-color: #18a39b;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}
.spinner i:nth-child(3) {
  animation-timing-function: cubic-bezier(0.09, 0.6, 0.16, 0.03);
  width: 72px;
  height: 36px;
  margin-top: -36px;
  margin-left: -36px;
  border-color: #82c545;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}
.spinner i:nth-child(4) {
  animation-timing-function: cubic-bezier(0.09, 0.8, 0.18, 0.03);
  width: 86px;
  height: 43px;
  margin-top: -43px;
  margin-left: -43px;
  border-color: #f8b739;
  border-top-left-radius: 54px;
  border-top-right-radius: 54px;
}
.spinner i:nth-child(5) {
  animation-timing-function: cubic-bezier(0.09, 1, 0.2, 0.03);
  width: 100px;
  height: 50px;
  margin-top: -50px;
  margin-left: -50px;
  border-color: #f06045;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
}
.spinner i:nth-child(6) {
  animation-timing-function: cubic-bezier(0.09, 1.2, 0.22, 0.03);
  width: 114px;
  height: 57px;
  margin-top: -57px;
  margin-left: -57px;
  border-color: #ed2861;
  border-top-left-radius: 66px;
  border-top-right-radius: 66px;
}
.spinner i:nth-child(7) {
  animation-timing-function: cubic-bezier(0.09, 1.4, 0.24, 0.03);
  width: 128px;
  height: 64px;
  margin-top: -64px;
  margin-left: -64px;
  border-color: #c12680;
  border-top-left-radius: 72px;
  border-top-right-radius: 72px;
}
.spinner i:nth-child(8) {
  animation-timing-function: cubic-bezier(0.09, 1.6, 0.26, 0.03);
  width: 142px;
  height: 71px;
  margin-top: -71px;
  margin-left: -71px;
  border-color: #5d3191;
  border-top-left-radius: 78px;
  border-top-right-radius: 78px;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
