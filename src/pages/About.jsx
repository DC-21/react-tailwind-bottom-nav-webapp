import own from "../images/own.png";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center md:h-screen h-auto bg-[#f6a98c]">
      <div className="w-full md:flex justify-center items-center px-6 py-4">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col w-full">
            <h1 className="font-bold text-4xl text-[#1f2a40]">About</h1>
            <div className="pt-3 w-full flex gap-3 items-center text-2xl">
              <p className="flex gap-2 text-[#51596b]">
                I am<p className="font-bold text-[#1f2a40]">Chola Kuboko,</p>a
                Web Developer
              </p>
            </div>
            <p className="text-[#51596b] text-xl">
              With passion to merge client ideas and design into desired
              products. I have been developing websites for a year now and i
              would say, i love it especially that it involves bringing designs
              to life.
            </p>
          </div>
          <div className="flex flex-col w-full pt-6">
            <p className="text-2xl">Tech Stack</p>
            <div className="flex gap-8 pt-4">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 34 32"
                  fill="currentColor"
                  height="3em"
                  width="3em"
                >
                  <path
                    fill="currentColor"
                    d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
                  />
                  <path
                    fill="currentColor"
                    d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
                  />
                </svg>
                <div>
                  <p className="w-full text-xl">React Js</p>
                  <div className="w-20 bg-[#5e5e5e] h-2 rounded">
                    <div className="w-14 h-2 bg-white rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2.5em"
                  width="2.5em"
                >
                  <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                </svg>
                <div>
                  <p className="w-full text-xl">Express Js</p>
                  <div className="w-20 bg-[#5e5e5e] h-2 rounded">
                    <div className="w-12 h-2 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8 pt-4">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  height="3em"
                  width="3em"
                >
                  <path
                    fill="currentColor"
                    d="M15.998 28.895a1.94 1.94 0 01-.969-.259l-3.086-1.826c-.46-.257-.235-.349-.083-.402.614-.213.739-.262 1.394-.635.069-.038.159-.024.231.018l2.37 1.407a.304.304 0 00.287 0l9.241-5.333a.292.292 0 00.141-.25V10.95a.3.3 0 00-.143-.255l-9.237-5.329a.29.29 0 00-.285 0l-9.235 5.331a.296.296 0 00-.146.253v10.666c0 .102.056.198.145.247l2.532 1.462c1.374.687 2.215-.122 2.215-.935V11.86c0-.149.12-.266.269-.266h1.172c.146 0 .267.117.267.266v10.53c0 1.833-.998 2.885-2.736 2.885-.534 0-.955 0-2.129-.579L5.79 23.301a1.953 1.953 0 01-.969-1.686V10.95c0-.693.371-1.339.969-1.684l9.242-5.34a2.023 2.023 0 011.942 0l9.241 5.34c.599.346.971.992.971 1.684v10.665c0 .693-.372 1.337-.971 1.686l-9.241 5.335a1.942 1.942 0 01-.973.259zm2.855-7.348c-4.045 0-4.892-1.857-4.892-3.414 0-.148.118-.266.266-.266h1.195c.133 0 .245.096.265.226.18 1.216.717 1.831 3.164 1.831 1.946 0 2.775-.441 2.775-1.473 0-.596-.234-1.037-3.26-1.334-2.528-.25-4.093-.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233a.27.27 0 01-.267.291h-1.2a.266.266 0 01-.259-.209c-.288-1.28-.988-1.689-2.886-1.689-2.126 0-2.373.74-2.373 1.295 0 .673.292.869 3.161 1.248 2.84.375 4.19.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z"
                  />
                </svg>
                <div>
                  <p className="w-full text-xl">Node Js</p>
                  <div className="w-20 bg-[#5e5e5e] h-2 rounded">
                    <div className="w-10 h-2 bg-white rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  height="3em"
                  width="3em"
                >
                  <path
                    fill="currentColor"
                    d="M5.082 5.593c-.564.564-.423 1.213.564 2.679.508.761 1.1 1.946 1.326 2.623.226.705.677 1.664.987 2.143.564.79.564.959.197 2.397-.226.902-.31 2.031-.197 2.736.169 1.185 1.128 2.905 1.72 3.102.508.169 1.241-.733 1.269-1.551 0-.705.028-.733.338-.226.536.874 2.228 2.735 2.369 2.594.056-.056-.31-.79-.846-1.607-.508-.846-1.1-1.946-1.325-2.454-.31-.846-.423-.902-.79-.508-.226.226-.508.874-.592 1.466-.226 1.354-.733 1.523-1.128.367s-.395-3.131 0-4.484c.282-.931.254-1.184-.226-1.89-.31-.423-.79-1.438-1.044-2.256-.254-.79-.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115.056-1.89.479.085 1.213.423 1.664.733.423.31 1.156.564 1.607.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241.423 3.835 2.002 3.835 2.341 0 .113-.649.282-1.438.338-2.115.226-2.313.62-.931 1.861.649.564 1.862 1.438 2.736 1.918l1.579.902-.733-.931c-.423-.508-1.297-1.297-1.974-1.72s-1.213-.874-1.213-.987c0-.113.479-.31 1.072-.395 1.579-.282 2.03-.423 2.03-.705 0-.423-2.848-2.566-4.202-3.159-1.156-.536-1.297-.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-.649-.113-1.551-.451-1.946-.733-.931-.705-2.82-.959-3.272-.479z"
                  />
                </svg>
                <div>
                  <p className="w-full text-xl">MySQL</p>
                  <div className="w-20 bg-[#5e5e5e] h-2 rounded">
                    <div className="w-16 h-2 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-full mt-6 bg-slate-400">
              <div className="flex gap-6 pt-3 w-full bg-black">
                <a href="https://mailto:cholahkuboko@gmail.com">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="2.5em"
                    width="2.5em"
                  >
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
                  </svg>
                </a>
                <a href="https://wa.me/0979054417?text=urlencodedtext">
                  <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    height="2.5em"
                    width="2.5em"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/cho.lah.9">
                  <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    height="2.5em"
                    width="2.5em"
                  >
                    <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z" />
                  </svg>
                </a>
                <a href="https://github.com/dc-21/">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="2.5em"
                    width="2.5em"
                  >
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full flex  justify-center items-center rounded-full h-full overflow-hidden">
            <img
              className="w-[450px] h-[500px] bg-[#ffe4c4] rounded-full"
              src={own}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
