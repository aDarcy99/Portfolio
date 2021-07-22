export const HtmlIcon = ({width = "32", height = "32",...props}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.90203 27.201L3.65503 2H28.345L26.095 27.197L15.985 30L5.90203 27.201Z"
        fill="#E44F26"
      />
      <path
        d="M16 27.858L24.17 25.593L26.092 4.061H16V27.858Z"
        fill="#F1662A"
      />
      <path
        d="M16 13.407H11.91L11.628 10.242H16V7.151H8.25L8.324 7.981L9.083 16.498H16V13.407V13.407Z"
        fill="#EBEBEB"
      />
      <path
        d="M16 21.434L15.986 21.438L12.544 20.509L12.324 18.044H9.22101L9.65401 22.896L15.986 24.654L16 24.65V21.434Z"
        fill="#EBEBEB"
      />
      <path
        d="M15.989 13.407V16.498H19.795L19.437 20.507L15.989 21.437V24.653L22.326 22.896L22.372 22.374L23.098 14.237L23.174 13.407H15.989V13.407Z"
        fill="white"
      />
      <path
        d="M15.989 7.151V10.242H23.455L23.517 9.548L23.658 7.981L23.732 7.151H15.989V7.151Z"
        fill="white"
      />
    </svg>
  );
};

export default HtmlIcon;
