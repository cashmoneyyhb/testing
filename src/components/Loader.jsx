// src/components/Loader.jsx
import React from 'react';
import styled from 'styled-components';

const Loader = ({ onExit }) => {
  return (
    <StyledWrapper role="dialog" aria-modal="true">
      <div className="loader" onDoubleClick={onExit}>
        <div className="header-bar" aria-hidden>
          <p className="title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px" aria-hidden>
              <path fill="#0277bd" d="M19.847,41.956c-5.629-0.002-11.259,0.024-16.888-0.013c-2.855-0.019-3.374-0.7-2.731-3.525 c2.178-9.58,4.427-19.143,6.557-28.734C7.356,7.112,8.588,5.975,11.312,6C22.57,6.106,33.829,6.034,45.088,6.046 c2.824,0.003,3.298,0.614,2.664,3.511c-2.058,9.406-4.129,18.809-6.236,28.203c-0.789,3.516-1.697,4.187-5.353,4.195 C30.724,41.966,25.285,41.958,19.847,41.956z" />
              <path fill="#fafafa" d="M25.057 23.922c-.608-.687-1.114-1.267-1.531-1.732-2.43-2.728-4.656-5.27-7.063-7.869-1.102-1.189-1.453-2.344-.13-3.518 1.307-1.16 2.592-1.058 3.791.277 3.34 3.717 6.676 7.438 10.071 11.104 1.268 1.369.972 2.3-.424 3.315-5.359 3.895-10.687 7.833-16.01 11.778-1.196.887-2.337 1.109-3.304-.201-1.066-1.445-.08-2.305 1.026-3.114 3.955-2.893 7.903-5.798 11.834-8.725C23.865 24.83 24.595 24.267 25.057 23.922zM21.75 37C20.625 37 20 36 20 35s.625-2 1.75-2c4.224 0 6.112 0 9.5 0 1.125 0 1.75 1 1.75 2s-.625 2-1.75 2C29.125 37 25 37 21.75 37z" />
            </svg>
            Windows PowerShell
          </p>
          <div className="controls" aria-hidden>
            <p>-</p>
            <p>□</p>
            <p>x</p>
          </div>
        </div>

        <div className="completed" aria-live="polite">
          <p>Windows PowerShell</p>
          <p>Copyright (C) 2016 Microsoft Corporation.</p>
          <p>All rights reserved.</p>
          <br />
          <p>PS C:\Users\emmess&gt; Downloading - 100%</p>
          <p>PS C:\Users\emmess&gt; Installing - 100%</p>
        </div>

        <div className="body" role="status">
          <div className="start">PS Starting GTA ViceCity...</div>
          <div className="content" aria-hidden>
            <div className="slash">|</div>
            <div className="slash">/</div>
            <div className="slash">-</div>
            <div className="slash">\</div>
            <div className="slash">|</div>
            <div className="slash">/</div>
            <div className="slash">-</div>
            <div className="slash">\</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg,#000,#010101 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e6eef6;
  font-family: "Consolas", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;

  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
  }

  .header-bar {
    background-color: #f5f5f5;
    color: #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px;
    box-shadow: 0 1px 0 rgba(0,0,0,0.6) inset;
  }

  .title {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 14px;
    margin: 0;
    color: #111;
  }

  .title svg { display:inline-block; vertical-align:middle; }

  .controls { display:flex; gap:12px; margin-right:4px; color:#333; }

  .completed {
    color: #bcd3f3;
    padding: 18px 22px;
    font-size: 15px;
    line-height: 1.45;
    border-bottom: 1px solid rgba(255,255,255,0.03);
  }

  .body {
    flex: 1;
    padding: 20px 22px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    font-size: 16px;
    color: #cfe9ff;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 10% );
  }

  .start {
    margin-bottom: 12px;
    color:#9fd2ff;
  }

  .content { display:flex; gap:6px; flex-wrap:wrap; align-items:center; }

  .slash {
    opacity: 0;
    animation: showFrame 1.6s linear infinite;
    font-weight:700;
    color:#84d0ff;
    font-size:20px;
  }

  .slash:nth-child(1){ animation-delay: 0s; }
  .slash:nth-child(2){ animation-delay: 0.2s; }
  .slash:nth-child(3){ animation-delay: 0.4s; }
  .slash:nth-child(4){ animation-delay: 0.6s; }
  .slash:nth-child(5){ animation-delay: 0.8s; }
  .slash:nth-child(6){ animation-delay: 1.0s; }
  .slash:nth-child(7){ animation-delay: 1.2s; }
  .slash:nth-child(8){ animation-delay: 1.4s; }

  @keyframes showFrame {
    0% { opacity: 1; transform: translateY(0); }
    12.5% { opacity: 0; transform: translateY(-6px); }
    100% { opacity: 0; }
  }

  /* small screens tweak */
  @media (max-width: 640px) {
    .completed { padding: 12px; font-size: 14px; }
    .body { padding: 14px; font-size: 15px; }
  }
`;

export default Loader;
