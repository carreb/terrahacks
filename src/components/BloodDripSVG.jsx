import React from 'react';

const BloodDripSVG = () => (
  <svg className='blood-drip-svg'
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="wave"
    style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
    viewBox="0 0 1440 490"
    version="1.1"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stopColor="rgba(0, 0, 0, 1)" offset="0%" />
        <stop stopColor="rgba(255, 0, 0, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      style={{ transform: 'translate(0, 0px)', opacity: 1 }}
      fill="url(#sw-gradient-0)"
      d="M0,294L21.8,277.7C43.6,261,87,229,131,220.5C174.5,212,218,229,262,236.8C305.5,245,349,245,393,277.7C436.4,310,480,376,524,351.2C567.3,327,611,212,655,212.3C698.2,212,742,327,785,310.3C829.1,294,873,147,916,122.5C960,98,1004,196,1047,212.3C1090.9,229,1135,163,1178,179.7C1221.8,196,1265,294,1309,302.2C1352.7,310,1396,229,1440,220.5C1483.6,212,1527,278,1571,277.7C1614.5,278,1658,212,1702,171.5C1745.5,131,1789,114,1833,130.7C1876.4,147,1920,196,1964,228.7C2007.3,261,2051,278,2095,302.2C2138.2,327,2182,359,2225,326.7C2269.1,294,2313,196,2356,138.8C2400,82,2444,65,2487,114.3C2530.9,163,2575,278,2618,294C2661.8,310,2705,229,2749,196C2792.7,163,2836,180,2880,220.5C2923.6,261,2967,327,3011,318.5C3054.5,310,3098,229,3120,187.8L3141.8,147L3141.8,490L3120,490C3098.2,490,3055,490,3011,490C2967.3,490,2924,490,2880,490C2836.4,490,2793,490,2749,490C2705.5,490,2662,490,2618,490C2574.5,490,2531,490,2487,490C2443.6,490,2400,490,2356,490C2312.7,490,2269,490,2225,490C2181.8,490,2138,490,2095,490C2050.9,490,2007,490,1964,490C1920,490,1876,490,1833,490C1789.1,490,1745,490,1702,490C1658.2,490,1615,490,1571,490C1527.3,490,1484,490,1440,490C1396.4,490,1353,490,1309,490C1265.5,490,1222,490,1178,490C1134.5,490,1091,490,1047,490C1003.6,490,960,490,916,490C872.7,490,829,490,785,490C741.8,490,698,490,655,490C610.9,490,567,490,524,490C480,490,436,490,393,490C349.1,490,305,490,262,490C218.2,490,175,490,131,490C87.3,490,44,490,22,490L0,490Z"
    />
  </svg>
);

export default BloodDripSVG;
