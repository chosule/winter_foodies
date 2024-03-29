import styled from "@emotion/styled";

const RefreshIcon = () => {
  return (
    <StyledWarningIcon
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50.000000pt"
      height="50.000000pt"
      viewBox="0 0 50.000000 50.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill="#fff"
        stroke="none"
      >
        <path
          d="M188 441 c-15 -5 -41 -19 -57 -30 l-30 -21 -3 22 c-2 13 -10 23 -18
       23 -11 0 -16 -14 -18 -58 l-3 -58 57 3 c61 3 83 22 43 36 l-23 9 27 18 c38 25
       105 30 148 12 43 -17 84 -68 96 -117 12 -46 39 -47 37 -3 -4 86 -82 161 -175
       168 -29 3 -66 1 -81 -4z"
        />
        <path
          d="M55 250 c-14 -23 18 -103 56 -141 66 -66 173 -76 251 -24 l37 24 3
       -22 c2 -12 10 -22 18 -22 11 0 16 14 18 58 l3 58 -57 -3 c-61 -3 -83 -22 -43
       -36 l23 -9 -27 -18 c-38 -25 -105 -30 -148 -12 -42 17 -84 68 -96 116 -9 36
       -26 50 -38 31z"
        />
      </g>
    </StyledWarningIcon>
  );
};

const StyledWarningIcon = styled.svg`
  width: 23px;
`;
export default RefreshIcon;
